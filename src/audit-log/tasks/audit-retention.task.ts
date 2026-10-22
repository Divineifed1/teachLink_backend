import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { ConfigService } from '@nestjs/config';

import { AuditLog } from '../audit-log.entity';
import { AuditLogService } from '../audit-log.service';
import { MetricsCollectionService } from '../../monitoring/metrics/metrics-collection.service';

@Injectable()
export class AuditRetentionTask {
  private readonly logger = new Logger(AuditRetentionTask.name);
  private readonly retentionDays: number;
  private readonly batchSize = 1000;
  private readonly deletedCounter: Counter<'table'>;

  constructor(
    @InjectRepository(AuditLog)
    private readonly auditLogRepo: Repository<AuditLog>,
    private readonly auditLogService: AuditLogService,
    private readonly configService: ConfigService,
    private readonly metrics: MetricsCollectionService,
  ) {
    this.retentionDays = this.configService.get<number>('AUDIT_LOG_RETENTION_DAYS', 730);

    const registry = this.metrics.getRegistry();
    this.deletedCounter =
      (registry.getSingleMetric('audit_logs_deleted_total') as Counter<'table'>) ??
      new Counter({
        name: 'audit_logs_deleted_total',
        help: 'Total number of audit log rows deleted by retention policies',
        labelNames: ['table'],
        registers: [registry],
      });
  }

  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async handleDailyRetention(): Promise<void> {
    this.logger.log('Starting daily audit log retention policy...');

    try {
      const cutoff = this.getRetentionCutoff();
      const deletedCount = await this.deleteExpiredLogs(cutoff);

      this.deletedCounter.inc({ table: 'audit_logs' }, deletedCount);
      this.logger.log(
        `Daily retention policy completed. Deleted ${deletedCount} old audit log rows.`,
      );
    } catch (error) {
      this.logger.error('Failed to apply retention policy.', error instanceof Error ? error.stack : error);
    }
  }

  @Cron('0 3 * * 1')
  async handleWeeklyReport(): Promise<void> {
    this.logger.log('Generating weekly audit report...');

    try {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);

      const report = await this.auditLogService.generateReport(startDate, endDate);

      this.logger.log(
        `Weekly report generated: totalEvents=${report.totalEvents}, ` +
          `criticalEvents=${report.eventsBySeverity['CRITICAL'] ?? 0}, ` +
          `errorEvents=${report.eventsBySeverity['ERROR'] ?? 0}`,
      );
    } catch (error) {
      this.logger.error('Failed to generate weekly report.', error instanceof Error ? error.stack : error);
    }
  }

  private getRetentionCutoff(): Date {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - this.retentionDays);
    return cutoff;
  }

  private async deleteExpiredLogs(cutoff: Date): Promise<number> {
    let totalDeleted = 0;

    while (true) {
      const logsToDelete = await this.auditLogRepo.find({
        select: ['id'],
        where: { timestamp: LessThan(cutoff) },
        take: this.batchSize,
        order: { timestamp: 'ASC' },
      });

      if (logsToDelete.length === 0) {
        break;
      }

      const ids = logsToDelete.map((log) => log.id);

      const result = await this.auditLogRepo
        .createQueryBuilder()
        .delete()
        .from(AuditLog)
        .whereInIds(ids)
        .execute();

      const deletedThisBatch = result.affected ?? 0;
      totalDeleted += deletedThisBatch;

      if (deletedThisBatch < this.batchSize) {
        break;
      }
    }

    return totalDeleted;
  }
}
