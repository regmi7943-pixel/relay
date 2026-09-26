import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      name: "CLAIM",
      title: "Acquire lease before execution",
      description:
        "Before an agent mutates a file, triggers an API, or queries a row, it acquires an exclusive or shared lease with an auto-expiring TTL.",
      code: `// Proposed SDK Draft:
const lease = await relay.claim({
  resource: "src/schema.prisma",
  agent: "agent_01",
  ttl: "45s"
});`,
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      accentBorder: "group-hover:border-amber-500/50",
    },
    {
      step: "02",
      name: "CONFLICT",
      title: "Deterministic rejection & queueing",
      description:
        "If a competing agent attempts to touch a claimed resource, Relay blocks the collision, dispatches conflict telemetry, and enqueues retry backoff.",
      code: `// Proposed Conflict Response:
{
  "status": "CONFLICT",
  "held_by": "agent_01",
  "lease_id": "lse_9921",
  "retry_in": "1.4s"
}`,
      badgeColor: "text-red-400 bg-red-500/10 border-red-500/30",
      accentBorder: "group-hover:border-red-500/50",
    },
    {
      step: "03",
      name: "AUDIT",
      title: "Append-only coordination ledger",
      description:
        "Every claim, lease renewal, conflict, and release is persisted to an append-only event stream. Full replayability makes debugging swarm races trivial.",
      code: `// Proposed Release Call:
await relay.release(lease.id);

// Audit ledger entry committed:
// [05:14:02Z] RELEASE
// agent_01 freed resource`,
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      accentBorder: "group-hover:border-sky-500/50",
    },
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[#1E2838] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>02 // ARCHITECTURE & PROPOSED API</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Database transaction locking, <br className="hidden sm:inline" />
            re-engineered for autonomous agents.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Relay applies proven two-phase concurrency controls to unstructured LLM agent operations. Simple SDK bindings, lightweight HTTP coordination, zero runtime locks on your host filesystem.
          </p>

          {/* Issue 4: Prominent Proposed API notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>PROPOSED API — design draft, not yet implemented.</span>
          </div>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`group flex flex-col justify-between rounded-2xl border border-[#1E2838] bg-[#101622] p-6 transition-all duration-300 hover:bg-[#131B2A] ${item.accentBorder}`}
            >
              <div className="flex-1 flex flex-col">
                {/* Step indicator & Name */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                    {item.step}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${item.badgeColor}`}
                  >
                    {item.name}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
              </div>

              {/* Code snippet block - clearly marked as proposed design */}
              <div className="rounded-xl bg-[#0B0F17] border border-[#1E2838] p-3.5 font-mono text-[11px] leading-relaxed text-slate-300 overflow-hidden mt-auto">
                <pre className="overflow-x-hidden">
                  <code>{item.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Callout Banner: Issue 1 (No false guarantees) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#1E2838] bg-gradient-to-r from-[#101622] via-[#141B2B] to-[#101622] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              DESIGN GOAL // CONCURRENCY ISOLATION
            </div>
            <h4 className="text-lg font-bold text-white">
              Isolation without serializing entire agent runs.
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Agents only lock the micro-resources they mutate. An agent refactoring your billing API will never block an agent writing unit tests for authentication.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2838] bg-[#0B0F17] font-mono text-xs text-slate-300 whitespace-nowrap">
            <span className="text-emerald-400">✓</span>
            <span>No permanent locks — every lease expires</span>
          </div>
        </div>
      </div>
    </section>
  );
}
