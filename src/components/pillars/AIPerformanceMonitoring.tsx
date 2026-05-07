import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import PillarAnimationPanel from "./PillarAnimationPanel";

interface AIPerformanceMonitoringProps {
  language?: Language;
  isDarkMode: boolean;
}

const capabilities = [
  {
    title: "Response Evaluation",
    description:
      "Run automated evaluators against every AI output to score accuracy, relevance, and policy compliance before responses reach end users.",
  },
  {
    title: "Sentiment & Quality Scoring",
    description:
      "Measure tone, coherence, and task-specific quality dimensions in real time so performance regressions surface immediately.",
  },
  {
    title: "Alerting & Escalation",
    description:
      "Define thresholds that trigger instant alerts when quality drops, error rates spike, or anomalous output patterns are detected.",
  },
  {
    title: "Human Review Paths",
    description:
      "Route flagged responses to structured review queues where annotators can correct, approve, or reject with full conversation context.",
  },
];

const steps = [
  {
    number: "01",
    title: "Instrument the AI output",
    description:
      "Add logging hooks at every point where the AI produces a response so no output goes unobserved in production.",
  },
  {
    number: "02",
    title: "Run parallel evaluators",
    description:
      "Apply multiple independent evaluators — rule-based, model-based, and statistical — to each output to get a multi-signal quality view.",
  },
  {
    number: "03",
    title: "Generate health reports",
    description:
      "Aggregate scores into time-series dashboards and periodic reports that track drift, improvement, and coverage over the model's lifecycle.",
  },
  {
    number: "04",
    title: "Trigger alerts",
    description:
      "Wire threshold breaches to your team's existing channels so on-call engineers receive actionable alerts with enough context to act immediately.",
  },
];

const AIPerformanceMonitoring = ({ isDarkMode }: AIPerformanceMonitoringProps) => {
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
                  Pillar 03
                </span>
                <span className="h-px w-6 bg-[#0f1e35]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                  Reliability & Oversight
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
                AI Performance Monitoring
              </h1>
              <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
              <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
                Evaluations, real-time monitoring, access controls, and audit
                trails for production AI systems.
              </p>
            </div>
            <PillarAnimationPanel kind="monitoring" isDarkMode={isDarkMode} />
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
                AI support bot monitoring
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
                  Ready to put your AI systems under observation?
                </h2>
                <p className="text-base leading-7 text-[#4a6a8a]">
                  Let's design an evaluation and monitoring layer for your
                  production AI.
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

export default AIPerformanceMonitoring;
