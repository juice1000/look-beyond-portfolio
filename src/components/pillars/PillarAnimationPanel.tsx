import React from "react";
import VerticalPipeline, { useAnimationTime } from "../Home/VerticalPipeline";
import AgentNetwork, { useAgentNetworkTime } from "../Home/AgentNetwork";
import MonitoringAnimation, { useMonitoringTime } from "../Home/MonitoringAnimation";

type PillarAnimationKind = "workflow" | "agents" | "monitoring";

interface PillarAnimationPanelProps {
  kind: PillarAnimationKind;
  isDarkMode: boolean;
}

const WorkflowAnimation = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const time = useAnimationTime();
  return <VerticalPipeline time={time} isDarkMode={isDarkMode} />;
};

const AgentsAnimation = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const time = useAgentNetworkTime();
  return <AgentNetwork time={time} isDarkMode={isDarkMode} />;
};

const MonitoringPanelAnimation = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const time = useMonitoringTime();
  return <MonitoringAnimation time={time} isDarkMode={isDarkMode} />;
};

const PillarAnimationPanel = ({ kind, isDarkMode }: PillarAnimationPanelProps) => {
  return (
    <div
      className="relative aspect-[1100/760] min-h-[22rem] w-full overflow-hidden rounded-2xl sm:min-h-[28rem] lg:min-h-0"
      style={{
        background: isDarkMode ? "#04060f" : "rgba(255,255,255,0.3)",
        border: isDarkMode ? "1px solid #0f1e35" : "1px solid rgba(255,255,255,0.7)",
        boxShadow: isDarkMode
          ? "0 24px 80px rgba(0,0,0,0.22)"
          : "inset 0 1px 0 rgba(255,255,255,0.95), inset 0 0 0 1px rgba(255,255,255,0.25), 0 16px 40px rgba(0,0,0,0.07)",
        backdropFilter: isDarkMode ? undefined : "blur(20px) saturate(1.5)",
        WebkitBackdropFilter: isDarkMode ? undefined : "blur(20px) saturate(1.5)",
      }}
    >
      <div className="absolute inset-0 opacity-90">
        {kind === "workflow" && <WorkflowAnimation isDarkMode={isDarkMode} />}
        {kind === "agents" && <AgentsAnimation isDarkMode={isDarkMode} />}
        {kind === "monitoring" && <MonitoringPanelAnimation isDarkMode={isDarkMode} />}
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle at 50% 35%,rgba(37,99,235,0.08),transparent 48%),linear-gradient(180deg,transparent,rgba(4,6,15,0.18))"
            : "radial-gradient(circle at 50% 35%,rgba(37,99,235,0.04),transparent 48%)",
        }}
      />
    </div>
  );
};

export default PillarAnimationPanel;
