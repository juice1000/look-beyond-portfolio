import React from "react";
import { Link } from "react-router-dom";
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
    <section id="process" className="border-b border-white/50 dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            {implementation?.eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
                {implementation.eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-4xl">
              {implementation?.heading || t("howWeWork.title", language)}
            </h2>
          </div>
          <Link
            to="/our-process"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
          >
            See full approach →
          </Link>
        </div>
        {implementation?.description ? (
          <p className="mb-8 max-w-3xl text-lg text-slate-500 dark:text-[#4a6a8a]">
            {implementation.description}
          </p>
        ) : (
          <div className="mb-8 max-w-3xl space-y-4 text-lg text-slate-500 dark:text-[#4a6a8a]">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}
        {implementation?.steps && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {implementation.steps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl
                           border border-white/60 dark:border-[#0f1e35]
                           bg-gradient-to-br from-white/40 to-white/15
                           dark:bg-[#08101f]/80
                           backdrop-blur-xl backdrop-saturate-150
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                           dark:shadow-none
                           p-5"
              >
                <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/60 blur-2xl dark:hidden" />
                <p className="mb-3 text-sm font-semibold text-blue-500">
                  Step {index + 1}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">
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
