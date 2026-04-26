import React from "react";
import { t, Language } from "../../lib/i18n";
import { ArrowRight, ListChecks } from "lucide-react";

import { LandingPageContent } from "../../data/landingPage";
import { Button } from "../ui/button";

interface ClosingSectionProps {
  language: Language;
  finalCta?: LandingPageContent["finalCta"];
}

const ClosingSection = ({ language, finalCta }: ClosingSectionProps) => {
  const bullets =
    finalCta?.points || [
      t("closing.point1", language),
      t("closing.point2", language),
      t("closing.point3", language),
      t("closing.point4", language),
    ];

  return (
    <section id="contact" className="bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            {finalCta?.heading || t("closing.title", language)}
          </h2>
          <p className="max-w-2xl text-gray-400">
            {finalCta?.description || t("closing.description", language)}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <p className="text-sm text-gray-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
        {finalCta && (
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button
              size="lg"
              className="rounded-sm border border-white bg-transparent font-mono text-xs font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-slate-900"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              {finalCta.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-blue-500 bg-blue-600 font-mono text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
              onClick={() => {
                const element = document.getElementById("industries");
                if (!element) return;
                const y =
                  element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              {finalCta.secondaryCta}
              <ListChecks className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClosingSection;
