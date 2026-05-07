import React from "react";
import { Link } from "react-router-dom";

const STEPS = [
  {
    number: "01",
    title: "Map the workflow",
    duration: "Week 1–2",
    description:
      "We start by sitting with the people doing the work — not just reading documentation. We trace one repetitive, high-volume process end-to-end: where documents enter, where humans make decisions, where handoffs happen, and where things go wrong.",
    details: [
      "Interview operators and team leads, not just managers",
      "Identify the five to ten exceptions that account for most of the manual time",
      "Map inputs: email threads, PDFs, spreadsheets, ERP exports, SOPs",
      "Define the review and approval checkpoints that must be preserved",
    ],
    outcome: "A workflow map that everyone agrees on — including the parts no one had written down before.",
  },
  {
    number: "02",
    title: "Design the pipeline",
    duration: "Week 2–3",
    description:
      "With the workflow mapped, we define the technical architecture: which steps get automated, which stay human, and where agents plug in. We design for the exception first — the happy path is easy; production systems live or die on edge cases.",
    details: [
      "Define input contracts: what data format does each step expect?",
      "Assign agent roles: classification, extraction, drafting, routing, escalation",
      "Design human-in-the-loop gates: when does an agent pause and ask?",
      "Specify integrations: which systems need to be read from or written to?",
    ],
    outcome: "A pipeline spec with clear boundaries — what the system handles automatically and what it hands off.",
  },
  {
    number: "03",
    title: "Prototype with real examples",
    duration: "Week 3–5",
    description:
      "We build a focused working prototype using actual documents and real edge cases from your operations — not synthetic test data. The prototype is designed to be broken. We want to find the failure modes before they reach production.",
    details: [
      "Use 50–200 real examples to test extraction and classification accuracy",
      "Run the prototype alongside the existing workflow (not instead of it)",
      "Collect operator feedback in structured sessions — not casual observation",
      "Measure against the specific metrics that matter: accuracy, coverage, latency",
    ],
    outcome: "A validated prototype that the team has stress-tested against real operational conditions.",
  },
  {
    number: "04",
    title: "Add reliability controls",
    duration: "Week 5–7",
    description:
      "Before expanding scope, we instrument the system properly. Evaluations, monitoring, access controls, and audit trails are not afterthoughts — they are what separates a demo from a production system. This phase also includes the security review.",
    details: [
      "Evaluation framework: automated tests covering accuracy, edge cases, regressions",
      "Monitoring: response quality tracking, latency alerts, volume dashboards",
      "Access controls: role-based permissions, permission-aware retrieval",
      "Audit trails: every agent action logged with inputs, outputs, and timestamps",
      "Escalation paths: defined criteria for when humans are pulled in",
    ],
    outcome: "A system that operators can trust — with visibility into what it is doing and why.",
  },
  {
    number: "05",
    title: "Expand carefully",
    duration: "Week 7+",
    description:
      "Once the first workflow proves reliable and manageable, we move to adjacent processes. Expansion is earned — not assumed. Each new workflow repeats the same discipline: map, design, prototype, instrument. The system grows with confidence, not ambition.",
    details: [
      "Define the expansion criteria before expanding — what does 'reliable' mean in numbers?",
      "Identify adjacent workflows that share inputs or agents with the first",
      "Reuse the retrieval layer, evaluation framework, and monitoring infrastructure",
      "Keep human review in place until the accuracy threshold is consistently met",
    ],
    outcome: "A growing system where each addition is as reliable as the first — because the controls compound.",
  },
];

const PRINCIPLES = [
  {
    title: "Narrow before broad",
    description:
      "We automate one workflow well before touching ten workflows poorly. Scope discipline is the single biggest predictor of whether an AI project reaches production.",
  },
  {
    title: "Real data from day one",
    description:
      "Synthetic test data produces synthetic confidence. We use your actual documents, your actual edge cases, and your actual exceptions — from the first prototype.",
  },
  {
    title: "Controls are not optional",
    description:
      "Evaluations, monitoring, and human review paths are built in during the prototype phase — not bolted on before launch. Production systems are instrumented systems.",
  },
  {
    title: "Operators own the workflow",
    description:
      "The people doing the work are the domain experts. We build tools they can inspect, override, and correct. Autonomy expands only when trust is earned through track record.",
  },
];

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
      <main className="pt-20">

        {/* Hero */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/#process"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060] transition-colors hover:text-blue-500"
            >
              ← Back
            </Link>
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              Implementation approach
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
              From workflow map to reliable AI system.
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              We start narrow, test against real examples, add controls early, and expand only after the workflow proves useful and manageable. Every engagement follows the same five phases.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              How we think
            </p>
            <div className="grid grid-cols-1 gap-px border border-[#0f1e35] bg-[#0f1e35] sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="bg-[#060b18] p-6 hover:bg-[#08101f] transition-colors">
                  <h3 className="mb-2 text-sm font-semibold text-slate-100">{p.title}</h3>
                  <p className="text-sm leading-6 text-[#4a6a8a]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-b border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              The five phases
            </p>
            <div className="divide-y divide-[#0f1e35]">
              {STEPS.map((step) => (
                <div key={step.number} className="py-10 lg:grid lg:grid-cols-[160px_1fr] lg:gap-10">
                  {/* Left */}
                  <div className="mb-4 lg:mb-0">
                    <p className="font-mono text-[0.65rem] font-semibold text-blue-600 mb-1">{step.number}</p>
                    <p className="font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">{step.duration}</p>
                  </div>
                  {/* Right */}
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-slate-100">{step.title}</h2>
                    <p className="mb-5 text-sm leading-7 text-[#4a6a8a]">{step.description}</p>
                    <ul className="mb-5 space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                          <span className="text-sm leading-6 text-[#4a6a8a]">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-sm border border-[#0f1e35] bg-[#08101f] px-4 py-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-500">Outcome — </span>
                      <span className="text-sm text-slate-300">{step.outcome}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-slate-100">Ready to map a workflow?</h2>
              <p className="text-sm text-[#4a6a8a]">
                We'll scope one operational process and show you where AI can reduce manual work without increasing risk.
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

export default OurProcess;
