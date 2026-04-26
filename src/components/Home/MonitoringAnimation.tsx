import React from "react";

const W = 1100;
const H = 760;
const DURATION = 12;

export const useMonitoringTime = () => {
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

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));
const fade = (t: number, s: number, d = 0.35) =>
  clamp((t - s) / d, 0, 1);

function cubicBezier(
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number }
) {
  const u = 1 - t;
  return {
    x: u ** 3 * p0.x + 3 * u ** 2 * t * p1.x + 3 * u * t ** 2 * p2.x + t ** 3 * p3.x,
    y: u ** 3 * p0.y + 3 * u ** 2 * t * p1.y + 3 * u * t ** 2 * p2.y + t ** 3 * p3.y,
  };
}

function spinnerPath(cx: number, cy: number, r: number, pct: number) {
  const s = -Math.PI / 2;
  const e = s + Math.PI * 2 * pct;
  return `M${cx + r * Math.cos(s)},${cy + r * Math.sin(s)} A${r},${r} 0 ${
    pct > 0.5 ? 1 : 0
  },1 ${cx + r * Math.cos(e)},${cy + r * Math.sin(e)}`;
}

type NodeType = "monitor" | "evaluator" | "report" | "alert";

interface TooltipCall {
  call: string;
  activeAt: number;
  doneAt: number;
}

interface NodeData {
  id: string;
  label: string;
  sublabel: string;
  type: NodeType;
  color: string;
  x: number;
  y: number;
  hw: number;
  hh: number;
  activateAt: number;
  tooltip?: TooltipCall[];
  status?: string;
}

// Chat window occupies x:20–355, y:18–300
// Observer left edge at x:450 (540 - hw:90)
// Intercept edge exits chat window right edge (x:356) at y:220 → arrives observer left (450,255)
const INTERCEPT = {
  activeAt: 2.4,
  color: "#6366f1",
  p0: { x: 356, y: 215 },
  p1: { x: 420, y: 215 },
  p2: { x: 450, y: 250 },
  p3: { x: 450, y: 255 },
};

const RAW_NODES: NodeData[] = [
  {
    id: "observer", label: "Observation Engine", sublabel: "Performance Monitor",
    type: "monitor", color: "#6366f1", x: 540, y: 255, hw: 90, hh: 30, activateAt: 2.4,
    tooltip: [
      { call: "extract_response_data()",    activeAt: 2.6, doneAt: 3.1 },
      { call: "run_evaluators(parallel=4)", activeAt: 3.1, doneAt: 3.6 },
    ],
  },
  { id: "factuality", label: "Factuality Check",   sublabel: "Claim Verification",  type: "evaluator", color: "#ef4444", x: 870, y: 130, hw: 80, hh: 21, activateAt: 3.8, status: "Verifying claims..." },
  { id: "sentiment",  label: "Sentiment Analyzer", sublabel: "Emotion Detection",   type: "evaluator", color: "#06b6d4", x: 870, y: 265, hw: 80, hh: 21, activateAt: 3.9, status: "Analyzing tone..." },
  { id: "quality",    label: "Quality Scorer",     sublabel: "Response Quality",    type: "evaluator", color: "#3b82f6", x: 870, y: 400, hw: 78, hh: 21, activateAt: 4.0, status: "Measuring clarity..." },
  { id: "compliance", label: "Policy Check",       sublabel: "Safety & Guidelines", type: "evaluator", color: "#10b981", x: 870, y: 535, hw: 80, hh: 21, activateAt: 4.1, status: "Validating policies..." },
  { id: "report",     label: "Health Report",      sublabel: "Analysis Complete",   type: "report",    color: "#8b5cf6", x: 540, y: 430, hw: 88, hh: 22, activateAt: 5.8 },
  { id: "alert",      label: "Email Alert Sent",   sublabel: "Factuality: 0.41 ⚠", type: "alert",     color: "#f97316", x: 540, y: 545, hw: 90, hh: 22, activateAt: 6.3 },
];

const NMAP = Object.fromEntries(RAW_NODES.map((n) => [n.id, n]));

const TYPE_LABEL: Record<NodeType, string> = {
  monitor:   "OBSERVER",
  evaluator: "EVALUATOR",
  report:    "REPORT",
  alert:     "ALERT",
};

const TP_W = 270;
const TP_H_ROW = 27;

function tooltipRect(node: NodeData) {
  const n = node.tooltip!.length;
  const h = 14 + n * TP_H_ROW + 10;
  const side = node.x < W / 2 ? "right" : "left";
  const x = side === "right" ? node.x + node.hw + 16 : node.x - node.hw - 16 - TP_W;
  const y = node.y - h / 2;
  return { x, y, w: TP_W, h, side };
}

function routeEdge(src: NodeData, dst: NodeData) {
  const down = dst.y > src.y + 40;
  const up = dst.y < src.y - 40;
  let p0: { x: number; y: number }, p3: { x: number; y: number };
  if (down) {
    p0 = { x: src.x, y: src.y + src.hh };
    p3 = { x: dst.x, y: dst.y - dst.hh };
  } else if (up) {
    p0 = { x: src.x, y: src.y - src.hh };
    p3 = { x: dst.x, y: dst.y + dst.hh };
  } else {
    const right = dst.x > src.x;
    p0 = { x: src.x + (right ? 1 : -1) * src.hw, y: src.y };
    p3 = { x: dst.x + (right ? -1 : 1) * dst.hw, y: dst.y };
  }
  const dy = Math.abs(p3.y - p0.y);
  const t = 0.38;
  const p1 = { x: p0.x + (p3.x - p0.x) * t * 0.5, y: p0.y + dy * t };
  const p2 = { x: p3.x - (p3.x - p0.x) * t * 0.5, y: p3.y - dy * t };
  return { p0, p1, p2, p3 };
}

interface RawEdge { from: string; to: string; activeAt: number; type?: string; }

const EDGES = (
  [
    { from: "observer",   to: "factuality", activeAt: 3.7 },
    { from: "observer",   to: "sentiment",  activeAt: 3.8 },
    { from: "observer",   to: "quality",    activeAt: 3.9 },
    { from: "observer",   to: "compliance", activeAt: 4.0 },
    { from: "factuality", to: "observer",   activeAt: 4.6, type: "query" },
    { from: "sentiment",  to: "observer",   activeAt: 4.8, type: "response" },
    { from: "quality",    to: "observer",   activeAt: 5.0, type: "response" },
    { from: "compliance", to: "observer",   activeAt: 5.2, type: "response" },
    { from: "observer",   to: "report",     activeAt: 5.5 },
    { from: "observer",   to: "alert",      activeAt: 6.0 },
  ] as RawEdge[]
).map((e) => ({ ...e, ...routeEdge(NMAP[e.from], NMAP[e.to]) }));

// Chat conversation content
const BOT_LINES = [
  { text: "I'm sorry to hear about your order.", activeAt: 1.4 },
  { text: "I can see #ORD-2847 was placed on Apr 24.", activeAt: 1.85 },
  { text: "A replacement has been approved and will", activeAt: 2.2 },
  { text: "ship within 2–3 business days.", activeAt: 2.4 },
];

interface MonitoringAnimationProps { time: number; }

const MonitoringAnimation = ({ time }: MonitoringAnimationProps) => {
  const particles = React.useMemo(() => {
    const ps: Array<{ x: number; y: number; color: string; r: number; op: number; glow: boolean }> = [];

    // Intercept edge particles
    if (time >= INTERCEPT.activeAt) {
      const el = time - INTERCEPT.activeAt;
      for (let i = 0; i < 4; i++) {
        const t = (el * 0.6 + i / 4) % 1;
        const pos = cubicBezier(t, INTERCEPT.p0, INTERCEPT.p1, INTERCEPT.p2, INTERCEPT.p3);
        ps.push({ ...pos, color: INTERCEPT.color, r: 3.5, op: 0.88, glow: true });
        if (t > 0.06) {
          const pos2 = cubicBezier(Math.max(0, t - 0.06), INTERCEPT.p0, INTERCEPT.p1, INTERCEPT.p2, INTERCEPT.p3);
          ps.push({ ...pos2, color: INTERCEPT.color, r: 1.5, op: 0.2, glow: false });
        }
      }
    }

    EDGES.forEach((e) => {
      if (time < e.activeAt) return;
      const el = time - e.activeAt;
      const isReturn = e.type === "response" || e.type === "query";
      const speed = isReturn ? 0.75 : 0.6;
      const count = isReturn ? 3 : 4;
      const color = NMAP[e.from].color;
      for (let i = 0; i < count; i++) {
        const t = (el * speed + i / count) % 1;
        const pos = cubicBezier(t, e.p0, e.p1, e.p2, e.p3);
        ps.push({ ...pos, color, r: isReturn ? 2.5 : 3.5, op: isReturn ? 0.7 : 0.88, glow: true });
        if (t > 0.06) {
          const pos2 = cubicBezier(Math.max(0, t - 0.06), e.p0, e.p1, e.p2, e.p3);
          ps.push({ ...pos2, color, r: 1.5, op: 0.2, glow: false });
        }
      }
    });
    return ps;
  }, [time]);

  const chatWinF   = fade(time, 0.0, 0.4);
  const userBubF   = fade(time, 0.3, 0.35);
  const typingF    = time >= 0.9 && time < 1.4 ? fade(time, 0.9, 0.3) : 0;
  const interceptF = fade(time, INTERCEPT.activeAt, 0.5);

  // Intercept path string
  const interceptPath = `M${INTERCEPT.p0.x},${INTERCEPT.p0.y} C${INTERCEPT.p1.x},${INTERCEPT.p1.y} ${INTERCEPT.p2.x},${INTERCEPT.p2.y} ${INTERCEPT.p3.x},${INTERCEPT.p3.y}`;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="block"
    >
      <defs>
        <pattern id="mon-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="0.8" fill="rgba(255,255,255,0.06)" />
        </pattern>
        <filter id="mon-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mon-glow2" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="12" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mon-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="mon-vig" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#030610" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="#060b18" />
      <rect width={W} height={H} fill="url(#mon-dots)" />

      {/* ── Chat window ── */}
      <g opacity={chatWinF}>
        {/* Window background */}
        <rect x={20} y={18} width={335} height={282} rx={8}
          fill="#060e1e" stroke="#0d1c32" strokeWidth={1} />

        {/* Header bar */}
        <rect x={20} y={18} width={335} height={38} rx={8} fill="#0a1525" />
        <rect x={20} y={42} width={335} height={14} fill="#0a1525" />
        {/* Status dot */}
        <circle cx={46} cy={37} r={4} fill="#22c55e" opacity={0.9} filter="url(#mon-pg)" />
        <text x={58} y={37} dominantBaseline="middle"
          fill="#c8d8f0" fontSize={10} fontWeight={700}
          fontFamily="Space Mono, monospace" letterSpacing={0.5}>
          AI Support Bot
        </text>
        <text x={300} y={37} dominantBaseline="middle" textAnchor="end"
          fill="#22c55e" fontSize={8} fontFamily="Space Mono, monospace" opacity={0.8}>
          ONLINE
        </text>
        <line x1={20} y1={56} x2={355} y2={56} stroke="#0d1c32" strokeWidth={0.8} />

        {/* User message bubble — right aligned */}
        <g opacity={userBubF}>
          <rect x={168} y={66} width={177} height={52} rx={8}
            fill="#1e3a5f" stroke="#2a4d80" strokeWidth={0.8} />
          <text x={180} y={86} dominantBaseline="middle"
            fill="#c8d8f0" fontSize={9} fontFamily="Space Mono, monospace">
            I got the wrong item for
          </text>
          <text x={180} y={102} dominantBaseline="middle"
            fill="#c8d8f0" fontSize={9} fontFamily="Space Mono, monospace">
            order <tspan fill="#60a5fa">#ORD-2847</tspan>. Fix this.
          </text>
          {/* User avatar dot */}
          <circle cx={339} cy={124} r={5} fill="#2a4d80" />
          <text x={339} y={124} textAnchor="middle" dominantBaseline="middle"
            fill="#60a5fa" fontSize={7} fontWeight={700}>U</text>
        </g>

        {/* Typing indicator */}
        {typingF > 0 && (
          <g opacity={typingF}>
            <rect x={30} y={130} width={64} height={26} rx={6} fill="#0c1a2e" stroke="#0f2540" strokeWidth={0.8} />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={46 + i * 16} cy={143} r={3.5}
                fill="#6366f1"
                opacity={0.4 + 0.6 * Math.abs(Math.sin(time * 6 + i * 1.2))} />
            ))}
          </g>
        )}

        {/* Bot response bubble — streams in */}
        <g>
          <rect x={30} y={130} width={315} height={158} rx={8}
            fill="#0c1a2e"
            stroke={interceptF > 0 ? "#6366f1" : "#0f2540"}
            strokeWidth={interceptF > 0 ? 1.2 : 0.8}
            strokeOpacity={interceptF > 0 ? 0.6 + 0.3 * Math.sin(time * 3) : 1}
          />
          {/* Bot avatar */}
          <circle cx={48} cy={148} r={8} fill="#1a2e50" stroke="#3b82f6" strokeWidth={0.8} />
          <text x={48} y={148} textAnchor="middle" dominantBaseline="middle"
            fill="#60a5fa" fontSize={7} fontWeight={700}>AI</text>

          {BOT_LINES.map((line, i) => {
            const lf = fade(time, line.activeAt, 0.4);
            if (lf <= 0) return null;
            return (
              <text key={i} x={64} y={148 + i * 18} dominantBaseline="middle"
                fill="#c8d8f0" fontSize={9.5} fontFamily="Space Grotesk, sans-serif"
                opacity={lf}>
                {line.text}
              </text>
            );
          })}

          {/* Cursor blink while last line not yet shown */}
          {time >= 1.4 && time < 2.55 && (
            <rect
              x={64 + (time < 1.85 ? 185 : time < 2.2 ? 208 : time < 2.4 ? 208 : 150)}
              y={148 + (time < 1.85 ? 0 : time < 2.2 ? 18 : time < 2.4 ? 36 : 54) - 7}
              width={1.5} height={13}
              fill="#6366f1"
              opacity={Math.sin(time * 8) > 0 ? 0.9 : 0}
            />
          )}

          {/* "Intercepted" badge */}
          {interceptF > 0 && (
            <g opacity={interceptF}>
              <rect x={236} y={274} width={100} height={18} rx={4}
                fill="#1a1060" stroke="#6366f1" strokeWidth={0.8} strokeOpacity={0.7} />
              <text x={286} y={283} textAnchor="middle" dominantBaseline="middle"
                fill="#818cf8" fontSize={7} fontWeight={700}
                fontFamily="Space Mono, monospace" letterSpacing={0.8}>
                ⚡ MONITORING
              </text>
            </g>
          )}
        </g>
      </g>

      {/* ── Intercept edge (chat window → observer) ── */}
      <path d={interceptPath} fill="none" stroke="#0e1c30" strokeWidth="1" strokeDasharray="4 3" />
      {interceptF > 0 && (
        <path d={interceptPath} fill="none" stroke="#6366f1"
          strokeWidth="1.5" strokeOpacity={0.45 * interceptF}
          strokeDasharray="4 3" filter="url(#mon-glow)" />
      )}

      {/* ── Normal edges ── */}
      {EDGES.map((e, i) => {
        const af = time >= e.activeAt ? fade(time, e.activeAt, 0.5) : 0;
        const pathD = `M${e.p0.x},${e.p0.y} C${e.p1.x},${e.p1.y} ${e.p2.x},${e.p2.y} ${e.p3.x},${e.p3.y}`;
        const srcColor = NMAP[e.from].color;
        const isReturn = e.type === "response" || e.type === "query";
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#0e1c30"
              strokeWidth={isReturn ? "0.8" : "1.2"}
              strokeDasharray={isReturn ? "4 4" : undefined} />
            {af > 0 && (
              <path d={pathD} fill="none" stroke={srcColor}
                strokeWidth={isReturn ? "1" : "1.5"}
                strokeOpacity={(isReturn ? 0.28 : 0.4) * af}
                strokeDasharray={isReturn ? "4 4" : undefined}
                filter="url(#mon-glow)" />
            )}
            {af > 0.5 && (() => {
              const tip = e.p3;
              const near = cubicBezier(0.96, e.p0, e.p1, e.p2, e.p3);
              const angle = Math.atan2(tip.y - near.y, tip.x - near.x);
              const ar = 7;
              return (
                <polygon
                  points={`${tip.x},${tip.y} ${tip.x - ar * Math.cos(angle + 0.4)},${tip.y - ar * Math.sin(angle + 0.4)} ${tip.x - ar * Math.cos(angle - 0.4)},${tip.y - ar * Math.sin(angle - 0.4)}`}
                  fill={srcColor} fillOpacity={0.65 * af} />
              );
            })()}
          </g>
        );
      })}

      {/* ── Nodes ── */}
      {RAW_NODES.map((node) => {
        const hf = fade(time, node.activateAt, 0.45);
        const on = hf > 0;
        const rx = node.type === "monitor" ? 6 : 4;
        const hasTooltip = !!node.tooltip;

        let tp: { tr: ReturnType<typeof tooltipRect>; panelOp: number } | null = null;
        if (hasTooltip && node.tooltip) {
          const panelIn = fade(time, node.tooltip[0].activeAt, 0.3);
          const lastTool = node.tooltip[node.tooltip.length - 1];
          const panelOut = lastTool.doneAt + 0.8 < DURATION ? fade(time, lastTool.doneAt + 0.8, 0.5) : 0;
          const panelOp = Math.max(0, panelIn - panelOut);
          if (panelOp > 0.01) tp = { tr: tooltipRect(node), panelOp };
        }

        const showStatus = !hasTooltip && node.status && on && hf > 0.3;

        return (
          <g key={node.id}>
            {on && (
              <rect x={node.x - node.hw - 8} y={node.y - node.hh - 8}
                width={(node.hw + 8) * 2} height={(node.hh + 8) * 2}
                rx={rx + 4} fill={node.color} fillOpacity={0.06 * hf}
                filter="url(#mon-glow2)" />
            )}
            <rect x={node.x - node.hw} y={node.y - node.hh}
              width={node.hw * 2} height={node.hh * 2}
              rx={rx}
              fill={on ? `${node.color}20` : "#08111f"}
              stroke={on ? node.color : "#0e1c32"}
              strokeWidth={on ? (node.type === "monitor" ? 1.8 : 1.3) : 0.7}
              filter={on ? "url(#mon-glow)" : undefined} />

            <text x={node.x - node.hw + 8} y={node.y - node.hh + 11}
              dominantBaseline="middle"
              fill={on ? node.color : "#172540"} fillOpacity="0.55"
              fontSize="7" fontWeight="700"
              fontFamily="Space Mono, monospace" letterSpacing="1.2">
              {TYPE_LABEL[node.type]}
            </text>
            <text x={node.x} y={node.y - 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={on ? (node.type === "alert" ? "#fff" : "#dde8f8") : "#162035"}
              fontSize={node.type === "monitor" ? 12 : 10}
              fontWeight="700" fontFamily="Space Mono, monospace" letterSpacing="0.8">
              {node.label}
            </text>
            {node.sublabel && (
              <text x={node.x} y={node.y + 11}
                textAnchor="middle" dominantBaseline="middle"
                fill={on ? node.color : "#0f1e30"} fillOpacity="0.6"
                fontSize="8.5" fontFamily="Space Grotesk, sans-serif">
                {node.sublabel}
              </text>
            )}

            {/* Alert glow ring */}
            {node.type === "alert" && on && (
              <rect x={node.x - node.hw - 5} y={node.y - node.hh - 5}
                width={(node.hw + 5) * 2} height={(node.hh + 5) * 2}
                rx={rx + 3} fill="none"
                stroke={node.color} strokeWidth={1.5}
                strokeOpacity={0.4 + 0.2 * Math.sin(time * 3)}
                filter="url(#mon-glow)" />
            )}

            {/* Activity pulse dot */}
            {on && !hasTooltip && node.type !== "alert" && (
              <circle cx={node.x + node.hw - 10} cy={node.y - node.hh + 10}
                r={3} fill={node.color}
                opacity={0.6 + 0.4 * Math.sin(time * 5 + node.x)}
                filter="url(#mon-pg)" />
            )}

            {showStatus && (
              <text x={node.x} y={node.y + node.hh + 14}
                textAnchor="middle" dominantBaseline="middle"
                fill={node.color} fillOpacity="0.7"
                fontSize="8" fontFamily="Space Mono, monospace">
                {node.status}
              </text>
            )}

            {tp && (() => {
              const { tr, panelOp } = tp;
              const arrowX = tr.side === "right" ? tr.x : tr.x + tr.w;
              const connX = tr.side === "right" ? node.x + node.hw : node.x - node.hw;
              return (
                <g opacity={panelOp}>
                  <line x1={connX} y1={node.y} x2={arrowX + (tr.side === "right" ? -1 : 1) * 10} y2={node.y}
                    stroke={node.color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
                  <polygon
                    points={tr.side === "right"
                      ? `${tr.x},${node.y} ${tr.x - 9},${node.y - 5} ${tr.x - 9},${node.y + 5}`
                      : `${tr.x + tr.w},${node.y} ${tr.x + tr.w + 9},${node.y - 5} ${tr.x + tr.w + 9},${node.y + 5}`}
                    fill="#060e1d" stroke={node.color} strokeOpacity="0.3" strokeWidth="1" />
                  <rect x={tr.side === "right" ? tr.x : tr.x + tr.w - 2} y={node.y - 7} width={4} height={14} fill="#060e1d" />
                  <rect x={tr.x} y={tr.y} width={tr.w} height={tr.h} rx={5}
                    fill="#060e1d" stroke={node.color} strokeOpacity="0.28" strokeWidth="1" />
                  <text x={tr.x + 12} y={tr.y + 14} dominantBaseline="middle"
                    fill={node.color} fillOpacity="0.5" fontSize="7" fontWeight="700"
                    fontFamily="Space Mono, monospace" letterSpacing="1.5">
                    TOOL CALLS
                  </text>
                  <line x1={tr.x} y1={tr.y + 23} x2={tr.x + tr.w} y2={tr.y + 23}
                    stroke={node.color} strokeOpacity="0.1" strokeWidth="0.8" />
                  {node.tooltip!.map((tool, ti) => {
                    if (time < tool.activeAt) return null;
                    const done = time >= tool.doneAt;
                    const rf = fade(time, tool.activeAt, 0.2);
                    const rowY = tr.y + 27 + ti * TP_H_ROW + TP_H_ROW / 2;
                    const icx = tr.x + 14, icy = rowY, ir = 4.5;
                    const spPct = done ? 1 : clamp((time - tool.activeAt) / (tool.doneAt - tool.activeAt), 0.05, 0.95);
                    return (
                      <g key={ti} opacity={rf}>
                        <circle cx={icx} cy={icy} r={ir} fill="none"
                          stroke={done ? node.color : "#1a3050"} strokeWidth="0.8" strokeOpacity="0.45" />
                        {!done
                          ? <path d={spinnerPath(icx, icy, ir, spPct)} fill="none" stroke={node.color} strokeWidth="1.5" strokeLinecap="round" />
                          : <text x={icx} y={icy + 1} textAnchor="middle" dominantBaseline="middle" fill={node.color} fontSize="7" fontWeight="700">✓</text>
                        }
                        <text x={tr.x + 27} y={rowY} dominantBaseline="middle"
                          fill={done ? "#304060" : "#8eaace"}
                          fontSize="9" fontFamily="Space Mono, monospace">
                          {tool.call}
                        </text>
                        {!done && (
                          <circle cx={tr.x + tr.w - 11} cy={rowY} r={2.5}
                            fill={node.color}
                            opacity={0.65 + 0.35 * Math.sin(time * 7 + ti)}
                            filter="url(#mon-pg)" />
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })()}
          </g>
        );
      })}

      {/* ── Particles ── */}
      {particles.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r}
          fill={p.color} opacity={p.op}
          filter={p.glow ? "url(#mon-pg)" : undefined} />
      ))}

      {/* ── Legend ── */}
      <rect x={0} y={H - 46} width={W} height={46} fill="#040811" fillOpacity="0.93" />
      <line x1={0} y1={H - 46} x2={W} y2={H - 46} stroke="#0d1c30" strokeWidth="1" />
      {[
        { color: "#6366f1", label: "Observer" },
        { color: "#ef4444", label: "Factuality" },
        { color: "#06b6d4", label: "Sentiment" },
        { color: "#3b82f6", label: "Quality" },
        { color: "#10b981", label: "Compliance" },
      ].map((item, i) => (
        <g key={i} transform={`translate(${W / 2 - 330 + i * 165}, ${H - 23})`}>
          <circle cx={0} cy={0} r={5} fill={item.color} opacity="0.8" />
          <text x={13} y={1} dominantBaseline="middle"
            fill={item.color} fillOpacity="0.65"
            fontSize="11" fontFamily="Space Mono, monospace" letterSpacing="0.8">
            {item.label}
          </text>
        </g>
      ))}

      <rect width={W} height={H} fill="url(#mon-vig)" pointerEvents="none" />
    </svg>
  );
};

export default MonitoringAnimation;
