import React from "react";
import { Language } from "../lib/i18n";
import CaseStudyCards from "./Home/CaseStudyCards";
import { AuroraBackground } from "./Home/HeroSection";

export default function Projects({ language }: { language: Language }) {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18]">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <CaseStudyCards language={language} showHeader={true} limit={3} />
      </main>
    </div>
  );
}
