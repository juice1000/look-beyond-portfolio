import React from "react";
import { LandingPageContent } from "../../data/landingPage";

interface FailureModesProps {
  content: LandingPageContent["failures"];
}

const FailureModes = ({ content }: FailureModesProps) => {
  return (
    <section
      id="failures"
      className="border-b border-white/30 dark:border-[#0f1e35] py-14"
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <h2 className="mb-3 max-w-3xl text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {content.heading}
        </h2>
        <p className="mb-8 max-w-3xl text-base text-slate-500 dark:text-[#4a6a8a]">
          {content.description}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <div
              key={item.title}
              className="relative flex flex-col overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                         dark:shadow-none
                         p-6"
            >
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-4 font-mono text-xs font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3 border-t border-white/30 dark:border-[#0f1e35] pt-5">
          {content.evidence.map((line) => (
            <p
              key={line.source}
              className="max-w-4xl text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]"
            >
              {line.text}{" "}
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
                {line.source}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FailureModes;
