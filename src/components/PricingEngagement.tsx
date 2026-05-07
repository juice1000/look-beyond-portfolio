import React from "react";
import { CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";
import { AuroraBackground } from "./Home/HeroSection";

interface PricingEngagementProps {
  language?: Language;
}

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

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] px-4 py-24 text-[#0f1e35] dark:text-slate-100 mt-28">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <h1 className="mb-4 text-center text-4xl font-bold text-[#0f1e35] dark:text-slate-100">
        {t("pricingEngagement.title", language)}
      </h1>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#4a6a8a]">
        {t("pricingEngagement.description", language)}
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none transition-transform duration-200 hover:-translate-y-1 p-6 ${
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
              <p className="mb-5 text-sm text-[#4a6a8a]">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-[#bfd0e3]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none p-8">
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
