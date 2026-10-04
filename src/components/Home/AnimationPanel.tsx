import React from "react";

const AnimationPanel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className="relative flex min-h-[20rem] w-full flex-col overflow-hidden rounded-2xl
               border border-white/60 dark:border-[#0f1e35]
               bg-gradient-to-br from-white/40 to-white/15
               dark:bg-[#08101f]/80
               backdrop-blur-xl backdrop-saturate-150
               shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
               dark:shadow-none
               p-6 sm:p-8"
  >
    <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
    <p className="mb-5 font-mono text-[0.6rem] uppercase tracking-widest text-slate-400 dark:text-[#2a4060]">
      {title}
    </p>
    <div className="flex flex-1 flex-col justify-center">{children}</div>
  </div>
);

export default AnimationPanel;
