// ─────────────────────────────────────────────────────────────────────────────
// LinkedInInsights — Homepage section: Real post screenshots + LinkedIn CTA
// Placement: after WhyTTK, before CTABanner
// Data source: src/data/linkedInPosts.ts
// ─────────────────────────────────────────────────────────────────────────────

import Image      from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { linkedInPosts, LINKEDIN_PROFILE_URL, type LinkedInPost } from "@/data/linkedInPosts";

// ── Icons ─────────────────────────────────────────────────────────────────────

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// ── Post screenshot card ──────────────────────────────────────────────────────

function PostCard({ post, delay }: { post: LinkedInPost; delay: number }) {
  return (
    <FadeIn delay={delay} direction="up">
      <a
        href={post.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full bg-[#070F23] border border-white/[0.07] hover:border-gold/30 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        aria-label={`View LinkedIn post: ${post.alt}`}
      >
        {/* Gold left-edge accent — reinforces brand color hierarchy */}
        <div className="h-[2px] w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent rounded-t" />

        {/* Screenshot — natural aspect ratio, no cropping */}
        <div className="overflow-hidden">
          <Image
            src={post.image}
            alt={post.alt}
            width={600}
            height={800}
            className="w-full h-auto block"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Card footer */}
        <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-t border-white/[0.06] mt-auto">
          <div className="flex items-center gap-2.5 min-w-0">
            {post.label && (
              <span className="font-sans text-[9px] font-semibold tracking-[0.18em] uppercase text-gold/80">
                {post.label}
              </span>
            )}
            {post.label && post.date && (
              <span className="w-px h-3 bg-white/15 shrink-0" aria-hidden />
            )}
            {post.date && (
              <span className="font-sans text-[11px] text-[#8BA0BB]/55 truncate">
                {post.date}
              </span>
            )}
          </div>
          <span className="font-sans text-[11px] font-semibold text-[#8BA0BB]/50 group-hover:text-gold transition-colors duration-200 shrink-0 flex items-center gap-1">
            View post
            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    </FadeIn>
  );
}

// ── Main exported section ─────────────────────────────────────────────────────

export function LinkedInInsights() {
  return (
    <section className="relative bg-[#04091A] py-28 px-6 lg:px-12 overflow-hidden">

      {/* Subtle background grid — matches Testimonial section treatment */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,146,58,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,146,58,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Corner gold accents */}
      <div aria-hidden className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-gold to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section header — left-aligned text, right-aligned CTA ── */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">

          <div className="max-w-lg">
            <div className="eyebrow">On LinkedIn</div>

            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              What I&rsquo;m Thinking
            </h2>

            <p className="font-sans text-[#8BA0BB] text-[15px] leading-relaxed">
              I write regularly on MOSA, acquisition strategy, and defense program
              leadership. These are real posts — click any card to read on LinkedIn.
            </p>
          </div>

          {/* Ghost-border profile CTA — consistent with Capabilities "View All Services" */}
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group self-start md:self-auto flex-shrink-0 inline-flex items-center gap-2.5 border border-gold/40 text-gold text-sm font-sans font-semibold px-6 py-3 rounded hover:border-gold hover:bg-gold/5 transition-all duration-200 whitespace-nowrap"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            Follow on LinkedIn
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

        </FadeIn>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-12" />

        {/* ── Post cards — driven entirely by linkedInPosts data ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {linkedInPosts.map((post, i) => (
            <PostCard key={post.id} post={post} delay={i * 90} />
          ))}
        </div>

      </div>
    </section>
  );
}
