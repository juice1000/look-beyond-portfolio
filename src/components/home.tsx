import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection from "./Home/HeroSection";
import CaseStudyCards from "./Home/CaseStudyCards";
import SolutionStack from "./Home/SolutionStack";
import HowWeWorkSection from "./Home/HowWeWorkSection";
import ClosingSection from "./Home/ClosingSection";
import IndustryWorkflowTabs from "./Home/IndustryWorkflowTabs";

const Home = ({ language }: { language: Language }) => {
  const content = getLandingPageContent(language);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-16">
        <section id="home">
          <HeroSection
            eyebrow={content.hero.eyebrow}
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            supportingLine={content.hero.supportingLine}
            ctaText={content.hero.primaryCta}
            pipeline={content.hero.pipeline}
            ticker={content.hero.ticker}
            kpis={content.kpis}
            onCtaClick={() => scrollTo("process")}
          />
        </section>
        <SolutionStack language={language} system={content.system} />
        <IndustryWorkflowTabs content={content.industries} />
        <HowWeWorkSection
          language={language}
          implementation={content.implementation}
        />
        <section id="proof">
          <CaseStudyCards language={language} />
        </section>
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
