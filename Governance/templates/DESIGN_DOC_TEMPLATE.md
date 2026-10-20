# Design Document Template

This template is for documenting a proposed technical design before or during
implementation. It gives reviewers a shared place to understand the context,
goals, design choices, trade-offs, and delivery plan.

- **Template version:** 1.0.0
- **Status:** Active

## How To Use This Template

Copy the section below into a design document in the owning team's agreed
location. Replace each prompt with project-specific information. Keep sections
that do not apply and state why they are not applicable; do not silently omit
important decisions or risks. Link related issues, RFCs, ADRs, and source
documents. Update the document when the approved design materially changes.

---

## Design Document

### Metadata

- **Title:** <short, descriptive title>
- **Author(s):** <GitHub handle(s)>
- **Status:** Draft | In Review | Accepted | Superseded
- **Created:** <YYYY-MM-DD>
- **Last updated:** <YYYY-MM-DD>
- **Related issue(s) / decision(s):** <links or None>

### Context

Describe the current state and the circumstances that led to this design. Include
relevant user or operator needs, existing behavior, constraints, and evidence.
Explain what happens if no change is made.

### Goals

List the measurable outcomes this design must achieve. Keep goals focused on
outcomes rather than prescribing implementation details.

### Non-Goals

State what this design deliberately does not address, to make scope boundaries
clear.

### Requirements and Constraints

Record functional and non-functional requirements, compatibility needs,
security and privacy considerations, operational constraints, and relevant
standards or existing decisions.

### Proposed Design

Describe the selected approach in enough detail for implementation and review.
Cover affected components, interfaces, data flows, state changes, failure
handling, observability, and any migration or compatibility behavior. Add
sequence diagrams or examples when they clarify the design.

### Trade-Offs and Alternatives

Explain the benefits and costs of the proposed approach. Document credible
alternatives considered and why they were not selected, including the option of
making no change where relevant.

### Risks and Open Questions

List known risks, assumptions, unresolved questions, owners, and how or when
each will be resolved.

### Rollout and Operations

Describe the rollout stages, deployment dependencies, feature flags or staged
enablement, migration steps, monitoring, and the criteria for pausing or
reversing the rollout. Identify operational ownership and required
communications.

### Testing Plan

List the checks that will demonstrate the design works and does not regress
existing behavior. Include applicable unit, integration, end-to-end,
compatibility, migration, performance, security, and manual checks. For each,
name the owner, environment, and pass criteria. State explicitly when a check
is not applicable and why.

### Review and Approval

- [ ] Goals and non-goals are clear and in scope.
- [ ] The proposed design addresses the stated requirements and constraints.
- [ ] Trade-offs, alternatives, risks, and open questions are documented.
- [ ] Rollout, rollback, and testing plans have owners and measurable criteria.
- [ ] Required maintainers and domain reviewers have approved the design.

## Template Maintenance

Review this template when the project's design review process changes
materially. Propose updates through the normal governance process described in
[`../README.md`](../README.md); keep governance changes within the
`Governance/` folder.
