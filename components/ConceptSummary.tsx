import React from "react";
import Link from "next/link";

export default function ConceptSummary() {
  const principles = [
    {
      step: "01",
      name: "CLAIM",
      title: "Acquire lease before mutation",
      summary:
        "Before an agent writes to a file, dispatches an external webhook, or modifies a database row, it claims an exclusive lease with an auto-expiring TTL.",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      accent: "group-hover:border-amber-500/40",
    },
    {
      step: "02",
      name: "CONFLICT",
      title: "Deterministic rejection & backoff",
      summary:
        "If another agent attempts to mutate the same resource, Relay detects the race condition and returns an immediate conflict with backoff guidance.",
      color: "border-red-500/30 text-red-400 bg-red-500/10",
      accent: "group-hover:border-red-500/40",
    },
    {
      step: "03",
      name: "AUDIT",
      title: "Append-only coordination ledger",
      summary:
        "Every claim, lease expiration, conflict, and release is committed to an event log so swarm hallucinations and race conditions can be replayed and debugged.",
      color: "border-sky-500/30 text-sky-400 bg-sky-500/10",
      accent: "group-hover:border-sky-500/40",
    },
  ];

  return (
    <section id="concept" className="py-20 md:py-28 border-b border-[#1E2838] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>02 // THE PROTOCOL CONCEPT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How coordination works at a high level.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Modeled on classic database transaction locking, Relay brings predictable concurrency control to parallel autonomous agent swarms.
          </p>
        </div>

        {/* 3 High-Level Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.step}
              className={`group flex flex-col justify-between rounded-2xl border border-[#1E2838] bg-[#101622] p-6 sm:p-7 transition-all duration-300 hover:bg-[#131B2A] ${item.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                    {item.step}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${item.color}`}
                  >
                    {item.name}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2838] text-xs font-mono text-slate-500">
                Phase: Draft Protocol Spec
              </div>
            </div>
          ))}
        </div>

        {/* Callout Link to Full Design Doc */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/5 via-[#101622] to-amber-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              DETAILED RFC DRAFT
            </div>
            <h4 className="text-lg font-bold text-white">
              Want to see the proposed API design and primitives?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Inspect the proposed SDK drafts, TTL lease mechanics, conflict policies, and protocol trade-offs in the full design document.
            </p>
          </div>
          <Link
            href="/design"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold text-xs font-mono hover:bg-amber-400 active:scale-[0.98] transition-all whitespace-nowrap shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <span>Read the full design doc</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
