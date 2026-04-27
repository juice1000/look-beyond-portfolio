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
}

const WorkflowPipeline = ({ workflow }: IndustryWorkflow) => {
  return (
    <div className="space-y-3">
      {workflow.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-xs font-semibold text-white">
            {index + 1}
          </div>
          <div className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200">
            {step}
          </div>
          {index < workflow.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 text-blue-600 md:block" />
          )}
        </div>
      ))}
    </div>
  );
};

const IndustryWorkflowTabs = ({ content }: IndustryWorkflowTabsProps) => {
  const [activeId, setActiveId] = React.useState(content.workflows[0]?.id);
  const activeWorkflow =
    content.workflows.find((workflow) => workflow.id === activeId) ||
    content.workflows[0];

  return (
    <section
      id="industries"
      className="border-b border-t-2 border-t-slate-900 border-b-gray-200 bg-white dark:border-b-gray-800 dark:border-t-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-8">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-gray-400">
            {content.eyebrow}
          </p>
          <h2 className="max-w-3xl text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            {content.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 border-y border-gray-200 md:grid-cols-3 dark:border-gray-800">
          {content.workflows.map((workflow) => (
            <button
              key={workflow.id}
              onClick={() => setActiveId(workflow.id)}
              className={cn(
                "border-b border-r border-gray-200 px-5 py-4 text-center font-mono text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors md:border-b-0 dark:border-gray-800",
                activeWorkflow.id === workflow.id &&
                  "border-b-2 border-b-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/20",
              )}
            >
              {workflow.label}
            </button>
          ))}
        </div>

        <div className="grid min-h-80 grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-gray-200 p-8 lg:border-b-0 lg:border-r dark:border-gray-800">
            <h3 className="mb-5 max-w-xl text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              {activeWorkflow.positioning}
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {activeWorkflow.problem}
            </p>
            <div className="mb-6 space-y-3">
              {activeWorkflow.useCases.map((useCase) => (
                <div key={useCase} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
            {industryRoutes[activeWorkflow.id] && (
              <Link
                to={industryRoutes[activeWorkflow.id]}
                className="inline-flex items-center gap-2 rounded-sm border border-gray-300 px-4 py-2 font-mono text-xs uppercase tracking-wide text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              >
                How We Engage →
              </Link>
            )}
          </div>
          <div className="relative min-h-[320px] flex-1 overflow-hidden bg-[#060b18]">
            {activeWorkflow.id === "manufacturing" && (
              <ManufacturingAnimation />
            )}
            {activeWorkflow.id === "procurement" && <ProcurementAnimation />}
            {activeWorkflow.id === "logistics" && <LogisticsAnimation />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWorkflowTabs;
