import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { IndustryWorkflow, LandingPageContent } from "../../data/landingPage";
import { cn } from "../../lib/utils";
import ManufacturingAnimation from "./ManufacturingAnimation";
import ProcurementAnimation from "./ProcurementAnimation";
import LogisticsAnimation from "./LogisticsAnimation";

const industryRoutes: Record<string, string> = {
  procurement: "/industries/procurement",
  manufacturing: "/industries/manufacturing",
  logistics: "/industries/logistics",
};

interface IndustryWorkflowTabsProps {
  content: LandingPageContent["industries"];
  isDarkMode: boolean;
}

const WorkflowPipeline = ({ workflow }: IndustryWorkflow) => {
  return (
    <div className="space-y-3">
      {workflow.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-xs font-semibold text-white">
            {index + 1}
          </div>
          <div className="relative overflow-hidden flex-1 rounded-lg
                          border border-white/60 dark:border-[#0f1e35]
                          bg-gradient-to-r from-white/40 to-white/20
                          dark:bg-[#08101f]/80
                          backdrop-blur-xl backdrop-saturate-150
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none
                          px-4 py-3 text-sm font-medium text-slate-700 dark:text-[#bfd0e3]">
            <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white/50 blur-xl dark:hidden" />
            {step}
          </div>
          {index < workflow.length - 1 && (
            <ArrowRight className="hidden h-5 w-5 text-slate-800 dark:text-blue-600 md:block" strokeWidth={2.5} />
          )}
        </div>
      ))}
    </div>
  );
};

const IndustryWorkflowTabs = ({ content, isDarkMode }: IndustryWorkflowTabsProps) => {
  const [activeId, setActiveId] = React.useState(content.workflows[0]?.id);
  const activeWorkflow =
    content.workflows.find((workflow) => workflow.id === activeId) ||
    content.workflows[0];

  return (
    <section
      id="industries"
      className="border-b border-white/30 dark:border-[#0f1e35] bg-transparent dark:bg-[#060b18] pb-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-8">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-blue-500">
            {content.eyebrow}
          </p>
          <h2 className="max-w-3xl text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
            {content.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-500 dark:text-[#4a6a8a]">
            {content.description}
          </p>
        </div>

        {/* Glass card wrapping tabs + content */}
        <div className="relative overflow-hidden mx-4 mb-4 rounded-2xl
                        border border-white/60 dark:border-[#0f1e35]
                        bg-gradient-to-br from-white/35 to-white/12
                        dark:bg-transparent
                        backdrop-blur-xl backdrop-saturate-150
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_20px_48px_rgba(0,0,0,0.08)]
                        dark:shadow-none">
          {/* Specular blob */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/50 blur-3xl dark:hidden" />

          {/* Tab buttons */}
          <div className="grid grid-cols-1 border-b border-white/30 dark:border-[#0f1e35] md:grid-cols-3">
            {content.workflows.map((workflow) => (
              <button
                key={workflow.id}
                onClick={() => setActiveId(workflow.id)}
                className={cn(
                  "border-r border-white/30 dark:border-[#0f1e35] px-5 py-4 text-center font-mono text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-[#4a6a8a] transition-colors",
                  activeWorkflow.id === workflow.id &&
                    "border-b-2 border-b-blue-500 bg-white/30 dark:bg-[#08101f]/80 text-blue-500",
                )}
              >
                {workflow.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid min-h-80 grid-cols-1 lg:grid-cols-2">
            <div className="border-b border-white/30 dark:border-[#0f1e35] p-8 lg:border-b-0 lg:border-r">
              <h3 className="mb-5 max-w-xl text-3xl font-bold leading-tight text-[#0f1e35] dark:text-slate-100">
                {activeWorkflow.positioning}
              </h3>
              <p className="mb-6 text-slate-500 dark:text-[#4a6a8a]">
                {activeWorkflow.problem}
              </p>
              <div className="mb-6 space-y-3">
                {activeWorkflow.useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span className="text-sm text-slate-500 dark:text-[#4a6a8a]">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
              {industryRoutes[activeWorkflow.id] && (
                <Link
                  to={industryRoutes[activeWorkflow.id]}
                  className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-mono text-xs uppercase tracking-wide text-white transition-colors hover:bg-blue-700"
                >
                  How We Engage →
                </Link>
              )}
            </div>
            <div className="relative min-h-[320px] flex-1 overflow-hidden">
              {activeWorkflow.id === "manufacturing" && <ManufacturingAnimation isDarkMode={isDarkMode} />}
              {activeWorkflow.id === "procurement" && <ProcurementAnimation isDarkMode={isDarkMode} />}
              {activeWorkflow.id === "logistics" && <LogisticsAnimation isDarkMode={isDarkMode} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWorkflowTabs;
