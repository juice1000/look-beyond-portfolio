import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Language } from "./lib/i18n";

import Calendar from "./components/calendar";
import VoiceAgent from "./components/voiceagent";
import AIReadiness from "./components/AIReadiness";
import OurProcess from "./components/OurProcess";
import PricingEngagement from "./components/PricingEngagement";
import Workshops from "./components/Workshops";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";

import routes from "tempo-routes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [colorBlindMode, setColorBlindMode] = useState<
    "none" | "protanopia" | "deuteranopia" | "tritanopia"
  >("none");
  const [language, setLanguage] = useState<Language>("en");

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
      console.log(`Applied ${mode} mode to document.documentElement`);
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
          onLanguageChange={setLanguage}
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
