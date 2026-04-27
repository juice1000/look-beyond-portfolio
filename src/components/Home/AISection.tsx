import React from "react";
import { motion } from "framer-motion";

interface KPIBadgeProps {
  value?: string;
  label: string;
}

const KPIBadge = ({ value, label }: KPIBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center rounded-lg border border-[#0f1e35] bg-[#08101f] p-6"
    >
      {value && (
        <span className="mb-2 text-3xl font-bold text-blue-500">
          {value}
        </span>
      )}
      <span className="text-center text-sm text-[#4a6a8a]">
        {label}
      </span>
    </motion.div>
  );
};

interface AISectionProps {
  tagline?: string;
  subTagline?: string;
  kpis?: Array<{ value?: string; label: string }>;
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
    <section className="bg-[#060b18] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-100 md:text-5xl">
            {tagline}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#4a6a8a]">
            {subTagline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <KPIBadge key={index} value={kpi.value} label={kpi.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
