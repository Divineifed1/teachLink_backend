# Support and Maintenance Policy

| Field | Value |
| --- | --- |
| Document | `Governance/policies/SUPPORT.md` |
| Status | Active |
| Version | 1.0.0 |
| Owner | Maintainer Team |
| Last reviewed | 2026-10-18 |
| Review cadence | Every 12 months |
| Applies to | TeachLink Backend users, contributors, and maintainers |
| Related | [`policies/END_OF_LIFE.md`](END_OF_LIFE.md) · [`SECURITY_POLICY.md`](../SECURITY_POLICY.md) · [`SCOPE.md`](../SCOPE.md) · [`domains/SLA_SLO.md`](../domains/SLA_SLO.md) |

This policy describes where to get help with TeachLink Backend, what response
to expect, and what support does not cover.

## 1. Support channels and scope

| Need | Channel |
| --- | --- |
| Bug report | GitHub issue using the bug template |
| Feature request | GitHub issue using the feature template |
| Usage question | GitHub Discussions or an issue labelled `question` |
| Security vulnerability | Private report per [`SECURITY_POLICY.md`](../SECURITY_POLICY.md); never a public issue |
| Code of Conduct concern | Process in [`COC_REPORTING.md`](../COC_REPORTING.md) |

- **In scope:** the code, configuration, and documentation in this repository,
  for versions that are Active or in Maintenance as defined in
  [`policies/END_OF_LIFE.md`](END_OF_LIFE.md).
- Search existing issues before opening a new one, and include the version,
  environment, steps to reproduce, and relevant logs (with secrets removed).

## 2. Response expectations

Support is provided by volunteers on a best-effort basis. These are targets, not
guarantees.

| Item | Target |
| --- | --- |
| Acknowledge a new issue or question | 5 business days |
| Triage (label, prioritise, or request information) | 10 business days |
| Acknowledge a security report | Per [`SECURITY_POLICY.md`](../SECURITY_POLICY.md) |
| Review a pull request (first response) | 7 business days |

- Issues waiting on the reporter for more than 30 days may be closed under the
  stale-issue process.
- Production-impacting incidents of the hosted service follow
  [`domains/SLA_SLO.md`](../domains/SLA_SLO.md) and
  [`domains/ON_CALL.md`](../domains/ON_CALL.md), not this table.

## 3. Maintenance

- Active versions receive features, bug fixes, and security fixes.
- Maintenance versions receive security and critical bug fixes only.
- Deprecated and end-of-life versions are handled per
  [`policies/END_OF_LIFE.md`](END_OF_LIFE.md).

## 4. Out of scope

- Versions that are end of life.
- Custom forks, unreleased branches, and modified deployments.
- Infrastructure, hosting, and third-party services outside this repository.
- General programming, NestJS, or database tutoring unrelated to a defect or
  documentation gap.
- Custom feature development, consulting, or guaranteed turnaround times.
- Reports that disclose vulnerabilities publicly before the security process.

## 5. Change log

| Date | Version | Change |
| --- | --- | --- |
| 2026-10-18 | 1.0.0 | Initial release. |
