import React, { useState, useEffect } from "react";
import { Language, t } from "../lib/i18n";
import ContactSection from "./Home/ContactSection";

// TODO: make this an About Us Page
export default function Contact({ language = "en" }: { language?: Language }) {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
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
