import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection, { AuroraBackground } from "./Home/HeroSection";
import SolutionStack from "./Home/SolutionStack";
import HowWeWorkSection from "./Home/HowWeWorkSection";
import ClosingSection from "./Home/ClosingSection";
import IndustryWorkflowTabs from "./Home/IndustryWorkflowTabs";
import ImpactSection from "./Home/ImpactSection";

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
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            supportingLine={content.hero.supportingLine}
            pipeline={content.hero.pipeline}
            ticker={content.hero.ticker}
            kpis={content.kpis}
            isDarkMode={isDarkMode}
          />
        </section>
        <SolutionStack language={language} system={content.system} />
        <IndustryWorkflowTabs content={content.industries} isDarkMode={isDarkMode} />
        <HowWeWorkSection
          language={language}
          implementation={content.implementation}
        />
        <ImpactSection />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
