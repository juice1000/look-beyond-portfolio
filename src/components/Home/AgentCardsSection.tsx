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
    <section id="agents" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-3">
          {content.eyebrow}
        </p>
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.heading}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item}
                className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
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
