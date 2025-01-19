import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  services?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Build Smart, Lead Change.",
  subtitle = "We help you",
  services = ["Idiate", "Ship", "Scale", "Dominate"],
  ctaText = "Start Your Project",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="h-screen w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          {subtitle}
        </motion.p>
        <div className="h-20 mb-8">
          <motion.div
            key={currentServiceIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="sm:text-5xl font-semibold text-blue-600 dark:text-blue-400"
          >
            {services[currentServiceIndex]}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {ctaText}
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
