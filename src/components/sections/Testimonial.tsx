import { FadeIn } from "@/components/ui/FadeIn";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section className="relative bg-[#04091A] py-28 px-6 lg:px-12 overflow-hidden">

      {/* ── Background grid pattern ───────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,146,58,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,146,58,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Corner gold accents ──────────────────────────────────── */}
      <div aria-hidden className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-gold to-transparent opacity-40" />
      <div aria-hidden className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-gold to-transparent opacity-40" />

      {/* ── Content ──────────────────────────────────────────────── */}
      <FadeIn className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-gold/50" />
          <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold">
            Client Testimonial
          </span>
          <div className="w-12 h-px bg-gold/50" />
        </div>

        {/* Decorative open quote */}
        <div
          aria-hidden
          className="font-display font-black text-gold/20 leading-none select-none mb-0 -mb-4"
          style={{ fontSize: "clamp(80px, 10vw, 140px)" }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote
          className="font-display font-bold text-white leading-tight mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          {testimonial.quote}
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-gold" />
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
            {testimonial.attribution}
          </p>
          <div className="h-px w-10 bg-gold" />
        </div>
      </FadeIn>
    </section>
  );
}
