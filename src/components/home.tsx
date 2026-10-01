import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection, { AuroraBackground } from "./Home/HeroSection";
import ClosingSection from "./Home/ClosingSection";
import IndustriesStrip from "./Home/IndustriesStrip";
import WhatYouGet from "./Home/WhatYouGet";
import CaseStudyCards from "./Home/CaseStudyCards";

const Home = ({
  language,
  isDarkMode,
}: {
  language: Language;
  isDarkMode: boolean;
}) => {
  const content = getLandingPageContent(language);

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100 overflow-x-hidden">
      {/* Fixed aurora covers the full page in light mode */}
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <section id="home">
          <HeroSection
            eyebrow={content.hero.eyebrow}
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            lifecycle={content.hero.lifecycle}
            isDarkMode={isDarkMode}
          />
        </section>
        <WhatYouGet content={content.outcomes} />
        <CaseStudyCards language={language} showHeader={true} limit={2} compact />
        <IndustriesStrip content={content.industries} />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
