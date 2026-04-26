import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  IndustryAccent,
  IndustryWorkflow,
  LandingPageContent,
} from "../../data/landingPage";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface IndustryWorkflowTabsProps {
  content: LandingPageContent["industries"];
}

const accentClasses: Record<
  IndustryAccent,
  {
    tab: string;
    activeTab: string;
    border: string;
    text: string;
    bg: string;
    pill: string;
  }
> = {
  teal: {
    tab: "hover:border-teal-300 hover:text-teal-700 dark:hover:text-teal-300",
    activeTab:
      "border-teal-500 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950/30 dark:text-teal-200",
    border: "border-teal-200 dark:border-teal-900",
    text: "text-teal-700 dark:text-teal-300",
    bg: "bg-teal-50 dark:bg-teal-950/20",
    pill: "bg-teal-600 text-white",
  },
  amber: {
    tab: "hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-300",
    activeTab:
      "border-amber-500 bg-amber-50 text-amber-800 dark:border-amber-400 dark:bg-amber-950/30 dark:text-amber-200",
    border: "border-amber-200 dark:border-amber-900",
    text: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    pill: "bg-amber-600 text-white",
  },
  violet: {
    tab: "hover:border-violet-300 hover:text-violet-700 dark:hover:text-violet-300",
    activeTab:
      "border-violet-500 bg-violet-50 text-violet-800 dark:border-violet-400 dark:bg-violet-950/30 dark:text-violet-200",
    border: "border-violet-200 dark:border-violet-900",
    text: "text-violet-700 dark:text-violet-300",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    pill: "bg-violet-600 text-white",
  },
};

const WorkflowPipeline = ({ workflow, accent }: IndustryWorkflow) => {
  const classes = accentClasses[accent];

  return (
    <div className="flex flex-col gap-3">
      {workflow.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
              classes.pill
            )}
          >
            {index + 1}
          </div>
          <div className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
            {step}
          </div>
          {index < workflow.length - 1 && (
            <ArrowRight className={cn("hidden h-5 w-5 md:block", classes.text)} />
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
  const classes = accentClasses[activeWorkflow.accent];

  return (
    <section id="industries" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-3">
          {content.eyebrow}
        </p>
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.heading}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {content.workflows.map((workflow) => {
            const workflowClasses = accentClasses[workflow.accent];
            return (
              <button
                key={workflow.id}
                onClick={() => setActiveId(workflow.id)}
                className={cn(
                  "rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
                  workflowClasses.tab,
                  activeWorkflow.id === workflow.id && workflowClasses.activeTab
                )}
              >
                {workflow.label}
              </button>
            );
          })}
        </div>

        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 rounded-lg border bg-white p-6 dark:bg-gray-800",
            classes.border
          )}
        >
          <div>
            <p className={cn("text-sm font-semibold mb-3", classes.text)}>
              {activeWorkflow.label}
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {activeWorkflow.positioning}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {activeWorkflow.problem}
            </p>
            <div className={cn("rounded-lg p-4 mb-6", classes.bg)}>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Example use cases
              </p>
              <ul className="space-y-2">
                {activeWorkflow.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className={cn("mt-0.5 h-4 w-4", classes.text)} />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              {activeWorkflow.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/50">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">
              Example workflow pipeline
            </p>
            <WorkflowPipeline {...activeWorkflow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWorkflowTabs;
