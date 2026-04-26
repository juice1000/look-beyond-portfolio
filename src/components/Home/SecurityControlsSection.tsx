import React from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import { LandingPageContent } from "../../data/landingPage";

interface SecurityControlsSectionProps {
  content: LandingPageContent["security"];
}

const SecurityControlsSection = ({ content }: SecurityControlsSectionProps) => {
  return (
    <section id="security" className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-300 font-semibold mb-3">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.heading}
            </h2>
            <p className="text-lg text-gray-300">{content.description}</p>
            <div className="mt-8 rounded-lg border border-blue-500/30 bg-blue-500/10 p-5">
              <div className="flex items-center gap-3 text-blue-200">
                <LockKeyhole className="h-5 w-5" />
                <p className="font-semibold">Control layer first</p>
              </div>
              <p className="mt-3 text-sm text-gray-300">
                Agent behavior, retrieval, review, logging, and escalation are
                treated as system requirements, not post-launch cleanup.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.controls.map((control) => (
              <div
                key={control}
                className="rounded-lg border border-gray-800 bg-gray-900 p-5"
              >
                <ShieldCheck className="h-5 w-5 text-blue-300 mb-4" />
                <h3 className="text-base font-semibold text-white">
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
