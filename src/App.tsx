import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Language } from "./lib/i18n";
import {
  fetchRowById,
  triggerEmailAutomation,
} from "./scripts/triggerEmailAutomation";

import Calendar from "./components/calendar";
import VoiceAgent from "./components/voiceagent";
import AIReadiness from "./components/AIReadiness";
import OurProcess from "./components/OurProcess";
import PricingEngagement from "./components/PricingEngagement";
import Workshops from "./components/Workshops";
import Imprint from "./components/Imprint";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";

import routes from "tempo-routes";

function App() {
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [colorBlindMode, setColorBlindMode] = useState<
    "none" | "protanopia" | "deuteranopia" | "tritanopia"
  >(() => {
    const savedMode = localStorage.getItem("colorBlindMode") as
      | "none"
      | "protanopia"
      | "deuteranopia"
      | "tritanopia";
    return savedMode || "none";
  });

  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) return savedLanguage;

    const browserLang = navigator.language.toLowerCase();
    const defaultLanguage = browserLang.startsWith("de") ? "de" : "en";
    return defaultLanguage;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    document.documentElement.classList.toggle("dark", isDarkMode);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDarkMode]);

  // Apply color blind mode on initial load
  useEffect(() => {
    if (colorBlindMode !== "none") {
      document.documentElement.classList.add(colorBlindMode);
    }
  }, []);

  useEffect(() => {
    fetchRowById().then((data) => {
      if (!data) {
        console.error("No data found");
        return;
      }
      // Process the fetched data as needed
      triggerEmailAutomation(data.last_triggered);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme ? "dark" : "light");
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
    localStorage.setItem("colorBlindMode", mode);

    if (mode !== "none") {
      document.documentElement.classList.add(mode);
    }
  };

  return (
    <Suspense fallback={<span className="loader"></span>}>
      <>
        <Navbar
          onThemeToggle={toggleTheme}
          isDarkMode={isDarkMode}
          onColorBlindToggle={handleColorBlindMode}
          colorBlindMode={colorBlindMode}
          language={language}
          onLanguageChange={handleLanguageChange} // Updated to use new handler
        />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/ai-readiness"
            element={<AIReadiness language={language} />}
          />
          <Route
            path="/our-process"
            element={<OurProcess language={language} />}
          />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route
            path="/pricing-engagement"
            element={<PricingEngagement language={language} />}
          />
          <Route
            path="/workshops"
            element={<Workshops language={language} />}
          />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/imprint" element={<Imprint language={language} />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy language={language} />}
          />
          <Route
            path="/terms-of-use"
            element={<TermsOfUse language={language} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Calendar />
        {import.meta.env.VITE_TEMPO !== "true" && <VoiceAgent />}
        <Footer language={language} />
      </>
    </Suspense>
  );
}

export default App;
