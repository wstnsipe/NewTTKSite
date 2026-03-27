"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { hero, heroSlides } from "@/lib/content";

const INTERVAL_MS = 5500;

export function Hero() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">

      {/* ── Slideshow backgrounds ───────────────────────────────────── */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Overlays ──────────────────────────────────────────────── */}
      {/* Base dark veil — ensures minimum readability on any slide */}
      <div className="absolute inset-0 bg-[#04091A]/50" />
      {/* Directional L→R: deep navy left, transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04091A]/95 via-[#04091A]/70 to-transparent" />
      {/* T→B: subtle top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04091A]/70 via-transparent to-[#04091A]/20" />
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
            className="font-sans text-white/70 leading-relaxed mb-10 max-w-md"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
          >
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Link
              href={hero.primaryCTA.href}
              className="inline-flex items-center justify-center gap-2 bg-gold text-[#04091A] font-sans font-semibold text-sm px-8 py-4 rounded hover:bg-gold-light transition-all duration-200 shadow-[0_4px_24px_rgba(196,146,58,0.4)] hover:shadow-[0_6px_36px_rgba(196,146,58,0.6)] hover:-translate-y-px"
            >
              {hero.primaryCTA.label}
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={hero.secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-sans font-semibold text-sm px-8 py-4 rounded hover:border-white/70 hover:bg-white/5 transition-all duration-200"
            >
              {hero.secondaryCTA.label}
            </Link>
          </div>

          {/* Micro-credential line — hidden on small screens to avoid wrapping */}
          <div className="mt-12 hidden sm:flex items-center gap-3">
            <div className="w-5 h-px bg-gold/50" />
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/30">
              Veteran-Owned · 20+ Years DoD · PEO AVN Alumni
            </p>
          </div>
        </div>
      </div>

      {/* ── Slide indicators ──────────────────────────────────────── */}
      <div
        className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Slideshow navigation"
      >
        {heroSlides.map((slide, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}: ${slide.alt}`}
            onClick={() => setCurrent(i)}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === current ? "w-6 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
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
