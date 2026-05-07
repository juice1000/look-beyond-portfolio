import React, { useState, useEffect } from "react";
import { Language, t } from "../lib/i18n";
import ContactSection from "./Home/ContactSection";
import { AuroraBackground } from "./Home/HeroSection";

// TODO: make this an About Us Page
export default function Contact({ language = "en" }: { language?: Language }) {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      {/* Fixed aurora — light mode only */}
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-32 px-4">
        <div className="w-full mx-auto">
          <ContactSection
            language={language}
            contactInfo={{
              phone: t("phone", language),
              email: "contact@lookbeyond.sg",
            }}
          />
        </div>
      </main>
    </div>
  );
}
