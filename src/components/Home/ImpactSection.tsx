import React from "react";
import { Link } from "react-router-dom";

const STATS = [
  { value: "30K+",  label: "People directly reached",     sub: "across all deployed solutions"           },
  { value: "1.5M+", label: "Hours saved",                  sub: "est. based on 20% productivity gain"    },
  { value: "€60M+", label: "In manual work value freed",   sub: "est. at €42/h blended rate"             },
  { value: "20%",   label: "Avg. productivity gain",       sub: "across client workflows"                 },
  { value: "~40%",  label: "Manual effort reduction",      sub: "on targeted document workflows"          },
  { value: "~65%",  label: "Error rate reduction",         sub: "on document-heavy processes"             },
];

const ImpactSection = () => {
  return (
    <section id="proof" className="border-b border-white/30 dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/30 dark:border-[#0f1e35] py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-blue-500">
              Proof &amp; experience
            </p>
            <h2 className="text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
              Work we've shipped.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
          >
            See our success stories →
          </Link>
        </div>

        {/* Stats grid — liquid glass cards */}
        <div className="grid grid-cols-2 gap-3 py-6 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_12px_32px_rgba(0,0,0,0.06)]
                         dark:shadow-none
                         transition-transform duration-200 hover:-translate-y-1
                         px-5 py-6"
            >
              <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <div className="mb-1 text-2xl font-bold text-blue-500 md:text-3xl">
                {stat.value}
              </div>
              <div className="mb-1 text-xs font-semibold text-[#0f1e35] dark:text-slate-100">
                {stat.label}
              </div>
              <div className="font-mono text-[0.65rem] uppercase leading-4 tracking-widest text-slate-500 dark:text-[#4a6a8a]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Methodology note */}
        <div className="pb-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
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
