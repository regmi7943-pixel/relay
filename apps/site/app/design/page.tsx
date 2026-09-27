import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Primitives from "@/components/Primitives";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Relay Protocol — Design Document (Draft RFC)",
  description:
    "Technical design draft for Relay: resource locks, TTL leases, and concurrency isolation for autonomous AI agent swarms.",
};

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Background fine telemetry grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="pt-12 pb-12 border-b border-[#1E2838] bg-[#0E131E]/60">
            <div className="max-w-5xl mx-auto px-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors mb-6"
              >
                <span>←</span>
                <span>Back to Overview</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wide mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>DESIGN DRAFT // RFC-001</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Relay Protocol Specification
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Design draft for a lightweight coordination and resource-locking layer for multi-agent systems. This document outlines proposed primitives, API sketches, and trade-offs. No implementation code has been written yet.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-[#161F2E] border border-[#1E2838]">
                  Status: Draft / Brainstorming
                </span>
                <span className="px-2.5 py-1 rounded bg-[#161F2E] border border-[#1E2838]">
                  Target: Multi-Agent Concurrency
                </span>
                <span className="px-2.5 py-1 rounded bg-[#161F2E] border border-[#1E2838]">
                  Feedback: Open via X
                </span>
              </div>
            </div>
          </section>

          {/* Architecture & Proposed API Sketches */}
          <HowItWorks />

          {/* Core Primitives */}
          <Primitives />

          {/* Open Questions & Trade-offs */}
          <section className="py-16 md:py-24 border-b border-[#1E2838]">
            <div className="max-w-5xl mx-auto px-6">
              <div className="max-w-3xl mb-12">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-700 bg-slate-800/40 text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
                  <span>04 // OPEN DESIGN QUESTIONS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Trade-offs under active exploration
                </h2>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Before writing the first lines of runtime code, we are validating these architectural decisions against real agent workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-[#1E2838] bg-[#101622]">
                  <h3 className="text-sm font-semibold text-white font-mono mb-2 text-amber-400">
                    Q1: Central Coordinator vs Peer Gossip
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Should Relay run as an ultra-low-latency sidecar daemon (HTTP/gRPC) on localhost, or provide a distributed consensus layer across multi-server agent swarms? Current draft favors a lightweight local sidecar first.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-[#1E2838] bg-[#101622]">
                  <h3 className="text-sm font-semibold text-white font-mono mb-2 text-amber-400">
                    Q2: Lease Renewal & Clock Drift
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    How should TTL leases behave during LLM generation lag? If an agent spends 20 seconds waiting on an API completion, heartbeats must auto-renew without starving waiting peers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
