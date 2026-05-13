import React from "react";
import { Language } from "../lib/i18n";
import CaseStudyCards from "./Home/CaseStudyCards";
import { AuroraBackground } from "./Home/HeroSection";

export default function AllProjects({ language }: { language: Language }) {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18]">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
            All projects
          </p>
          <h2 className="text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
            The full picture.
          </h2>
        </div>
        <CaseStudyCards language={language} showHeader={false} />
      </main>
    </div>
  );
}
