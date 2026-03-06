import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, IMAGES } from "@/lib/content";

// ── Fonts ─────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://ttkllc.com"),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "To The King LLC delivers expert defense consulting, MOSA advisory, engineering support, and strategic leadership development to U.S. Government and DoD clients.",
  keywords: [
    "defense consulting",
    "MOSA advisory",
    "DoD consulting",
    "defense engineering",
    "Army Aviation",
    "PEO AVN",
    "veteran owned small business",
    "leadership coaching",
    "acquisition engineering",
    "Huntsville Alabama defense",
    "TTK LLC",
  ],
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description:
      "Expert defense consulting, MOSA advisory, and leadership development for government and industry.",
    url: "https://ttkllc.com",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: IMAGES.opsRoom,
        width: 1536,
        height: 1024,
        alt: "TTK LLC defense operations team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description:
      "Expert defense consulting, MOSA advisory, and leadership development for government and industry.",
    images: [IMAGES.opsRoom],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              alternateName: siteConfig.shortName,
              description:
                "Defense consulting, MOSA advisory, engineering support, and leadership development for U.S. Government and DoD clients.",
              url: "https://ttkllc.com",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "105 Boardhouse Br",
                addressLocality: "Madison",
                addressRegion: "AL",
                postalCode: "35756",
                addressCountry: "US",
              },
              areaServed: "US",
              knowsAbout: [
                "Defense Consulting",
                "MOSA Advisory",
                "DoD Acquisition",
                "Army Aviation",
                "Engineering Advisory",
                "Leadership Coaching",
              ],
              slogan: siteConfig.tagline,
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:font-semibold focus:px-4 focus:py-2 focus:rounded focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
