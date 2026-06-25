import React from "react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "./Home/HeroSection";

const EU_AI_ACT_ITEMS = [
  "Classify every AI system we build by risk tier (minimal, limited, high) at the start of each project",
  "Design high-risk AI systems with mandatory human oversight controls, so your team remains in the loop on consequential decisions",
  "Maintain technical documentation for all delivered systems, covering model selection rationale, data flows, intended use, and known limitations",
  "Include transparency mechanisms in all user-facing AI components (Article 50 obligations: disclosure of AI involvement, synthetic content labeling where applicable)",
  "Ensure AI literacy across our team in line with obligations that have been in effect since February 2025",
  "Work with clients to register high-risk systems in the EU database where required",
];

const GDPR_ITEMS = [
  "Sign a Data Processing Agreement (DPA) with every client before any personal data is processed",
  "Collect and process only the data strictly necessary for the agreed purpose (data minimization)",
  "Implement privacy by design: data minimization, pseudonymization, and access restrictions are built into the architecture, not added later",
  "Maintain records of processing activities (ROPA) for all engagements involving personal data",
  "Document a lawful basis for every processing activity within AI systems we build",
  "Notify clients within 24 hours of becoming aware of a potential data breach, enabling them to meet the 72-hour DPA notification requirement",
  "Delete or return all client data at project completion, as agreed in the DPA",
  "Use only GDPR-compliant subprocessors (cloud providers, LLM APIs) with signed DPAs in place",
];

const OWASP_ITEMS = [
  {
    risk: "Prompt Injection",
    mitigation:
      "Input validation, semantic filtering, strict separation of system instructions from user input",
  },
  {
    risk: "Sensitive Information Disclosure",
    mitigation: "RAG access controls, output scanning, no PII in system prompts",
  },
  {
    risk: "Supply Chain Vulnerabilities",
    mitigation:
      "Vetted model and library sources, pinned dependencies, provenance tracking",
  },
  {
    risk: "Data & Model Poisoning",
    mitigation:
      "Controlled fine-tuning pipelines, training data provenance, integrity checks",
  },
  {
    risk: "Improper Output Handling",
    mitigation:
      "Output validation before downstream use, no raw LLM output passed to interpreters",
  },
  {
    risk: "Excessive Agency",
    mitigation:
      "Principle of least privilege for AI agents: minimal tool access, mandatory human confirmation for irreversible actions",
  },
  {
    risk: "System Prompt Leakage",
    mitigation: "Strict prompt architecture, testing for exfiltration vectors",
  },
  {
    risk: "Vector & Embedding Weaknesses",
    mitigation:
      "Secure RAG pipeline design, access-controlled retrieval, embedding integrity",
  },
  {
    risk: "Misinformation",
    mitigation:
      "Grounding strategies, citation of sources, confidence thresholds and fallback behaviors",
  },
  {
    risk: "Unbounded Consumption",
    mitigation:
      "Rate limiting, token budget controls, cost guardrails, DoS-resistant architecture",
  },
];

const NIST_FUNCTIONS = [
  {
    label: "Govern",
    description:
      "We maintain internal AI policies covering acceptable use, risk ownership, and review processes. Every project has a named responsible party.",
  },
  {
    label: "Map",
    description:
      "At project kickoff, we identify the use case context, affected stakeholders, and potential failure modes. Risk profiles are documented before any code is written.",
  },
  {
    label: "Measure",
    description:
      "We test AI systems for accuracy, robustness, fairness, and adversarial resilience prior to delivery. This includes red-teaming exercises for high-risk deployments.",
  },
  {
    label: "Manage",
    description:
      "We define incident response procedures for each delivered system, with escalation paths for model failures, unexpected outputs, and security events.",
  },
];

const SSDLC_ITEMS = [
  "Define security requirements alongside functional requirements at project start",
  "Apply secure coding standards (input validation, authentication, output encoding, error handling)",
  "Conduct peer code review with security checklist sign-off before merges",
  "Run automated dependency scanning (SAST/SCA) in our CI/CD pipeline to catch vulnerable packages",
  "Perform security testing (including penetration testing for high-risk systems) before delivery",
  "Follow the principle of least privilege: every component, user, and API key gets only the access it needs",
  "Encrypt all data in transit (TLS 1.2+) and at rest (AES-256 or equivalent)",
  "Maintain audit logs for all administrative and sensitive actions",
];

const DATA_SECURITY_GROUPS = [
  {
    title: "Infrastructure & access",
    items: [
      "All client data is stored in dedicated, isolated environments, never shared across clients",
      "Role-based access control (RBAC) ensures only authorized team members access project data",
      "Multi-factor authentication (MFA) is required across all internal systems",
      "Remote access uses encrypted VPN connections",
    ],
  },
  {
    title: "Confidentiality",
    items: [
      "We sign NDAs before any project discussion involving proprietary client information",
      "Subcontractors and external partners are bound by the same confidentiality obligations",
      "All team members complete security awareness training",
    ],
  },
  {
    title: "Vendor & subprocessor management",
    items: [
      "We maintain an up-to-date register of all subprocessors and cloud services used per project",
      "Third-party tools and LLM APIs are evaluated for security posture and data handling practices before use",
    ],
  },
];

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
        <span className="text-sm leading-6 text-[#4a6a8a]">{item}</span>
      </li>
    ))}
  </ul>
);

const Compliance = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">

        {/* Hero */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#2a4060] transition-colors hover:text-blue-500"
            >
              ← Back
            </Link>
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              Security & Compliance
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-5xl">
              Compliance isn't a checkbox.
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              Every custom AI solution we deliver is designed with security, transparency, and regulatory alignment built in from the start, not retrofitted before delivery.
            </p>
          </div>
        </section>

        {/* Framework overview pills */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">Frameworks we operate under</p>
            <div className="flex flex-wrap gap-3">
              {["EU AI Act", "GDPR / DSGVO", "OWASP LLM Top 10", "NIST AI RMF", "SSDLC"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EU AI Act */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <div className="mb-6 lg:mb-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Framework</p>
              <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">EU AI Act</h2>
              <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">In force Aug 2024</p>
            </div>
            <div>
              <p className="mb-6 text-sm leading-7 text-[#4a6a8a]">
                The EU AI Act establishes a risk-based framework for AI systems. As a provider of custom AI solutions, we operate under both provider and deployer obligations depending on each engagement.
              </p>
              <BulletList items={EU_AI_ACT_ITEMS} />
              <div className="mt-6 rounded-sm border border-white/30 dark:border-[#0f1e35] bg-white/40 dark:bg-[#08101f] px-4 py-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-500">Note: </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  We do not build prohibited AI systems as defined under Article 5 of the AI Act (social scoring, real-time biometric surveillance in public spaces, subliminal manipulation, etc.).
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <div className="mb-6 lg:mb-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Framework</p>
              <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">GDPR / DSGVO</h2>
              <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">Data processor</p>
            </div>
            <div>
              <p className="mb-6 text-sm leading-7 text-[#4a6a8a]">
                As a data processor under the GDPR, we handle personal data only as instructed by our clients (the data controllers). We apply privacy by design and by default across every project.
              </p>
              <BulletList items={GDPR_ITEMS} />
              <div className="mt-6 rounded-sm border border-white/30 dark:border-[#0f1e35] bg-white/40 dark:bg-[#08101f] px-4 py-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-500">Note: </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  For AI systems that involve automated decision-making with significant impact on individuals, we implement explainability measures and human review pathways.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* OWASP LLM Top 10 */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
              <div className="mb-4 lg:mb-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Framework</p>
                <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">OWASP LLM Top 10</h2>
                <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">2025 edition</p>
              </div>
              <p className="text-sm leading-7 text-[#4a6a8a]">
                We design our AI solutions against the OWASP Top 10 for LLM Applications (2025), the industry standard for identifying and mitigating security risks in AI systems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {OWASP_ITEMS.map((item, i) => (
                <div
                  key={item.risk}
                  className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none p-5"
                >
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-[0.6rem] text-blue-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-[#0f1e35] dark:text-slate-100">{item.risk}</h3>
                  </div>
                  <p className="text-xs leading-5 text-[#4a6a8a]">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NIST AI RMF */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
              <div className="mb-4 lg:mb-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Framework</p>
                <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">NIST AI RMF</h2>
                <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">Version 1.0</p>
              </div>
              <p className="text-sm leading-7 text-[#4a6a8a]">
                Our AI governance practices align with the NIST AI RMF 1.0, the four-function framework widely recognized by enterprise security teams and regulators.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NIST_FUNCTIONS.map((fn) => (
                <div
                  key={fn.label}
                  className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none p-6"
                >
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
                  <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">{fn.label}</p>
                  <p className="text-sm leading-6 text-[#4a6a8a]">{fn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSDLC */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <div className="mb-6 lg:mb-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Practice</p>
              <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">Secure SDLC</h2>
              <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">Built in, not bolted on</p>
            </div>
            <div>
              <p className="mb-6 text-sm leading-7 text-[#4a6a8a]">
                Security is embedded at every stage of development, not retrofitted at the end.
              </p>
              <BulletList items={SSDLC_ITEMS} />
            </div>
          </div>
        </section>

        {/* Data Security & Confidentiality */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              Data security & confidentiality
            </p>
            <div className="divide-y divide-white/30 dark:divide-[#0f1e35]">
              {DATA_SECURITY_GROUPS.map((group) => (
                <div key={group.title} className="py-8 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-sm font-semibold text-[#0f1e35] dark:text-slate-100">{group.title}</h3>
                  </div>
                  <BulletList items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <div className="mb-6 lg:mb-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 mb-1">Ongoing</p>
              <h2 className="text-xl font-bold text-[#0f1e35] dark:text-slate-100">Continuous improvement</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#4a6a8a]">
                Compliance is a moving target, particularly in AI. We track regulatory developments (EU AI Act implementing acts, updated GDPR guidance, new OWASP releases) and update our practices accordingly.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4a6a8a]">
                If you have specific compliance requirements or operate in a regulated sector, we're happy to discuss how we can adapt our approach to your environment.
              </p>
              <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">Last reviewed: June 2026</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-[#0f1e35] dark:text-slate-100">Have specific compliance requirements?</h2>
              <p className="text-sm text-[#4a6a8a]">
                We adapt our controls to regulated-sector environments. Tell us what you're working with.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 rounded-sm bg-blue-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
            >
              Start a conversation →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Compliance;
