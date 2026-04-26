import React from "react";
import { t, Language } from "../../lib/i18n";

interface WhatWeSolveSectionProps {
  language: Language;
}

const WhatWeSolveSection = ({ language }: WhatWeSolveSectionProps) => {
  const paragraphs = [
    t("whatWeSolve.intro", language),
    t("whatWeSolve.paragraph1", language),
    t("whatWeSolve.paragraph2", language),
    t("whatWeSolve.paragraph3", language),
    t("whatWeSolve.paragraph4", language),
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-4">
          {t("whatWeSolve.title", language)}
        </p>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p className="text-xl font-medium text-gray-900 dark:text-white pt-2">
            {t("whatWeSolve.outro", language)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolveSection;
