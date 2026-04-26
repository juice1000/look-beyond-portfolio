import React from "react";
import { t, Language } from "../../lib/i18n";

interface OutcomesSectionProps {
  language: Language;
}

const OutcomesSection = ({ language }: OutcomesSectionProps) => {
  const bullets = [
    t("outcomes.bullet1", language),
    t("outcomes.bullet2", language),
    t("outcomes.bullet3", language),
    t("outcomes.bullet4", language),
    t("outcomes.bullet5", language),
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t("outcomes.title", language)}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t("outcomes.description", language)}
        </p>
        <ul className="space-y-3 text-lg text-gray-900 dark:text-white">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          {t("outcomes.note", language)}
        </p>
      </div>
    </section>
  );
};

export default OutcomesSection;
