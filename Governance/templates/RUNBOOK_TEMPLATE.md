# Runbook Template

Use this template for repeatable operational procedures. A runbook should let an
authorized operator recognize when it applies, confirm prerequisites, carry out
safe and ordered actions, and verify recovery or follow the rollback path.

- **Template version:** 1.0.0
- **Status:** Active

## How To Use This Template

Copy the section below into the team's agreed runbook location. Replace each
prompt with service-specific instructions and links. Keep steps ordered,
explicit, and safe to execute; distinguish required actions from optional
checks. Retain sections that do not apply and explain why. Do not include
credentials, tokens, or other secrets in the runbook.

---

## Runbook

### Metadata

- **Title:** <procedure name>
- **Service / system:** <name and ownership link>
- **Runbook owner:** <team or role>
- **Version:** <document version>
- **Last reviewed:** <YYYY-MM-DD>
- **Next review due:** <YYYY-MM-DD>
- **Related alerts / procedures:** <links or None>

### Purpose and Scope

State what this procedure accomplishes, which systems and environments it
covers, and what it does not cover. Link to a more appropriate procedure when
this runbook is not the right response.

### Trigger

Describe the alert, symptom, scheduled event, or operator request that calls
for this procedure. Include the threshold or decision rule where applicable,
and note conditions that indicate a different response is needed.

### Prerequisites

List the required role and approvals, access level, tools, dashboards, change
or incident records, and dependencies. Include links to approved access
procedures; never place secrets in this document. State any safety checks that
must pass before proceeding.

### Roles and Communications

Identify the operator, approver, escalation contact, and who must be notified.
Specify when to pause and escalate, and where to record status updates and
evidence.

### Procedure

Give one action per numbered step. Include the expected result and a stop or
escalation condition for risky or irreversible actions. Reference approved
tooling and exact environment names; use placeholders for values that vary by
incident.

1. Confirm the trigger and scope; record the relevant alert, timestamp, and
   affected environment.
2. Verify all prerequisites and required approvals.
3. <Action> and confirm <expected result>.
4. <Continue in order; state when to stop and escalate>.

### Verification

Define the observable checks that confirm the procedure succeeded, including
expected values, dashboards, logs, or user-facing behavior. State the
verification window and what to do if a check fails.

### Rollback and Recovery

Describe how to restore the previous known-good state, including prerequisites,
ordered actions, data or migration implications, and verification. Identify
steps that are irreversible and the recovery path if rollback is not possible.
If there is no rollback, state the recovery and escalation procedure explicitly.

### Completion

List required record updates, evidence to retain, stakeholder notifications,
follow-up work, and any incident or change review that must be opened.

### Testing and Review

Describe how this runbook is validated safely, such as a tabletop exercise,
staging rehearsal, or controlled drill. Record the date, owner, outcome, and
follow-up actions. Review it after a relevant incident or system/process
change, and at the team's established review cadence.

## Template Maintenance

Review this template when the project's operational practices change
materially. Propose updates through the normal governance process described in
[`../README.md`](../README.md); keep governance changes within the
`Governance/` folder.
