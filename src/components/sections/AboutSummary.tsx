import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { aboutSummary } from "@/lib/content";

export function AboutSummary() {
  return (
    <section className="bg-white py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Text side ─────────────────────────────────────────────── */}
        <FadeIn direction="left">
          <div className="eyebrow">{aboutSummary.eyebrow}</div>
          <h2
            className="font-display font-bold text-navy whitespace-pre-line mb-6"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.05 }}
          >
            {aboutSummary.headline}
          </h2>

          {aboutSummary.paragraphs.map((para, i) => (
            <p key={i} className="font-sans text-navy/60 leading-relaxed mb-4 text-[15px]">
              {para}
            </p>
          ))}

          {/* ── Stats ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-3 gap-6 mt-8 mb-10 border-t border-navy/10 pt-8">
            {aboutSummary.stats.map((stat, i) => (
              <div key={i}>
                <p
                  className="font-display font-black text-gold leading-none"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-[10px] text-navy/40 uppercase tracking-widest mt-1.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={aboutSummary.cta.href}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-gold transition-colors duration-150"
          >
            {aboutSummary.cta.label}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeIn>

        {/* ── Image side ────────────────────────────────────────────── */}
        <FadeIn direction="right" delay={120}>
          <div className="relative">
            {/* Gold border frame — offset behind photo */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg" />

            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={aboutSummary.imageSrc}
                alt={aboutSummary.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Navy-to-transparent bottom fade on photo */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Gold accent square */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
