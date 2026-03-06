import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">

      {/* ── Background image ──────────────────────────────────────── */}
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Overlays ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04091A]/96 via-[#04091A]/80 to-[#04091A]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04091A]/65 via-transparent to-[#04091A]/15" />
      {/* Scanline texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
          backgroundSize: "100% 6px",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 w-full">
        <div className="max-w-[660px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-gold shrink-0" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(52px, 7.5vw, 92px)", letterSpacing: "-0.02em" }}
          >
            {hero.headlineLine1}
            <br />
            <span className="text-gold">{hero.headlineLine2}</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="font-sans text-white/60 leading-relaxed mb-10 max-w-md"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
          >
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.primaryCTA.href}
              className="inline-flex items-center gap-2 bg-gold text-[#04091A] font-sans font-semibold text-sm px-8 py-4 rounded hover:bg-gold-light transition-all duration-200 shadow-[0_4px_24px_rgba(196,146,58,0.4)] hover:shadow-[0_6px_36px_rgba(196,146,58,0.6)] hover:-translate-y-px"
            >
              {hero.primaryCTA.label}
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={hero.secondaryCTA.href}
              className="inline-flex items-center gap-2 border border-white/40 text-white font-sans font-semibold text-sm px-8 py-4 rounded hover:border-white/70 hover:bg-white/5 transition-all duration-200"
            >
              {hero.secondaryCTA.label}
            </Link>
          </div>

          {/* Micro-credential line */}
          <div className="mt-12 flex items-center gap-3">
            <div className="w-5 h-px bg-gold/50" />
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/30">
              Veteran-Owned · 20+ Years DoD · PEO AVN Alumni
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <div className="w-px h-7 bg-gradient-to-b from-transparent to-white/25" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
      </div>

      {/* ── White wedge at bottom ─────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
