import React from "react";

const W = 1100;
const H = 760;
const AN_DURATION = 12;

export const useAgentNetworkTime = () => {
  const [time, setTime] = React.useState(0);
  const frame = React.useRef<number>();
  const start = React.useRef<number>();

  React.useEffect(() => {
    const tick = (now: number) => {
      if (!start.current) start.current = now;
      setTime(((now - start.current) / 1000) % AN_DURATION);
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
  return `M${cx + r * Math.cos(s)},${cy + r * Math.sin(s)} A${r},${r} 0 ${pct > 0.5 ? 1 : 0},1 ${cx + r * Math.cos(e)},${cy + r * Math.sin(e)}`;
}

type NodeType = "trigger" | "orchestrator" | "executor" | "output";

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

const RAW_NODES: NodeData[] = [
  { id: "task",        label: "Order #ORD-4821",    sublabel: "New customer order",       type: "trigger",      color: "#64748b", x: 280, y: 50,  hw: 82,  hh: 18, activateAt: 0.0 },
  { id: "supervisor",  label: "Supervisor Agent",   sublabel: "Planning & Coordination",  type: "orchestrator", color: "#f59e0b", x: 280, y: 310, hw: 108, hh: 38, activateAt: 0.5,
    tooltip: [
      { call: 'parse_order("#ORD-4821")',   activeAt: 0.7,  doneAt: 1.2 },
      { call: "create_execution_plan()",    activeAt: 1.2,  doneAt: 1.8 },
    ],
  },
  { id: "inventory",   label: "Inventory Agent",    sublabel: "Stock Verification",       type: "executor",     color: "#3b82f6", x: 840, y: 155, hw: 80,  hh: 22, activateAt: 2.0, status: "Checking stock levels..." },
  { id: "pricing",     label: "Pricing Agent",      sublabel: "Price Calculation",        type: "executor",     color: "#06b6d4", x: 840, y: 300, hw: 76,  hh: 22, activateAt: 3.1, status: "Calculating pricing..." },
  { id: "compliance",  label: "Compliance Agent",   sublabel: "Order Validation",         type: "executor",     color: "#ef4444", x: 840, y: 445, hw: 80,  hh: 22, activateAt: 4.2, status: "Validating compliance..." },
  { id: "fulfillment", label: "Fulfillment Agent",  sublabel: "Shipment Creation",        type: "executor",     color: "#8b5cf6", x: 840, y: 590, hw: 80,  hh: 22, activateAt: 5.9, status: "Creating shipment..." },
  { id: "output",      label: "Order Dispatched",   sublabel: "#ORD-4821 · Complete",     type: "output",       color: "#22c55e", x: 280, y: 645, hw: 95,  hh: 20, activateAt: 7.5 },
];

const NMAP = Object.fromEntries(RAW_NODES.map((n) => [n.id, n]));

const TYPE_LABEL: Record<NodeType, string> = {
  trigger:      "INPUT",
  orchestrator: "SUPERVISOR",
  executor:     "AGENT",
  output:       "OUTPUT",
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

interface RawEdge {
  from: string;
  to: string;
  activeAt: number;
  type?: string;
}

const EDGES = (
  [
    // Task arrives
    { from: "task",        to: "supervisor",  activeAt: 0.2 },
    // Phase 1 — Inventory
    { from: "supervisor",  to: "inventory",   activeAt: 1.9 },
    { from: "inventory",   to: "supervisor",  activeAt: 2.6, type: "response" },
    // Phase 2 — Pricing
    { from: "supervisor",  to: "pricing",     activeAt: 3.0 },
    { from: "pricing",     to: "supervisor",  activeAt: 3.7, type: "response" },
    // Phase 3 — Compliance (back-and-forth: query → clarification → approval)
    { from: "supervisor",  to: "compliance",  activeAt: 4.1 },
    { from: "compliance",  to: "supervisor",  activeAt: 4.8, type: "query" },   // "Need tax ID"
    { from: "supervisor",  to: "compliance",  activeAt: 5.1 },                  // clarification
    { from: "compliance",  to: "supervisor",  activeAt: 5.5, type: "response" },// approved
    // Phase 4 — Fulfillment
    { from: "supervisor",  to: "fulfillment", activeAt: 5.9 },
    { from: "fulfillment", to: "supervisor",  activeAt: 6.6, type: "response" },
    // Done
    { from: "supervisor",  to: "output",      activeAt: 7.2 },
  ] as RawEdge[]
).map((e) => ({ ...e, ...routeEdge(NMAP[e.from], NMAP[e.to]) }));

interface AgentNetworkProps {
  time: number;
  isDarkMode: boolean;
}

const AgentNetwork = ({ time, isDarkMode }: AgentNetworkProps) => {
  const theme = isDarkMode
    ? {
        bg: "#060b18",
        dots: "rgba(255,255,255,0.06)",
        edge: "#0e1c30",
        inactiveFill: "#08111f",
        inactiveStroke: "#0e1c32",
        inactiveLabel: "#172540",
        inactiveTitle: "#162035",
        inactiveSubtle: "#0f1e30",
        panel: "#060e1d",
        panelText: "#8eaace",
        doneText: "#304060",
        activeText: "#dde8f8",
        activeOutputText: "#ffffff",
        legendBg: "#040811",
        legendLine: "#0d1c30",
        vignette: "#030610",
        vignetteOpacity: "0.6",
      }
    : {
        bg: "transparent",
        dots: "rgba(37,99,235,0.07)",
        edge: "#94a3b8",
        inactiveFill: "rgba(255,255,255,0.55)",
        inactiveStroke: "rgba(148,163,184,0.45)",
        inactiveLabel: "#94a3b8",
        inactiveTitle: "#94a3b8",
        inactiveSubtle: "#94a3b8",
        panel: "rgba(255,255,255,0.82)",
        panelText: "#64748b",
        doneText: "#334155",
        activeText: "#0f172a",
        activeOutputText: "#0f172a",
        legendBg: "rgba(240,245,250,0.88)",
        legendLine: "#cbd5e1",
        vignette: "rgba(240,245,250,0.0)",
        vignetteOpacity: "0",
      };

  const particles = React.useMemo(() => {
    const ps: Array<{ x: number; y: number; color: string; r: number; op: number; glow: boolean }> = [];
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

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="block"
    >
      <defs>
        <pattern id="an-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="0.8" fill={theme.dots} />
        </pattern>
        <filter id="an-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="an-glow2" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="12" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="an-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="an-vig" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor={theme.vignette} stopOpacity={theme.vignetteOpacity} />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill={theme.bg} />
      <rect width={W} height={H} fill="url(#an-dots)" />

      {/* Edges */}
      {EDGES.map((e, i) => {
        const af = time >= e.activeAt ? fade(time, e.activeAt, 0.5) : 0;
        const pathD = `M${e.p0.x},${e.p0.y} C${e.p1.x},${e.p1.y} ${e.p2.x},${e.p2.y} ${e.p3.x},${e.p3.y}`;
        const srcColor = NMAP[e.from].color;
        const isReturn = e.type === "response" || e.type === "query";
        return (
          <g key={i}>
            <path
              d={pathD}
              fill="none"
              stroke={theme.edge}
              strokeWidth={isReturn ? "0.8" : "1.2"}
              strokeDasharray={isReturn ? "4 4" : undefined}
            />
            {af > 0 && (
              <path
                d={pathD}
                fill="none"
                stroke={srcColor}
                strokeWidth={isReturn ? "1" : "1.5"}
                strokeOpacity={(isReturn ? 0.28 : 0.4) * af}
                strokeDasharray={isReturn ? "4 4" : undefined}
                filter="url(#an-glow)"
              />
            )}
            {af > 0.5 && (() => {
              const tip = e.p3;
              const near = cubicBezier(0.96, e.p0, e.p1, e.p2, e.p3);
              const angle = Math.atan2(tip.y - near.y, tip.x - near.x);
              const a1 = angle + 0.4;
              const a2 = angle - 0.4;
              const ar = 7;
              return (
                <polygon
                  points={`${tip.x},${tip.y} ${tip.x - ar * Math.cos(a1)},${tip.y - ar * Math.sin(a1)} ${tip.x - ar * Math.cos(a2)},${tip.y - ar * Math.sin(a2)}`}
                  fill={srcColor}
                  fillOpacity={0.65 * af}
                />
              );
            })()}
          </g>
        );
      })}

      {/* Nodes */}
      {RAW_NODES.map((node) => {
        const hf = fade(time, node.activateAt, 0.45);
        const on = hf > 0;
        const rx = node.type === "orchestrator" ? 6 : 4;
        const hasTooltip = !!node.tooltip;

        let tp: { tr: ReturnType<typeof tooltipRect>; panelOp: number } | null = null;
        if (hasTooltip && node.tooltip) {
          const panelIn = fade(time, node.tooltip[0].activeAt, 0.3);
          const lastTool = node.tooltip[node.tooltip.length - 1];
          const panelOut =
            lastTool.doneAt + 0.8 < AN_DURATION
              ? fade(time, lastTool.doneAt + 0.8, 0.5)
              : 0;
          const panelOp = Math.max(0, panelIn - panelOut);
          if (panelOp > 0.01) tp = { tr: tooltipRect(node), panelOp };
        }

        const showStatus = !hasTooltip && node.status && on && hf > 0.3;

        return (
          <g key={node.id}>
            {on && (
              <rect
                x={node.x - node.hw - 8}
                y={node.y - node.hh - 8}
                width={(node.hw + 8) * 2}
                height={(node.hh + 8) * 2}
                rx={rx + 4}
                fill={node.color}
                fillOpacity={0.06 * hf}
                filter="url(#an-glow2)"
              />
            )}
            <rect
              x={node.x - node.hw}
              y={node.y - node.hh}
              width={node.hw * 2}
              height={node.hh * 2}
              rx={rx}
              fill={on ? `${node.color}20` : theme.inactiveFill}
              stroke={on ? node.color : theme.inactiveStroke}
              strokeWidth={
                on
                  ? node.type === "orchestrator"
                    ? 1.8
                    : 1.3
                  : 0.7
              }
              filter={on ? "url(#an-glow)" : undefined}
            />
            <text
              x={node.x - node.hw + 8}
              y={node.y - node.hh + 11}
              dominantBaseline="middle"
              fill={on ? node.color : theme.inactiveLabel}
              fillOpacity="0.55"
              fontSize="7"
              fontWeight="700"
              fontFamily="Space Mono, monospace"
              letterSpacing="1.2"
            >
              {TYPE_LABEL[node.type]}
            </text>
            <text
              x={node.x}
              y={node.y - 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={
                on
                  ? node.type === "trigger" || node.type === "output"
                    ? theme.activeOutputText
                    : theme.activeText
                  : theme.inactiveTitle
              }
              fontSize={
                node.type === "orchestrator"
                  ? 12
                  : 10
              }
              fontWeight="700"
              fontFamily="Space Mono, monospace"
              letterSpacing="0.8"
            >
              {node.label}
            </text>
            {node.sublabel && (
              <text
                x={node.x}
                y={node.y + 11}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={on ? node.color : theme.inactiveSubtle}
                fillOpacity="0.6"
                fontSize="8.5"
                fontFamily="Space Grotesk, sans-serif"
              >
                {node.sublabel}
              </text>
            )}
            {node.type === "trigger" && time < 0.6 && (
              <rect
                x={node.x - node.hw - 10}
                y={node.y - node.hh - 10}
                width={(node.hw + 10) * 2}
                height={(node.hh + 10) * 2}
                rx={rx + 6}
                fill="none"
                stroke={node.color}
                strokeWidth={1}
                opacity={1 - time / 0.6}
              />
            )}
            {node.type === "output" && on && (
              <rect
                x={node.x - node.hw - 5}
                y={node.y - node.hh - 5}
                width={(node.hw + 5) * 2}
                height={(node.hh + 5) * 2}
                rx={rx + 3}
                fill="none"
                stroke={node.color}
                strokeWidth={1.5}
                strokeOpacity={0.4 + 0.2 * Math.sin(time * 3)}
                filter="url(#an-glow)"
              />
            )}
            {on && !hasTooltip && node.type !== "trigger" && node.type !== "output" && (
              <circle
                cx={node.x + node.hw - 10}
                cy={node.y - node.hh + 10}
                r={3}
                fill={node.color}
                opacity={0.6 + 0.4 * Math.sin(time * 5 + node.x)}
                filter="url(#an-pg)"
              />
            )}
            {showStatus && (
              <text
                x={node.x}
                y={node.y + node.hh + 14}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.color}
                fillOpacity="0.7"
                fontSize="8"
                fontFamily="Space Mono, monospace"
              >
                {node.status}
              </text>
            )}
            {tp &&
              (() => {
                const { tr, panelOp } = tp;
                const arrowX = tr.side === "right" ? tr.x : tr.x + tr.w;
                const connX =
                  tr.side === "right" ? node.x + node.hw : node.x - node.hw;
                return (
                  <g opacity={panelOp}>
                    <line
                      x1={connX}
                      y1={node.y}
                      x2={arrowX + (tr.side === "right" ? -1 : 1) * 10}
                      y2={node.y}
                      stroke={node.color}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      strokeDasharray="3 3"
                    />
                    <polygon
                      points={
                        tr.side === "right"
                          ? `${tr.x},${node.y} ${tr.x - 9},${node.y - 5} ${tr.x - 9},${node.y + 5}`
                          : `${tr.x + tr.w},${node.y} ${tr.x + tr.w + 9},${node.y - 5} ${tr.x + tr.w + 9},${node.y + 5}`
                      }
                      fill={theme.panel}
                      stroke={node.color}
                      strokeOpacity="0.3"
                      strokeWidth="1"
                    />
                    <rect
                      x={tr.side === "right" ? tr.x : tr.x + tr.w - 2}
                      y={node.y - 7}
                      width={4}
                      height={14}
                      fill={theme.panel}
                    />
                    <rect
                      x={tr.x}
                      y={tr.y}
                      width={tr.w}
                      height={tr.h}
                      rx={5}
                      fill={theme.panel}
                      stroke={node.color}
                      strokeOpacity="0.28"
                      strokeWidth="1"
                    />
                    <text
                      x={tr.x + 12}
                      y={tr.y + 14}
                      dominantBaseline="middle"
                      fill={node.color}
                      fillOpacity="0.5"
                      fontSize="7"
                      fontWeight="700"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="1.5"
                    >
                      TOOL CALLS
                    </text>
                    <line
                      x1={tr.x}
                      y1={tr.y + 23}
                      x2={tr.x + tr.w}
                      y2={tr.y + 23}
                      stroke={node.color}
                      strokeOpacity="0.1"
                      strokeWidth="0.8"
                    />
                    {node.tooltip!.map((tool, ti) => {
                      if (time < tool.activeAt) return null;
                      const done = time >= tool.doneAt;
                      const rf = fade(time, tool.activeAt, 0.2);
                      const rowY = tr.y + 27 + ti * TP_H_ROW + TP_H_ROW / 2;
                      const icx = tr.x + 14;
                      const icy = rowY;
                      const ir = 4.5;
                      const spPct = done
                        ? 1
                        : clamp(
                            (time - tool.activeAt) /
                              (tool.doneAt - tool.activeAt),
                            0.05,
                            0.95
                          );
                      return (
                        <g key={ti} opacity={rf}>
                          <circle
                            cx={icx}
                            cy={icy}
                            r={ir}
                            fill="none"
                            stroke={done ? node.color : theme.inactiveLabel}
                            strokeWidth="0.8"
                            strokeOpacity="0.45"
                          />
                          {!done ? (
                            <path
                              d={spinnerPath(icx, icy, ir, spPct)}
                              fill="none"
                              stroke={node.color}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          ) : (
                            <text
                              x={icx}
                              y={icy + 1}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill={node.color}
                              fontSize="7"
                              fontWeight="700"
                            >
                              ✓
                            </text>
                          )}
                          <text
                            x={tr.x + 27}
                            y={rowY}
                            dominantBaseline="middle"
                            fill={done ? theme.doneText : theme.panelText}
                            fontSize="9"
                            fontFamily="Space Mono, monospace"
                          >
                            {tool.call}
                          </text>
                          {!done && (
                            <circle
                              cx={tr.x + tr.w - 11}
                              cy={rowY}
                              r={2.5}
                              fill={node.color}
                              opacity={0.65 + 0.35 * Math.sin(time * 7 + ti)}
                              filter="url(#an-pg)"
                            />
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

      {/* Particles */}
      {particles.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={p.color}
          opacity={p.op}
          filter={p.glow ? "url(#an-pg)" : undefined}
        />
      ))}

      {/* Legend */}
      <rect x={0} y={H - 46} width={W} height={46} fill={theme.legendBg} fillOpacity="0.93" />
      <line x1={0} y1={H - 46} x2={W} y2={H - 46} stroke={theme.legendLine} strokeWidth="1" />
      {[
        { color: "#f59e0b", label: "Supervisor" },
        { color: "#3b82f6", label: "Inventory" },
        { color: "#06b6d4", label: "Pricing" },
        { color: "#ef4444", label: "Compliance" },
        { color: "#8b5cf6", label: "Fulfillment" },
      ].map((item, i) => (
        <g key={i} transform={`translate(${W / 2 - 340 + i * 170}, ${H - 23})`}>
          <circle cx={0} cy={0} r={5} fill={item.color} opacity="0.8" />
          <text
            x={13}
            y={1}
            dominantBaseline="middle"
            fill={item.color}
            fillOpacity="0.65"
            fontSize="11"
            fontFamily="Space Mono, monospace"
            letterSpacing="0.8"
          >
            {item.label}
          </text>
        </g>
      ))}

      <rect width={W} height={H} fill="url(#an-vig)" pointerEvents="none" />
    </svg>
  );
};

export default AgentNetwork;
