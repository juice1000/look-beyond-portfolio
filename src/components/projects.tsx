import React from "react";
import { Language } from "../lib/i18n";
import CaseStudyCards from "./Home/CaseStudyCards";

export default function Projects({ language }: { language: Language }) {
  return (
    <div className="min-h-screen bg-[#060b18]">
      <main className="pt-16">
        <CaseStudyCards language={language} showHeader={true} />
      </main>
    </div>
  );
}
