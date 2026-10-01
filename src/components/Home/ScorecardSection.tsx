import React from "react";
import { LandingPageContent } from "../../data/landingPage";

interface ScorecardSectionProps {
  content: LandingPageContent["scorecard"];
}

const ScorecardSection = ({ content }: ScorecardSectionProps) => {
  return (
    <section
      id="scorecard"
      className="scroll-mt-24 border-b border-white/30 dark:border-[#0f1e35] py-14"
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <h2 className="mb-3 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {content.heading}
        </h2>
        <p className="mb-8 max-w-3xl text-base text-slate-500 dark:text-[#4a6a8a]">
          {content.description}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.groups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_12px_32px_rgba(0,0,0,0.06)]
                         dark:shadow-none
                         px-5 py-6"
            >
              <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <h3 className="mb-2 text-lg font-semibold text-blue-500">
                {group.title}
              </h3>
              <p className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {group.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm font-medium text-[#0f1e35] dark:text-slate-100">
          {content.closing}
        </p>
      </div>
    </section>
  );
};

export default ScorecardSection;
