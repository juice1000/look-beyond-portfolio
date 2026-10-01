import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

interface SolutionStackProps {
  language: Language;
  system: LandingPageContent["system"];
}

const SolutionStack = ({ language, system }: SolutionStackProps) => {
  const isDE = language === "de";

  return (
    <section
      id="solutions"
      className="border-b border-white/30 dark:border-[#0f1e35] py-14"
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {system.eyebrow}
        </p>
        <h2 className="mb-3 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {system.heading}
        </h2>
        <p className="mb-8 max-w-3xl text-base text-slate-500 dark:text-[#4a6a8a]">
          {system.description}
        </p>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {system.layers.map((layer, index) => (
            <li
              key={layer.title}
              className="relative flex flex-col overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                         dark:shadow-none
                         transition-transform duration-200 hover:-translate-y-1
                         p-5"
            >
              <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-3 font-mono text-xs font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
                {layer.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {layer.description}
              </p>
              <div className="mt-auto border-t border-white/40 dark:border-[#0f1e35] pt-3">
                <p className="mb-1 font-mono text-[0.55rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
                  {system.signalLabel}
                </p>
                <p className="text-sm font-medium text-[#0f1e35] dark:text-slate-200">
                  {layer.signal}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 border-l-2 border-blue-500 py-1 pl-5">
          <p className="max-w-3xl text-sm font-medium text-[#0f1e35] dark:text-slate-100">
            {system.principle}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start gap-1 border-t border-white/30 dark:border-[#0f1e35] pt-5 md:flex-row md:items-center md:gap-3">
          <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">
            {isDE
              ? "Nicht sicher, welche Pflichten für Sie unter dem EU AI Act oder der DSGVO gelten? Wir klären das gemeinsam mit Ihnen."
              : "Not sure which EU AI Act or GDPR obligations apply to your use case? We work through your requirements with you."}
          </p>
          <Link
            to="/compliance"
            className="whitespace-nowrap text-sm font-medium text-blue-500 hover:underline"
          >
            {isDE ? "Compliance-Ansatz ansehen →" : "See our compliance approach →"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionStack;
