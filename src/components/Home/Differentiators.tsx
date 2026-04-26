import React from "react";
import { t, Language } from "../../lib/i18n";

interface DifferentiatorsProps {
  language: Language;
}

const Differentiators = ({ language }: DifferentiatorsProps) => {
  const items = [
    {
      title: t("differentiators.enterprise.title", language),
      description: t("differentiators.enterprise.description", language),
    },
    {
      title: t("differentiators.team.title", language),
      description: t("differentiators.team.description", language),
    },
    {
      title: t("differentiators.business.title", language),
      description: t("differentiators.business.description", language),
    },
    {
      title: t("differentiators.enablement.title", language),
      description: t("differentiators.enablement.description", language),
    },
    {
      title: t("differentiators.regional.title", language),
      description: t("differentiators.regional.description", language),
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t("differentiators.title", language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800"
            >
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

export default Differentiators;
