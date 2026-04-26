import React from "react";
import { t, Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

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
    <section id="solutions" className="border-b border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        {system?.eyebrow && (
          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {system.eyebrow}
          </p>
        )}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {system?.heading || t("solutions.title", language)}
            </h2>
            {system?.description && (
              <p className="max-w-3xl text-base text-gray-600 dark:text-gray-300">
                {system.description}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-gray-200 md:grid-cols-4 dark:border-gray-800">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex min-h-56 flex-col border-b border-r border-gray-200 p-6 dark:border-gray-800 ${
                index === 0
                  ? "bg-blue-50 dark:bg-blue-950/20"
                  : "bg-white dark:bg-gray-950"
              }`}
            >
              <p className="text-xs font-semibold font-mono text-blue-600 dark:text-blue-400 mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <div className="mt-auto flex justify-end pt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 font-mono text-sm text-blue-600">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionStack;
