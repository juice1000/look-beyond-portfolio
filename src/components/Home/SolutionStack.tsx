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
    <section id="system" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {system?.eyebrow && (
          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {system.eyebrow}
          </p>
        )}
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {system?.heading || t("solutions.title", language)}
          </h2>
          {system?.description && (
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {system.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Layer {index + 1}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionStack;
