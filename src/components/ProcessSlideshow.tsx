import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ACTS, SLIDES } from "../data/processStory";
import ProcessVisual from "./ProcessVisuals";

const ProcessSlideshow = () => {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const slide = SLIDES[index];
  const last = SLIDES.length - 1;

  const go = useCallback(
    (to: number) => {
      const next = Math.min(Math.max(to, 0), last);
      setPage(([current]) =>
        next === current ? [current, 0] : [next, next > current ? 1 : -1],
      );
    },
    [last],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown")
        setPage(([c]) => [Math.min(c + 1, last), 1]);
      if (e.key === "ArrowLeft" || e.key === "PageUp")
        setPage(([c]) => [Math.max(c - 1, 0), -1]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [last]);

  const firstSlideOfAct = (id: string) => SLIDES.findIndex((s) => s.act === id);
  const actSlides = SLIDES.filter((s) => s.act === slide.act);
  const posInAct = actSlides.indexOf(slide);

  const statsGrid = () =>
    slide.stats && (
      <div className={`grid w-full grid-cols-1 gap-4 sm:grid-cols-3`}>
        {slide.stats.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none"
          >
            <p
              className={`mb-1 font-bold text-blue-600 dark:text-blue-400 text-3xl`}
            >
              {s.value}
            </p>
            <p className="text-sm leading-5 text-[#4a6a8a]">{s.label}</p>
          </div>
        ))}
      </div>
    );

  return (
    <section
      aria-roledescription="carousel"
      aria-label="How we work"
      className="border-b border-white/30 dark:border-[#0f1e35] px-4 py-6 md:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col">
        {/* Act navigation */}
        <nav
          aria-label="Story chapters"
          className="mb-8 grid grid-cols-4 gap-2"
        >
          {ACTS.map((act, i) => {
            const active = act.id === slide.act;
            return (
              <button
                key={act.id}
                onClick={() => go(firstSlideOfAct(act.id))}
                aria-current={active ? "step" : undefined}
                className="group text-left"
              >
                <span
                  className={`block h-1 rounded-full transition-colors ${
                    active
                      ? "bg-blue-600"
                      : "bg-slate-300/60 dark:bg-[#0f1e35] group-hover:bg-blue-400"
                  }`}
                />
                <span
                  className={`mt-2 block font-mono text-[0.6rem] uppercase tracking-widest transition-colors ${
                    active
                      ? "text-blue-500"
                      : "text-slate-500 dark:text-[#2a4060] group-hover:text-blue-500"
                  }`}
                >
                  <span className="hidden sm:inline">{`0${i + 1} `}</span>
                  {act.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="rounded-full border border-white/60 dark:border-[#0f1e35] px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#0f1e35] dark:text-slate-100 transition-colors hover:text-blue-600 disabled:opacity-30 disabled:hover:text-inherit"
          >
            ← Back
          </button>
          <div
            className="flex items-center gap-2"
            aria-label={`Slide ${posInAct + 1} of ${actSlides.length} in this chapter`}
          >
            {actSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => go(SLIDES.indexOf(s))}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === posInAct
                    ? "w-6 bg-blue-600"
                    : "w-2 bg-slate-300 dark:bg-[#1a2c48] hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            disabled={index === last}
            className="rounded-full bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700 disabled:opacity-30 disabled:hover:bg-blue-600"
          >
            Next →
          </button>
        </div>

        {/* Slide */}
        <div className="relative flex flex-1 overflow-hidden rounded-3xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none md:p-12">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${SLIDES.length}`}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(index + 1);
                else if (info.offset.x > 80) go(index - 1);
              }}
              className="flex w-full flex-col justify-center gap-10"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                    {slide.eyebrow}
                  </p>
                  <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-4xl">
                    {slide.title}
                  </h1>
                  <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
                  <p className="mb-6 max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
                    {slide.body}
                  </p>

                  {slide.points && (
                    <ul className="mb-6 max-w-2xl space-y-2">
                      {slide.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                          <span className="text-sm leading-6 text-[#4a6a8a] sm:text-base">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {slide.outcome && (
                    <div className="max-w-2xl rounded-sm border border-white/30 dark:border-[#0f1e35] bg-white/40 dark:bg-[#08101f] px-4 py-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-500">
                        Result:{" "}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {slide.outcome}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {slide.visual && <ProcessVisual id={slide.visual} />}
                </div>
              </div>
              {slide.stats && statsGrid()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProcessSlideshow;
