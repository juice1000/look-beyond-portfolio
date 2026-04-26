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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t("training.title", language)}
        </h2>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
