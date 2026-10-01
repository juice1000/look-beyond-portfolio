import React from "react";
import { Link } from "react-router-dom";
import { LandingPageContent } from "../../data/landingPage";

interface IndustriesStripProps {
  content: LandingPageContent["industries"];
}

const IndustriesStrip = ({ content }: IndustriesStripProps) => {
  return (
    <section
      id="industries"
      className="border-b border-white/30 dark:border-[#0f1e35] py-12"
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <h2 className="mb-6 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {content.heading}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.workflows.map((industry) => (
            <Link
              key={industry.id}
              to={`/industries/${industry.id}`}
              className="relative flex items-start justify-between gap-4 overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_12px_32px_rgba(0,0,0,0.06)]
                         dark:shadow-none
                         transition-transform duration-200 hover:-translate-y-1
                         px-5 py-5"
            >
              <div>
                <p className="mb-1 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
                  {industry.label}
                </p>
                <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">
                  {industry.positioning}
                </p>
              </div>
              <span className="font-mono text-sm text-blue-500">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesStrip;
