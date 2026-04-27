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

type NodeType = "monitor" | "report" | "alert";

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
}

interface SubProc {
  label: string;
  color: string;
  activeAt: number;
  doneAt: number;
}

const SUBPROCS: SubProc[] = [
  { label: "Factuality Check",   color: "#ef4444", activeAt: 3.8, doneAt: 6.8 },
  { label: "Sentiment Analyzer", color: "#06b6d4", activeAt: 3.9, doneAt: 6.4 },
  { label: "Quality Scorer",     color: "#3b82f6", activeAt: 4.0, doneAt: 6.6 },
  { label: "Policy Check",       color: "#10b981", activeAt: 4.1, doneAt: 6.5 },
];

// Chat window in SVG space: x:100–435, y:18–468 (shifted right +80 via <g transform>)
// Observer left edge: x:605
const INTERCEPT = {
  activeAt: 0.5,
  color: "#6366f1",
  p0: { x: 436, y: 243 },
  p1: { x: 510, y: 243 },
  p2: { x: 555, y: 300 },
  p3: { x: 605, y: 320 },
};

// Observer: centered x:720, y:320, hw:115, hh:105 → card 230×210, top:215, bottom:425
// Report / Alert stacked below
const RAW_NODES: NodeData[] = [
  {
    id: "observer", label: "Observation Engine", sublabel: "Performance Monitor",
    type: "monitor", color: "#6366f1", x: 720, y: 320, hw: 115, hh: 105, activateAt: 2.4,
  },
  {
    id: "report", label: "Health Report", sublabel: "Analysis Complete",
    type: "report", color: "#8b5cf6", x: 720, y: 565, hw: 90, hh: 26, activateAt: 7.0,
  },
  {
    id: "alert", label: "Email Alert Sent", sublabel: "Factuality: 0.41 ⚠",
    type: "alert", color: "#f97316", x: 720, y: 650, hw: 90, hh: 26, activateAt: 7.6,
  },
];

const NMAP = Object.fromEntries(RAW_NODES.map((n) => [n.id, n]));

const TYPE_LABEL: Record<NodeType, string> = {
  monitor: "OBSERVER",
  report:  "REPORT",
  alert:   "ALERT",
};

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
    { from: "observer", to: "report", activeAt: 6.8 },
    { from: "report",   to: "alert",  activeAt: 7.3 },
  ] as RawEdge[]
).map((e) => ({ ...e, ...routeEdge(NMAP[e.from], NMAP[e.to]) }));

const BOT_LINES = [
  { text: "I'm sorry to hear about your order.",       activeAt: 1.4  },
  { text: "I can see #ORD-2847 was placed on Apr 24.", activeAt: 1.85 },
  { text: "A replacement has been approved and will",  activeAt: 2.2  },
  { text: "ship within 2–3 business days.",            activeAt: 2.4  },
];

interface MonitoringAnimationProps {
  time: number;
  isDarkMode: boolean;
}

const MonitoringAnimation = ({ time, isDarkMode }: MonitoringAnimationProps) => {
  const theme = isDarkMode
    ? {
        bg: "#060b18",
        dots: "rgba(255,255,255,0.06)",
        edge: "#0e1c30",
        window: "#060e1e",
        header: "#0a1525",
        panel: "#0c1a2e",
        panelStroke: "#0f2540",
        bubble: "#1e3a5f",
        bubbleStroke: "#2a4d80",
        iconBg: "#1a2e50",
        text: "#c8d8f0",
        activeText: "#dde8f8",
        inactiveFill: "#08111f",
        inactiveStroke: "#0e1c32",
        inactiveLabel: "#172540",
        inactiveTitle: "#162035",
        inactiveSubtle: "#0f1e30",
        rowText: "#8eaace",
        doneText: "#304060",
        spinnerTrack: "#1a3050",
        legendBg: "#040811",
        legendLine: "#0d1c30",
        vignette: "#030610",
        vignetteOpacity: "0.6",
      }
    : {
        bg: "#f8fafc",
        dots: "rgba(37,99,235,0.08)",
        edge: "#cbd5e1",
        window: "#ffffff",
        header: "#eaf1f9",
        panel: "#ffffff",
        panelStroke: "#c2cedb",
        bubble: "#dbeafe",
        bubbleStroke: "#93c5fd",
        iconBg: "#dbeafe",
        text: "#334155",
        activeText: "#0f172a",
        inactiveFill: "#ffffff",
        inactiveStroke: "#c2cedb",
        inactiveLabel: "#94a3b8",
        inactiveTitle: "#94a3b8",
        inactiveSubtle: "#94a3b8",
        rowText: "#64748b",
        doneText: "#334155",
        spinnerTrack: "#94a3b8",
        legendBg: "#eef3f8",
        legendLine: "#cbd5e1",
        vignette: "#f8fafc",
        vignetteOpacity: "0",
      };

  const particles = React.useMemo(() => {
    const ps: Array<{ x: number; y: number; color: string; r: number; op: number; glow: boolean }> = [];

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
      const color = NMAP[e.from].color;
      for (let i = 0; i < 4; i++) {
        const t = (el * 0.6 + i / 4) % 1;
        const pos = cubicBezier(t, e.p0, e.p1, e.p2, e.p3);
        ps.push({ ...pos, color, r: 3.5, op: 0.88, glow: true });
        if (t > 0.06) {
          const pos2 = cubicBezier(Math.max(0, t - 0.06), e.p0, e.p1, e.p2, e.p3);
          ps.push({ ...pos2, color, r: 1.5, op: 0.2, glow: false });
        }
      }
    });
    return ps;
  }, [time]);

  const chatWinF    = fade(time, 0.0, 0.4);
  const userBubF    = fade(time, 0.3, 0.35);
  const typingF     = time >= 0.9 && time < 1.4 ? fade(time, 0.9, 0.3) : 0;
  const interceptF  = fade(time, INTERCEPT.activeAt, 0.5);
  const monBadgeF   = fade(time, 2.4, 0.5); // badge + border highlight
  const userBub2F   = fade(time, 8.0, 0.35);
  const typing2F    = time >= 8.5 && time < 9.2 ? fade(time, 8.5, 0.3) : 0;
  const bot2Line1F  = fade(time, 9.2, 0.4);
  const bot2Line2F  = fade(time, 9.6, 0.4);

  const interceptPath = `M${INTERCEPT.p0.x},${INTERCEPT.p0.y} C${INTERCEPT.p1.x},${INTERCEPT.p1.y} ${INTERCEPT.p2.x},${INTERCEPT.p2.y} ${INTERCEPT.p3.x},${INTERCEPT.p3.y}`;

  const obs = NMAP["observer"];
  const obs_hf = fade(time, obs.activateAt, 0.45);
  // Card geometry constants
  const cardLeft  = obs.x - obs.hw;  // 605
  const cardTop   = obs.y - obs.hh;  // 215
  const cardRight = obs.x + obs.hw;  // 835
  const rowBaseY  = cardTop + 68;    // 283 — first subprocess row center
  const rowStep   = 33;
  const iconX     = cardLeft + 18;   // 623
  const iconR     = 5;

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
          <circle cx="14" cy="14" r="0.8" fill={theme.dots} />
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
          <stop offset="100%" stopColor={theme.vignette} stopOpacity={theme.vignetteOpacity} />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill={theme.bg} />
      <rect width={W} height={H} fill="url(#mon-dots)" />

      {/* ── Chat window (shifted right 80px) ── */}
      <g transform="translate(80, 0)" opacity={chatWinF}>
        <rect x={20} y={18} width={335} height={450} rx={8}
          fill={theme.window}
          stroke={monBadgeF > 0 ? "#6366f1" : theme.inactiveStroke}
          strokeWidth={monBadgeF > 0 ? 1.5 : 1}
          strokeOpacity={monBadgeF > 0 ? 0.6 + 0.25 * Math.sin(time * 3) : 1} />
        {/* Outer glow ring around whole window */}
        {monBadgeF > 0 && (
          <rect x={16} y={14} width={343} height={458} rx={10}
            fill="none" stroke="#6366f1"
            strokeWidth={2} strokeOpacity={0.12 * monBadgeF}
            filter="url(#mon-glow)" />
        )}
        <rect x={20} y={18} width={335} height={38} rx={8} fill={theme.header} />
        <rect x={20} y={42} width={335} height={14} fill={theme.header} />
        <circle cx={46} cy={37} r={4} fill="#22c55e" opacity={0.9} filter="url(#mon-pg)" />
        <text x={58} y={37} dominantBaseline="middle"
          fill={theme.text} fontSize={10} fontWeight={700}
          fontFamily="Space Mono, monospace" letterSpacing={0.5}>
          AI Support Bot
        </text>
        <text x={300} y={37} dominantBaseline="middle" textAnchor="end"
          fill="#22c55e" fontSize={8} fontFamily="Space Mono, monospace" opacity={0.8}>
          ONLINE
        </text>
        <line x1={20} y1={56} x2={355} y2={56} stroke={theme.inactiveStroke} strokeWidth={0.8} />

        <g opacity={userBubF}>
          <rect x={168} y={66} width={177} height={52} rx={8}
            fill={theme.bubble} stroke={theme.bubbleStroke} strokeWidth={0.8} />
          <text x={180} y={86} dominantBaseline="middle"
            fill={theme.text} fontSize={9} fontFamily="Space Mono, monospace">
            I got the wrong item for
          </text>
          <text x={180} y={102} dominantBaseline="middle"
            fill={theme.text} fontSize={9} fontFamily="Space Mono, monospace">
            order <tspan fill="#60a5fa">#ORD-2847</tspan>. Fix this.
          </text>
          <circle cx={339} cy={124} r={5} fill={theme.bubbleStroke} />
          <text x={339} y={124} textAnchor="middle" dominantBaseline="middle"
            fill="#60a5fa" fontSize={7} fontWeight={700}>U</text>
        </g>

        {typingF > 0 && (
          <g opacity={typingF}>
            <rect x={30} y={130} width={64} height={26} rx={6} fill={theme.panel} stroke={theme.panelStroke} strokeWidth={0.8} />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={46 + i * 16} cy={143} r={3.5}
                fill="#6366f1"
                opacity={0.4 + 0.6 * Math.abs(Math.sin(time * 6 + i * 1.2))} />
            ))}
          </g>
        )}

        <g>
          <rect x={30} y={130} width={315} height={158} rx={8}
            fill={theme.panel} stroke={theme.panelStroke} strokeWidth={0.8} />
          <circle cx={48} cy={148} r={8} fill={theme.iconBg} stroke="#3b82f6" strokeWidth={0.8} />
          <text x={48} y={148} textAnchor="middle" dominantBaseline="middle"
            fill="#60a5fa" fontSize={7} fontWeight={700}>AI</text>

          {BOT_LINES.map((line, i) => {
            const lf = fade(time, line.activeAt, 0.4);
            if (lf <= 0) return null;
            return (
              <text key={i} x={64} y={148 + i * 18} dominantBaseline="middle"
                fill={theme.text} fontSize={9.5} fontFamily="Space Grotesk, sans-serif"
                opacity={lf}>
                {line.text}
              </text>
            );
          })}

          {time >= 1.4 && time < 2.55 && (
            <rect
              x={64 + (time < 1.85 ? 185 : time < 2.2 ? 208 : time < 2.4 ? 208 : 150)}
              y={148 + (time < 1.85 ? 0 : time < 2.2 ? 18 : time < 2.4 ? 36 : 54) - 7}
              width={1.5} height={13}
              fill="#6366f1"
              opacity={Math.sin(time * 8) > 0 ? 0.9 : 0}
            />
          )}

        </g>

        {/* User message 2 */}
        <g opacity={userBub2F}>
          <rect x={168} y={302} width={177} height={36} rx={8}
            fill={theme.bubble} stroke={theme.bubbleStroke} strokeWidth={0.8} />
          <text x={180} y={320} dominantBaseline="middle"
            fill={theme.text} fontSize={9} fontFamily="Space Mono, monospace">
            Can I get expedited shipping?
          </text>
          <circle cx={339} cy={344} r={5} fill={theme.bubbleStroke} />
          <text x={339} y={344} textAnchor="middle" dominantBaseline="middle"
            fill="#60a5fa" fontSize={7} fontWeight={700}>U</text>
        </g>

        {/* Typing indicator 2 */}
        {typing2F > 0 && (
          <g opacity={typing2F}>
            <rect x={30} y={352} width={64} height={26} rx={6} fill={theme.panel} stroke={theme.panelStroke} strokeWidth={0.8} />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={46 + i * 16} cy={365} r={3.5}
                fill="#6366f1"
                opacity={0.4 + 0.6 * Math.abs(Math.sin(time * 6 + i * 1.2))} />
            ))}
          </g>
        )}

        {/* Bot response 2 */}
        {bot2Line1F > 0 && (
          <g>
            <rect x={30} y={352} width={315} height={100} rx={8}
              fill={theme.panel} stroke={theme.panelStroke} strokeWidth={0.8} />
            <circle cx={48} cy={370} r={8} fill={theme.iconBg} stroke="#3b82f6" strokeWidth={0.8} />
            <text x={48} y={370} textAnchor="middle" dominantBaseline="middle"
              fill="#60a5fa" fontSize={7} fontWeight={700}>AI</text>
            <text x={64} y={370} dominantBaseline="middle"
              fill={theme.text} fontSize={9.5} fontFamily="Space Grotesk, sans-serif"
              opacity={bot2Line1F}>
              I've upgraded your shipment to express.
            </text>
            {bot2Line2F > 0 && (
              <text x={64} y={388} dominantBaseline="middle"
                fill={theme.text} fontSize={9.5} fontFamily="Space Grotesk, sans-serif"
                opacity={bot2Line2F}>
                New tracking number: <tspan fill="#60a5fa">TRK-9921-B</tspan>.
              </text>
            )}
            {/* Cursor */}
            {time >= 9.2 && time < 9.75 && (
              <rect
                x={64 + (time < 9.6 ? 210 : 196)}
                y={(time < 9.6 ? 370 : 388) - 7}
                width={1.5} height={13}
                fill="#6366f1"
                opacity={Math.sin(time * 8) > 0 ? 0.9 : 0}
              />
            )}
          </g>
        )}
        {/* ⚡ MONITORING badge — bottom of full window */}
        {monBadgeF > 0 && (
          <g opacity={monBadgeF}>
            <rect x={138} y={451} width={120} height={18} rx={4}
              fill="#1a1060" stroke="#6366f1" strokeWidth={0.8} strokeOpacity={0.8} />
            <text x={198} y={460} textAnchor="middle" dominantBaseline="middle"
              fill="#818cf8" fontSize={7} fontWeight={700}
              fontFamily="Space Mono, monospace" letterSpacing={0.8}>
              ⚡ MONITORING ACTIVE
            </text>
          </g>
        )}
      </g>

      {/* ── Full chat window right-edge tap bar ── */}
      {interceptF > 0 && (
        <g opacity={interceptF}>
          {/* Glow bar spanning full chat window height */}
          <rect x={433} y={18} width={4} height={450} rx={2}
            fill="#6366f1" fillOpacity={0.18 + 0.08 * Math.sin(time * 3)}
            filter="url(#mon-glow)" />
          <rect x={434} y={18} width={2} height={450} rx={1}
            fill="#6366f1" fillOpacity={0.55 + 0.2 * Math.sin(time * 3)} />
        </g>
      )}

      {/* ── Intercept edge (chat → observer) ── */}
      <path d={interceptPath} fill="none" stroke={theme.edge} strokeWidth="1" strokeDasharray="4 3" />
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
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke={theme.edge} strokeWidth="1.2" />
            {af > 0 && (
              <path d={pathD} fill="none" stroke={srcColor}
                strokeWidth="1.5" strokeOpacity={0.4 * af}
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

      {/* ── Observer card (custom: subprocess rows inside) ── */}
      {obs_hf > 0 && (
        <g opacity={obs_hf}>
          {/* Outer glow */}
          <rect x={cardLeft - 8} y={cardTop - 8}
            width={(obs.hw + 8) * 2} height={(obs.hh + 8) * 2}
            rx={10} fill={obs.color} fillOpacity={0.06}
            filter="url(#mon-glow2)" />
          {/* Card background */}
          <rect x={cardLeft} y={cardTop}
            width={obs.hw * 2} height={obs.hh * 2}
            rx={6} fill={`${obs.color}18`}
            stroke={obs.color} strokeWidth={1.8}
            filter="url(#mon-glow)" />

          {/* Type label */}
          <text x={cardLeft + 10} y={cardTop + 13}
            dominantBaseline="middle"
            fill={obs.color} fillOpacity="0.55"
            fontSize="7" fontWeight="700"
            fontFamily="Space Mono, monospace" letterSpacing="1.2">
            OBSERVER
          </text>
          {/* Activity pulse */}
          <circle cx={cardRight - 10} cy={cardTop + 13}
            r={3} fill={obs.color}
            opacity={0.6 + 0.4 * Math.sin(time * 5)}
            filter="url(#mon-pg)" />
          {/* Main title */}
          <text x={obs.x} y={cardTop + 30}
            textAnchor="middle" dominantBaseline="middle"
            fill={theme.activeText} fontSize={11} fontWeight="700"
            fontFamily="Space Mono, monospace">
            Observation Engine
          </text>
          {/* Sublabel */}
          <text x={obs.x} y={cardTop + 45}
            textAnchor="middle" dominantBaseline="middle"
            fill={obs.color} fillOpacity="0.55"
            fontSize="8.5" fontFamily="Space Grotesk, sans-serif">
            Performance Monitor
          </text>
          {/* Separator */}
          <line x1={cardLeft + 8} y1={cardTop + 57}
            x2={cardRight - 8} y2={cardTop + 57}
            stroke={obs.color} strokeOpacity="0.2" strokeWidth="0.8" />

          {/* Subprocess rows */}
          {SUBPROCS.map((sp, i) => {
            const sf = fade(time, sp.activeAt, 0.3);
            if (sf <= 0) return null;
            const done = time >= sp.doneAt;
            const rowY = rowBaseY + i * rowStep;
            const spPct = done ? 1 : clamp((time - sp.activeAt) / (sp.doneAt - sp.activeAt), 0.05, 0.95);
            return (
              <g key={i} opacity={sf}>
                {/* Row highlight */}
                <rect x={cardLeft + 8} y={rowY - 11}
                  width={(obs.hw - 8) * 2} height={22}
                  rx={3} fill={sp.color} fillOpacity={0.07} />
                {/* Spinner / check */}
                <circle cx={iconX} cy={rowY} r={iconR} fill="none"
                  stroke={done ? sp.color : theme.spinnerTrack}
                  strokeWidth="0.8" strokeOpacity="0.45" />
                {!done
                  ? <path d={spinnerPath(iconX, rowY, iconR, spPct)}
                      fill="none" stroke={sp.color}
                      strokeWidth="1.5" strokeLinecap="round" />
                  : <text x={iconX} y={rowY + 1} textAnchor="middle"
                      dominantBaseline="middle"
                      fill={sp.color} fontSize="7" fontWeight="700">✓</text>
                }
                {/* Label */}
                <text x={iconX + 14} y={rowY} dominantBaseline="middle"
                  fill={done ? theme.doneText : theme.rowText}
                  fontSize="9" fontFamily="Space Mono, monospace">
                  {sp.label}
                </text>
                {/* Running indicator */}
                {!done && (
                  <circle cx={cardRight - 14} cy={rowY} r={2.5}
                    fill={sp.color}
                    opacity={0.65 + 0.35 * Math.sin(time * 7 + i)}
                    filter="url(#mon-pg)" />
                )}
              </g>
            );
          })}
        </g>
      )}

      {/* ── Report & Alert nodes (generic) ── */}
      {RAW_NODES.filter((n) => n.id !== "observer").map((node) => {
        const hf = fade(time, node.activateAt, 0.45);
        const on = hf > 0;
        const rx = 4;
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
              fill={on ? `${node.color}20` : theme.inactiveFill}
              stroke={on ? node.color : theme.inactiveStroke}
              strokeWidth={on ? 1.3 : 0.7}
              filter={on ? "url(#mon-glow)" : undefined} />

            <text x={node.x - node.hw + 8} y={node.y - node.hh + 11}
              dominantBaseline="middle"
              fill={on ? node.color : theme.inactiveLabel} fillOpacity="0.55"
              fontSize="7" fontWeight="700"
              fontFamily="Space Mono, monospace" letterSpacing="1.2">
              {TYPE_LABEL[node.type]}
            </text>
            <text x={node.x} y={node.y - 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={on ? (node.type === "alert" ? "#ffffff" : theme.activeText) : theme.inactiveTitle}
              fontSize={10} fontWeight="700"
              fontFamily="Space Mono, monospace" letterSpacing="0.8">
              {node.label}
            </text>
            {node.sublabel && (
              <text x={node.x} y={node.y + 11}
                textAnchor="middle" dominantBaseline="middle"
                fill={on ? node.color : theme.inactiveSubtle} fillOpacity="0.6"
                fontSize="8.5" fontFamily="Space Grotesk, sans-serif">
                {node.sublabel}
              </text>
            )}

            {node.type === "alert" && on && (
              <rect x={node.x - node.hw - 5} y={node.y - node.hh - 5}
                width={(node.hw + 5) * 2} height={(node.hh + 5) * 2}
                rx={rx + 3} fill="none"
                stroke={node.color} strokeWidth={1.5}
                strokeOpacity={0.4 + 0.2 * Math.sin(time * 3)}
                filter="url(#mon-glow)" />
            )}

            {on && node.type !== "alert" && (
              <circle cx={node.x + node.hw - 10} cy={node.y - node.hh + 10}
                r={3} fill={node.color}
                opacity={0.6 + 0.4 * Math.sin(time * 5 + node.x)}
                filter="url(#mon-pg)" />
            )}
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
      <rect x={0} y={H - 46} width={W} height={46} fill={theme.legendBg} fillOpacity="0.93" />
      <line x1={0} y1={H - 46} x2={W} y2={H - 46} stroke={theme.legendLine} strokeWidth="1" />
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
