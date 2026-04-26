import React from "react";
import { t, Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

interface ProblemAreasProps {
  language: Language;
  problems?: LandingPageContent["problems"];
}

const ProblemAreas = ({ language, problems }: ProblemAreasProps) => {
  const items =
    problems?.items || [
      {
        title: t("problems.slowDecisions.title", language),
        description: t("problems.slowDecisions.description", language),
      },
      {
        title: t("problems.bottlenecks.title", language),
        description: t("problems.bottlenecks.description", language),
      },
      {
        title: t("problems.trust.title", language),
        description: t("problems.trust.description", language),
      },
      {
        title: t("problems.change.title", language),
        description: t("problems.change.description", language),
      },
    ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 max-w-4xl">
          {problems?.heading || t("problems.title", language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            >
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAreas;
