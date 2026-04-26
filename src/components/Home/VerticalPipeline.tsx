import React from "react";

const DURATION = 16.5;
const AN_DURATION = 12;
const FADE_DURATION = 1.5;
const CYCLE = DURATION + AN_DURATION; // 28.5
const HW = 100;
const HH = 26;
const PX = 340;
const PW = 420;
const TOOL_H = 27;
const PANEL_H = 14 + 4 * TOOL_H + 12;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const fade = (time: number, start: number, duration = 0.35) =>
  clamp((time - start) / duration, 0, 1);

const cubicBezier = (
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number }
) => {
  const u = 1 - t;
  return {
    x:
      u ** 3 * p0.x +
      3 * u ** 2 * t * p1.x +
      3 * u * t ** 2 * p2.x +
      t ** 3 * p3.x,
    y:
      u ** 3 * p0.y +
      3 * u ** 2 * t * p1.y +
      3 * u * t ** 2 * p2.y +
      t ** 3 * p3.y,
  };
};

const spinnerPath = (cx: number, cy: number, r: number, pct: number) => {
  const start = -Math.PI / 2;
  const end = start + Math.PI * 2 * pct;
  return `M${cx + r * Math.cos(start)},${cy + r * Math.sin(start)} A${r},${r} 0 ${
    pct > 0.5 ? 1 : 0
  },1 ${cx + r * Math.cos(end)},${cy + r * Math.sin(end)}`;
};

const stages = [
  {
    id: "enrich",
    label: "ENRICHMENT",
    sublabel: "Gather raw signals",
    color: "#3b82f6",
    hx: 215,
    hy: 150,
    activateAt: 0,
    flowStartAt: 3.5,
    flowLabel: "Enriched Data",
    panelFadeAt: 3.2,
    tools: [
      { call: 'web_search("market signals")', activateAt: 0.4, completeAt: 0.9 },
      { call: 'db_retrieve("supplier_db")', activateAt: 1.1, completeAt: 1.6 },
      { call: 'api_fetch("/erp/v2")', activateAt: 1.8, completeAt: 2.3 },
      { call: 'parse_docs(["rfq.pdf"])', activateAt: 2.5, completeAt: 3 },
    ],
  },
  {
    id: "transform",
    label: "TRANSFORMATION",
    sublabel: "Shape and structure",
    color: "#8b5cf6",
    hx: 215,
    hy: 320,
    activateAt: 4.1,
    flowStartAt: 7.6,
    flowLabel: "Structured Data",
    panelFadeAt: 7.3,
    tools: [
      { call: 'clean_data(schema="std")', activateAt: 4.4, completeAt: 4.9 },
      { call: "normalize(fields=[...])", activateAt: 5.1, completeAt: 5.6 },
      { call: 'extract_entities("ner-v2")', activateAt: 5.8, completeAt: 6.3 },
      { call: "dedup(threshold=0.92)", activateAt: 6.5, completeAt: 7 },
    ],
  },
  {
    id: "analysis",
    label: "ANALYSIS",
    sublabel: "Extract intelligence",
    color: "#10b981",
    hx: 215,
    hy: 490,
    activateAt: 8.2,
    flowStartAt: 11.7,
    flowLabel: "Insights",
    panelFadeAt: 11.4,
    tools: [
      { call: 'detect_patterns("30d")', activateAt: 8.5, completeAt: 9 },
      { call: 'score_records("risk-v3")', activateAt: 9.2, completeAt: 9.7 },
      { call: "cluster(k=5)", activateAt: 9.9, completeAt: 10.4 },
      { call: "gen_insights(top_k=10)", activateAt: 10.6, completeAt: 11.1 },
    ],
  },
  {
    id: "action",
    label: "ACTION",
    sublabel: "Trigger outcomes",
    color: "#f59e0b",
    hx: 215,
    hy: 660,
    activateAt: 12.3,
    flowStartAt: null,
    flowLabel: null,
    panelFadeAt: 16,
    tools: [
      { call: "crm_update(records=142)", activateAt: 12.6, completeAt: 13.1 },
      { call: 'generate_report("pdf")', activateAt: 13.3, completeAt: 13.8 },
      { call: 'trigger_agent("followup")', activateAt: 14, completeAt: 14.5 },
      { call: "notify(channels=[...])", activateAt: 14.7, completeAt: 15.2 },
    ],
  },
];

const connections = stages.slice(0, 3).map((stage, index) => {
  const nextY = stages[index + 1].hy;
  const p0 = { x: stage.hx, y: stage.hy + HH };
  const p3 = { x: stage.hx, y: nextY - HH };
  const midY = (p0.y + p3.y) / 2;

  return {
    startAt: stage.flowStartAt || 0,
    color: stage.color,
    label: stage.flowLabel,
    p0,
    p3,
    p1: { x: stage.hx, y: midY - 10 },
    p2: { x: stage.hx, y: midY + 10 },
  };
});

export const useAnimationTime = () => {
  const [time, setTime] = React.useState(0);
  const frame = React.useRef<number>();
  const start = React.useRef<number>();

  React.useEffect(() => {
    const tick = (now: number) => {
      if (!start.current) start.current = now;
      setTime(((now - start.current) / 1000) % DURATION);
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return time;
};

export const useAnimationCycle = () => {
  const [cycleTime, setCycleTime] = React.useState(0);
  const frame = React.useRef<number>();
  const start = React.useRef<number>();

  React.useEffect(() => {
    const tick = (now: number) => {
      if (!start.current) start.current = now;
      setCycleTime(((now - start.current) / 1000) % CYCLE);
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const VP_FADE_OUT_START = DURATION - FADE_DURATION; // 15
  const VP_FADE_IN_START = CYCLE - FADE_DURATION; // 27

  // VP time: runs 0→DURATION during VP phase, resets to 0 as it fades back in
  const vpTime =
    cycleTime < DURATION
      ? cycleTime
      : Math.max(0, cycleTime - CYCLE + FADE_DURATION);

  // AN time: starts from 0 at the crossfade beginning, loops at AN_DURATION
  const anTime =
    Math.max(0, cycleTime - VP_FADE_OUT_START) % AN_DURATION;

  // VP opacity
  let vpOpacity: number;
  if (cycleTime < VP_FADE_OUT_START) vpOpacity = 1;
  else if (cycleTime < DURATION) vpOpacity = 1 - (cycleTime - VP_FADE_OUT_START) / FADE_DURATION;
  else if (cycleTime < VP_FADE_IN_START) vpOpacity = 0;
  else vpOpacity = (cycleTime - VP_FADE_IN_START) / FADE_DURATION;

  // AN opacity
  let anOpacity: number;
  if (cycleTime < VP_FADE_OUT_START) anOpacity = 0;
  else if (cycleTime < DURATION) anOpacity = (cycleTime - VP_FADE_OUT_START) / FADE_DURATION;
  else if (cycleTime < VP_FADE_IN_START) anOpacity = 1;
  else anOpacity = 1 - (cycleTime - VP_FADE_IN_START) / FADE_DURATION;

  return { vpTime, anTime, vpOpacity, anOpacity };
};

interface VerticalPipelineProps {
  time: number;
}

const VerticalPipeline = ({ time }: VerticalPipelineProps) => {
  const particles = React.useMemo(() => {
    const items: Array<{
      x: number;
      y: number;
      color: string;
      r: number;
      opacity: number;
      glow: boolean;
    }> = [];

    connections.forEach((connection) => {
      if (time < connection.startAt) return;
      const elapsed = time - connection.startAt;
      for (let index = 0; index < 4; index += 1) {
        const t = (elapsed * 0.55 + index * 0.25) % 1;
        const position = cubicBezier(
          t,
          connection.p0,
          connection.p1,
          connection.p2,
          connection.p3
        );
        items.push({
          ...position,
          color: connection.color,
          r: 4.5,
          opacity: 0.92,
          glow: true,
        });

        if (t > 0.06) {
          const trail = cubicBezier(
            Math.max(0, t - 0.06),
            connection.p0,
            connection.p1,
            connection.p2,
            connection.p3
          );
          items.push({
            ...trail,
            color: connection.color,
            r: 2,
            opacity: 0.28,
            glow: false,
          });
        }
      }
    });

    return items;
  }, [time]);

  const stageProgress = (stage: (typeof stages)[number]) => {
    if (time < stage.activateAt) return 0;
    const last = stage.tools[stage.tools.length - 1];
    if (time >= last.completeAt) return 1;
    return clamp(
      (time - stage.activateAt) / (last.completeAt - stage.activateAt),
      0,
      1
    );
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1100 760"
      preserveAspectRatio="xMidYMid meet"
      className="block"
    >
      <defs>
        <pattern id="vp-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.8" fill="rgba(255,255,255,0.06)" />
        </pattern>
        <filter id="vp-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="vp-glow2" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="vp-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="vp-left-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#060b18" stopOpacity="1" />
          <stop offset="12%" stopColor="#060b18" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1100" height="760" fill="#060b18" />
      <rect width="1100" height="760" fill="url(#vp-dots)" />

      {connections.map((connection, index) => {
        const alpha = fade(time, connection.startAt, 0.5);
        const path = `M${connection.p0.x},${connection.p0.y} C${connection.p1.x},${connection.p1.y} ${connection.p2.x},${connection.p2.y} ${connection.p3.x},${connection.p3.y}`;
        const midY = (connection.p0.y + connection.p3.y) / 2;

        return (
          <g key={index}>
            <path d={path} fill="none" stroke="#0f1e38" strokeWidth="1.5" />
            {alpha > 0 && (
              <path
                d={path}
                fill="none"
                stroke={connection.color}
                strokeWidth="2"
                strokeOpacity={0.5 * alpha}
                filter="url(#vp-glow)"
              />
            )}
            {alpha > 0.6 && (
              <text
                x={connection.p0.x + 18}
                y={midY}
                dominantBaseline="middle"
                fill={connection.color}
                fillOpacity={Math.min(1, (alpha - 0.6) * 4)}
                fontSize="8"
                fontWeight="700"
                fontFamily="monospace"
                letterSpacing="1.2"
              >
                {connection.label}
              </text>
            )}
            {alpha > 0.4 && (
              <polygon
                points={`${connection.p3.x},${connection.p3.y} ${
                  connection.p3.x - 5
                },${connection.p3.y - 9} ${connection.p3.x + 5},${
                  connection.p3.y - 9
                }`}
                fill={connection.color}
                fillOpacity={0.7 * alpha}
              />
            )}
          </g>
        );
      })}

      {stages.map((stage, stageIndex) => {
        const headerFade = fade(time, stage.activateAt, 0.45);
        const progress = stageProgress(stage);
        const barHeight = (HH * 2 - 20) * progress;
        const active = headerFade > 0;
        const panelY = stage.hy - PANEL_H / 2;
        const panelIn = fade(time, stage.tools[0].activateAt, 0.3);
        const panelOut = stage.panelFadeAt ? fade(time, stage.panelFadeAt, 0.5) : 0;
        const panelOpacity = Math.max(0, panelIn - panelOut);

        return (
          <g key={stage.id}>
            {active && (
              <rect
                x={stage.hx - HW - 8}
                y={stage.hy - HH - 8}
                width={(HW + 8) * 2}
                height={(HH + 8) * 2}
                rx="10"
                fill={stage.color}
                fillOpacity={0.06 * headerFade}
                filter="url(#vp-glow2)"
              />
            )}
            <rect
              x={stage.hx - HW}
              y={stage.hy - HH}
              width={HW * 2}
              height={HH * 2}
              rx="5"
              fill={active ? `${stage.color}1e` : "#090f1e"}
              stroke={active ? stage.color : "#101e35"}
              strokeWidth={active ? 1.5 : 0.8}
              filter={active ? "url(#vp-glow)" : undefined}
            />
            {active && (
              <>
                <rect
                  x={stage.hx - HW}
                  y={stage.hy - HH + 10}
                  width="3"
                  height={HH * 2 - 20}
                  rx="1.5"
                  fill="#0e1e35"
                />
                <rect
                  x={stage.hx - HW}
                  y={stage.hy + HH - 10 - barHeight}
                  width="3"
                  height={barHeight}
                  rx="1.5"
                  fill={stage.color}
                  fillOpacity="0.75"
                  filter="url(#vp-glow)"
                />
              </>
            )}
            <text
              x={stage.hx - HW + 14}
              y={stage.hy - 5}
              dominantBaseline="middle"
              fill={active ? stage.color : "#172540"}
              fillOpacity="0.65"
              fontSize="8"
              fontWeight="700"
              fontFamily="monospace"
            >
              {`0${stageIndex + 1}`}
            </text>
            <text
              x={stage.hx - HW + 28}
              y={stage.hy - 6}
              dominantBaseline="middle"
              fill={active ? "#e8f0ff" : "#162035"}
              fontSize="11"
              fontWeight="700"
              fontFamily="monospace"
              letterSpacing="1.1"
            >
              {stage.label}
            </text>
            <text
              x={stage.hx - HW + 28}
              y={stage.hy + 9}
              dominantBaseline="middle"
              fill={active ? stage.color : "#0f1e32"}
              fillOpacity="0.6"
              fontSize="8.5"
            >
              {stage.sublabel}
            </text>
            {progress >= 1 && (
              <text
                x={stage.hx + HW - 14}
                y={stage.hy}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={stage.color}
                fontSize="12"
              >
                ✓
              </text>
            )}

            {panelOpacity > 0.01 && (
              <g opacity={panelOpacity}>
                <line
                  x1={stage.hx + HW}
                  y1={stage.hy}
                  x2={PX - 1}
                  y2={stage.hy}
                  stroke={stage.color}
                  strokeWidth="1"
                  strokeOpacity="0.35"
                  strokeDasharray="3 3"
                />
                <polygon
                  points={`${PX},${stage.hy} ${PX - 9},${stage.hy - 5} ${
                    PX - 9
                  },${stage.hy + 5}`}
                  fill="#07111f"
                  stroke={stage.color}
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <rect
                  x={PX}
                  y={stage.hy - 7}
                  width="4"
                  height="14"
                  fill="#07111f"
                />
                <rect
                  x={PX}
                  y={panelY}
                  width={PW}
                  height={PANEL_H}
                  rx="5"
                  fill="#07111f"
                  stroke={stage.color}
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />
                <text
                  x={PX + 14}
                  y={panelY + 15}
                  dominantBaseline="middle"
                  fill={stage.color}
                  fillOpacity="0.5"
                  fontSize="7"
                  fontWeight="700"
                  fontFamily="monospace"
                  letterSpacing="1.5"
                >
                  TOOL CALLS
                </text>
                <line
                  x1={PX}
                  y1={panelY + 24}
                  x2={PX + PW}
                  y2={panelY + 24}
                  stroke={stage.color}
                  strokeOpacity="0.1"
                  strokeWidth="0.8"
                />
                {stage.tools.map((tool, toolIndex) => {
                  if (time < tool.activateAt) return null;
                  const complete = time >= tool.completeAt;
                  const rowFade = fade(time, tool.activateAt, 0.2);
                  const rowY = panelY + 28 + toolIndex * TOOL_H + TOOL_H / 2;
                  const iconX = PX + 15;
                  const iconY = rowY;
                  const iconR = 4.5;
                  const pct = complete
                    ? 1
                    : clamp(
                        (time - tool.activateAt) /
                          (tool.completeAt - tool.activateAt),
                        0.05,
                        0.95
                      );

                  return (
                    <g key={tool.call} opacity={rowFade}>
                      <circle
                        cx={iconX}
                        cy={iconY}
                        r={iconR}
                        fill="none"
                        stroke={complete ? stage.color : "#172540"}
                        strokeWidth="0.8"
                        strokeOpacity="0.45"
                      />
                      {!complete ? (
                        <path
                          d={spinnerPath(iconX, iconY, iconR, pct)}
                          fill="none"
                          stroke={stage.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      ) : (
                        <text
                          x={iconX}
                          y={iconY + 1}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={stage.color}
                          fontSize="7"
                          fontWeight="700"
                        >
                          ✓
                        </text>
                      )}
                      <text
                        x={PX + 28}
                        y={rowY}
                        dominantBaseline="middle"
                        fill={complete ? "#3a5872" : "#8eaace"}
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {tool.call}
                      </text>
                      {!complete && (
                        <circle
                          cx={PX + PW - 12}
                          cy={rowY}
                          r="2.5"
                          fill={stage.color}
                          opacity={0.65 + 0.35 * Math.sin(time * 7 + toolIndex)}
                          filter="url(#vp-pg)"
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            )}
          </g>
        );
      })}

      {particles.map((particle, index) => (
        <circle
          key={index}
          cx={particle.x}
          cy={particle.y}
          r={particle.r}
          fill={particle.color}
          opacity={particle.opacity}
          filter={particle.glow ? "url(#vp-pg)" : undefined}
        />
      ))}

      <rect width="1100" height="760" fill="url(#vp-left-fade)" pointerEvents="none" />
    </svg>
  );
};

export default VerticalPipeline;
