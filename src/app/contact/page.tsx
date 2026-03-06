import type { Metadata } from "next";
import { contactPage, siteConfig } from "@/lib/content";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. We respond within one business day.`,
  alternates: { canonical: "https://ttkllc.com/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.shortName}`,
    description: `Reach out to ${siteConfig.name} — we respond within one business day.`,
    url: "https://ttkllc.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const { hero } = contactPage;

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
        </div>
      </section>

      {/* ── Contact body ───────────────────────────────────────────── */}
      <section className="bg-[#F5F2EC] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <FadeIn direction="left">
            <h2 className="font-display font-bold text-navy text-xl mb-6 leading-tight">
              Direct Contact
            </h2>

            <div className="space-y-5 mb-8">
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-navy hover:text-gold transition-colors duration-150"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-navy hover:text-gold transition-colors duration-150"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-gold mb-1">
                  Location
                </p>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Response time callout */}
            <div className="bg-[#04091A] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold">
                  Response Time
                </p>
              </div>
              <p className="font-sans text-[#8BA0BB] text-sm leading-relaxed">
                All inquiries are responded to within{" "}
                <span className="text-gold font-semibold">one business day</span>.
                Classified or sensitive program inquiries can be handled via phone.
              </p>
            </div>
          </FadeIn>

          {/* ── Form ─────────────────────────────────────────────────── */}
          <FadeIn direction="right" delay={100} className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-navy/8 p-8 md:p-10">
              <h3 className="font-display font-bold text-navy text-xl mb-1">
                Send a Message
              </h3>
              <p className="font-sans text-navy/40 text-sm mb-8">
                All fields marked * are required.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
