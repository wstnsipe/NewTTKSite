import Link from "next/link";
import { footer, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#04091A] text-white">

      {/* ── Gold top border ─────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">

          {/* Col 1 — Brand ──────────────────────────────────────────── */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded bg-gold flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-[#04091A] text-xs leading-none tracking-wider select-none">
                  TTK
                </span>
              </div>
              <div className="leading-none">
                <p className="font-display font-bold text-white text-base tracking-wide leading-none">
                  To The King
                </p>
                <p className="font-sans text-[10px] text-[#8BA0BB] tracking-[0.2em] uppercase mt-0.5">
                  LLC
                </p>
              </div>
            </div>

            <p className="font-sans text-[#8BA0BB] text-sm leading-relaxed mb-6 max-w-[300px]">
              Defense consulting firm specializing in MOSA advisory, engineering support, and strategic leadership for U.S. Government and DoD clients.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block font-sans text-[10px] font-bold tracking-widest uppercase border border-gold/40 text-gold px-3 py-1.5 rounded">
                {footer.credential}
              </span>
              <span className="inline-block font-sans text-[10px] font-bold tracking-widest uppercase border border-white/10 text-white/25 px-3 py-1.5 rounded">
                Huntsville Metro Area
              </span>
            </div>
          </div>

          {/* Col 2 — Navigation + Services ──────────────────────────── */}
          <div className="md:col-span-3">
            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold/60 mb-4 pb-3 border-b border-white/8">
              Navigation
            </p>
            <nav className="flex flex-col gap-3 mb-7">
              {footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-[#8BA0BB] hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold/60 mb-3">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {["MOSA Advisory", "Engineering & Technical", "Strategy", "Leadership & Coaching"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-sans text-xs text-white/30 hover:text-[#8BA0BB] transition-colors duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact ─────────────────────────────────────────── */}
          <div className="md:col-span-4">
            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold/60 mb-4 pb-3 border-b border-white/8">
              Contact
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-sans text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-[#8BA0BB] hover:text-white transition-colors duration-150"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="font-sans text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-[#8BA0BB] hover:text-white transition-colors duration-150 break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="font-sans text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-1">
                  Location
                </p>
                <p className="font-sans text-xs text-white/30 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-gold hover:text-gold-light transition-colors"
              >
                LinkedIn
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="border-t border-white/8 py-5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 text-center sm:text-left">
            <p className="font-sans text-xs text-white/30">{footer.legal}</p>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <p className="font-sans text-[10px] text-white/20 tracking-wide">
              Madison, AL · Serving U.S. Government &amp; DoD Clients Nationwide
            </p>
          </div>
          <Link
            href="/contact"
            className="font-sans text-xs font-semibold text-gold hover:text-gold-light transition-colors flex-shrink-0"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </footer>
  );
}
