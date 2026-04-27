import React from "react";
import { t, Language } from "../../lib/i18n";

interface TrainingSectionProps {
  language: Language;
}

const TrainingSection = ({ language }: TrainingSectionProps) => {
  const paragraphs = [
    t("training.paragraph1", language),
    t("training.paragraph2", language),
    t("training.outro", language),
  ];

  return (
    <section className="bg-[#060b18] py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-slate-100">
          {t("training.title", language)}
        </h2>
        <div className="space-y-4 text-lg text-[#4a6a8a]">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
