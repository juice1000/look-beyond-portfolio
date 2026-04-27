import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";

interface LogisticsProps {
  language?: Language;
}

const useCases = [
  {
    title: "Shipment status request automation",
    description:
      "Automatically identify the shipment referenced in an inbound email, retrieve current status, and draft a structured response for review.",
  },
  {
    title: "Delivery order and invoice extraction",
    description:
      "Parse delivery orders and invoices from PDFs and emails, extract key fields, and push structured data to downstream systems.",
  },
  {
    title: "Carrier coordination",
    description:
      "Trigger and track carrier communication sequences for bookings, confirmations, and delay updates — reducing manual follow-up.",
  },
  {
    title: "Exception handler",
    description:
      "Detect shipment exceptions — delays, missing documents, customs holds — and route each to the right team with full context.",
  },
];

const steps = [
  {
    number: "01",
    title: "Customer email",
    description:
      "An inbound status request or query arrives and is captured by the intake agent.",
  },
  {
    number: "02",
    title: "Identify shipment",
    description:
      "The agent extracts shipment identifiers from the email and matches them against open orders and tracking records.",
  },
  {
    number: "03",
    title: "Retrieve status",
    description:
      "Current shipment status, carrier updates, and any open exceptions are retrieved from connected systems.",
  },
  {
    number: "04",
    title: "Draft response",
    description:
      "A structured response is drafted with the current status, expected delivery, and any relevant notes for the customer.",
  },
  {
    number: "05",
    title: "Flag exception",
    description:
      "If an exception is detected — delay, customs hold, missing document — it is flagged and routed to the exception handler.",
  },
  {
    number: "06",
    title: "Human approval",
    description:
      "The drafted response and any flagged exceptions are reviewed and approved by an operator before sending.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Logistics = (_props: LogisticsProps) => {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/#industries"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060] transition-colors hover:text-teal-500"
            >
              ← Back
            </Link>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-teal-500">
                Industry 03
              </span>
              <span className="h-px w-6 bg-[#0f1e35]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                Logistics
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Logistics
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-teal-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              Route work smarter. Respond faster.
            </p>
          </div>
        </section>

        {/* The challenge */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-teal-500">
              The challenge
            </p>
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a]">
              Shipment teams manage high-volume status requests, document handoffs, carrier follow-ups, and exceptions across disconnected channels.
            </p>
          </div>
        </section>

        {/* What we automate */}
        <section className="border-b border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-teal-500">
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
            <p className="mb-10 font-mono text-[0.65rem] uppercase tracking-widest text-teal-500">
              Workflow route
            </p>
            <div className="space-y-0 divide-y divide-[#0f1e35]">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 py-8">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-[0.65rem] font-semibold text-teal-600">
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
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-widest text-teal-500">
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
                Shipment status automation
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
                  Ready to automate your logistics workflows?
                </h2>
                <p className="text-sm text-[#4a6a8a]">
                  Let's map your shipment process and identify where AI agents can reduce response time and manual effort.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 rounded-sm bg-teal-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-teal-700"
              >
                Discuss logistics workflow →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Logistics;
