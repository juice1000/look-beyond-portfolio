import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";

import ContactSection from "./Home/ContactSection";

// TODO: make this an About Us Page
export default function Contact() {
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

      <main className="pt-32 px-4">
        <div className="w-full mx-auto">
          <ContactSection
            language={language}
            contactInfo={{
              phone: "+65 8016 1267",
              email: "contact@lookbeyond.sg",
              address: "Midview City, Singapore",
            }}
          />
        </div>
      </main>
    </div>
  );
}
