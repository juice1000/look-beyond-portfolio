import React from "react";
import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";

interface CaseStudyCardsProps {
  title?: string;
  subtitle?: string;
  cards?: Array<{
    title: string;
    painPoint: string;
    kpi: string;
    ctaText?: string;
  }>;
  language?: "en" | "de";
}

const CaseStudyCards = ({
  title = "Real-world AI impact",
  subtitle = "See how our AI solutions transform business operations across departments",
  cards = [
    {
      title: "Marketing",
      painPoint: "Struggling to create consistent content at scale",
      kpi: "↑120% content velocity",
      ctaText: "See how",
    },
    {
      title: "Sales",
      painPoint: "Manual lead qualification slowing down pipeline",
      kpi: "↓40% sales cycle time",
      ctaText: "See how",
    },
    {
      title: "Operations",
      painPoint: "Support tickets overwhelming your team",
      kpi: "85% auto-resolution rate",
      ctaText: "See how",
    },
  ],
  language = "en",
}: CaseStudyCardsProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CaseStudyCard
                title={card.title}
                painPoint={card.painPoint}
                kpi={card.kpi}
                ctaText={card.ctaText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCards;
