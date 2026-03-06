import { FadeIn } from "@/components/ui/FadeIn";
import { whyTTK } from "@/lib/content";

// ── Icons ───────────────────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
      <circle cx="12" cy="12" r="4" strokeWidth={1.75} />
      <line x1="12" y1="3" x2="12" y2="7" strokeWidth={1.75} strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="21" strokeWidth={1.75} strokeLinecap="round" />
      <line x1="3" y1="12" x2="7" y2="12" strokeWidth={1.75} strokeLinecap="round" />
      <line x1="17" y1="12" x2="21" y2="12" strokeWidth={1.75} strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  handshake: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

export function WhyTTK() {
  return (
    <section className="bg-[#F5F2EC] py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-14">
          <div className="eyebrow justify-center">{whyTTK.eyebrow}</div>
          <h2
            className="font-display font-bold text-navy"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            {whyTTK.headline}
          </h2>
        </FadeIn>

        {/* ── Cards ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyTTK.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80} direction="up">
              <div className="group bg-white rounded-lg p-8 border border-navy/8 hover:border-gold/50 hover:shadow-[0_4px_24px_rgba(7,15,35,0.08)] transition-all duration-300 h-full flex flex-col">

                {/* Icon in gold circle */}
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors duration-200">
                  {ICONS[item.icon]}
                </div>

                {/* Gold accent bar */}
                <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-12" />

                <h3 className="font-display font-bold text-navy text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-navy/55 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
