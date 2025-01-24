import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { t } from "../lib/i18n";
import ProjectShowcase from "./Home/ProjectShowcase";
import projectsData from "../data/projects.json";

export default function Projects() {
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

      <main className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("projects.title", language)}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("projects.subtitle", language)}
            </p>
          </div>

          <ProjectShowcase
            projects={projectsData.projects}
            language={language}
          />
        </div>
      </main>
    </div>
  );
}
