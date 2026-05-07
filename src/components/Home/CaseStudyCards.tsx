import React from "react";
import { Link } from "react-router-dom";
import { t, Language } from "../../lib/i18n";

interface CaseStudyCardsProps {
  language: Language;
  showHeader?: boolean;
}

const STUDIES = [
  {
    id: "sprinkenhof",
    index: "01",
    client: "Sprinkenhof",
    industry: "Real Estate · Document Management",
    pillar: "Autonomous Agents",
    taglineKey: "caseStudies.sprinkenhof.tagline",
    descriptionKey: "caseStudies.sprinkenhof.description",
    stats: [
      { value: "1.5M+", label: "Documents in scope" },
      { value: "~40%", label: "Search time reduced" },
      { value: "30K+", label: "Users reached" },
    ],
    bullets: [
      "caseStudies.sprinkenhof.bullet1",
      "caseStudies.sprinkenhof.bullet2",
      "caseStudies.sprinkenhof.bullet3",
      "caseStudies.sprinkenhof.bullet4",
    ],
  },
  {
    id: "fgs",
    index: "02",
    client: "FGS Global",
    industry: "Communications · Enterprise AI",
    pillar: "AI Performance Monitoring",
    taglineKey: "caseStudies.fgs.tagline",
    descriptionKey: "caseStudies.fgs.description",
    stats: [
      { value: "~65%", label: "Error rate reduced" },
      { value: "Continuous", label: "Production monitoring" },
      { value: "Faster", label: "Regression detection" },
    ],
    bullets: [
      "caseStudies.fgs.bullet1",
      "caseStudies.fgs.bullet2",
      "caseStudies.fgs.bullet3",
      "caseStudies.fgs.bullet4",
    ],
  },
  {
    id: "sourcera",
    index: "03",
    client: "Sourcera",
    industry: "Procurement · Supplier Intelligence",
    pillar: "AI Workflow Systems",
    taglineKey: "caseStudies.sourcera.tagline",
    descriptionKey: "caseStudies.sourcera.description",
    stats: [
      { value: "20%", label: "Productivity gain" },
      { value: "~40%", label: "Manual effort reduced" },
      { value: "Scalable", label: "Repetitive task handling" },
    ],
    bullets: [
      "caseStudies.sourcera.bullet1",
      "caseStudies.sourcera.bullet2",
      "caseStudies.sourcera.bullet3",
      "caseStudies.sourcera.bullet4",
    ],
  },
];

const CaseStudyCards = ({ language, showHeader = true }: CaseStudyCardsProps) => {
  return (
    <section id="proof" className="border-b border-[#0f1e35] bg-[#060b18]">
      <div className="mx-auto max-w-7xl px-4">
        {showHeader && (
          <div className="flex flex-col gap-4 border-b border-[#0f1e35] py-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                Success stories
              </p>
              <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
                Work we've shipped.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
            >
              See all projects →
            </Link>
          </div>
        )}

        <div className="divide-y divide-[#0f1e35]">
          {STUDIES.map((study) => (
            <div key={study.id} className="py-10 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-12">
              {/* Left: meta */}
              <div className="mb-6 lg:mb-0">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-[#2a4060]">
                  {study.index}
                </p>
                <h3 className="mb-1 text-xl font-bold text-slate-100">
                  {study.client}
                </h3>
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-widest text-[#2a4060]">
                  {study.industry}
                </p>
                <span className="inline-block rounded-sm border border-blue-500/30 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-widest text-blue-500">
                  {study.pillar}
                </span>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-px border border-[#0f1e35] bg-[#0f1e35] lg:grid-cols-1 lg:gap-0 lg:border-0 lg:bg-transparent">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#060b18] px-3 py-3 lg:border-b lg:border-[#0f1e35] lg:px-0 lg:py-3"
                    >
                      <div className="text-lg font-bold text-blue-500 lg:text-xl">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[0.55rem] uppercase leading-4 tracking-widest text-[#2a4060]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: content */}
              <div>
                <p className="mb-4 text-base font-semibold leading-snug text-slate-100 sm:text-lg">
                  {t(study.taglineKey, language)}
                </p>
                <p className="mb-6 text-sm leading-7 text-[#4a6a8a]">
                  {t(study.descriptionKey, language)}
                </p>

                <div className="border-t border-[#0f1e35] pt-5">
                  <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-widest text-[#2a4060]">
                    What this enabled
                  </p>
                  <ul className="space-y-2">
                    {study.bullets.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                        <span className="text-sm leading-6 text-[#4a6a8a]">
                          {t(key, language)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCards;
