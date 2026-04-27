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
    <section className="bg-[#060b18] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold text-slate-100">
          {t("outcomes.title", language)}
        </h2>
        <p className="mb-6 text-lg text-[#4a6a8a]">
          {t("outcomes.description", language)}
        </p>
        <ul className="space-y-3 text-lg text-slate-100">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-[#4a6a8a]">{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#5f7793]">
          {t("outcomes.note", language)}
        </p>
      </div>
    </section>
  );
};

export default OutcomesSection;
