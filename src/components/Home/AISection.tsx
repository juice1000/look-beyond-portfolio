import React from "react";
import { motion } from "framer-motion";

interface KPIBadgeProps {
  value: string;
  label: string;
}

const KPIBadge = ({ value, label }: KPIBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {value}
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {label}
      </span>
    </motion.div>
  );
};

interface AISectionProps {
  tagline?: string;
  subTagline?: string;
  kpis?: Array<{ value: string; label: string }>;
  language?: "en" | "de";
}

const AISection = ({
  tagline = "Empowering businesses with AI.",
  subTagline = "From content to customers, we turn bottlenecks into growth loops.",
  kpis = [
    { value: "5x", label: "Faster Development" },
    { value: "60%", label: "Cost Reduction" },
    { value: "85%", label: "Tickets auto-resolved" },
  ],
  language = "en",
}: AISectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {tagline}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subTagline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <KPIBadge key={index} value={kpi.value} label={kpi.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
