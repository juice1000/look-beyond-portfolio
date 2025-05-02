import React, { useState, useEffect } from "react";
import { Language } from "../lib/i18n";
import ContactSection from "./Home/ContactSection";

// TODO: make this an About Us Page
export default function Contact({ language = "en" }: { language?: Language }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
