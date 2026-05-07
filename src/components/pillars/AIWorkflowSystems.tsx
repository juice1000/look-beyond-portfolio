import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import PillarAnimationPanel from "./PillarAnimationPanel";

interface AIWorkflowSystemsProps {
  language?: Language;
  isDarkMode: boolean;
}

const capabilities = [
  {
    title: "Pipeline Orchestration",
    description:
      "Design and operate multi-step data pipelines that sequence tasks, manage state, and recover from failures without manual intervention.",
  },
  {
    title: "Document Intake & Routing",
    description:
      "Ingest documents from any source, classify them automatically, and route each to the correct downstream handler or queue.",
  },
  {
    title: "Approval Workflows",
    description:
      "Encode business rules into structured approval chains with role-based gates, SLA tracking, and escalation paths.",
  },
  {
    title: "Audit & Logging",
    description:
      "Capture every decision, transformation, and state change in an immutable log — queryable for compliance, debugging, and reporting.",
  },
];

const steps = [
  {
    number: "01",
    title: "Map the workflow",
    description:
      "Document every hand-off, decision point, and exception path in the existing process before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design input/output contracts",
    description:
      "Define the exact shape of data entering and leaving each stage so pipeline components stay independently replaceable.",
  },
  {
    number: "03",
    title: "Build the pipeline",
    description:
      "Implement stages incrementally, validating outputs against contracts at each boundary before wiring to the next step.",
  },
  {
    number: "04",
    title: "Add human review gates",
    description:
      "Insert review checkpoints at high-stakes decision points so staff can inspect, override, or approve before the pipeline continues.",
  },
];

const AIWorkflowSystems = ({ isDarkMode }: AIWorkflowSystemsProps) => {
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
                  Pillar 01
                </span>
                <span className="h-px w-6 bg-[#0f1e35]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                  Workflow Automation
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
                AI Workflow Systems
              </h1>
              <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
              <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
                Connected pipelines that classify, route, validate, approve, and
                log operational work.
              </p>
            </div>
            <PillarAnimationPanel kind="workflow" isDarkMode={isDarkMode} />
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
                  <h3 className="mb-3 text-lg font-semibold text-slate-100">
                    {cap.title}
                  </h3>
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
                Procurement intake automation
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
                  Ready to connect your workflows?
                </h2>
                <p className="text-base leading-7 text-[#4a6a8a]">
                  Let's map your operations and identify the right automation entry points.
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

export default AIWorkflowSystems;
