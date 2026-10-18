# GDPR Compliance Overview

| Field | Value |
| --- | --- |
| Document | `Governance/compliance/GDPR_OVERVIEW.md` |
| Status | Active |
| Version | 1.0.0 |
| Owner | Maintainer Team |
| Last reviewed | 2026-10-18 |
| Review cadence | Every 6 months |
| Applies to | Processing of personal data of individuals in the EEA/UK by the TeachLink Backend |
| Related | [`compliance/PRIVACY_POLICY_GOVERNANCE.md`](PRIVACY_POLICY_GOVERNANCE.md) · [`compliance/DPA_TEMPLATE.md`](DPA_TEMPLATE.md) · [`compliance/CHILDRENS_DATA.md`](CHILDRENS_DATA.md) · [`policies/CONSENT_MANAGEMENT.md`](../policies/CONSENT_MANAGEMENT.md) · [`policies/DATA_DELETION.md`](../policies/DATA_DELETION.md) · [`domains/DATA_RETENTION.md`](../domains/DATA_RETENTION.md) · [`SECURITY_POLICY.md`](../SECURITY_POLICY.md) |

This document is the entry point for how the project approaches the EU/UK General
Data Protection Regulation (GDPR). It summarises the obligations that apply and
points to the policy that governs each one. It is a governance reference, not
legal advice; where it conflicts with the law, the law prevails.

## 1. Applicable obligations

| Principle / obligation | What it means for the project | Governing document |
| --- | --- | --- |
| Lawfulness, fairness, transparency | Every processing activity has a documented lawful basis and is described in the privacy notice. | [`PRIVACY_POLICY_GOVERNANCE.md`](PRIVACY_POLICY_GOVERNANCE.md) |
| Purpose limitation | Data is used only for the purposes stated when it was collected. | [`PRIVACY_POLICY_GOVERNANCE.md`](PRIVACY_POLICY_GOVERNANCE.md) |
| Data minimisation | Collect only what a feature needs. | [`domains/DATA_CLASSIFICATION.md`](../domains/DATA_CLASSIFICATION.md) |
| Accuracy | Users can correct their data; stale data is fixed or removed. | This document, §2 |
| Storage limitation | Data is kept no longer than needed. | [`domains/DATA_RETENTION.md`](../domains/DATA_RETENTION.md) |
| Integrity and confidentiality | Encryption, access control, and incident response protect data. | [`policies/ENCRYPTION.md`](../policies/ENCRYPTION.md) · [`SECURITY_POLICY.md`](../SECURITY_POLICY.md) |
| Consent | Where consent is the basis, it is specific, informed, recorded, and withdrawable. | [`policies/CONSENT_MANAGEMENT.md`](../policies/CONSENT_MANAGEMENT.md) |
| Processors and transfers | Processors are bound by a data processing agreement; international transfers use a lawful mechanism. | [`DPA_TEMPLATE.md`](DPA_TEMPLATE.md) · [`policies/DATA_RESIDENCY.md`](../policies/DATA_RESIDENCY.md) |
| Children | Additional protection below the age of digital consent. | [`CHILDRENS_DATA.md`](CHILDRENS_DATA.md) |
| Accountability | Processing activities, decisions, and requests are recorded. | This document, §4 |
| Breach notification | Personal-data breaches are assessed immediately; the supervisory authority is notified within **72 hours** of awareness where required, and affected individuals without undue delay when risk is high. | [`SECURITY_POLICY.md`](../SECURITY_POLICY.md) |

## 2. Data-subject rights handling

Requests are received through the published privacy contact or the in-product
mechanism. Each request is logged, acknowledged within **3 business days**,
identity-verified proportionately, and answered within **one month** of verified
receipt (extendable by up to two further months for complex requests, with
notice and reason before the original deadline). Handling is free of charge
unless a request is manifestly unfounded or excessive.

| Right (GDPR article) | How it is handled |
| --- | --- |
| Information (Arts. 13–14) | Provided through the privacy notice at or before collection. |
| Access (Art. 15) | Provide a copy of the data and the processing details in a commonly used electronic format. |
| Rectification (Art. 16) | Correct inaccurate data and propagate the correction to processors. |
| Erasure (Art. 17) | Handled under [`policies/DATA_DELETION.md`](../policies/DATA_DELETION.md), including lawful-retention exceptions. |
| Restriction (Art. 18) | Flag the record so it is stored but not otherwise processed until resolved. |
| Portability (Art. 20) | Export data provided by the user, where processing is by consent or contract, in a structured, machine-readable format. |
| Objection (Art. 21) | Stop processing based on legitimate interests unless compelling grounds are demonstrated; always stop direct marketing. |
| Automated decisions (Art. 22) | No solely automated decision with legal or similarly significant effect without a lawful basis and human review on request. |
| Withdraw consent (Art. 7) | Withdrawal is as easy as giving consent and is applied promptly. |

Refusals state the specific basis and tell the requester they may complain to
their supervisory authority. Personal detail from requests is never put in a
public issue or pull request.

## 3. Responsible owner

| Role | Responsibility |
| --- | --- |
| Maintainer Team (document owner) | Keeps this overview current, triages data-subject requests, and decides on exceptions. |
| Request handler | Logs, verifies, and fulfils requests within the deadlines above. |
| Independent reviewer | A maintainer other than the original handler reviews any refusal or partial fulfilment. |
| Security Response Team | Leads breach assessment and notification. |

If the project meets the legal threshold for appointing a Data Protection Officer,
the Maintainer Team designates one and records the contact here.

## 4. Records and accountability

- Maintain a record of processing activities (purpose, data categories, recipients,
  transfers, retention, security measures).
- Perform a data protection impact assessment before introducing high-risk
  processing.
- Apply data protection by design and by default in new features.
- Keep a restricted register of data-subject requests and breaches.

## 5. Review

The maintainers review this document at least **every 6 months**, and whenever
processing, processors, or regions of operation change materially.

## 6. Change log

| Date | Version | Change |
| --- | --- | --- |
| 2026-10-18 | 1.0.0 | Initial release. |
