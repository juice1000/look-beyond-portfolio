import React from "react";
import { CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";
import { AuroraBackground } from "./Home/HeroSection";
import { PRICING, startingAt, formalOfferNote } from "../data/pricing";

interface PricingEngagementProps {
  language?: Language;
}

const GLASS =
  "relative overflow-hidden rounded-2xl border bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none";


const PricingEngagement = ({ language = "en" }: PricingEngagementProps) => {
  const tiers = [
    {
      title: t("pricingEngagement.tiers.free.title", language),
      price: t("pricingEngagement.tiers.free.price", language),
      description: t("pricingEngagement.tiers.free.description", language),
      highlight: true,
      items: [
        t("pricingEngagement.tiers.free.item1", language),
        t("pricingEngagement.tiers.free.item2", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.workshop.title", language),
      price: startingAt(PRICING.workshop.fromEur, language),
      description: t("pricingEngagement.tiers.workshop.description", language),
      highlight: false,
      items: [
        t("pricingEngagement.tiers.workshop.item1", language),
        t("pricingEngagement.tiers.workshop.item2", language),
        t("pricingEngagement.tiers.workshop.item3", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.poc.title", language),
      price: startingAt(PRICING.poc.fromEur, language),
      description: t("pricingEngagement.tiers.poc.description", language),
      highlight: false,
      items: [
        t("pricingEngagement.tiers.poc.item1", language),
        t("pricingEngagement.tiers.poc.item2", language),
        t("pricingEngagement.tiers.poc.item3", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.retainer.title", language),
      price: t("pricingEngagement.tiers.retainer.price", language),
      description: t("pricingEngagement.tiers.retainer.description", language),
      highlight: false,
      items: [
        t("pricingEngagement.tiers.retainer.item1", language),
        t("pricingEngagement.tiers.retainer.item2", language),
        t("pricingEngagement.tiers.retainer.item3", language),
      ],
    },
  ];

  const isDE = language === "de";

  const capabilities = isDE
    ? {
        eyebrow: "Was wir betreiben",
        heading: "Von der Entwicklung bis zum Nachweis des Ertrags.",
        description:
          "Wir bauen Agenten und betreiben die Schicht, die sie zuverlässig hält: Tests, Compliance-Prüfungen, Monitoring und Reporting. Auch für Agenten, die andere Teams gebaut haben.",
        items: [
          {
            label: "Agenten & Workflow-Systeme bauen",
            description:
              "Spezialisierte Agenten, eingebettet in Ihre Systeme und auf einem Datenfundament, das sie trägt. Wo Standard-Software nicht passt, bauen wir die Plattform nach Ihren Prozessen.",
          },
          {
            label: "Testen und absichern",
            description:
              "Testsets aus echten Fällen, Sicherheits-, Datenschutz- und Compliance-Prüfungen bei jedem Release. Kritische Fehlschläge stoppen das Release.",
          },
          {
            label: "Überwachen und belegen",
            description:
              "Laufende Überwachung von Qualität, Kosten und Regelverstößen, dazu eine Scorecard, die Zeitersparnis, Kosten pro Aufgabe und Ertrag zeigt.",
          },
        ],
      }
    : {
        eyebrow: "What we run",
        heading: "From building the agent to proving its return.",
        description:
          "We build agents and run the layer that keeps them reliable: testing, compliance checks, monitoring and reporting. This also applies to agents other teams built.",
        items: [
          {
            label: "Build agents and workflow systems",
            description:
              "Specialized agents embedded in your systems, on data foundations that support them. Where off-the-shelf software does not fit, we build the platform around your processes.",
          },
          {
            label: "Test and protect",
            description:
              "Test sets from real cases, plus safety, data protection and compliance checks on every release. A failed critical check stops the release.",
          },
          {
            label: "Monitor and prove",
            description:
              "Live tracking of quality, cost and rule violations, and a scorecard that shows time saved, cost per task and return.",
          },
        ],
      };

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] px-4 py-24 text-[#0f1e35] dark:text-slate-100 mt-28">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Capabilities section */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-blue-500">
            {capabilities.eyebrow}
          </p>
          <h2 className="mb-3 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
            {capabilities.heading}
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
            {capabilities.description}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {capabilities.items.map((item, i) => (
              <div
                key={item.label}
                className={`${GLASS} border-white/60 dark:border-[#0f1e35] p-6`}
              >
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
                <p className="mb-3 font-mono text-xs font-semibold text-blue-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mb-2 text-sm font-semibold text-[#0f1e35] dark:text-slate-100">
                  {item.label}
                </p>
                <p className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier pricing — AI workflow path detail */}
        <h1 className="mb-4 text-center text-4xl font-bold text-[#0f1e35] dark:text-slate-100">
          {t("pricingEngagement.title", language)}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#4a6a8a]">
          {t("pricingEngagement.description", language)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`${GLASS} transition-transform duration-200 hover:-translate-y-1 p-6 ${
                tier.highlight
                  ? "border-blue-500"
                  : "border-white/60 dark:border-[#0f1e35]"
              }`}
            >
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6f86a2]">
                {tier.title}
              </p>
              <div className="mb-3 text-3xl font-bold text-[#0f1e35] dark:text-slate-100">
                {tier.price}
              </div>
              <p className="mb-5 text-sm text-[#4a6a8a]">{tier.description}</p>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-[#bfd0e3]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`${GLASS} border-white/60 dark:border-[#0f1e35] p-8`}
        >
          <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
          <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
            {t("pricingEngagement.details.title", language)}
          </h2>
          <ul className="space-y-3 text-[#4a6a8a]">
            {[
              t("pricingEngagement.details.point1", language),
              t("pricingEngagement.details.point3", language),
              formalOfferNote(language),
            ].map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingEngagement;
