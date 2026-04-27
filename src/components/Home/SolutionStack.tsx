import React from "react";
import { Link } from "react-router-dom";
import { t, Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

const PILLAR_ROUTES: Record<number, string> = {
  0: "/pillars/ai-workflow-systems",
  1: "/pillars/autonomous-agents",
  2: "/pillars/ai-performance-monitoring",
};

interface SolutionStackProps {
  language: Language;
  system?: LandingPageContent["system"];
}

const SolutionStack = ({ language, system }: SolutionStackProps) => {
  const items =
    system?.layers || [
      {
        title: t("solutions.decisions.title", language),
        description: t("solutions.decisions.description", language),
      },
      {
        title: t("solutions.automation.title", language),
        description: t("solutions.automation.description", language),
      },
      {
        title: t("solutions.reliability.title", language),
        description: t("solutions.reliability.description", language),
      },
      {
        title: t("solutions.enablement.title", language),
        description: t("solutions.enablement.description", language),
      },
    ];

  return (
    <section id="solutions" className="border-b border-[#0f1e35] bg-[#060b18] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {system?.eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
            {system.eyebrow}
          </p>
        )}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-100 md:text-3xl">
            {system?.heading || t("solutions.title", language)}
            </h2>
            {system?.description && (
              <p className="max-w-3xl text-base text-[#4a6a8a]">
                {system.description}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-[#0f1e35] md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex min-h-56 flex-col border-b border-r border-[#0f1e35] bg-[#08101f] p-6"
            >
              <p className="mb-4 font-mono text-xs font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[#4a6a8a]">
                {item.description}
              </p>
              <div className="mt-auto flex justify-end pt-6">
                {PILLAR_ROUTES[index] ? (
                  <Link
                    to={PILLAR_ROUTES[index]}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 font-mono text-sm text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    →
                  </Link>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 font-mono text-sm text-blue-600">
                    →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionStack;
