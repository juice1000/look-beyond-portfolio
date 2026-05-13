import React from "react";
import { Link } from "react-router-dom";
import { t, Language } from "../../lib/i18n";

interface CaseStudyCardsProps {
  language: Language;
  showHeader?: boolean;
  limit?: number;
}

const STUDIES = [
  {
    id: "strict",
    index: "01",
    client: "Strict",
    industry: "Manufacturing · AI-First ERP Transformation",
    pillar: "AI Workflow Systems",
    taglineKey: "caseStudies.strict.tagline",
    descriptionKey: "caseStudies.strict.description",
    stats: [
      { value: "2h+", label: "Freed per person daily" },
      { value: "15+ Years", label: "Historical data migrated" },
      { value: "AI-first", label: "On ERP backbone" },
    ],
    bullets: [
      "caseStudies.strict.bullet1",
      "caseStudies.strict.bullet2",
      "caseStudies.strict.bullet3",
      "caseStudies.strict.bullet4",
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
  {
    id: "sprinkenhof",
    index: "04",
    client: "Hamburg Real Estate Co.",
    industry: "Commercial Real Estate & Property Management · Hamburg",
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
    id: "expresssteuer",
    index: "05",
    client: "Expresssteuer",
    industry: "Tax Services · Data & AI Engineering",
    pillar: "AI Workflow Systems",
    taglineKey: "caseStudies.expresssteuer.tagline",
    descriptionKey: "caseStudies.expresssteuer.description",
    stats: [
      { value: ">90%", label: "Database cost reduction" },
      { value: "~70%", label: "Operational cost savings" },
      { value: "2", label: "AI solutions deployed" },
    ],
    bullets: [
      "caseStudies.expresssteuer.bullet1",
      "caseStudies.expresssteuer.bullet2",
      "caseStudies.expresssteuer.bullet3",
      "caseStudies.expresssteuer.bullet4",
    ],
  },
  {
    id: "fullcircle",
    index: "06",
    client: "Full-Circle Family",
    industry: "Family Tech · AI Product",
    pillar: "Autonomous Agents",
    taglineKey: "caseStudies.fullcircle.tagline",
    descriptionKey: "caseStudies.fullcircle.description",
    stats: [
      { value: "Fine-tuned", label: "LLM for domain accuracy" },
      { value: "WhatsApp", label: "Direct user channel" },
      { value: "AWS", label: "Scalable microservices" },
    ],
    bullets: [
      "caseStudies.fullcircle.bullet1",
      "caseStudies.fullcircle.bullet2",
      "caseStudies.fullcircle.bullet3",
      "caseStudies.fullcircle.bullet4",
    ],
  },
  {
    id: "rcycle",
    index: "07",
    client: "R-Cycle",
    industry: "Sustainability · Industrial Data Compliance",
    pillar: "AI Workflow Systems",
    taglineKey: "caseStudies.rcycle.tagline",
    descriptionKey: "caseStudies.rcycle.description",
    stats: [
      { value: "Multi-site", label: "Manufacturer tracking" },
      { value: "GCP", label: "Cloud-native data layer" },
      { value: "Compliant", label: "Government mandate alignment" },
    ],
    bullets: [
      "caseStudies.rcycle.bullet1",
      "caseStudies.rcycle.bullet2",
      "caseStudies.rcycle.bullet3",
      "caseStudies.rcycle.bullet4",
    ],
  },
  {
    id: "cinoware",
    index: "08",
    client: "Cinoware",
    industry: "Critical Infrastructure · Government Tech",
    pillar: "AI Performance Monitoring",
    taglineKey: "caseStudies.cinoware.tagline",
    descriptionKey: "caseStudies.cinoware.description",
    stats: [
      { value: "OpenCV", label: "Navigation tracking" },
      { value: "MLflow", label: "Pipeline performance" },
      { value: "Selenium", label: "Automated test coverage" },
    ],
    bullets: [
      "caseStudies.cinoware.bullet1",
      "caseStudies.cinoware.bullet2",
      "caseStudies.cinoware.bullet3",
      "caseStudies.cinoware.bullet4",
    ],
  },
  {
    id: "samgen",
    index: "09",
    client: "SAMGEN",
    industry: "Industrial SaaS · Cloud Infrastructure",
    pillar: "AI Performance Monitoring",
    taglineKey: "caseStudies.samgen.tagline",
    descriptionKey: "caseStudies.samgen.description",
    stats: [
      { value: "GCP", label: "Cloud platform" },
      { value: "Automated", label: "Model retraining" },
      { value: "CI/CD", label: "Streamlined deployment" },
    ],
    bullets: [
      "caseStudies.samgen.bullet1",
      "caseStudies.samgen.bullet2",
      "caseStudies.samgen.bullet3",
      "caseStudies.samgen.bullet4",
    ],
  },
  {
    id: "applai",
    index: "10",
    client: "Applai",
    industry: "HR Tech · Agentic Workflow",
    pillar: "Autonomous Agents",
    taglineKey: "caseStudies.applai.tagline",
    descriptionKey: "caseStudies.applai.description",
    stats: [
      { value: "LangGraph", label: "Agentic orchestration" },
      { value: "Multi-LLM", label: "Cover letter quality" },
      { value: "LangSmith", label: "Evaluation pipeline" },
    ],
    bullets: [
      "caseStudies.applai.bullet1",
      "caseStudies.applai.bullet2",
      "caseStudies.applai.bullet3",
      "caseStudies.applai.bullet4",
    ],
  },
  {
    id: "kunveno",
    index: "11",
    client: "kunveno",
    industry: "Enterprise SaaS · Microsoft 365",
    pillar: "AI Workflow Systems",
    taglineKey: "caseStudies.kunveno.tagline",
    descriptionKey: "caseStudies.kunveno.description",
    stats: [
      { value: "270M+", label: "Teams users reached" },
      { value: "Azure", label: "Cloud architecture" },
      { value: "OAuth", label: "Org-wide authentication" },
    ],
    bullets: [
      "caseStudies.kunveno.bullet1",
      "caseStudies.kunveno.bullet2",
      "caseStudies.kunveno.bullet3",
      "caseStudies.kunveno.bullet4",
    ],
  },
];

const CaseStudyCards = ({ language, showHeader = true, limit }: CaseStudyCardsProps) => {
  const studies = limit !== undefined ? STUDIES.slice(0, limit) : STUDIES;
  return (
    <section id="proof" className="border-b border-white/30 dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18]">
      <div className="mx-auto max-w-7xl px-4">
        {showHeader && (
          <div className="flex flex-col gap-4 border-b border-white/30 dark:border-[#0f1e35] py-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                Success stories
              </p>
              <h2 className="text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
                Work we've shipped.
              </h2>
            </div>
            <Link
              to="/projects/all"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
            >
              See all projects →
            </Link>
          </div>
        )}

        <div className="divide-y divide-white/30 dark:divide-[#0f1e35]">
          {studies.map((study) => (
            <div key={study.id} className="py-10 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-12">
              {/* Left: meta */}
              <div className="mb-6 lg:mb-0">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
                  {study.index}
                </p>
                <h3 className="mb-1 text-xl font-bold text-[#0f1e35] dark:text-slate-100">
                  {study.client}
                </h3>
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
                  {study.industry}
                </p>
                <span className="inline-block rounded-sm border border-blue-500/30 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-widest text-blue-500">
                  {study.pillar}
                </span>

                {/* Stats — glass chips */}
                <div className="mt-6 grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative overflow-hidden rounded-xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none px-3 py-3"
                    >
                      <div className="pointer-events-none absolute -top-4 -right-4 h-12 w-12 rounded-full bg-white/60 blur-xl dark:hidden" />
                      <div className="text-lg font-bold text-blue-500 lg:text-xl">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[0.55rem] uppercase leading-4 tracking-widest text-slate-400 dark:text-[#2a4060]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: content */}
              <div>
                <p className="mb-4 text-base font-semibold leading-snug text-[#0f1e35] dark:text-slate-100 sm:text-lg">
                  {t(study.taglineKey, language)}
                </p>
                <p className="mb-6 text-sm leading-7 text-[#4a6a8a]">
                  {t(study.descriptionKey, language)}
                </p>

                <div className="border-t border-white/30 dark:border-[#0f1e35] pt-5">
                  <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
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
