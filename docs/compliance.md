# Compliance & Security

At Look Beyond Solutions, compliance isn't a checkbox — it's part of how we build. Every custom AI solution we deliver is designed with security, transparency, and regulatory alignment built in from the start.

---

## EU AI Act

The EU AI Act, in force since August 2024, establishes a risk-based framework for AI systems. As a provider of custom AI solutions, we operate under both provider and deployer obligations depending on each engagement.

**What we do:**

- Classify every AI system we build by risk tier (minimal, limited, high) at the start of each project
- Design high-risk AI systems with mandatory human oversight controls, so your team remains in the loop on consequential decisions
- Maintain technical documentation for all delivered systems — covering model selection rationale, data flows, intended use, and known limitations
- Include transparency mechanisms in all user-facing AI components (Article 50 obligations: disclosure of AI involvement, synthetic content labeling where applicable)
- Ensure AI literacy across our team in line with obligations that have been in effect since February 2025
- Work with clients to register high-risk systems in the EU database where required

We do not build prohibited AI systems as defined under Article 5 of the AI Act (social scoring, real-time biometric surveillance in public spaces, subliminal manipulation, etc.).

---

## GDPR / DSGVO

As a data processor under the GDPR, we handle personal data only as instructed by our clients (the data controllers). We apply privacy by design and by default across every project.

**What we do:**

- Sign a Data Processing Agreement (DPA) with every client before any personal data is processed
- Collect and process only the data strictly necessary for the agreed purpose (data minimization)
- Implement privacy by design: data minimization, pseudonymization, and access restrictions are built into the architecture, not added later
- Maintain records of processing activities (ROPA) for all engagements involving personal data
- Document a lawful basis for every processing activity within AI systems we build
- Notify clients within 24 hours of becoming aware of a potential data breach, enabling them to meet the 72-hour DPA notification requirement
- Delete or return all client data at project completion, as agreed in the DPA
- Use only GDPR-compliant subprocessors (cloud providers, LLM APIs) with signed DPAs in place

For AI systems that involve automated decision-making with significant impact on individuals, we implement explainability measures and human review pathways.

---

## AI Security — OWASP LLM Top 10

We design our AI solutions against the OWASP Top 10 for LLM Applications (2025), the industry standard for identifying and mitigating security risks in AI systems.

**What we address per deployment:**

| Risk                                 | How we mitigate it                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Prompt Injection**                 | Input validation, semantic filtering, strict separation of system instructions from user input                          |
| **Sensitive Information Disclosure** | RAG access controls, output scanning, no PII in system prompts                                                          |
| **Supply Chain Vulnerabilities**     | Vetted model and library sources, pinned dependencies, provenance tracking                                              |
| **Data & Model Poisoning**           | Controlled fine-tuning pipelines, training data provenance, integrity checks                                            |
| **Improper Output Handling**         | Output validation before downstream use, no raw LLM output passed to interpreters                                       |
| **Excessive Agency**                 | Principle of least privilege for AI agents — minimal tool access, mandatory human confirmation for irreversible actions |
| **System Prompt Leakage**            | Strict prompt architecture, testing for exfiltration vectors                                                            |
| **Vector & Embedding Weaknesses**    | Secure RAG pipeline design, access-controlled retrieval, embedding integrity                                            |
| **Misinformation**                   | Grounding strategies, citation of sources, confidence thresholds and fallback behaviors                                 |
| **Unbounded Consumption**            | Rate limiting, token budget controls, cost guardrails, DoS-resistant architecture                                       |

---

## NIST AI Risk Management Framework (AI RMF)

Our AI governance practices align with the NIST AI RMF 1.0 — the four-function framework widely recognized by enterprise security teams and regulators.

**GOVERN** — We maintain internal AI policies covering acceptable use, risk ownership, and review processes. Every project has a named responsible party.

**MAP** — At project kickoff, we identify the use case context, affected stakeholders, and potential failure modes. Risk profiles are documented before any code is written.

**MEASURE** — We test AI systems for accuracy, robustness, fairness, and adversarial resilience prior to delivery. This includes red-teaming exercises for high-risk deployments.

**MANAGE** — We define incident response procedures for each delivered system, with escalation paths for model failures, unexpected outputs, and security events.

---

## Secure Software Development Lifecycle (SSDLC)

Security is embedded at every stage of development — not retrofitted at the end.

**What we do:**

- Define security requirements alongside functional requirements at project start
- Apply secure coding standards (input validation, authentication, output encoding, error handling)
- Conduct peer code review with security checklist sign-off before merges
- Run automated dependency scanning (SAST/SCA) in our CI/CD pipeline to catch vulnerable packages
- Perform security testing (including penetration testing for high-risk systems) before delivery
- Follow the principle of least privilege: every component, user, and API key gets only the access it needs
- Encrypt all data in transit (TLS 1.2+) and at rest (AES-256 or equivalent)
- Maintain audit logs for all administrative and sensitive actions

---

## Data Security & Confidentiality

**Infrastructure & access:**

- All client data is stored in dedicated, isolated environments — never shared across clients
- Role-based access control (RBAC) ensures only authorized team members access project data
- Multi-factor authentication (MFA) is required across all internal systems
- Remote access uses encrypted VPN connections

**Confidentiality:**

- We sign NDAs before any project discussion involving proprietary client information
- Subcontractors and external partners are bound by the same confidentiality obligations
- All team members complete security awareness training

**Vendor & subprocessor management:**

- We maintain an up-to-date register of all subprocessors and cloud services used per project
- Third-party tools and LLM APIs are evaluated for security posture and data handling practices before use

---

## Continuous Improvement

Compliance is a moving target — particularly in AI. We track regulatory developments (EU AI Act implementing acts, updated GDPR guidance, new OWASP releases) and update our practices accordingly. If you have specific compliance requirements or operate in a regulated sector, we're happy to discuss how we can adapt our approach to your environment.

---

_Last reviewed: June 2026_
