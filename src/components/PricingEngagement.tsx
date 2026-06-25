import React from "react";
import { CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";
import { AuroraBackground } from "./Home/HeroSection";

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
      price: t("pricingEngagement.tiers.workshop.price", language),
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
      price: t("pricingEngagement.tiers.poc.price", language),
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
        eyebrow: "Was wir bauen",
        heading: "Der Umfang richtet sich danach, wo der größte Hebel liegt.",
        description:
          "Was wir am Ende bauen, hängt von dem ab, was wir gemeinsam entdecken. KI-Workflow-Systeme, Custom Platforms, ERP-Integrationen und Dateninfrastruktur gehören alle zu unserem Leistungsangebot, oft in Kombination.",
        items: [
          {
            label: "KI-Workflow-Systeme & Agenten",
            description:
              "Spezialisierte Agenten, die klassifizieren, weiterleiten, entwerfen und validieren, eingebettet in Ihre bestehenden Systeme und Prozesse.",
          },
          {
            label: "Custom Platforms & ERP",
            description:
              "Wenn Standard-Software nicht passt, bauen wir die Plattform nach Ihren Prozessen. Von ERPNext bis Microsoft Business Central.",
          },
          {
            label: "Dateninfrastruktur",
            description:
              "BigQuery, dbt und MLOps-Pipelines: das Datenfundament, das KI-Systeme in der Produktion zum Laufen bringt.",
          },
        ],
      }
    : {
        eyebrow: "What we build",
        heading: "The scope follows wherever the biggest gains are.",
        description:
          "What gets built depends on what the discovery surfaces. AI workflow systems, custom platforms, ERP integrations, and data infrastructure are all part of what we deliver, often in combination.",
        items: [
          {
            label: "AI workflow systems & agents",
            description:
              "Specialized agents that classify, route, draft, and validate work, embedded into your existing systems and processes.",
          },
          {
            label: "Custom platforms & ERP",
            description:
              "When off-the-shelf software doesn't fit your processes, we build the platform around them instead. From ERPNext to Microsoft Business Central.",
          },
          {
            label: "Data infrastructure",
            description:
              "BigQuery, dbt, and MLOps pipelines: the data foundations that make AI systems work in production.",
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
              t("pricingEngagement.details.point2", language),
              t("pricingEngagement.details.point3", language),
              t("pricingEngagement.details.point4", language),
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
