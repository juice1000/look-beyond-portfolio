import React from "react";
import { t, Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

interface HowWeWorkSectionProps {
  language: Language;
  implementation?: LandingPageContent["implementation"];
}

const HowWeWorkSection = ({ language, implementation }: HowWeWorkSectionProps) => {
  const paragraphs = [
    t("howWeWork.paragraph1", language),
    t("howWeWork.paragraph2", language),
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {implementation?.eyebrow && (
          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {implementation.eyebrow}
          </p>
        )}
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {implementation?.heading || t("howWeWork.title", language)}
          </h2>
          {implementation?.description ? (
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {implementation.description}
            </p>
          ) : (
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          )}
        </div>
        {implementation?.steps && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {implementation.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <p className="mb-3 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Step {index + 1}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HowWeWorkSection;
