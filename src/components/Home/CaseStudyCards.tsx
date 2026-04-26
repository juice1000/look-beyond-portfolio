import React from "react";
import { t, Language } from "../../lib/i18n";

interface CaseStudyCardsProps {
  language: Language;
  showHeader?: boolean;
}

const CaseStudyCards = ({ language, showHeader = true }: CaseStudyCardsProps) => {
  const caseStudies = [
    {
      title: t("caseStudies.sprinkenhof.title", language),
      tagline: t("caseStudies.sprinkenhof.tagline", language),
      description: t("caseStudies.sprinkenhof.description", language),
      bullets: [
        t("caseStudies.sprinkenhof.bullet1", language),
        t("caseStudies.sprinkenhof.bullet2", language),
        t("caseStudies.sprinkenhof.bullet3", language),
        t("caseStudies.sprinkenhof.bullet4", language),
      ],
    },
    {
      title: t("caseStudies.fgs.title", language),
      tagline: t("caseStudies.fgs.tagline", language),
      description: t("caseStudies.fgs.description", language),
      bullets: [
        t("caseStudies.fgs.bullet1", language),
        t("caseStudies.fgs.bullet2", language),
        t("caseStudies.fgs.bullet3", language),
        t("caseStudies.fgs.bullet4", language),
      ],
    },
    {
      title: t("caseStudies.sourcera.title", language),
      tagline: t("caseStudies.sourcera.tagline", language),
      description: t("caseStudies.sourcera.description", language),
      bullets: [
        t("caseStudies.sourcera.bullet1", language),
        t("caseStudies.sourcera.bullet2", language),
        t("caseStudies.sourcera.bullet3", language),
        t("caseStudies.sourcera.bullet4", language),
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t("caseStudies.title", language)}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              {t("caseStudies.subtitle", language)}
            </p>
          </div>
        )}

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                {study.title}
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {study.tagline}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {study.description}
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {t("caseStudies.enables", language)}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {study.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCards;
