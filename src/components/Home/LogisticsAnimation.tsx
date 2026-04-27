import React from "react";

const DURATION = 10;

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

const fade = (t: number, s: number, d = 0.35) =>
  clamp((t - s) / d, 0, 1);

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

// Route path: origin(70,170) → arc through (255,80) → dest(440,170)
// Using symmetric cubic bezier
const ROUTE = {
  p0: { x: 70,  y: 170 },
  p1: { x: 160, y: 60  },
  p2: { x: 350, y: 60  },
  p3: { x: 440, y: 170 },
};

const SHIPMENT_DURATION = 5; // seconds to travel the route

const LogisticsAnimation: React.FC = () => {
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

  // Shipment dot position — starts at t:0.5, loops every 5s
  const shipmentActive = time >= 0.5;
  const shipmentT = shipmentActive
    ? ((time - 0.5) % SHIPMENT_DURATION) / SHIPMENT_DURATION
    : 0;
  const shipmentPos = cubicBezier(
    shipmentT,
    ROUTE.p0,
    ROUTE.p1,
    ROUTE.p2,
    ROUTE.p3,
  );
  // Trail dot slightly behind
  const trailT = Math.max(0, shipmentT - 0.06);
  const trailPos = cubicBezier(trailT, ROUTE.p0, ROUTE.p1, ROUTE.p2, ROUTE.p3);

  const destArrived = shipmentActive && shipmentT > 0.92;

  const statusF     = fade(time, 1.0, 0.5);
  const aiResponseF = fade(time, 2.5, 0.5);

  // ETA countdown
  const etaMinutes = Math.floor(14 - (time % 14));
  const etaDisplay = `2h ${etaMinutes}m`;

  // Blinking cursor for AI response
  const cursorVisible = aiResponseF > 0 && Math.sin(time * 6) > 0;

  // Exception badge: flashes at t:7 for 1.5s
  const exceptionF = (() => {
    if (time >= 7 && time < 7.5) return fade(time, 7, 0.3);
    if (time >= 7.5 && time < 8.5) return 1;
    if (time >= 8.5 && time < 9.0) return 1 - fade(time, 8.5, 0.5);
    return 0;
  })();

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 520 340"
      preserveAspectRatio="xMidYMid meet"
      className="block"
    >
      <defs>
        <pattern id="log-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.7" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <filter id="log-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="log-glow2" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="log-pg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="log-ship-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width={520} height={340} fill="#060b18" />
      <rect width={520} height={340} fill="url(#log-dots)" />

      {/* ── Route path ── */}
      <path
        d={`M${ROUTE.p0.x},${ROUTE.p0.y} C${ROUTE.p1.x},${ROUTE.p1.y} ${ROUTE.p2.x},${ROUTE.p2.y} ${ROUTE.p3.x},${ROUTE.p3.y}`}
        fill="none"
        stroke="#0d1c30"
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      {/* Glowing route */}
      <path
        d={`M${ROUTE.p0.x},${ROUTE.p0.y} C${ROUTE.p1.x},${ROUTE.p1.y} ${ROUTE.p2.x},${ROUTE.p2.y} ${ROUTE.p3.x},${ROUTE.p3.y}`}
        fill="none"
        stroke="#1e3a5f"
        strokeWidth={1}
        strokeOpacity={0.4}
        strokeDasharray="5 4"
        filter="url(#log-glow)"
      />

      {/* ── Origin node (cx:70, cy:170) ── */}
      <circle
        cx={70}
        cy={170}
        r={26}
        fill="#060e1e"
        stroke="#3b82f6"
        strokeWidth={1.5}
        filter="url(#log-glow)"
      />
      <circle cx={70} cy={170} r={20} fill="#08111e" stroke="#1e3a5f" strokeWidth={0.8} />
      <text
        x={70}
        y={168}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#3b82f6"
        fontSize={9}
        fontWeight={700}
        fontFamily="Space Mono, monospace"
      >
        WH
      </text>
      <text
        x={70}
        y={205}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#3b82f6"
        fontSize={7}
        fontFamily="Space Mono, monospace"
        opacity={0.6}
      >
        ORIGIN
      </text>

      {/* ── Destination node (cx:450, cy:170) ── */}
      <circle
        cx={450}
        cy={170}
        r={26}
        fill="#060e1e"
        stroke={destArrived ? "#10b981" : "#0f2e20"}
        strokeWidth={destArrived ? 2 : 1.2}
        filter={destArrived ? "url(#log-glow)" : undefined}
        opacity={destArrived ? 1 : 0.6}
      />
      {/* Pulse when arrived */}
      {destArrived && (
        <circle
          cx={450}
          cy={170}
          r={30 + 4 * Math.sin(time * 4)}
          fill="none"
          stroke="#10b981"
          strokeWidth={1.5}
          strokeOpacity={0.3 + 0.2 * Math.sin(time * 4)}
        />
      )}
      <circle
        cx={450}
        cy={170}
        r={20}
        fill="#08111e"
        stroke={destArrived ? "#10b981" : "#0a1e14"}
        strokeWidth={0.8}
      />
      <text
        x={450}
        y={168}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={destArrived ? "#10b981" : "#1a4a2e"}
        fontSize={8}
        fontWeight={700}
        fontFamily="Space Mono, monospace"
      >
        DEST
      </text>
      <text
        x={450}
        y={205}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={destArrived ? "#10b981" : "#0f2e20"}
        fontSize={7}
        fontFamily="Space Mono, monospace"
        opacity={0.6}
      >
        DESTINATION
      </text>

      {/* ── Shipment dot ── */}
      {shipmentActive && (
        <g>
          {/* Trail */}
          <circle
            cx={trailPos.x}
            cy={trailPos.y}
            r={3}
            fill="#f59e0b"
            opacity={0.25}
          />
          {/* Outer glow */}
          <circle
            cx={shipmentPos.x}
            cy={shipmentPos.y}
            r={8}
            fill="#f59e0b"
            fillOpacity={0.15}
            filter="url(#log-ship-glow)"
          />
          {/* Main dot */}
          <circle
            cx={shipmentPos.x}
            cy={shipmentPos.y}
            r={5}
            fill="#f59e0b"
            filter="url(#log-glow)"
          />
          <circle cx={shipmentPos.x} cy={shipmentPos.y} r={2.5} fill="#fcd34d" />
        </g>
      )}

      {/* ── AI Response node (x:195-325, y:20-80) ── */}
      {aiResponseF > 0 && (
        <g opacity={aiResponseF}>
          <rect
            x={195}
            y={20}
            width={130}
            height={55}
            rx={5}
            fill="#0c0c2a"
            stroke="#6366f1"
            strokeWidth={1.3}
            filter="url(#log-glow)"
          />
          <rect x={195} y={20} width={130} height={20} rx={5} fill="#0e0e30" />
          <rect x={195} y={32} width={130} height={8} fill="#0e0e30" />
          <text
            x={260}
            y={30}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#818cf8"
            fontSize={7}
            fontWeight={700}
            fontFamily="Space Mono, monospace"
            letterSpacing={0.8}
          >
            AI DRAFTING RESPONSE
          </text>
          <text
            x={205}
            y={52}
            dominantBaseline="middle"
            fill="#8eaace"
            fontSize={8}
            fontFamily="Space Mono, monospace"
            opacity={0.8}
          >
            Carrier update ready...
          </text>
          {/* Blinking cursor */}
          {cursorVisible && (
            <rect x={303} y={46} width={1.5} height={12} fill="#6366f1" opacity={0.9} />
          )}
          {/* Activity dot */}
          <circle
            cx={315}
            cy={30}
            r={3}
            fill="#6366f1"
            opacity={0.6 + 0.4 * Math.sin(time * 5)}
            filter="url(#log-pg)"
          />
        </g>
      )}

      {/* Dashed line: AI response → status panel */}
      {aiResponseF > 0 && statusF > 0 && (
        <line
          x1={260}
          y1={75}
          x2={260}
          y2={230}
          stroke="#6366f1"
          strokeWidth={0.8}
          strokeOpacity={0.3 * Math.min(aiResponseF, statusF)}
          strokeDasharray="3 4"
        />
      )}

      {/* ── Status panel (x:150-370, y:235-310) ── */}
      {statusF > 0 && (
        <g opacity={statusF}>
          <rect
            x={150}
            y={235}
            width={220}
            height={80}
            rx={5}
            fill="#060e1e"
            stroke="#0f1e35"
            strokeWidth={1}
          />
          {/* Header */}
          <rect x={150} y={235} width={220} height={22} rx={5} fill="#080f20" />
          <rect x={150} y={247} width={220} height={10} fill="#080f20" />
          <text
            x={260}
            y={246}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#60a5fa"
            fontSize={8}
            fontWeight={700}
            fontFamily="Space Mono, monospace"
            letterSpacing={1}
          >
            STATUS CHECK
          </text>

          {/* ETA row */}
          <text
            x={162}
            y={270}
            dominantBaseline="middle"
            fill="#8eaace"
            fontSize={8}
            fontFamily="Space Mono, monospace"
          >
            ETA:
          </text>
          <text
            x={195}
            y={270}
            dominantBaseline="middle"
            fill="#c8d8f0"
            fontSize={8}
            fontFamily="Space Mono, monospace"
          >
            {etaDisplay}
          </text>

          {/* Carrier row */}
          <text
            x={162}
            y={288}
            dominantBaseline="middle"
            fill="#8eaace"
            fontSize={8}
            fontFamily="Space Mono, monospace"
          >
            Carrier:
          </text>
          <text
            x={205}
            y={288}
            dominantBaseline="middle"
            fill="#c8d8f0"
            fontSize={8}
            fontFamily="Space Mono, monospace"
          >
            DHL Express
          </text>

          {/* Exception badge */}
          {exceptionF > 0 && (
            <g opacity={exceptionF}>
              <rect
                x={310}
                y={258}
                width={52}
                height={18}
                rx={3}
                fill="#1a0800"
                stroke="#f97316"
                strokeWidth={1}
                strokeOpacity={0.9}
              />
              <text
                x={336}
                y={267}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#f97316"
                fontSize={7}
                fontWeight={700}
                fontFamily="Space Mono, monospace"
                letterSpacing={0.5}
              >
                EXCEPTION
              </text>
            </g>
          )}
        </g>
      )}
    </svg>
  );
};

export default LogisticsAnimation;
