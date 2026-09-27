import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="follow" className="py-20 md:py-28 relative overflow-hidden bg-[#080B11]">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Pre-footer Call to Action */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>DAY-0 // PROTOCOL DESIGN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stop multi-agent collisions before they hit production.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Follow the build as we design the transaction lock layer for the multi-agent generation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://x.com/ray_buildds"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 active:scale-[0.98] transition-all shadow-[0_0_28px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              <span>Follow @ray_buildds on X</span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <Link
              href="/design"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#1E2838] bg-[#101622] hover:bg-[#161F2E] hover:border-slate-600 text-slate-300 font-mono text-xs transition-all"
            >
              <span>Read the design doc</span>
              <span className="text-amber-400">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar with Monospace label */}
        <div className="pt-10 border-t border-[#1E2838] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="text-slate-400">
              Building Relay in public. No launch date, just progress.
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-500">
            <span>© {new Date().getFullYear()} Relay</span>
            <span>Protocol RFC Draft</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
