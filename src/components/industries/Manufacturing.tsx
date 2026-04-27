import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";

interface ManufacturingProps {
  language?: Language;
}

const useCases = [
  {
    title: "Quality issue triage",
    description:
      "Classify incoming defect reports, match against known failure patterns, and route each issue to the right team with SOP context attached.",
  },
  {
    title: "Supplier follow-up workflows",
    description:
      "Trigger structured follow-up sequences when supplier deliveries are late, non-conforming, or require corrective action documentation.",
  },
  {
    title: "Production report structuring",
    description:
      "Extract key metrics from shift reports, inspection sheets, and operator notes into structured, queryable production records.",
  },
  {
    title: "Maintenance knowledge retrieval",
    description:
      "Surface relevant SOPs, maintenance histories, and equipment manuals in response to technician queries during fault resolution.",
  },
];

const steps = [
  {
    number: "01",
    title: "Quality issue report",
    description:
      "A defect or quality event is reported via email, form, or production system and captured by the intake agent.",
  },
  {
    number: "02",
    title: "Classify defect",
    description:
      "The issue is classified by type, severity, affected line, and product category against historical patterns.",
  },
  {
    number: "03",
    title: "Retrieve SOP",
    description:
      "The relevant standard operating procedure and past resolution history are retrieved and attached to the case.",
  },
  {
    number: "04",
    title: "Suggest next action",
    description:
      "A structured recommendation is drafted based on SOP guidance, defect classification, and escalation rules.",
  },
  {
    number: "05",
    title: "Notify team",
    description:
      "The relevant team — quality, production, supplier — is notified with full context and the suggested action.",
  },
  {
    number: "06",
    title: "Track resolution",
    description:
      "Resolution steps, sign-offs, and outcomes are logged and linked back to the original quality event record.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Manufacturing = (_props: ManufacturingProps) => {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/#industries"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060] transition-colors hover:text-amber-500"
            >
              ← Back
            </Link>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-amber-500">
                Industry 02
              </span>
              <span className="h-px w-6 bg-[#0f1e35]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                Manufacturing
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Manufacturing
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-amber-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              Reduce production friction. Structure quality work.
            </p>
          </div>
        </section>

        {/* The challenge */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-amber-500">
              The challenge
            </p>
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a]">
              Production, quality, maintenance, and supplier workflows depend on reports, SOPs, handoffs, and recurring operational judgment.
            </p>
          </div>
        </section>

        {/* What we automate */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-amber-500">
              What we automate
            </p>
            <div className="grid grid-cols-1 gap-px border border-[#0f1e35] bg-[#0f1e35] sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#060b18] p-6 transition-colors hover:bg-[#08101f]"
                >
                  <h3 className="mb-2 text-sm font-semibold text-slate-100">
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
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-amber-500">
              Workflow route
            </p>
            <div className="space-y-0 divide-y divide-[#0f1e35]">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 py-8">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-[0.65rem] font-semibold text-amber-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">
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
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-amber-500">
              Case study
            </p>
            <div className="rounded-sm border border-dashed border-[#1a3050] p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#1a3050]">
                  Coming soon
                </span>
                <span className="h-px flex-1 bg-[#0f1e35]" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#2a4060]">
                Quality issue triage system
              </h3>
              <p className="text-sm text-[#1a3050]">
                Client case study coming soon — details under NDA.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-slate-100">
                  Ready to structure your manufacturing workflows?
                </h2>
                <p className="text-sm text-[#4a6a8a]">
                  Let's map your production process and identify where AI agents can reduce manual coordination.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 rounded-sm bg-amber-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-amber-700"
              >
                Discuss manufacturing workflow →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Manufacturing;
