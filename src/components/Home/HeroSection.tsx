import React from "react";
import { motion } from "framer-motion";

const TAU = Math.PI * 2;

type RGB = [number, number, number];
type AuroraBlob = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  colorA: RGB;
  colorB: RGB;
  spd: number;
  ph: number;
  op: number;
  cspd: number;
};

const AURORA_BLOBS: AuroraBlob[] = [
  { cx: 0.2, cy: 0.73, rx: 0.6, ry: 0.64, colorA: [37, 99, 235], colorB: [139, 92, 246], spd: 0.085, ph: 0, op: 0.66, cspd: 0.032 },
  { cx: 0.68, cy: 0.55, rx: 0.58, ry: 0.53, colorA: [139, 92, 246], colorB: [16, 185, 129], spd: 0.062, ph: 1.9, op: 0.58, cspd: 0.026 },
  { cx: 0.5, cy: 0.28, rx: 0.46, ry: 0.54, colorA: [16, 185, 129], colorB: [59, 130, 246], spd: 0.072, ph: 3.3, op: 0.5, cspd: 0.029 },
  { cx: 0.88, cy: 0.78, rx: 0.42, ry: 0.46, colorA: [99, 102, 241], colorB: [37, 99, 235], spd: 0.09, ph: 1.1, op: 0.54, cspd: 0.036 },
  { cx: 0.34, cy: 0.82, rx: 0.44, ry: 0.4, colorA: [59, 130, 246], colorB: [99, 102, 241], spd: 0.068, ph: 4.5, op: 0.42, cspd: 0.028 },
  { cx: 0.78, cy: 0.34, rx: 0.34, ry: 0.38, colorA: [14, 165, 233], colorB: [168, 85, 247], spd: 0.105, ph: 2.7, op: 0.44, cspd: 0.04 },
];

// Separate blob set for light mode — pastel palette matching the designer's composition
const LIGHT_AURORA_BLOBS: AuroraBlob[] = [
  { cx: 0.78, cy: 0.37, rx: 0.68, ry: 0.62, colorA: [255, 120, 155], colorB: [225,  90, 175], spd: 0.072, ph: 0,   op: 0.80, cspd: 0.028 },
  { cx: 0.60, cy: 0.65, rx: 0.58, ry: 0.52, colorA: [170, 115, 240], colorB: [195, 140, 255], spd: 0.058, ph: 1.9,  op: 0.75, cspd: 0.024 },
  { cx: 0.18, cy: 0.57, rx: 0.60, ry: 0.54, colorA: [100, 160, 250], colorB: [130, 195, 255], spd: 0.068, ph: 3.3,  op: 0.72, cspd: 0.026 },
  { cx: 0.72, cy: 0.84, rx: 0.52, ry: 0.48, colorA: [255, 165, 110], colorB: [250, 188, 140], spd: 0.085, ph: 1.1,  op: 0.70, cspd: 0.032 },
  { cx: 0.28, cy: 0.82, rx: 0.46, ry: 0.44, colorA: [110, 205, 215], colorB: [140, 222, 232], spd: 0.062, ph: 4.5,  op: 0.62, cspd: 0.026 },
  { cx: 0.34, cy: 0.34, rx: 0.44, ry: 0.42, colorA: [215, 110, 195], colorB: [188,  95, 215], spd: 0.095, ph: 2.7,  op: 0.68, cspd: 0.036 },
];

const lerpColor = (a: RGB, b: RGB, f: number): RGB => [
  Math.round(a[0] + (b[0] - a[0]) * f),
  Math.round(a[1] + (b[1] - a[1]) * f),
  Math.round(a[2] + (b[2] - a[2]) * f),
];

const drawAurora = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  isDarkMode: boolean,
) => {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = isDarkMode ? "#04060f" : "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const blobs = isDarkMode ? AURORA_BLOBS : LIGHT_AURORA_BLOBS;
  ctx.globalCompositeOperation = isDarkMode ? "screen" : "source-over";
  blobs.forEach((blob) => {
    const dx = Math.sin(time * blob.spd + blob.ph) * 0.19 * width;
    const dy = Math.cos(time * blob.spd * 0.73 + blob.ph + 1.2) * 0.13 * height;
    const bx = blob.cx * width + dx;
    const by = blob.cy * height + dy;
    const breathe = 0.86 + 0.18 * Math.sin(time * 0.34 + blob.ph);
    const rx = Math.max(1, blob.rx * width * breathe);
    const ry = Math.max(1, blob.ry * height * breathe);
    const colorMix = (Math.sin(time * blob.cspd + blob.ph) + 1) / 2;
    const [r, g, b] = lerpColor(blob.colorA, blob.colorB, colorMix);
    const color = `${r},${g},${b}`;

    ctx.save();
    ctx.translate(bx, by);
    ctx.scale(1, ry / rx);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    gradient.addColorStop(0, `rgba(${color},${blob.op})`);
    gradient.addColorStop(0.45, `rgba(${color},${blob.op * 0.56})`);
    gradient.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, TAU);
    ctx.fill();
    ctx.restore();
  });
  ctx.globalCompositeOperation = "source-over";

  if (isDarkMode) {
    const sweepX = width * (0.12 + 0.76 * ((Math.sin(time * 0.12) + 1) / 2));
    const sweep = ctx.createRadialGradient(sweepX, height * 0.4, 0, sweepX, height * 0.4, Math.max(width, height) * 0.52);
    sweep.addColorStop(0, "rgba(96,165,250,0.18)");
    sweep.addColorStop(0.45, "rgba(139,92,246,0.08)");
    sweep.addColorStop(1, "rgba(96,165,250,0)");
    ctx.fillStyle = sweep;
    ctx.fillRect(0, 0, width, height);
  }

  // Grain
  ctx.globalAlpha = isDarkMode ? 0.024 : 0.018;
  ctx.fillStyle = isDarkMode ? "rgba(200,210,255,1)" : "rgba(80,60,120,1)";
  for (let i = 0; i < 380; i += 1) {
    ctx.fillRect((i * 2341) % width, (i * 1777) % height, 1, 1);
  }
  ctx.globalAlpha = 1;

  // Vignette
  const vignette = ctx.createRadialGradient(width / 2, height / 2, height * 0.1, width / 2, height / 2, Math.max(width, height) * 0.82);
  if (isDarkMode) {
    vignette.addColorStop(0, "rgba(4,6,15,0)");
    vignette.addColorStop(0.6, "rgba(4,6,15,0.04)");
    vignette.addColorStop(1, "rgba(4,6,15,0.68)");
  } else {
    vignette.addColorStop(0, "rgba(255,255,255,0)");
    vignette.addColorStop(0.65, "rgba(255,255,255,0.08)");
    vignette.addColorStop(1, "rgba(255,255,255,0.55)");
  }
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);

  // Bottom fade
  const bottomFade = ctx.createLinearGradient(0, height * 0.55, 0, height);
  if (isDarkMode) {
    bottomFade.addColorStop(0, "rgba(6,11,24,0)");
    bottomFade.addColorStop(1, "rgba(6,11,24,0.5)");
  } else {
    bottomFade.addColorStop(0, "rgba(255,255,255,0)");
    bottomFade.addColorStop(1, "rgba(255,255,255,0.6)");
  }
  ctx.fillStyle = bottomFade;
  ctx.fillRect(0, 0, width, height);
};

export const AuroraBackground = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const isDarkModeRef = React.useRef(isDarkMode);

  React.useEffect(() => {
    isDarkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    let frame: number | undefined;
    let start: number | undefined;
    let width = 0;
    let height = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawAurora(ctx, width, height, start == null ? 0 : (performance.now() - start) / 1000, isDarkModeRef.current);
    };

    const tick = (now: number) => {
      if (start == null) start = now;
      drawAurora(ctx, width, height, (now - start) / 1000, isDarkModeRef.current);
      if (!reduceMotion) frame = requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
};

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  supportingLine?: string;
  services?: string[];
  pipeline?: Array<{ label: string; items: string[] }>;
  ticker?: string[];
  kpis?: Array<{ value: string; label: string }>;
  isDarkMode: boolean;
}

const HeroSection = ({
  title = "Build Smart, Lead Change.",
  subtitle = "We help you",
  supportingLine,
  services = ["Ideate", "Ship", "Scale", "Dominate"],
  kpis = [],
  isDarkMode = false,
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);

  React.useEffect(() => {
    if (!services.length) return;
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-transparent dark:bg-[#04060f] text-[#0f1e35] dark:text-[#f1f5f9]">
      {/* Left vignette — dark mode only */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[linear-gradient(90deg,rgba(4,6,15,0.72)_0%,rgba(4,6,15,0.28)_50%,rgba(4,6,15,0.04)_100%)]" />
      {/* Bottom fade — dark mode only; light mode transition is handled by SolutionStack's top gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 hidden dark:block bg-[linear-gradient(180deg,rgba(6,11,24,0)_0%,rgba(6,11,24,0.62)_52%,#060b18_100%)]" />
      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center px-5 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="w-full max-w-[44rem] dark:drop-shadow-[0_4px_64px_rgba(4,6,15,0.78)]">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="mb-5 whitespace-pre-line text-5xl font-bold leading-[1.02] tracking-normal text-[#0f1e35] dark:text-[#f1f5f9] sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
            className="mb-5 h-1 w-8 rounded-full bg-blue-600"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
            className="mb-7 max-w-sm text-sm leading-7 text-slate-500 dark:text-white/45 sm:text-base"
          >
            {subtitle}
          </motion.p>
          {!supportingLine && (
            <div className="h-20 mb-8">
              <motion.div
                key={currentServiceIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-semibold text-blue-500 sm:text-5xl"
              >
                {services[currentServiceIndex]}
              </motion.div>
            </div>
          )}

          {kpis.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.82 }}
              className="relative overflow-hidden mt-6 inline-flex w-full max-w-sm rounded-2xl
                         border border-white/60 dark:border-white/[0.07]
                         bg-gradient-to-br from-white/40 to-white/15
                         dark:bg-white/[0.04]
                         backdrop-blur-xl backdrop-saturate-150
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_12px_32px_rgba(0,0,0,0.06)]
                         dark:shadow-none"
            >
              <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/60 blur-2xl dark:hidden" />
              {kpis.slice(0, 3).map((kpi, index) => (
                <div
                  key={kpi.label}
                  className={`flex-1 px-4 py-4 ${index < kpis.slice(0, 3).length - 1 ? "border-r border-white/40 dark:border-white/[0.07]" : ""}`}
                >
                  <div className="mb-1 text-xl font-bold text-blue-500">{kpi.value}</div>
                  <div className="font-mono text-[0.55rem] uppercase leading-4 tracking-widest text-slate-500 dark:text-white/40">{kpi.label}</div>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
