import React from "react";
import { t, Language } from "../../lib/i18n";
import { LandingPageContent } from "../../data/landingPage";

interface ProblemAreasProps {
  language: Language;
  problems?: LandingPageContent["problems"];
}

const ProblemAreas = ({ language, problems }: ProblemAreasProps) => {
  const items =
    problems?.items || [
      {
        title: t("problems.slowDecisions.title", language),
        description: t("problems.slowDecisions.description", language),
      },
      {
        title: t("problems.bottlenecks.title", language),
        description: t("problems.bottlenecks.description", language),
      },
      {
        title: t("problems.trust.title", language),
        description: t("problems.trust.description", language),
      },
      {
        title: t("problems.change.title", language),
        description: t("problems.change.description", language),
      },
    ];

  return (
    <section className="bg-[#060b18] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="mb-8 max-w-4xl text-3xl font-bold text-slate-100 md:text-4xl">
          {problems?.heading || t("problems.title", language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-6"
            >
              <p className="mb-2 text-sm font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
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

export default ProblemAreas;
