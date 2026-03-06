import type { Metadata } from "next";
import Link from "next/link";
import { servicesPage, siteConfig } from "@/lib/content";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "TTK LLC offers MOSA advisory, defense engineering, strategic planning, and leadership coaching for U.S. Government and DoD clients.",
  alternates: { canonical: "https://ttkllc.com/services" },
  openGraph: {
    title: `Services | ${siteConfig.shortName}`,
    description:
      "Four practice areas built on 20+ years of real DoD program experience: MOSA advisory, engineering, strategy, and leadership coaching.",
    url: "https://ttkllc.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const { hero, services } = servicesPage;

  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#04091A] pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(196,146,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,146,58,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1
            className="font-display font-black text-white mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
          >
            {hero.headline}
          </h1>
          <p className="font-sans text-[#8BA0BB] text-lg max-w-xl leading-relaxed">
            {hero.subheadline}
          </p>

          {/* Service jump-links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-sans text-xs font-semibold tracking-wide border border-white/20 text-white/60 px-4 py-2 rounded hover:border-gold/50 hover:text-gold transition-all duration-150"
              >
                {s.number} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services list ──────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto divide-y divide-navy/8">
          {services.map((service, i) => (
            <FadeIn key={service.id} direction="up" delay={0} className="py-16 first:pt-4">
              <div
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start scroll-mt-24"
              >
                {/* Left: number + title */}
                <div>
                  <span className="font-display font-black text-gold/20 block leading-none mb-3" style={{ fontSize: "5rem" }}>
                    {service.number}
                  </span>
                  <div className="gold-rule mb-4" />
                  <h2
                    className="font-display font-bold text-navy mb-2"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-sans text-gold text-sm font-semibold italic leading-snug">
                    {service.tagline}
                  </p>
                </div>

                {/* Right: description + offerings */}
                <div>
                  <p className="font-sans text-navy/60 leading-relaxed text-[15px] mb-7">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.offerings.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-sans text-navy/60">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-150"
                  >
                    Discuss this service
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
