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
    <section id="process" className="border-b border-[#0f1e35] bg-[#060b18] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            {implementation?.eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
                {implementation.eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">
              {implementation?.heading || t("howWeWork.title", language)}
            </h2>
          </div>
          <Link
            to="/our-process"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-blue-500/40 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 transition-colors hover:bg-blue-500/10"
          >
            See full approach →
          </Link>
        </div>
        {implementation?.description ? (
          <p className="mb-8 max-w-3xl text-lg text-[#4a6a8a]">
            {implementation.description}
          </p>
        ) : (
          <div className="mb-8 max-w-3xl space-y-4 text-lg text-[#4a6a8a]">
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
                className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-5"
              >
                <p className="mb-3 text-sm font-semibold text-blue-500">
                  Step {index + 1}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4a6a8a]">
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
