"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Solid background once user scrolls past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#04091A]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="TTK LLC — Home">
          {/* Gold monogram mark */}
          <div className="w-9 h-9 rounded bg-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold-light transition-colors duration-200">
            <span className="font-display font-black text-[#04091A] text-xs leading-none select-none tracking-wider">
              TTK
            </span>
          </div>
          <div className="hidden sm:block leading-none">
            <p className="font-display font-bold text-white text-base tracking-wide leading-none">
              To The King
            </p>
            <p className="font-sans text-[10px] text-[#8BA0BB] tracking-[0.2em] uppercase mt-0.5">
              LLC
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav ──────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium transition-colors duration-150 group ${
                  active ? "text-gold" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-px bg-gold transition-transform duration-200 origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-1.5 bg-gold text-[#04091A] text-sm font-semibold font-sans px-5 py-2.5 rounded hover:bg-gold-light transition-colors shadow-[0_2px_12px_rgba(196,146,58,0.3)] hover:shadow-[0_4px_20px_rgba(196,146,58,0.45)]"
          >
            Get Started
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </nav>

        {/* ── Mobile Hamburger ─────────────────────────────────────── */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`block h-px bg-white transition-all duration-250 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-250 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-250 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="bg-[#04091A] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium ${
                pathname === link.href ? "text-gold" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 flex items-center justify-center gap-2 bg-gold text-[#04091A] text-sm font-semibold px-5 py-3 rounded"
          >
            Get Started
          </Link>
          <p className="text-[#8BA0BB] text-xs font-sans pt-3 border-t border-white/10">
            {siteConfig.phone}
          </p>
        </nav>
      </div>
    </header>
  );
}
