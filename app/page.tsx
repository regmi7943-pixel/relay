import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ConceptSummary from "@/components/ConceptSummary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Background fine telemetry grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-0" />

      {/* Main page content stack */}
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Problem />
          <ConceptSummary />
        </main>
        <Footer />
      </div>
    </div>
  );
}
