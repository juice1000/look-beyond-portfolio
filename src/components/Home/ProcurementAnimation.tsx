import React from "react";

const DURATION = 10;

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

const fade = (t: number, s: number, d = 0.35) => clamp((t - s) / d, 0, 1);

function cubicBezier(
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
) {
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
}

const DOCS = [
  { label: "PO Request", activeAt: 0.3, offsetY: 0 },
  { label: "Quote PDF", activeAt: 0.8, offsetY: 18 },
  { label: "Policy Doc", activeAt: 1.3, offsetY: 36 },
];

const NODES = [
  { label: "Validate", y: 90, activeAt: 1.8, color: "#3b82f6" },
  { label: "Extract", y: 155, activeAt: 2.6, color: "#6366f1" },
  { label: "Match Suppliers", y: 220, activeAt: 3.4, color: "#8b5cf6" },
  { label: "Route Approval", y: 285, activeAt: 4.2, color: "#10b981" },
];

const ProcurementAnimation: React.FC = () => {
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

  const approvalF = fade(time, 4.8, 0.5);

  // Particles: docs → first node (horizontal)
  const docParticles = React.useMemo(() => {
    if (time < 1.3) return [];
    const ps: Array<{ x: number; y: number; op: number }> = [];
    for (let i = 0; i < 4; i++) {
      const t = (time * 0.6 + i / 4) % 1;
      const p0 = { x: 160, y: 155 };
      const p1 = { x: 200, y: 155 };
      const p2 = { x: 230, y: 110 };
      const p3 = { x: 260, y: 90 };
      const pos = cubicBezier(t, p0, p1, p2, p3);
      ps.push({ ...pos, op: 0.9 });
      if (t > 0.07) {
        const pos2 = cubicBezier(Math.max(0, t - 0.07), p0, p1, p2, p3);
        ps.push({ ...pos2, op: 0.2 });
      }
    }
    return ps;
  }, [time]);

  // Particles: vertical flows between nodes
  const nodeParticles = React.useMemo(() => {
    const ps: Array<{ x: number; y: number; color: string; op: number }> = [];
    for (let i = 0; i < NODES.length - 1; i++) {
      const src = NODES[i];
      const dst = NODES[i + 1];
      if (time < src.activeAt + 0.4) continue;
      for (let j = 0; j < 3; j++) {
        const t = (time * 0.55 + j / 3) % 1;
        const p0 = { x: 270, y: src.y + 14 };
        const p1 = { x: 270, y: src.y + 30 };
        const p2 = { x: 270, y: dst.y - 30 };
        const p3 = { x: 270, y: dst.y - 14 };
        const pos = cubicBezier(t, p0, p1, p2, p3);
        ps.push({ ...pos, color: src.color, op: 0.9 });
        if (t > 0.07) {
          const pos2 = cubicBezier(Math.max(0, t - 0.07), p0, p1, p2, p3);
          ps.push({ ...pos2, color: src.color, op: 0.2 });
        }
      }
    }
    return ps;
  }, [time]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 520 340"
      preserveAspectRatio="xMidYMid meet"
      className="block"
    >
      <defs>
        <pattern
          id="proc-dots"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="0.7" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <filter id="proc-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="proc-glow2" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="proc-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width={520} height={340} fill="#060b18" />
      <rect width={520} height={340} fill="url(#proc-dots)" />

      {/* ── Document stack (x:20-160) ── */}
      {DOCS.map((doc, i) => {
        const f = fade(time, doc.activeAt, 0.4);
        if (f <= 0) return null;
        const baseY = 120 + doc.offsetY;
        return (
          <g key={doc.label} opacity={f}>
            {/* Card shadow/depth */}
            <rect
              x={24 + i * 3}
              y={baseY + i * 3}
              width={132}
              height={72}
              rx={5}
              fill="#040910"
              stroke="#0a1828"
              strokeWidth={0.8}
            />
            {/* Card */}
            <rect
              x={20}
              y={baseY}
              width={132}
              height={72}
              rx={5}
              fill="#060e1e"
              stroke="#1e3a6e"
              strokeWidth={1}
            />
            {/* Header bar */}
            <rect
              x={20}
              y={baseY}
              width={132}
              height={20}
              rx={5}
              fill="#0a1525"
            />
            <rect x={20} y={baseY + 12} width={132} height={8} fill="#0a1525" />
            <text
              x={30}
              y={baseY + 10}
              dominantBaseline="middle"
              fill="#60a5fa"
              fontSize={7.5}
              fontWeight={700}
              fontFamily="Space Mono, monospace"
              letterSpacing={0.5}
            >
              {doc.label}
            </text>
            {/* Text lines */}
            {[0, 1, 2].map((li) => (
              <rect
                key={li}
                x={28}
                y={baseY + 28 + li * 12}
                width={80 - li * 15}
                height={4}
                rx={2}
                fill="#0f2540"
              />
            ))}
          </g>
        );
      })}

      {/* Connection line: docs → pipeline */}
      {time >= 1.3 && (
        <path
          d="M160,155 C200,155 230,110 260,90"
          fill="none"
          stroke="#1e3a5f"
          strokeWidth={0.8}
          strokeDasharray="4 3"
        />
      )}

      {/* ── Pipeline nodes (x:190-350, centered x:270) ── */}
      {NODES.map((node, i) => {
        const f = fade(time, node.activeAt, 0.4);
        return (
          <g key={node.label}>
            {/* Background glow when active */}
            {f > 0 && (
              <rect
                x={190}
                y={node.y - 22}
                width={160}
                height={44}
                rx={5}
                fill={node.color}
                fillOpacity={0.06 * f}
                filter="url(#proc-glow2)"
              />
            )}
            {/* Node rect */}
            <rect
              x={190}
              y={node.y - 14}
              width={160}
              height={28}
              rx={4}
              fill={f > 0 ? `${node.color}18` : "#08111f"}
              stroke={f > 0 ? node.color : "#0e1c32"}
              strokeWidth={f > 0 ? 1.3 : 0.7}
              filter={f > 0 ? "url(#proc-glow)" : undefined}
            />
            {/* Index badge */}
            <circle
              cx={205}
              cy={node.y}
              r={8}
              fill={f > 0 ? node.color : "#0a1525"}
              fillOpacity={f > 0 ? 0.25 : 1}
            />
            <text
              x={205}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={f > 0 ? node.color : "#1a3050"}
              fontSize={7}
              fontWeight={700}
              fontFamily="Space Mono, monospace"
            >
              {i + 1}
            </text>
            <text
              x={220}
              y={node.y}
              dominantBaseline="middle"
              fill={f > 0 ? "#c8d8f0" : "#162035"}
              fontSize={9}
              fontFamily="Space Mono, monospace"
            >
              {node.label}
            </text>
            {/* Activity pulse */}
            {f > 0 && (
              <circle
                cx={338}
                cy={node.y}
                r={3}
                fill={node.color}
                opacity={0.6 + 0.4 * Math.sin(time * 5 + i)}
                filter="url(#proc-pg)"
              />
            )}
          </g>
        );
      })}

      {/* Vertical connection lines between nodes */}
      {NODES.slice(0, -1).map((node, i) => {
        const nextNode = NODES[i + 1];
        return (
          <line
            key={`vline-${i}`}
            x1={270}
            y1={node.y + 14}
            x2={270}
            y2={nextNode.y - 14}
            stroke="#0e1c30"
            strokeWidth={0.8}
            strokeDasharray="3 3"
          />
        );
      })}

      {/* ── Approval stamp (x:390-500, cx:445, cy:170) ── */}
      {approvalF > 0 && (
        <g opacity={approvalF}>
          {/* Outer glow ring */}
          <circle
            cx={445}
            cy={170}
            r={50}
            fill="none"
            stroke="#10b981"
            strokeWidth={3}
            strokeOpacity={0.12 + 0.08 * Math.sin(time * 3)}
            filter="url(#proc-glow2)"
          />
          {/* Pulsing ring */}
          <circle
            cx={445}
            cy={170}
            r={44 + 4 * Math.sin(time * 2.5)}
            fill="none"
            stroke="#10b981"
            strokeWidth={1.5}
            strokeOpacity={0.3 + 0.2 * Math.sin(time * 2.5)}
          />
          {/* Main circle */}
          <circle
            cx={445}
            cy={170}
            r={42}
            fill="#06120e"
            stroke="#10b981"
            strokeWidth={2.5}
            filter="url(#proc-glow)"
          />
          {/* Inner ring */}
          <circle
            cx={445}
            cy={170}
            r={35}
            fill="none"
            stroke="#10b981"
            strokeWidth={0.8}
            strokeOpacity={0.4}
          />
          <text
            x={445}
            y={168}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#10b981"
            fontSize={9}
            fontWeight={700}
            fontFamily="Space Mono, monospace"
            letterSpacing={1.5}
          >
            APPROVED
          </text>
        </g>
      )}

      {/* Connection line: last node → approval */}
      {approvalF > 0 && (
        <line
          x1={350}
          y1={285}
          x2={403}
          y2={200}
          stroke="#10b981"
          strokeWidth={0.8}
          strokeOpacity={0.3 * approvalF}
          strokeDasharray="4 3"
        />
      )}

      {/* ── Particles ── */}
      {docParticles.map((p, i) => (
        <circle
          key={`dp-${i}`}
          cx={p.x}
          cy={p.y}
          r={i % 5 === 0 ? 3 : 1.5}
          fill="#3b82f6"
          opacity={p.op}
          filter={i % 5 === 0 ? "url(#proc-pg)" : undefined}
        />
      ))}
      {nodeParticles.map((p, i) => (
        <circle
          key={`np-${i}`}
          cx={p.x}
          cy={p.y}
          r={i % 4 === 0 ? 3 : 1.5}
          fill={p.color}
          opacity={p.op}
          filter={i % 4 === 0 ? "url(#proc-pg)" : undefined}
        />
      ))}
    </svg>
  );
};

export default ProcurementAnimation;
