import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="bg-[#070F23] py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────────────── */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="eyebrow">{capabilities.eyebrow}</div>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              {capabilities.headline}
            </h2>
            <p className="font-sans text-[#8BA0BB] text-sm leading-relaxed max-w-md mt-3">
              {capabilities.intro}
            </p>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-gold/40 text-gold text-sm font-sans font-semibold px-6 py-3 rounded hover:border-gold hover:bg-gold/5 transition-all duration-200"
          >
            View All Services
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeIn>

        {/* ── Card grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.items.map((item, i) => (
            <FadeIn key={item.id} delay={i * 80} direction="up">
              <ServiceCard
                number={item.number}
                title={item.title}
                description={item.description}
                href={item.href}
                gradient={item.gradient}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
