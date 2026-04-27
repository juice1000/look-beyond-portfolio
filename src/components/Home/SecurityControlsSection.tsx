import React from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import { LandingPageContent } from "../../data/landingPage";

interface SecurityControlsSectionProps {
  content: LandingPageContent["security"];
}

const SecurityControlsSection = ({ content }: SecurityControlsSectionProps) => {
  return (
    <section id="security" className="bg-[#060b18] py-16 text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
              {content.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {content.heading}
            </h2>
            <p className="text-lg text-[#4a6a8a]">{content.description}</p>
            <div className="mt-8 rounded-lg border border-blue-500/30 bg-blue-500/10 p-5">
              <div className="flex items-center gap-3 text-blue-200">
                <LockKeyhole className="h-5 w-5" />
                <p className="font-semibold">Control layer first</p>
              </div>
              <p className="mt-3 text-sm text-[#bfd0e3]">
                Agent behavior, retrieval, review, logging, and escalation are
                treated as system requirements, not post-launch cleanup.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.controls.map((control) => (
              <div
                key={control}
                className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-5"
              >
                <ShieldCheck className="mb-4 h-5 w-5 text-blue-500" />
                <h3 className="text-base font-semibold text-slate-100">
                  {control}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityControlsSection;
