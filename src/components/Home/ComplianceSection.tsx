import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";

const FRAMEWORKS = [
  { label: "EU AI Act", note: "Risk classification & documentation" },
  { label: "GDPR / DSGVO", note: "Privacy by design, DPA included" },
  { label: "OWASP LLM Top 10", note: "Prompt injection, data leakage & more" },
  { label: "NIST AI RMF", note: "Govern, Map, Measure, Manage" },
  { label: "Secure SDLC", note: "Security embedded at every stage" },
];

interface ComplianceSectionProps {
  language?: Language;
}

const ComplianceSection = ({ language = "en" }: ComplianceSectionProps) => {
  const isDE = language === "de";

  return (
    <section
      id="compliance"
      className="border-b border-white/30 dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18] px-4 py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-blue-500">
              {isDE ? "Compliance & Sicherheit" : "Compliance & Security"}
            </p>
            <h2 className="text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
              {isDE
                ? "Compliance ist keine Checkbox."
                : "Compliance isn't a checkbox."}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
              {isDE
                ? "Jedes System das wir liefern ist von Anfang an auf Sicherheit, Transparenz und regulatorische Anforderungen ausgelegt. Falls Ihre Pflichten unter dem EU AI Act oder der DSGVO noch unklar sind, klären wir sie gemeinsam mit Ihnen."
                : "Every system we deliver is designed with security, transparency, and regulatory requirements built in from the start. If your obligations under the EU AI Act or GDPR aren't fully clear yet, we work through them with you as part of the project."}
            </p>
          </div>
          <Link
            to="/compliance"
            className="flex-shrink-0 self-start sm:self-auto rounded-sm border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#0f1e35] dark:text-slate-100 transition-colors hover:text-blue-600 dark:hover:text-blue-300"
          >
            {isDE ? "Vollständige Details →" : "Full details →"}
          </Link>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.label}
              className="relative overflow-hidden rounded-2xl
                         border border-white/60 dark:border-[#0f1e35]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-[#08101f]/80
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_12px_32px_rgba(0,0,0,0.06)]
                         dark:shadow-none
                         px-5 py-5"
            >
              <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-1 text-sm font-semibold text-[#0f1e35] dark:text-slate-100">
                {fw.label}
              </p>
              <p className="font-mono text-[0.6rem] uppercase leading-4 tracking-widest text-slate-500 dark:text-[#4a6a8a]">
                {fw.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
