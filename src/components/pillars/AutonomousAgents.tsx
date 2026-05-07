import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import PillarAnimationPanel from "./PillarAnimationPanel";

interface AutonomousAgentsProps {
  language?: Language;
  isDarkMode: boolean;
}

const capabilities = [
  {
    title: "Agent Orchestration",
    description:
      "Coordinate multiple specialized agents that hand off context, share memory, and collaborate to resolve complex multi-step tasks.",
    badge: null,
  },
  {
    title: "Knowledge Retrieval",
    description:
      "Ground every agent response in your own documentation, policies, and structured data through semantic search and hybrid retrieval pipelines.",
    badge: "Sub-product",
  },
  {
    title: "Document Extraction",
    description:
      "Parse unstructured documents — invoices, contracts, emails — into typed, validated data structures agents can reason over.",
    badge: null,
  },
  {
    title: "Exception Handling",
    description:
      "Detect ambiguity and edge cases at runtime, route them to human operators with full context, then resume automatically once resolved.",
    badge: null,
  },
];

const steps = [
  {
    number: "01",
    title: "Define agent roles",
    description:
      "Specify each agent's scope, tools, and authority boundaries before building — clear roles prevent overlapping responsibilities and reasoning loops.",
  },
  {
    number: "02",
    title: "Build the retrieval layer",
    description:
      "Index your knowledge base, tune chunking and embedding strategies, and validate retrieval quality against representative queries.",
  },
  {
    number: "03",
    title: "Connect to workflow",
    description:
      "Wire agents into the operational pipeline so they receive real tasks, return structured outputs, and trigger downstream actions.",
  },
  {
    number: "04",
    title: "Add oversight controls",
    description:
      "Instrument confidence thresholds, escalation triggers, and audit logging so every high-stakes agent decision is reviewable.",
  },
];

const AutonomousAgents = ({ isDarkMode }: AutonomousAgentsProps) => {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-[#0f1e35] px-5 py-12 sm:px-8 md:px-12 xl:px-16">
          <div className="mx-auto grid max-w-[94rem] gap-8 lg:grid-cols-[minmax(17rem,0.34fr)_minmax(0,1fr)] lg:items-center xl:gap-12">
            <div className="max-w-md">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060] transition-colors hover:text-blue-500"
              >
                ← Back
              </Link>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                  Pillar 02
                </span>
                <span className="h-px w-6 bg-[#0f1e35]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                  Agent Systems
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
                Autonomous Agents
              </h1>
              <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
              <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
                Specialized agents that extract, classify, draft, and escalate —
                with built-in knowledge retrieval.
              </p>
            </div>
            <PillarAnimationPanel kind="agents" isDarkMode={isDarkMode} />
          </div>
        </section>

        {/* What we build */}
        <section className="border-b border-[#0f1e35] px-5 py-16 sm:px-8 md:px-12 xl:px-16">
          <div className="mx-auto max-w-[94rem]">
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-blue-500">
              What we build
            </p>
            <div className="grid grid-cols-1 gap-px border border-[#0f1e35] bg-[#0f1e35] sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-[#060b18] p-8 transition-colors hover:bg-[#08101f]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {cap.title}
                    </h3>
                    {cap.badge && (
                      <span className="rounded-sm border border-blue-600/40 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-widest text-blue-500">
                        {cap.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-base leading-7 text-[#4a6a8a]">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-[#0f1e35] px-5 py-16 sm:px-8 md:px-12 xl:px-16">
          <div className="mx-auto max-w-[94rem]">
            <p className="mb-10 font-mono text-xs uppercase tracking-widest text-blue-500">
              How it works
            </p>
            <div className="space-y-0 divide-y divide-[#0f1e35]">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 py-9">
                  <span className="mt-1 flex-shrink-0 font-mono text-xs font-semibold text-blue-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-100">
                      {step.title}
                    </h3>
                    <p className="max-w-4xl text-base leading-7 text-[#4a6a8a]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study placeholder */}
        <section className="border-b border-[#0f1e35] px-5 py-16 sm:px-8 md:px-12 xl:px-16">
          <div className="mx-auto max-w-[94rem]">
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-blue-500">
              Case study
            </p>
            <div className="rounded-sm border border-dashed border-[#1a3050] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1a3050]">
                  Locked
                </span>
                <span className="h-px flex-1 bg-[#0f1e35]" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#2a4060]">
                Supplier communication agent
              </h3>
              <p className="text-base leading-7 text-[#1a3050]">
                Client case study coming soon — details under NDA.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 md:px-12 xl:px-16">
          <div className="mx-auto max-w-[94rem]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-slate-100">
                  Ready to deploy specialized agents?
                </h2>
                <p className="text-base leading-7 text-[#4a6a8a]">
                  Let's scope an agent architecture grounded in your knowledge
                  and operations.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 rounded-sm bg-blue-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AutonomousAgents;
