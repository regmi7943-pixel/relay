import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E2838] bg-[#0B0F17]/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-white font-mono">
              Relay
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400">
              design draft
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
          <Link
            href="/#problem"
            className="hover:text-amber-400 transition-colors"
          >
            01_PROBLEM
          </Link>
          <Link
            href="/#concept"
            className="hover:text-amber-400 transition-colors"
          >
            02_CONCEPT
          </Link>
          <Link
            href="/design"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300"
          >
            <span>03_DESIGN_DOC</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-amber-400 font-mono">RFC</span>
          </Link>
        </nav>

        {/* Action Button: Follow the build */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/ray_buildds"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono text-amber-300 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Follow the build</span>
          </a>
        </div>
      </div>
    </header>
  );
}
