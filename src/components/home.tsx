import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { t } from "../lib/i18n";
import HeroSection from "./Home/HeroSection";

import projectsData from "../data/projects.json";
import MapChart from "./Home/MapChart";
import AISection from "./Home/AISection";
import CaseStudyCards from "./Home/CaseStudyCards";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [colorBlindMode, setColorBlindMode] = useState<
    "none" | "protanopia" | "deuteranopia" | "tritanopia"
  >("none");
  const [language, setLanguage] = useState<"en" | "de">("en");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    document.documentElement.classList.toggle("dark", isDarkMode);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // TODO: This whole navbar toggling functionality doesn't need to sit here
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleColorBlindMode = (
    mode: "none" | "protanopia" | "deuteranopia" | "tritanopia",
  ) => {
    // Remove all color blind classes first
    document.documentElement.classList.remove(
      "protanopia",
      "deuteranopia",
      "tritanopia",
    );
    setColorBlindMode(mode);
    if (mode !== "none") {
      document.documentElement.classList.add(mode);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        onThemeToggle={toggleTheme}
        isDarkMode={isDarkMode}
        onColorBlindToggle={handleColorBlindMode}
        colorBlindMode={colorBlindMode}
        language={language}
        onLanguageChange={setLanguage}
      />

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
          <MapChart isDarkMode={isDarkMode} language={language} />
        </section>
      </main>
    </div>
  );
};

export default Home;
