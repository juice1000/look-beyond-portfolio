import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import { AuroraBackground } from "./Home/HeroSection";
import FailureModes from "./Home/FailureModes";
import SolutionStack from "./Home/SolutionStack";
import ScorecardSection from "./Home/ScorecardSection";
import ClosingSection from "./Home/ClosingSection";

const Practice = ({ language }: { language: Language }) => {
  const content = getLandingPageContent(language);

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#2a4060] transition-colors hover:text-blue-500"
            >
              ← {language === "de" ? "Zurück" : "Back"}
            </Link>
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              {content.practice.eyebrow}
            </p>
            <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-5xl">
              {content.practice.heading}
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              {content.practice.description}
            </p>
          </div>
        </section>
        <FailureModes content={content.failures} />
        <SolutionStack language={language} system={content.system} />
        <ScorecardSection content={content.scorecard} />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Practice;
