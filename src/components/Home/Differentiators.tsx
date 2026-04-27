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
    <section className="bg-[#060b18] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-slate-100">
          {t("differentiators.title", language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#0f1e35] bg-[#08101f] p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-[#4a6a8a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
