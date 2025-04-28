import React, { useState, useEffect } from "react";
import { t, Language } from "../lib/i18n";
import Navbar from "./Home/Navbar";

interface AIReadinessProps {
  language?: Language;
}

const AIReadiness = ({ language = "en" }: AIReadinessProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [colorBlindMode, setColorBlindMode] = useState<
    "none" | "protanopia" | "deuteranopia" | "tritanopia"
  >("none");

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
        onLanguageChange={(lang) => {}}
      />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("aiReadiness.title", language)}
          </h1>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              {t("aiReadiness.description", language)}
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section1.title", language)}
                </h2>
                <p>{t("aiReadiness.section1.content", language)}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section2.title", language)}
                </h2>
                <p>{t("aiReadiness.section2.content", language)}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section3.title", language)}
                </h2>
                <p>{t("aiReadiness.section3.content", language)}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIReadiness;
