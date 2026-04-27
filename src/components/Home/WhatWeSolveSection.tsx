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
    <section className="bg-[#060b18] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4 text-sm uppercase tracking-wide text-blue-500">
          {t("whatWeSolve.title", language)}
        </p>
        <div className="space-y-4 text-lg text-[#4a6a8a]">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p className="pt-2 text-xl font-medium text-slate-100">
            {t("whatWeSolve.outro", language)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolveSection;
