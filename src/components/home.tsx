import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { t } from "../lib/i18n";
import HeroSection from "./Home/HeroSection";
import ProjectShowcase from "./Home/ProjectShowcase";
import ContactSection from "./Home/ContactSection";
import { Button } from "./ui/button";
import projectsData from "../data/projects.json";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
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
    mode: "none" | "protanopia" | "deuteranopia" | "tritanopia"
  ) => {
    // Remove all color blind classes first
    document.documentElement.classList.remove(
      "protanopia",
      "deuteranopia",
      "tritanopia"
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

        <section id="projects" className="py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("projects.title", language)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("projects.subtitle", language)}
            </p>
          </div>
          {/* TODO: Make this a solutions showcase */}
          <ProjectShowcase language={language} />
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => (document.location.href = "/projects")}
              className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("projects.viewMore", language)}
            </Button>
          </div>
        </section>

        <section id="contact">
          <ContactSection
            language={language}
            contactInfo={{
              phone: "+65 8016 1267",
              email: "contact@lookbeyond.sg",
              address: "Midview City, Singapore",
            }}
            onSubmit={(data) => {
              console.log("Form submitted:", Object.fromEntries(data));
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
