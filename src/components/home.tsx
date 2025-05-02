import React, { useState, useEffect } from "react";

import { t, Language } from "../lib/i18n";
import HeroSection from "./Home/HeroSection";

import projectsData from "../data/projects.json";
import MapChart from "./Home/MapChart";
import AISection from "./Home/AISection";
import CaseStudyCards from "./Home/CaseStudyCards";

const Home = ({ language }: Language) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20">
        <section id="home">
          <HeroSection
            title={t("hero.title", language)}
            subtitle={t("hero.subtitle", language)}
            services={[
              t("hero.service.1", language),
              t("hero.service.2", language),
              t("hero.service.3", language),
              t("hero.service.4", language),
            ]}
            ctaText={t("hero.cta", language)}
            onCtaClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </section>
        <section id="ai-solutions">
          <AISection
            tagline={
              t("ai.tagline", language) || "Empowering businesses with AI."
            }
            subTagline={
              t("ai.subTagline", language) ||
              "From content to customers, we turn bottlenecks into growth loops."
            }
            kpis={[
              {
                value: "5x",
                label: t("ai.kpi.1", language) || "more content shipped",
              },
              {
                value: "-30%",
                label: t("ai.kpi.2", language) || "cost per lead",
              },
              {
                value: "85%",
                label: t("ai.kpi.3", language) || "tickets auto-resolved",
              },
            ]}
            language={language}
          />
        </section>
        <section id="case-studies">
          <CaseStudyCards
            title={t("caseStudies.title", language)}
            subtitle={t("caseStudies.subtitle", language)}
            cards={[
              {
                title: t("caseStudies.marketing.title", language),
                painPoint: t("caseStudies.marketing.painPoint", language),
                kpi: t("caseStudies.marketing.kpi", language),
                ctaText: t("caseStudies.cta", language),
              },
              {
                title: t("caseStudies.sales.title", language),
                painPoint: t("caseStudies.sales.painPoint", language),
                kpi: t("caseStudies.sales.kpi", language),
                ctaText: t("caseStudies.cta", language),
              },
              {
                title: t("caseStudies.operations.title", language),
                painPoint: t("caseStudies.operations.painPoint", language),
                kpi: t("caseStudies.operations.kpi", language),
                ctaText: t("caseStudies.cta", language),
              },
            ]}
            language={language}
          />
        </section>
        <section id="map">
          <MapChart language={language} />
        </section>
      </main>
    </div>
  );
};

export default Home;
