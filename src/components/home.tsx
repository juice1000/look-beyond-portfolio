import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection from "./Home/HeroSection";
import SolutionStack from "./Home/SolutionStack";
import HowWeWorkSection from "./Home/HowWeWorkSection";
import ClosingSection from "./Home/ClosingSection";
import IndustryWorkflowTabs from "./Home/IndustryWorkflowTabs";
import ImpactSection from "./Home/ImpactSection";

const Home = ({ language }: { language: Language }) => {
  const content = getLandingPageContent(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-16">
        <section id="home">
          <HeroSection
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            supportingLine={content.hero.supportingLine}
            pipeline={content.hero.pipeline}
            ticker={content.hero.ticker}
            kpis={content.kpis}
          />
        </section>
        <SolutionStack language={language} system={content.system} />
        <IndustryWorkflowTabs content={content.industries} />
        <HowWeWorkSection
          language={language}
          implementation={content.implementation}
        />
        <ImpactSection language={language} />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
