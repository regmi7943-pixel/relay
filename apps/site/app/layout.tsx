import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relay — Resource locks for AI agents (Protocol Design)",
  description:
    "When multiple agents touch the same file, API, or record — Relay stops them from colliding. Protocol design draft for multi-agent concurrency controls.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#0B0F17] text-slate-200 antialiased selection:bg-amber-500/20 selection:text-amber-300 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
