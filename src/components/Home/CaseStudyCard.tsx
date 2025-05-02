import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  painPoint: string;
  kpi: string;
  ctaText?: string;
  onClick?: () => void;
}

const CaseStudyCard = ({
  title = "Marketing",
  painPoint = "Struggling to create consistent content at scale",
  kpi = "↑120% content velocity",
  ctaText = "See how",
  onClick = () => (window.location.href = "#"),
}: CaseStudyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{painPoint}</p>
        <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium">
          {kpi}
        </Badge>
        <div className="mt-4">
          <Button
            variant="ghost"
            className="p-0 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
