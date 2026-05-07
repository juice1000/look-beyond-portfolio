import React from "react";
import { clamp, fade, cubicBezier, useAnimationTime } from "../../utils/animationHelpers";

interface ManufacturingAnimationProps { isDarkMode: boolean; }

const SENSORS = [
  {
    label: "TEMP",
    color: "#ef4444",
    y: 110,
    valueBase: 312,
    valueAmp: 8,
    valueFreq: 0.7,
    valueOffset: 0,
    unit: "°C",
    formatFn: (v: number) => `${Math.round(v)}°C`,
  },
  {
    label: "VIBR",
    color: "#f59e0b",
    y: 170,
    valueBase: 0.42,
    valueAmp: 0.18,
    valueFreq: 1.1,
    valueOffset: 1.0,
    unit: "mm/s",
    formatFn: (v: number) => `${v.toFixed(2)}mm/s`,
  },
  {
    label: "OUTPUT",
    color: "#10b981",
    y: 230,
    valueBase: 97,
    valueAmp: 3,
    valueFreq: 0.5,
    valueOffset: 2.0,
    unit: "units/h",
    formatFn: (v: number) => `${Math.round(v)} units/h`,
  },
];

const ManufacturingAnimation: React.FC<ManufacturingAnimationProps> = ({ isDarkMode }) => {
  const time = useAnimationTime(10);

  const connectorStroke = isDarkMode ? undefined : "#64748b";
  const connectorOpacity = isDarkMode ? 0.2 : 0.75;
  const connectorWidth = isDarkMode ? 0.8 : 2;

  const rotorAngle = time * 1.2; // radians, ~69°/s

  // Sensor values
  const sensorValues = SENSORS.map((s) =>
    s.valueBase + s.valueAmp * Math.sin(time * s.valueFreq + s.valueOffset),
  );

  const vibr = sensorValues[1];
  const alertActive = vibr > 0.55;

  // Particles along each sensor line
  const particles = React.useMemo(() => {
    const ps: Array<{ x: number; y: number; color: string; op: number }> = [];
    SENSORS.forEach((s, si) => {
      const p0 = { x: 210, y: s.y };
      const p1 = { x: 240, y: s.y };
      const p2 = { x: 280, y: s.y };
      const p3 = { x: 310, y: s.y };
      for (let i = 0; i < 3; i++) {
        const t = ((time * 0.7 + si * 0.33 + i / 3) % 1);
        const pos = cubicBezier(t, p0, p1, p2, p3);
        ps.push({ ...pos, color: s.color, op: 0.9 });
        if (t > 0.07) {
          const pos2 = cubicBezier(
            Math.max(0, t - 0.07),
            p0,
            p1,
            p2,
            p3,
          );
          ps.push({ ...pos2, color: s.color, op: 0.2 });
        }
      }
    });
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
        <pattern id="mfg-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.7" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <filter id="mfg-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mfg-glow2" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mfg-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {alertActive && (
          <filter id="mfg-alert-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Background — transparent so glass card shows through */}

      {/* ── Machine block (x:30-210, y:50-290) ── */}
      <rect
        x={30}
        y={50}
        width={180}
        height={240}
        rx={6}
        fill={isDarkMode ? "#060e1e" : "rgba(248,250,252,0.85)"}
        stroke={isDarkMode ? "#0f1e35" : "#cbd5e1"}
        strokeWidth={1.2}
      />
      {/* Machine header */}
      <rect x={30} y={50} width={180} height={30} rx={6} fill={isDarkMode ? "#080f20" : "rgba(241,245,249,0.95)"} />
      <rect x={30} y={68} width={180} height={12} fill={isDarkMode ? "#080f20" : "rgba(241,245,249,0.95)"} />
      <text
        x={120}
        y={65}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#60a5fa"
        fontSize={9}
        fontWeight={700}
        fontFamily="Space Mono, monospace"
        letterSpacing={1.5}
      >
        UNIT-04
      </text>

      {/* Rotor outer ring */}
      <circle
        cx={120}
        cy={170}
        r={50}
        fill="none"
        stroke="#0f1e35"
        strokeWidth={1.5}
      />
      {/* Tick marks around rotor */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = rotorAngle + (i * Math.PI * 2) / 8;
        const cx = 120;
        const cy = 170;
        const r0 = 40;
        const r1 = 48;
        return (
          <line
            key={i}
            x1={cx + r0 * Math.cos(angle)}
            y1={cy + r0 * Math.sin(angle)}
            x2={cx + r1 * Math.cos(angle)}
            y2={cy + r1 * Math.sin(angle)}
            stroke="#1e3a5f"
            strokeWidth={2}
            strokeLinecap="round"
          />
        );
      })}
      {/* Rotor main circle */}
      <circle
        cx={120}
        cy={170}
        r={40}
        fill={isDarkMode ? "#08111e" : "rgba(241,245,249,0.8)"}
        stroke="#1e3a5f"
        strokeWidth={1}
      />
      {/* Crosshairs */}
      <line
        x1={120 - 28}
        y1={170}
        x2={120 + 28}
        y2={170}
        stroke="#1e3a5f"
        strokeWidth={0.8}
        transform={`rotate(${(rotorAngle * 180) / Math.PI}, 120, 170)`}
      />
      <line
        x1={120}
        y1={170 - 28}
        x2={120}
        y2={170 + 28}
        stroke="#1e3a5f"
        strokeWidth={0.8}
        transform={`rotate(${(rotorAngle * 180) / Math.PI}, 120, 170)`}
      />
      {/* Inner hub */}
      <circle
        cx={120}
        cy={170}
        r={12}
        fill={isDarkMode ? "#060b18" : "rgba(241,245,249,0.9)"}
        stroke="#3b82f6"
        strokeWidth={1}
        filter="url(#mfg-pg)"
      />
      <circle cx={120} cy={170} r={4} fill="#3b82f6" opacity={0.7} />

      {/* Sensor attachment points */}
      {SENSORS.map((s, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 3 + i * 1.1);
        return (
          <g key={s.label}>
            {/* Label */}
            <text
              x={200}
              y={s.y}
              textAnchor="end"
              dominantBaseline="middle"
              fill={s.color}
              fontSize={7}
              fontWeight={700}
              fontFamily="Space Mono, monospace"
              opacity={0.7}
            >
              {s.label}
            </text>
            {/* Sensor dot */}
            <circle
              cx={210}
              cy={s.y}
              r={5}
              fill={s.color}
              opacity={pulse}
              filter="url(#mfg-pg)"
            />
            <circle cx={210} cy={s.y} r={2.5} fill={s.color} opacity={0.9} />
          </g>
        );
      })}

      {/* ── Data flow lines (x:210-310) ── */}
      {SENSORS.map((s) => (
        <line
          key={`line-${s.label}`}
          x1={210}
          y1={s.y}
          x2={310}
          y2={s.y}
          stroke={connectorStroke ?? s.color}
          strokeWidth={connectorWidth}
          strokeOpacity={connectorOpacity}
          strokeDasharray="4 3"
        />
      ))}

      {/* ── AI Monitor (x:310-490, y:50-290) ── */}
      <rect
        x={310}
        y={50}
        width={180}
        height={240}
        rx={6}
        fill={isDarkMode ? "#060e1e" : "rgba(248,250,252,0.85)"}
        stroke={alertActive ? "#f97316" : (isDarkMode ? "#0f1e35" : "#cbd5e1")}
        strokeWidth={alertActive ? 1.5 : 1}
        strokeOpacity={alertActive ? 0.6 + 0.3 * Math.sin(time * 4) : 1}
        filter={alertActive ? "url(#mfg-alert-glow)" : undefined}
      />
      {/* Monitor header */}
      <rect x={310} y={50} width={180} height={28} rx={6} fill={isDarkMode ? "#080f20" : "rgba(241,245,249,0.95)"} />
      <rect x={310} y={66} width={180} height={12} fill={isDarkMode ? "#080f20" : "rgba(241,245,249,0.95)"} />
      <text
        x={325}
        y={64}
        dominantBaseline="middle"
        fill={isDarkMode ? "#8eaace" : "#64748b"}
        fontSize={8}
        fontWeight={700}
        fontFamily="Space Mono, monospace"
        letterSpacing={1}
      >
        AI MONITOR
      </text>
      <circle
        cx={475}
        cy={64}
        r={4}
        fill="#22c55e"
        opacity={0.9}
        filter="url(#mfg-pg)"
      />

      {/* Sensor reading rows */}
      {SENSORS.map((s, i) => {
        const rowY = 100 + i * 58;
        const val = sensorValues[i];
        return (
          <g key={`row-${s.label}`}>
            {i > 0 && (
              <line
                x1={318}
                y1={rowY - 12}
                x2={482}
                y2={rowY - 12}
                stroke={isDarkMode ? "#0d1c30" : "#e2e8f0"}
                strokeWidth={0.8}
              />
            )}
            <circle cx={322} cy={rowY + 6} r={3.5} fill={s.color} opacity={0.85} />
            <text
              x={330}
              y={rowY + 6}
              dominantBaseline="middle"
              fill={s.color}
              fontSize={8}
              fontWeight={700}
              fontFamily="Space Mono, monospace"
              opacity={0.8}
            >
              {s.label}
            </text>
            <text
              x={480}
              y={rowY + 6}
              textAnchor="end"
              dominantBaseline="middle"
              fill={isDarkMode ? "#c8d8f0" : "#1e293b"}
              fontSize={9}
              fontFamily="Space Mono, monospace"
            >
              {s.formatFn(val)}
            </text>
          </g>
        );
      })}

      {/* ALERT node */}
      <g opacity={alertActive ? 1 : 0.3}>
        <rect
          x={340}
          y={258}
          width={100}
          height={22}
          rx={4}
          fill={alertActive ? (isDarkMode ? "#2a0e00" : "rgba(255,241,235,0.9)") : (isDarkMode ? "#0a0a0a" : "rgba(248,250,252,0.9)")}
          stroke={alertActive ? "#f97316" : (isDarkMode ? "#1a1a1a" : "#cbd5e1")}
          strokeWidth={alertActive ? 1.5 : 0.8}
          strokeOpacity={alertActive ? 0.8 + 0.2 * Math.sin(time * 5) : 1}
        />
        <text
          x={390}
          y={269}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={alertActive ? "#f97316" : (isDarkMode ? "#333" : "#94a3b8")}
          fontSize={8}
          fontWeight={700}
          fontFamily="Space Mono, monospace"
          letterSpacing={1}
        >
          ALERT
        </text>
      </g>

      {/* ── Particles ── */}
      {particles.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i % 4 === 0 ? 3 : 1.5}
          fill={p.color}
          opacity={p.op}
          filter={i % 4 === 0 ? "url(#mfg-pg)" : undefined}
        />
      ))}
    </svg>
  );
};

export default ManufacturingAnimation;
