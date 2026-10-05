import React from "react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "./Home/HeroSection";
import StorySlideshow from "./StorySlideshow";
import ProcessVisual from "./ProcessVisuals";
import { ACTS, SLIDES, VisualId } from "../data/processStory";

const LABELS = {
  back: "Back",
  next: "Next",
  result: "Result",
  chapters: "Story chapters",
  carousel: "How we work",
};

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      {/* Fixed aurora — light mode only */}
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <StorySlideshow
          acts={ACTS}
          slides={SLIDES}
          labels={LABELS}
          renderVisual={(id) => <ProcessVisual id={id as VisualId} />}
        />

        {/* Explore solutions */}
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              Explore the practice
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/practice"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Our Practice →
              </Link>
              <Link
                to="/pillars/ai-workflow-systems"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Build: Workflow Systems →
              </Link>
              <Link
                to="/pillars/autonomous-agents"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Build: Autonomous Agents →
              </Link>
              <Link
                to="/pillars/ai-performance-monitoring"
                className="rounded-full border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wide text-[#0f1e35] dark:text-slate-100 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Test, Protect, Monitor, Prove →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-[#0f1e35] dark:text-slate-100">
                Ready to map a workflow?
              </h2>
              <p className="text-sm text-[#4a6a8a]">
                We'll scope one operational process and show you where AI can
                reduce manual work without increasing risk.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 rounded-full bg-blue-600 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
            >
              Start a conversation →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurProcess;
