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
    ];

  const pov = system?.pov;
  const isDE = language === "de";

  return (
    <section
      id="solutions"
      className="-mt-32 relative z-10 border-b border-white/30 dark:border-[#0f1e35] pb-12 pt-16"
    >
      <div className="relative max-w-7xl mx-auto px-4">
        {system?.eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
            {system.eyebrow}
          </p>
        )}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
              {system?.heading || t("solutions.title", language)}
            </h2>
            {system?.description && (
              <p className="max-w-3xl text-base text-slate-500 dark:text-[#4a6a8a]">
                {system.description}
              </p>
            )}
          </div>
        </div>

        {/* Point of view — statement only, kept brief */}
        {pov && (
          <div className="mb-10 border-l-2 border-blue-500 pl-5 py-1">
            <p className="text-base font-semibold text-[#0f1e35] dark:text-slate-100">
              {pov.statement}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-[#4a6a8a]">
              {pov.callout}
            </p>
          </div>
        )}

        {/* AI Systems cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden flex min-h-56 flex-col rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                         dark:shadow-none
                         transition-transform duration-200 hover:-translate-y-1
                         p-6"
            >
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-4 font-mono text-xs font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-[#0f1e35] dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {item.description}
              </p>
              <div className="mt-auto flex justify-end pt-6">
                {PILLAR_ROUTES[index] ? (
                  <Link
                    to={PILLAR_ROUTES[index]}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-800 font-mono text-sm text-slate-800 transition-colors hover:bg-slate-800 hover:text-white dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white"
                  >
                    →
                  </Link>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-800 font-mono text-sm text-slate-800 dark:border-blue-600 dark:text-blue-600">
                    →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Track B — compact callout, detail lives on the Pricing page */}
        {system?.trackB && system.trackB.length > 0 && (
          <div className="mt-6 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-3">
            <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">
              {isDE
                ? "Wir bauen auch Custom Platforms, ERP-Integrationen und Cloud-Dateninfrastruktur."
                : "We also build custom platforms, ERP integrations, and cloud data infrastructure."}
            </p>
            <Link
              to="/pricing-engagement"
              className="text-sm font-medium text-blue-500 hover:underline whitespace-nowrap"
            >
              {isDE ? "Beide Wege ansehen →" : "See both paths →"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionStack;
