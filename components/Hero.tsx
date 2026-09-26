import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden border-b border-[#1E2838]">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          {/* Honest Status Indicator (Issue 6) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>STATUS: protocol design in progress — no code yet</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Resource locks for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              AI agents.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
            When multiple agents touch the same file, API, or record — Relay stops them from colliding.
          </p>

          {/* CTA & Design Doc link */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://x.com/ray_buildds"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 active:scale-[0.98] transition-all duration-200 shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_36px_rgba(245,158,11,0.4)]"
            >
              <span>Follow the build</span>
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/design"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#1E2838] bg-[#101622] hover:bg-[#161F2E] hover:border-slate-600 text-slate-300 font-mono text-xs transition-all"
            >
              <span>Read the design doc</span>
              <span className="text-amber-400">→</span>
            </a>
          </div>
        </div>

        {/* Abstract Node Visual: Proposed Coordination Model */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#1E2838] bg-[#101622]/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Terminal bar header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1E2838] text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="ml-2 text-slate-400">relay://protocol-rfc.draft</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400/90 font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>MODEL: PROPOSED_LOCKING</span>
              </div>
            </div>

            {/* SVG Visual */}
            <div className="w-full">
              <svg
                viewBox="0 0 800 280"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connection Line: Agent 01 to Resource (Active Lock Claim) */}
                <path
                  d="M200 80 C 290 80, 310 140, 400 140"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_15s_linear_infinite]"
                />
                
                {/* Connection Line: Agent 02 to Resource (Blocked / Contested) */}
                <path
                  d="M200 200 C 290 200, 310 140, 400 140"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />

                {/* Connection Line: Resource to Audit Stream */}
                <path
                  d="M400 140 L 600 140"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                />

                {/* Node 1: Agent Alpha (Holding Lock) */}
                <g transform="translate(60, 50)">
                  <rect
                    width="140"
                    height="60"
                    rx="10"
                    fill="#161F2E"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <circle cx="24" cy="30" r="5" fill="#F59E0B" />
                  <text x="38" y="27" fill="#F8FAFC" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
                    agent_01
                  </text>
                  <text x="38" y="44" fill="#F59E0B" fontSize="10" fontFamily="ui-monospace, monospace">
                    CLAIM: HELD
                  </text>
                </g>

                {/* Node 2: Agent Beta (Contending / Blocked) */}
                <g transform="translate(60, 170)">
                  <rect
                    width="140"
                    height="60"
                    rx="10"
                    fill="#161F2E"
                    stroke="#1E2838"
                    strokeWidth="1.5"
                  />
                  <circle cx="24" cy="30" r="5" fill="#EF4444" />
                  <text x="38" y="27" fill="#94A3B8" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
                    agent_02
                  </text>
                  <text x="38" y="44" fill="#EF4444" fontSize="10" fontFamily="ui-monospace, monospace">
                    WAITING (LOCK)
                  </text>
                </g>

                {/* Central Resource Node (LOCKED & PROTECTED) */}
                <g transform="translate(320, 95)">
                  {/* Outer amber glow */}
                  <rect
                    x="-4"
                    y="-4"
                    width="168"
                    height="98"
                    rx="16"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <rect
                    width="160"
                    height="90"
                    rx="12"
                    fill="#0B0F17"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  
                  {/* Lock icon */}
                  <g transform="translate(20, 22)">
                    <rect x="2" y="7" width="14" height="11" rx="2.5" fill="#F59E0B" />
                    <path
                      d="M5 7V4.5a4 4.5 0 0 1 8 0V7"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="9" cy="12.5" r="1.5" fill="#0B0F17" />
                  </g>

                  <text x="50" y="32" fill="#F59E0B" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700" letterSpacing="0.05em">
                    EXCLUSIVE LOCK
                  </text>
                  <text x="20" y="56" fill="#F8FAFC" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
                    src/schema.prisma
                  </text>
                  <text x="20" y="73" fill="#64748B" fontSize="10" fontFamily="ui-monospace, monospace">
                    leased_by: agent_01
                  </text>
                </g>

                {/* Node 3: Audit Ledger */}
                <g transform="translate(600, 105)">
                  <rect
                    width="140"
                    height="70"
                    rx="10"
                    fill="#161F2E"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />
                  <circle cx="22" cy="24" r="4" fill="#38BDF8" />
                  <text x="34" y="27" fill="#F8FAFC" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
                    AUDIT LOG
                  </text>
                  <text x="18" y="46" fill="#38BDF8" fontSize="9.5" fontFamily="ui-monospace, monospace">
                    09:14:02.14 LOCK
                  </text>
                  <text x="18" y="59" fill="#94A3B8" fontSize="9.5" fontFamily="ui-monospace, monospace">
                    TTL: 1420ms REMAIN
                  </text>
                </g>
              </svg>
            </div>

            {/* Footer telemetry status line */}
            <div className="mt-4 pt-4 border-t border-[#1E2838] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">●</span>
                <span>Proposed protocol mechanism</span>
              </div>
              <div className="text-slate-400">
                1 active lease · 1 conflict deferred · design draft
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
