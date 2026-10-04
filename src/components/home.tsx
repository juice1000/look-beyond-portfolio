import React from "react";

import { Language } from "../lib/i18n";
import { getLandingPageContent } from "../data/landingPage";
import HeroSection, { AuroraBackground } from "./Home/HeroSection";
import ClosingSection from "./Home/ClosingSection";
import IndustryWorkflowTabs from "./Home/IndustryWorkflowTabs";
import TrustStrip from "./Home/TrustStrip";
import ValueRows from "./Home/ValueRows";
import Testimonial from "./Home/Testimonial";
import FaqSection from "./Home/FaqSection";
import NewsSection from "./Home/NewsSection";
import { clientLogos, testimonials } from "../data/credentials";
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
            title={content.hero.headline}
            subtitle={content.hero.subheadline}
            kpis={content.hero.kpis}
            isDarkMode={isDarkMode}
          />
        </section>
        <TrustStrip label={content.trust.label} logos={clientLogos} />
        <ValueRows
          content={content.outcomes}
          isDarkMode={isDarkMode}
          overlap={clientLogos.length === 0}
        />
        <Testimonial items={testimonials} />
        <CaseStudyCards language={language} showHeader={true} limit={2} compact />
        <NewsSection language={language} />
        <IndustryWorkflowTabs content={content.industries} isDarkMode={isDarkMode} />
        <FaqSection content={content.faq} language={language} />
        <ClosingSection language={language} finalCta={content.finalCta} />
      </main>
    </div>
  );
};

export default Home;
