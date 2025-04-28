import React from "react";
import { t, Language } from "../lib/i18n";
import ProjectShowcase from "./Home/ProjectShowcase";

interface OurProjectsProps {
  language?: Language;
}

const OurProjects = ({ language = "en" }: OurProjectsProps) => {
  return (
    <div className="container mx-auto px-4 py-24 mt-28">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {t("ourProjects.title", language)}
      </h1>
      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-center mb-12">
          {t("ourProjects.description", language)}
        </p>

        {/* Reuse the existing ProjectShowcase component */}
        <ProjectShowcase language={language} />
      </div>
    </div>
  );
};

export default OurProjects;
