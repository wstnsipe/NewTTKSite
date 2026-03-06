import type { Metadata } from "next";
import Image from "next/image";
import { aboutPage, aboutSummary, siteConfig } from "@/lib/content";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — founded by a career defense professional with 20+ years of DoD experience, including Chief Engineer for PEO Aviation.`,
  alternates: { canonical: "https://ttkllc.com/about" },
  openGraph: {
    title: `About | ${siteConfig.shortName}`,
    description: `Founded by the former Chief Engineer of PEO Aviation. ${siteConfig.name} brings 20+ years of real DoD program experience to every engagement.`,
    url: "https://ttkllc.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  const { hero, story, values } = aboutPage;

  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#04091A] pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Grid pattern */}
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
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <FadeIn direction="left">
            <div className="gold-rule mb-5" />
            <h2
              className="font-display font-bold text-navy mb-8"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}
            >
              {story.headline}
            </h2>
            <div className="space-y-5">
              {story.paragraphs.map((para, i) => (
                <p key={i} className="font-sans text-navy/60 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Photo + stats */}
          <FadeIn direction="right" delay={120}>
            <div className="relative mb-10">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/25 rounded-lg" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto lg:mx-0">
                <Image
                  src={aboutSummary.imageSrc}
                  alt={aboutSummary.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 384px"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold rounded" />
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {aboutSummary.stats.map((stat, i) => (
                <div key={i} className="text-center border border-navy/10 rounded-lg py-4 px-2">
                  <p className="font-display font-black text-gold text-2xl leading-none">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[10px] text-navy/40 uppercase tracking-widest mt-1.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F2EC] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <div className="gold-rule mb-5" />
            <h2
              className="font-display font-bold text-navy"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}
            >
              {values.headline}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.items.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80} direction="up">
                <div className="bg-white rounded-lg p-8 border border-navy/8 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="font-display font-bold text-navy text-xl mb-3">{v.title}</h3>
                  <p className="font-sans text-navy/55 text-sm leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
