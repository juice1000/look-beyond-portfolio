import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { t } from "../lib/i18n";
import ProjectShowcase from "./Home/ProjectShowcase";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-32 px-4">
        <div className="w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("projects.title", language)}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("projects.subtitle", language)}
            </p>
          </div>

          <ProjectShowcase language={language} />
        </div>
      </main>
    </div>
  );
}
