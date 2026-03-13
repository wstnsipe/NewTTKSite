// ─────────────────────────────────────────────────────────────────────────────
// InsightCard — reusable card for LinkedIn thought-leadership posts
// ─────────────────────────────────────────────────────────────────────────────

interface InsightCardProps {
  tag:     string;
  date:    string;
  title:   string;
  excerpt: string;
  href:    string;
}

function ExternalArrow() {
  return (
    <svg
      className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function InsightCard({ tag, date, title, excerpt, href }: InsightCardProps) {
  return (
    <article className="group relative flex flex-col bg-[#0C1A38] border border-white/5 border-l-2 border-l-gold/25 hover:border-l-gold hover:bg-[#0d1f3d] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 h-full">

      <div className="flex flex-col flex-1 p-7">

        {/* Tag — bare uppercase label, no pill */}
        <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          {tag}
        </span>

        {/* Title */}
        <h3
          className="font-display font-bold text-white leading-tight mb-3 line-clamp-2"
          style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.175rem)" }}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-sm text-[#8BA0BB] leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* Footer — date left, CTA right */}
        <div className="flex items-center justify-between gap-4 mt-6 pt-5 border-t border-white/5">
          <time className="font-sans text-xs text-[#8BA0BB]/45 shrink-0">{date}</time>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-gold hover:text-gold-light transition-colors duration-200 shrink-0"
            aria-label={`Read "${title}" on LinkedIn`}
          >
            Read on LinkedIn
            <ExternalArrow />
          </a>
        </div>
      </div>
    </article>
  );
}
