import React from "react";

export default function Primitives() {
  const primitives = [
    {
      name: "Resource URIs",
      code: "urn:relay:res:{type}:{id}",
      description:
        "Uniform addressing across heterogeneous agent targets: files (file://app/api.ts), webhooks (api://stripe/payout), or DB rows (db://users#id=992).",
      tag: "ADDRESSING",
    },
    {
      name: "Lease TTLs",
      code: "lease.renew({ extend: '15s' })",
      description:
        "TTL leases avoid indefinite deadlocks. Ephemeral leases automatically expire if an agent crashes or hangs, unlocking blocked teammates without human intervention.",
      tag: "LIVENESS",
    },
    {
      name: "Conflict Policies",
      code: "mode: 'FAIL_FAST' | 'ENQUEUE'",
      description:
        "Configure whether parallel agents should fail immediately with an alternative route, or wait politely in an ordered FIFO queue.",
      tag: "COORDINATION",
    },
    {
      name: "Audit Ledger",
      code: "relay.stream({ tail: 100 })",
      description:
        "Append-only event log recording who touched what, when, why, and how long the lease was held.",
      tag: "OBSERVABILITY",
    },
  ];

  return (
    <section id="spec" className="py-16 md:py-24 border-b border-[#1E2838] relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-700 bg-slate-800/40 text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>03 // CORE PRIMITIVES (DRAFT)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Minimal primitives. Zero lock overhead.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Framework-agnostic by design — planned to work with any agent loop or framework as the protocol matures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {primitives.map((prim) => (
            <div
              key={prim.name}
              className="p-6 rounded-2xl border border-[#1E2838] bg-[#101622] hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-base font-sans">
                    {prim.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400">
                    {prim.tag}
                  </span>
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E2838] font-mono text-xs text-amber-300 mb-3">
                  {prim.code}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {prim.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
