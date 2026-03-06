import Link from "next/link";
import { ctaBanner } from "@/lib/content";

export function CTABanner() {
  return (
    <section className="relative bg-gold overflow-hidden py-24 px-6 lg:px-12">

      {/* Subtle dark texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #04091A 0, #04091A 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Text */}
        <div className="text-center lg:text-left">
          <h2
            className="font-display font-black text-[#04091A] leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            {ctaBanner.headline}
          </h2>
          <p className="font-sans text-[#04091A]/65 text-[15px] max-w-lg leading-relaxed">
            {ctaBanner.subtext}
          </p>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href={ctaBanner.cta.href}
            className="inline-flex items-center gap-2 bg-[#04091A] text-white font-sans font-semibold text-sm px-8 py-4 rounded hover:bg-navy-mid transition-all duration-200 shadow-[0_4px_20px_rgba(4,9,26,0.3)] hover:shadow-[0_6px_32px_rgba(4,9,26,0.45)] hover:-translate-y-px"
          >
            {ctaBanner.cta.label}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
