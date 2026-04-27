import React from "react";
import {
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Handshake,
  MessageSquareText,
  Radar,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

import { LandingPageContent } from "../../data/landingPage";

interface AgentCardsSectionProps {
  content: LandingPageContent["agents"];
}

const icons = [
  FileSearch,
  GitBranch,
  ScrollText,
  MessageSquareText,
  Radar,
  ClipboardCheck,
  ShieldCheck,
  Handshake,
];

const AgentCardsSection = ({ content }: AgentCardsSectionProps) => {
  return (
    <section id="agents" className="bg-[#060b18] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
          {content.eyebrow}
        </p>
        <div className="max-w-4xl mb-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-100 md:text-4xl">
            {content.heading}
          </h2>
          <p className="text-lg text-[#4a6a8a]">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item}
                className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-100">
                  {item}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentCardsSection;
