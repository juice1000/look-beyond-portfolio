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
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {finalCta?.heading || t("closing.title", language)}
        </h2>
        <p className="text-lg mb-6 text-blue-100">
          {finalCta?.description || t("closing.description", language)}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <p className="text-lg">{bullet}</p>
            </div>
          ))}
        </div>
        {finalCta && (
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full"
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
              className="rounded-full border-white text-white hover:bg-white hover:text-blue-700"
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
