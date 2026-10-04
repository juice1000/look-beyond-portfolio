import React from "react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "./Home/HeroSection";

const STEPS = [
  {
    number: "01",
    title: "Map the workflow and the baseline",
    duration: "Week 1–2",
    description:
      "We start by sitting with the people doing the work, not just reading documentation. We trace one repetitive, high-volume process end-to-end and measure what it costs today: time, errors and cycle time.",
    details: [
      "Interview operators and team leads, not just managers",
      "Identify the five to ten exceptions that account for most of the manual time",
      "Record today's cost, cycle time and error rate as the baseline",
      "Agree which compliance and policy rules the process must respect",
    ],
    outcome: "A workflow map and a baseline everyone agrees on, including the parts no one had written down before.",
  },
  {
    number: "02",
    title: "Design the pipeline and the checks",
    duration: "Week 2–3",
    description:
      "With the workflow mapped, we define which steps get automated, which stay human, and what a pass looks like. We design for the exception first. The happy path is easy; production systems live or die on edge cases.",
    details: [
      "Assign agent roles: classification, extraction, drafting, routing, escalation",
      "Design human-in-the-loop gates: when does an agent pause and ask?",
      "Write the pass criteria for quality, cost and compliance before building",
      "Specify integrations: which systems need to be read from or written to?",
    ],
    outcome: "A pipeline spec with clear boundaries, and written pass criteria for every critical check.",
  },
  {
    number: "03",
    title: "Prototype with real data",
    duration: "Week 3–5",
    description:
      "We build a focused working prototype and its first test set from actual documents and real edge cases in your operations, not synthetic data. The prototype is designed to be broken. We want to find the failure modes before they reach production.",
    details: [
      "Use 50–200 real examples to build the first test set",
      "Run the prototype alongside the existing workflow (not instead of it)",
      "Collect operator feedback in structured sessions, not casual observation",
      "Measure against the baseline: accuracy, coverage, cost and speed",
    ],
    outcome: "A validated prototype that the team has stress-tested against real operational conditions.",
  },
  {
    number: "04",
    title: "Add reliability controls",
    duration: "Week 5–7",
    description:
      "Before expanding scope, we instrument the system properly. Tests, compliance checks, monitoring, access controls and audit trails are not afterthoughts. They are what separates a demo from a production system. This phase also includes the security review.",
    details: [
      "Test suite: automated tests for accuracy, edge cases and regressions, run on every release",
      "Compliance checks: safety, data protection and policy tests, where a failed critical check blocks the release",
      "Monitoring: live quality, cost and rule-violation tracking, with alerts",
      "Access controls and audit trails: role-based permissions, every agent action logged",
      "Escalation paths: defined criteria for when humans are pulled in",
    ],
    outcome: "A system that operators can trust, with full visibility into what it is doing and why.",
  },
  {
    number: "05",
    title: "Report and expand",
    duration: "Week 7+",
    description:
      "Once the first workflow proves reliable, we publish the scorecard and move to adjacent processes. Expansion is earned, not assumed. Each new workflow repeats the same discipline: baseline, checks, prototype, controls. The system grows with confidence, not ambition.",
    details: [
      "Report productivity, quality, cost and compliance against the baseline",
      "Define the expansion criteria before expanding: what does 'reliable' mean in numbers?",
      "Identify adjacent workflows that share inputs or agents with the first",
      "Reuse the test sets, monitoring and scorecard, and keep human review until thresholds are consistently met",
    ],
    outcome: "A growing system where each addition is as reliable as the first, and the numbers can be checked by finance.",
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
      "Synthetic test data produces synthetic confidence. We use your actual documents, your actual edge cases, and your actual exceptions, from the first prototype.",
  },
  {
    title: "Controls are not optional",
    description:
      "Tests, compliance checks and monitoring are built in during the prototype phase, not bolted on before launch. Results are reported against a baseline set before launch.",
  },
  {
    title: "Operators own the workflow",
    description:
      "The people doing the work are the domain experts. We build tools they can inspect, override, and correct. Autonomy expands only when trust is earned through track record.",
  },
];

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      {/* Fixed aurora — light mode only */}
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
              How we work
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-5xl">
              From baseline to a scorecard you can defend.
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              We start narrow, test on real examples, add controls early, and expand when the numbers hold. Every engagement follows the same five phases.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              How we think
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none transition-transform duration-200 hover:-translate-y-1 p-6">
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
                  <h3 className="mb-2 text-sm font-semibold text-[#0f1e35] dark:text-slate-100">{p.title}</h3>
                  <p className="text-sm leading-6 text-[#4a6a8a]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              The five phases
            </p>
            <div className="divide-y divide-white/30 dark:divide-[#0f1e35]">
              {STEPS.map((step) => (
                <div key={step.number} className="py-10 lg:grid lg:grid-cols-[160px_1fr] lg:gap-10">
                  {/* Left */}
                  <div className="mb-4 lg:mb-0">
                    <p className="font-mono text-[0.65rem] font-semibold text-blue-600 mb-1">{step.number}</p>
                    <p className="font-mono text-[0.55rem] uppercase tracking-widest text-[#2a4060]">{step.duration}</p>
                  </div>
                  {/* Right */}
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-[#0f1e35] dark:text-slate-100">{step.title}</h2>
                    <p className="mb-5 text-sm leading-7 text-[#4a6a8a]">{step.description}</p>
                    <ul className="mb-5 space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                          <span className="text-sm leading-6 text-[#4a6a8a]">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-sm border border-white/30 dark:border-[#0f1e35] bg-white/40 dark:bg-[#08101f] px-4 py-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-500">Outcome: </span>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{step.outcome}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">Explore the practice</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/practice"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Our Practice →
              </Link>
              <Link
                to="/pillars/ai-workflow-systems"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Build: Workflow Systems →
              </Link>
              <Link
                to="/pillars/autonomous-agents"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Build: Autonomous Agents →
              </Link>
              <Link
                to="/pillars/ai-performance-monitoring"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Test, Protect, Monitor, Prove →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-[#0f1e35] dark:text-slate-100">Ready to map a workflow?</h2>
              <p className="text-sm text-[#4a6a8a]">
                We'll scope one operational process and show you where AI can reduce manual work without increasing risk.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 rounded-full bg-blue-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
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
