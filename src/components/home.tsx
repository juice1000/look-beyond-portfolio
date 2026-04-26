import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection from "./Home/HeroSection";
import CaseStudyCards from "./Home/CaseStudyCards";
import ProblemAreas from "./Home/ProblemAreas";
import SolutionStack from "./Home/SolutionStack";
import HowWeWorkSection from "./Home/HowWeWorkSection";
import ClosingSection from "./Home/ClosingSection";
import IndustryWorkflowTabs from "./Home/IndustryWorkflowTabs";
import AgentCardsSection from "./Home/AgentCardsSection";
import SecurityControlsSection from "./Home/SecurityControlsSection";

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
      <main className="pt-28">
        <section id="home">
          <HeroSection
            eyebrow={content.hero.eyebrow}
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            supportingLine={content.hero.supportingLine}
            ctaText={content.hero.primaryCta}
            secondaryCtaText={content.hero.secondaryCta}
            pipeline={content.hero.pipeline}
            onCtaClick={() => {
              window.location.href = "/contact";
            }}
            onSecondaryCtaClick={() => scrollTo("industries")}
          />
        </section>
        <ProblemAreas language={language} problems={content.problems} />
        <SolutionStack language={language} system={content.system} />
        <IndustryWorkflowTabs content={content.industries} />
        <AgentCardsSection content={content.agents} />
        <SecurityControlsSection content={content.security} />
        <section id="proof">
          <CaseStudyCards language={language} />
        </section>
        <HowWeWorkSection
          language={language}
          implementation={content.implementation}
        />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
