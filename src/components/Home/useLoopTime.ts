import React from "react";

export const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

// Seconds since start, wrapping every `duration`. With reduced motion the
// clock stays on a late frame so the animation shows its finished state.
export const useLoopTime = (duration: number) => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTime(duration * 0.8);
      return;
    }
    let frame = 0;
    let start: number | undefined;
    const tick = (now: number) => {
      if (start === undefined) start = now;
      setTime(((now - start) / 1000) % duration);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return time;
};
