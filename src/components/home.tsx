import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import HeroSection from "./Home/HeroSection";
import ProjectShowcase from "./Home/ProjectShowcase";
import ContactSection from "./Home/ContactSection";
import projectsData from "../data/projects.json";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

      <main className="pt-20">
        <section id="home">
          <HeroSection
            title="Build Smart, Lead Change."
            subtitle="We go beyond just building products..."
            services={["We Idiate", "We Ship", "We Scale", "We Empower"]}
            ctaText="See how we do it"
            onCtaClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </section>

        <section id="projects">
          <ProjectShowcase projects={projectsData.projects} />
        </section>

        <section id="contact">
          <ContactSection
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
