import React, { useState, useEffect } from "react";
import { t, Language } from "../lib/i18n";
import Navbar from "./Home/Navbar";

interface OurProcessProps {
  language?: Language;
}

const OurProcess = ({ language = "en" }: OurProcessProps) => {
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
            {t("ourProcess.title", language)}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("ourProcess.step1.title", language)}
                </h2>
                <p className="text-lg mb-4">
                  {t("ourProcess.step1.description", language)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("ourProcess.step2.title", language)}
                </h2>
                <p className="text-lg mb-4">
                  {t("ourProcess.step2.description", language)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("ourProcess.step3.title", language)}
                </h2>
                <p className="text-lg mb-4">
                  {t("ourProcess.step3.description", language)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("ourProcess.step4.title", language)}
                </h2>
                <p className="text-lg mb-4">
                  {t("ourProcess.step4.description", language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurProcess;
