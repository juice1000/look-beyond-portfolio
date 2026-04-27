import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ImpactSectionProps { language: Language; }

const STATS = [
  { value: "30K+",  label: "People directly reached",     sub: "across all deployed solutions"           },
  { value: "1.5M+", label: "Hours saved",                  sub: "est. based on 20% productivity gain"    },
  { value: "€60M+", label: "In manual work value freed",   sub: "est. at €42/h blended rate"             },
  { value: "20%",   label: "Avg. productivity gain",       sub: "across client workflows"                 },
  { value: "~40%",  label: "Manual effort reduction",      sub: "on targeted document workflows"          },
  { value: "~65%",  label: "Error rate reduction",         sub: "on document-heavy processes"             },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImpactSection = (_props: ImpactSectionProps) => {
  return (
    <section id="proof" className="border-b border-[#0f1e35] bg-[#060b18]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#0f1e35] py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              Proof &amp; experience
            </p>
            <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
              Work we've shipped.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-blue-500/40 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500 transition-colors hover:bg-blue-500/10"
          >
            See our success stories →
          </Link>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 border-b border-[#0f1e35] md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-b border-r border-[#0f1e35] px-6 py-8 ${
                i % 2 === 1 ? "border-r-0 md:border-r" : ""
              } ${i % 3 === 2 ? "md:border-r-0 lg:border-r" : ""} ${
                i % 6 === 5 ? "lg:border-r-0" : ""
              }`}
            >
              <div className="mb-1 text-2xl font-bold text-blue-500 md:text-3xl">
                {stat.value}
              </div>
              <div className="mb-1 text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="font-mono text-[0.55rem] uppercase leading-4 tracking-widest text-[#2a4060]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Methodology note */}
        <div className="py-4">
          <p className="font-mono text-[0.55rem] uppercase tracking-widest text-[#1a3050]">
            Hours and value estimates based on 30K+ users × 20% productivity
            gain × ~1h/day on affected workflows × 250 working days × €42/h
            blended cost (German public sector reference rate).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
