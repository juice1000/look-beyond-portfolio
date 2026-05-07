import React from "react";
import { t, Language } from "../../lib/i18n";
import { ArrowRight } from "lucide-react";

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
    <section id="contact" className="border-b border-[#dde6f3] dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-4xl">
            {finalCta?.heading || t("closing.title", language)}
          </h2>
          <p className="max-w-2xl text-slate-500 dark:text-[#4a6a8a]">
            {finalCta?.description || t("closing.description", language)}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
        {finalCta && (
          <div className="flex shrink-0 flex-col gap-3">
            <Button
              size="lg"
              className="rounded-sm bg-blue-600 font-mono text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
              onClick={() => { window.location.href = "/contact"; }}
            >
              {finalCta.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClosingSection;
