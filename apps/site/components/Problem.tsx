import React from "react";

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 border-b border-[#1E2838] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>01 // THE COLLISION PROBLEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Autonomous swarms fail when they touch shared state.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Parallel AI agents run concurrently without mutual awareness. When two agents race to rewrite the same schema, trigger identical API webhooks, or mutate user records, they silently clobber each other. Conflicts are discovered only after deployments break or databases corrupt.
          </p>
        </div>

        {/* Interactive Conflict Illustration */}
        <div className="rounded-2xl border border-[#1E2838] bg-[#101622] p-6 sm:p-8 relative overflow-hidden">
          {/* Top terminal bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#1E2838] text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="ml-2 text-slate-400">trace://uncoordinated-execution.log</span>
            </div>
            <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/30">
              <span>RACE CONDITION DETECTED</span>
            </div>
          </div>

          {/* SVG Collision Visual */}
          <div className="w-full">
            <svg
              viewBox="0 0 800 240"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrow-red"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#EF4444" />
                </marker>
              </defs>

              {/* Agent A Path to Resource with Collision trajectory */}
              <path
                d="M180 60 C 270 60, 310 115, 380 120"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Agent B Path to Resource with Collision trajectory */}
              <path
                d="M180 180 C 270 180, 310 125, 380 120"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Connector from collision to result card */}
              <path
                d="M430 120 L465 120"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4 4"
                markerEnd="url(#arrow-red)"
              />

              {/* Impact / Collision Burst at Center */}
              <circle cx="400" cy="120" r="32" fill="#EF4444" fillOpacity="0.15" />
              <circle cx="400" cy="120" r="22" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon
                points="400,108 404,116 413,116 406,122 409,130 400,125 391,130 394,122 387,116 396,116"
                fill="#EF4444"
              />

              {/* Agent A Box */}
              <g transform="translate(40, 30)">
                <rect
                  width="140"
                  height="60"
                  rx="8"
                  fill="#161F2E"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="22" r="4" fill="#94A3B8" />
                <text x="32" y="25" fill="#F8FAFC" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
                  agent_worker_1
                </text>
                <text x="20" y="44" fill="#EF4444" fontSize="10" fontFamily="ui-monospace, monospace">
                  WRITE: models.py
                </text>
              </g>

              {/* Agent B Box */}
              <g transform="translate(40, 150)">
                <rect
                  width="140"
                  height="60"
                  rx="8"
                  fill="#161F2E"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="22" r="4" fill="#94A3B8" />
                <text x="32" y="25" fill="#F8FAFC" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
                  agent_worker_2
                </text>
                <text x="20" y="44" fill="#EF4444" fontSize="10" fontFamily="ui-monospace, monospace">
                  WRITE: models.py
                </text>
              </g>

              {/* Target File Box (Overwritten / Corrupted) */}
              <g transform="translate(470, 85)">
                <rect
                  width="295"
                  height="70"
                  rx="10"
                  fill="#0B0F17"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                />
                <g transform="translate(16, 18)">
                  <rect x="0" y="0" width="16" height="16" rx="3" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1" />
                  <path d="M5 8l6 0M8 5l0 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 8 8)" />
                </g>
                <text x="42" y="29" fill="#EF4444" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">
                  CONFLICT: SILENT OVERWRITE
                </text>
                <text x="16" y="52" fill="#94A3B8" fontSize="10" fontFamily="ui-monospace, monospace">
                  worker_2 clobbered worker_1 uncommitted diff
                </text>
              </g>
            </svg>
          </div>

          {/* Comparison Cards: Without Relay vs With Relay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1E2838]">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>WITHOUT RELAY (DIRTY READS)</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-2 font-mono">
                <li>• Concurrent git conflicts during automated PR creation</li>
                <li>• Double API disbursements & duplicate outbound messages</li>
                <li>• Lost updates: last-writer-wins destroys agent reasoning</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/30">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>WITH RELAY (MUTUAL EXCLUSION)</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-2 font-mono">
                <li>• Granular lease acquisition on URI, file path, or record ID</li>
                <li>• Automatic backoff, wait queues, or immediate conflict fails</li>
                <li>• Append-only audit trace of every agent read/write lease</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
