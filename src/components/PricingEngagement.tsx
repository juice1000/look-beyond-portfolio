import React from "react";
import { CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";

interface PricingEngagementProps {
  language?: Language;
}

const PricingEngagement = ({ language = "en" }: PricingEngagementProps) => {
  const tiers = [
    {
      title: t("pricingEngagement.tiers.free.title", language),
      price: t("pricingEngagement.tiers.free.price", language),
      description: t("pricingEngagement.tiers.free.description", language),
      items: [
        t("pricingEngagement.tiers.free.item1", language),
        t("pricingEngagement.tiers.free.item2", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.workshop.title", language),
      price: t("pricingEngagement.tiers.workshop.price", language),
      description: t("pricingEngagement.tiers.workshop.description", language),
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
      items: [
        t("pricingEngagement.tiers.retainer.item1", language),
        t("pricingEngagement.tiers.retainer.item2", language),
        t("pricingEngagement.tiers.retainer.item3", language),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#060b18] px-4 py-24 text-slate-100 mt-28">
      <h1 className="mb-4 text-center text-4xl font-bold">
        {t("pricingEngagement.title", language)}
      </h1>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#4a6a8a]">
          {t("pricingEngagement.description", language)}
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              className={`rounded-lg border p-6 shadow-sm ${
                index === 0
                  ? "border-blue-500 bg-[#08101f]"
                  : "border-[#0f1e35] bg-[#08101f]"
              }`}
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6f86a2]">
                {tier.title}
              </p>
              <div className="mb-3 text-3xl font-bold text-slate-100">
                {tier.price}
              </div>
              <p className="mb-5 text-sm text-[#4a6a8a]">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#bfd0e3]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
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
                  <span className="mt-1 text-blue-400">•</span>
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
