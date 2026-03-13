// ─────────────────────────────────────────────────────────────────────────────
// LinkedInInsights — Homepage section: Thought leadership + LinkedIn CTA
// Placement: after WhyTTK, before CTABanner
// ─────────────────────────────────────────────────────────────────────────────

import { FadeIn }           from "@/components/ui/FadeIn";
import { InsightCard }      from "@/components/ui/InsightCard";
import { linkedInInsights } from "@/lib/content";
import { getFeaturedPosts } from "@/data/linkedInPosts";

// ── Icons ────────────────────────────────────────────────────────────────────

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor"
      viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

// ── Profile byline strip ──────────────────────────────────────────────────────
// Editorial byline — horizontal rule style, no card chrome
function ProfileStrip() {
  const { profileName, profileTitle, profileCredential, linkedInUrl, followCTA } =
    linkedInInsights;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-7 border-t border-b border-white/8">

      {/* Identity */}
      <div className="flex items-center gap-4">
        {/* Initials mark */}
        <div className="w-11 h-11 rounded bg-white/4 border border-white/8 flex items-center justify-center shrink-0">
          <span className="font-display font-bold text-gold text-sm tracking-wide" aria-hidden="true">
            MS
          </span>
        </div>

        <div>
          <p className="font-display font-bold text-white text-[1.05rem] leading-none mb-1">
            {profileName}
          </p>
          <p className="font-sans text-sm text-[#8BA0BB]">{profileTitle}</p>
          <p className="font-sans text-xs text-[#8BA0BB]/50 mt-0.5">{profileCredential}</p>
        </div>
      </div>

      {/* CTA — ghost button using gold border language */}
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold hover:text-gold-light font-sans text-sm font-semibold px-5 py-2.5 transition-all duration-200 shrink-0 whitespace-nowrap"
      >
        {followCTA}
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

// ── Main exported section ─────────────────────────────────────────────────────
export function LinkedInInsights() {
  const { eyebrow, headline, subtext, linkedInUrl, allPostsCTA } = linkedInInsights;
  const featured = getFeaturedPosts();

  return (
    <section className="relative bg-[#04091A] py-28 px-6 lg:px-12 overflow-hidden">

      {/* Subtle corner accents — matches Testimonial section treatment */}
      <div aria-hidden className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-gold/35 to-transparent" />
      <div aria-hidden className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-gold/35 to-transparent" />
      <div aria-hidden className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-gold/35 to-transparent" />
      <div aria-hidden className="absolute bottom-0 right-0 h-20 w-px bg-gradient-to-t from-gold/35 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/50" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold">
              {eyebrow}
            </span>
            <div className="w-10 h-px bg-gold/50" />
          </div>

          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            {headline}
          </h2>

          <p className="font-sans text-[#8BA0BB] max-w-xl mx-auto text-base leading-relaxed">
            {subtext}
          </p>
        </FadeIn>

        {/* ── Profile byline ── */}
        <FadeIn delay={80}>
          <div className="mb-10">
            <ProfileStrip />
          </div>
        </FadeIn>

        {/* ── Insight cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featured.map((post, i) => (
            <FadeIn key={post.id} delay={i * 90} direction="up">
              <InsightCard
                tag={post.tag}
                date={post.displayDate}
                title={post.title}
                excerpt={post.excerpt}
                href={post.url}
              />
            </FadeIn>
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <FadeIn delay={320} className="text-center">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#8BA0BB]/70 hover:text-gold transition-colors duration-200"
          >
            {allPostsCTA}
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
