import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LandingPageContent } from "../../data/landingPage";
import QualityWatchAnimation from "./QualityWatchAnimation";
import ReleaseGateAnimation from "./ReleaseGateAnimation";
import ScorecardAnimation from "./ScorecardAnimation";

interface ValueRowsProps {
  content: LandingPageContent["outcomes"];
  isDarkMode: boolean;
  // Pull the section up under the hero when there is no trust strip above it.
  overlap?: boolean;
}

const visualFor = (index: number) => {
  if (index === 0) return <QualityWatchAnimation />;
  if (index === 1) return <ReleaseGateAnimation />;
  return <ScorecardAnimation />;
};

const ValueRows = ({ content, isDarkMode, overlap = false }: ValueRowsProps) => {
  return (
    <section
      id="what-you-get"
      className={`border-b border-white/30 dark:border-[#0f1e35] pb-6 ${
        overlap ? "-mt-32 relative z-10 pt-16" : "pt-14"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <h2 className="mb-6 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {content.heading}
        </h2>
        <div className="mb-4 border-l-2 border-blue-500 py-1 pl-5">
          <p className="max-w-3xl text-lg font-semibold leading-7 text-[#0f1e35] dark:text-slate-100 md:text-xl md:leading-8">
            {content.callout.text}{" "}
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
              {content.callout.source}
            </span>
          </p>
        </div>

        <div className="divide-y divide-white/40 dark:divide-[#0f1e35]">
          {content.items.map((item, index) => (
            <div
              key={item.title}
              className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                  {String(index + 1).padStart(2, "0")} · {item.eyebrow}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mb-6 max-w-md text-base leading-7 text-slate-500 dark:text-[#4a6a8a]">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    to={item.primaryHref}
                    className="rounded-full bg-blue-600 px-5 py-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
                  >
                    {item.primaryLabel}
                  </Link>
                  <Link
                    to={item.secondaryHref}
                    className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-[#0f1e35] dark:text-slate-100 transition-colors hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    {item.secondaryLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {visualFor(index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueRows;
