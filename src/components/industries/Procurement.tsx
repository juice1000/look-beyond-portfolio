import React from "react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "../Home/HeroSection";

const useCases = [
  {
    title: "Procurement intake assistant",
    description:
      "Capture and structure purchase requests from emails, forms, and documents — routing each to the correct policy check and approval path.",
  },
  {
    title: "Supplier risk scoring",
    description:
      "Aggregate supplier data from multiple sources and score risk automatically before quotes are reviewed or contracts are issued.",
  },
  {
    title: "Quote comparison workflow",
    description:
      "Extract line items from supplier quotes, normalize formats, and surface structured comparisons for buyer review.",
  },
  {
    title: "Contract anomaly detection",
    description:
      "Flag clauses, pricing deviations, and missing terms in contract drafts before they reach legal or finance review.",
  },
];

const steps = [
  {
    number: "01",
    title: "Purchase request",
    description:
      "A request arrives by email, form, or ERP export and is captured by the intake agent.",
  },
  {
    number: "02",
    title: "Check policy",
    description:
      "The system validates the request against spend policy, category rules, and approval thresholds.",
  },
  {
    number: "03",
    title: "Extract requirements",
    description:
      "Key fields — item, quantity, budget, timeline, preferred suppliers — are extracted and structured.",
  },
  {
    number: "04",
    title: "Match suppliers",
    description:
      "The request is matched against the approved supplier list with risk scores and past performance context.",
  },
  {
    number: "05",
    title: "Compare quotes",
    description:
      "Incoming quotes are parsed, normalized, and presented as a structured comparison for buyer review.",
  },
  {
    number: "06",
    title: "Route approval",
    description:
      "The approved quote and structured summary are routed to the correct approver with full context attached.",
  },
];

const Procurement = () => {
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
              to="/#industries"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#2a4060] transition-colors hover:text-purple-500"
            >
              ← Back
            </Link>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-purple-500">
                Industry 01
              </span>
              <span className="h-px w-6 bg-white/40 dark:bg-[#0f1e35]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                Procurement
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-5xl">
              Procurement
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-purple-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              Control supplier risk. Automate procurement intake.
            </p>
          </div>
        </section>

        {/* The challenge */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-purple-500">
              The challenge
            </p>
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a]">
              Procurement teams move requests, supplier context, quotes, policies, approvals, and spend data through manual comparison and follow-up.
            </p>
          </div>
        </section>

        {/* What we automate */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-purple-500">
              What we automate
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none transition-transform duration-200 hover:-translate-y-1 p-6"
                >
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
                  <h3 className="mb-2 text-sm font-semibold text-[#0f1e35] dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#4a6a8a]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow route */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-purple-500">
              Workflow route
            </p>
            <div className="space-y-0 divide-y divide-white/30 dark:divide-[#0f1e35]">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 py-8">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-[0.65rem] font-semibold text-purple-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-[#0f1e35] dark:text-slate-100">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#4a6a8a]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study placeholder */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-purple-500">
              Case study
            </p>
            <div className="rounded-sm border border-dashed border-slate-300 dark:border-[#1a3050] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#1a3050]">
                  Coming soon
                </span>
                <span className="h-px flex-1 bg-white/40 dark:bg-[#0f1e35]" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-500 dark:text-[#2a4060]">
                Quote comparison workflow
              </h3>
              <p className="text-sm text-slate-400 dark:text-[#1a3050]">
                Client case study coming soon — details under NDA.
              </p>
            </div>
          </div>
        </section>

        {/* Powered by */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">Powered by</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/pillars/ai-workflow-systems"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                AI Workflow Systems →
              </Link>
              <Link
                to="/pillars/autonomous-agents"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Autonomous Agents →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-[#0f1e35] dark:text-slate-100">
                  Ready to automate your procurement workflow?
                </h2>
                <p className="text-sm text-[#4a6a8a]">
                  Let's map your procurement process and identify the right automation entry points.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 rounded-sm bg-purple-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-purple-700"
              >
                Discuss procurement workflow →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Procurement;
