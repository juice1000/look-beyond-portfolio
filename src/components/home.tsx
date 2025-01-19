import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectShowcase from "./ProjectShowcase";
import ContactSection from "./ContactSection";
import projectsData from "../data/projects.json";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              phone: "+65 0161 267",
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
