import React from "react";
import { Link } from "react-router-dom";
import { LandingPageContent } from "../../data/landingPage";

interface WhatYouGetProps {
  content: LandingPageContent["outcomes"];
}

// Only the "stays within the rules" card links to the compliance page.
const ITEM_LINKS: Record<number, string> = { 1: "/compliance" };

const WhatYouGet = ({ content }: WhatYouGetProps) => {
  return (
    <section
      id="what-you-get"
      className="-mt-32 relative z-10 border-b border-white/30 dark:border-[#0f1e35] pb-14 pt-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <h2 className="mb-6 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
          {content.heading}
        </h2>

        <div className="mb-8 border-l-2 border-blue-500 py-1 pl-5">
          <p className="max-w-3xl text-sm text-slate-500 dark:text-[#4a6a8a]">
            {content.callout.text}{" "}
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
              {content.callout.source}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.items.map((item, index) => (
            <div
              key={item.title}
              className="relative flex min-h-48 flex-col overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                         dark:shadow-none
                         p-6"
            >
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-4 font-mono text-xs font-semibold text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-[#0f1e35] dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {item.description}
              </p>
              {ITEM_LINKS[index] && (
                <Link
                  to={ITEM_LINKS[index]}
                  className="mt-auto pt-4 text-sm font-medium text-blue-500 hover:underline"
                >
                  {item.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
          >
            {content.linkLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
