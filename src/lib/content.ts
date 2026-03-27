// ─────────────────────────────────────────────────────────────────────────────
// TTK LLC — Site Content
// All site copy lives here. Edit this file to update any text without
// touching component files.
// ─────────────────────────────────────────────────────────────────────────────

// ── Image URLs (TTK's own CDN) ────────────────────────────────────────────────
const CDN = "https://img1.wsimg.com/isteam/ip/a4255f7f-2340-4732-8fc2-e495be75442e";

export const IMAGES = {
  // Defense ops room — team around holographic table (1536×1024)
  opsRoom: `${CDN}/Copilot_20250907_164808.png`,
  // Professional headshot of TTK founder (768×906)
  founder: `${CDN}/Screenshot%202025-08-12%20at%208.09.12%E2%80%AFPM.png`,
  // Hero/banner image
  heroBg:  `${CDN}/Screenshot%202025-09-07%20at%205.00.33%E2%80%AFPM.png`,
};

// Hero slideshow images — slides 2-6 stored locally in /public/images/hero/
export const heroSlides = [
  { src: IMAGES.opsRoom,                 alt: "Defense operations team" },
  { src: "/images/hero/slide-1.jpg",     alt: "Defense and strategy" },
  { src: "/images/hero/slide-2.jpg",     alt: "Military operations" },
  { src: "/images/hero/slide-3.jpg",     alt: "Engineering solutions" },
  { src: "/images/hero/slide-4.jpg",     alt: "Government contracting" },
  { src: "/images/hero/slide-5.jpg",     alt: "Strategic leadership" },
];

// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name:      "To The King LLC",
  shortName: "TTK LLC",
  tagline:   "Defense. Engineering. Results.",
  phone:     "+1 (256) 606-7350",
  email:     "mattsipe@ttkllc.com",
  address:   "105 Boardhouse Br, Madison, AL 35756",
  social: {
    linkedin: "https://www.linkedin.com/in/matt-sipe-12180218", // Add LinkedIn URL here
  },
};

// ── Navigation ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow:       "To The King LLC",
  headlineLine1: "Defense and Strategy",
  headlineLine2: "Solutions.",
  subheadline:
    "I deliver expert MOSA advisory, engineering support, and strategic leadership to U.S. Government and DoW clients.",
  primaryCTA:   { label: "Partner With Me", href: "/contact" },
  secondaryCTA: { label: "My Services",     href: "/services" },
  imageSrc:     IMAGES.opsRoom,
  imageAlt:     "Defense operations team",
};

// ── Credentials Bar ───────────────────────────────────────────────────────────

export const credentialsBar = [
  "Veteran-Owned Small Business",
  "20+ Years DoD Experience",
  "MOSA Specialist",
  "Aviation, Engineering, Technology",
  "$4B+ Acquisition Oversight",
];

// ── Capabilities ──────────────────────────────────────────────────────────────

export const capabilities = {
  eyebrow:  "What I Do",
  headline: "Core Capabilities",
  intro:
    "Four specialized practice areas built on two decades of real DoD program experience.",
  items: [
    {
      id:          "mosa",
      number:      "01",
      title:       "MOSA Advisory",
      description:
        "Modular Open Systems Approach strategy for government programs and industry partners. Compliance, alignment, and competitive positioning.",
      href:        "/services#mosa",
      gradient:    "from-[#0C1A38] to-[#07111F]",
    },
    {
      id:          "engineering",
      number:      "02",
      title:       "Engineering & Technical",
      description:
        "Two decades of Defense Engineering — SOF C-130, UH/MH-60, AH-64, UAS, and Future Vertical Lift. Design reviews, acquisition, airworthiness.",
      href:        "/services#engineering",
      gradient:    "from-[#071823] to-[#0A1520]",
    },
    {
      id:          "strategy",
      number:      "03",
      title:       "Strategy",
      description:
        "Clarify your end state, surface the real obstacles, and build an executable path forward. Corporate and program-level strategy.",
      href:        "/services#strategy",
      gradient:    "from-[#0E0C1F] to-[#080615]",
    },
    {
      id:          "leadership",
      number:      "04",
      title:       "Leadership & Coaching",
      description:
        "1–16 hour sessions covering emotional intelligence, change management, and effective teams. Individual coaching for senior leaders.",
      href:        "/services#leadership",
      gradient:    "from-[#120B0A] to-[#0B0A18]",
    },
  ],
};

// ── About Summary ─────────────────────────────────────────────────────────────

export const aboutSummary = {
  eyebrow:    "About TTK",
  headline:   "Built on Service.\nDriven by Results.",
  paragraphs: [
    "I founded TTK LLC on a simple belief: great consulting starts with genuine service — to clients, to mission, and to something greater than the bottom line.",
    "I departed the U.S. Government as Chief Engineer for PEO Aviation, with technical oversight of 13,000+ fielded aircraft and nearly $4B/year in acquisitions.",
    "\"To The King\" has been my email signature since 2018. It is a cheerful gesture to suggest unity and service — and for me personally, a reminder that I am not the boss but am to serve others, and in particular, to serve the King of Kings (Rev 19:16). As such, my actions and my work (Col 3:23) should reflect that belief.",
  ],
  stats: [
    { value: "20+",  label: "Years in Defense" },
    { value: "13K+", label: "Aircraft Overseen" },
    { value: "$4B",  label: "Acq. Oversight / yr" },
  ],
  cta:      { label: "My Full Story", href: "/about" },
  imageSrc: IMAGES.founder,
  imageAlt: "TTK LLC Founder",
};

// ── Testimonial ───────────────────────────────────────────────────────────────

export const testimonial = {
  quote:
    "TTK's guidance completely reframed how our team approaches MOSA. We walked away with a clear strategy and the confidence to execute.",
  attribution: "Program Manager, U.S. Army Aviation",
};

// ── Why TTK ───────────────────────────────────────────────────────────────────

export const whyTTK = {
  eyebrow:  "Why TTK",
  headline: "What Sets Me Apart",
  items: [
    {
      icon:        "shield",
      title:       "Real Experience",
      description: "I've held the roles you're navigating. My advice is grounded in real government and defense program operations.",
    },
    {
      icon:        "target",
      title:       "Mission-First Mindset",
      description: "Every engagement is scoped to your specific mission. I don't leave until the objective is clear and the path is executable.",
    },
    {
      icon:        "chart",
      title:       "Technical Depth",
      description: "From airworthiness to acquisition strategy, my engineering background lets me engage at the right level of detail.",
    },
    {
      icon:        "handshake",
      title:       "Personal Accountability",
      description: "You work directly with me — not a junior associate. Your success is my name on the line.",
    },
  ],
};

// ── LinkedIn Insights ─────────────────────────────────────────────────────────

export const linkedInInsights = {
  eyebrow:           "Thought Leadership",
  headline:          "Latest Insights from Matt",
  subtext:
    "Straight talk on defense acquisition, MOSA strategy, and what it takes to deliver results in complex programs — from someone who's lived it.",
  profileName:       "Matt Sipe",
  profileTitle:      "Principal, TTK LLC",
  profileCredential: "Former Chief Engineer, PEO Aviation | 20+ Years DoD",
  linkedInUrl:       "https://www.linkedin.com/in/matt-sipe-12180218",
  followCTA:         "Follow on LinkedIn",
  allPostsCTA:       "See All Posts on LinkedIn",
  // Post data lives in src/data/linkedInPosts.ts — edit there to add/update posts.
};

// ── CTA Banner ────────────────────────────────────────────────────────────────

export const ctaBanner = {
  headline: "Ready to accelerate your mission?",
  subtext:
    "Whether you're navigating a program challenge, preparing for a design review, or building your leadership pipeline — let's talk.",
  cta: { label: "Schedule a Consultation", href: "/contact" },
};

// ── Footer ────────────────────────────────────────────────────────────────────

export const footer = {
  tagline:    "Defense. Engineering. Results.",
  credential: "Veteran-Owned Small Business",
  links: [
    { label: "About",    href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact",  href: "/contact" },
  ],
  legal: `© ${new Date().getFullYear()} To The King LLC. All rights reserved.`,
};

// ── About Page ────────────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    eyebrow:     "My Story",
    headline:    "Built on Service.",
    subheadline: "Two decades of real-world DoD experience brought to every client engagement.",
  },
  story: {
    headline:   "From the Field to the Boardroom",
    paragraphs: [
      "I spent nearly two decades inside U.S. Government and DoD programs — from SOF C-130 modifications with the Air Force to Airworthiness and Acquisition Engineering for Army Aviation platforms including UH/MH-60, AH-64, Turbine Engines, UAS, and Future Vertical Lift.",
      "Before founding TTK, I served as Chief Engineer for PEO Aviation, responsible for technical oversight of over 13,000 fielded aircraft and nearly $4B per year in acquisitions. That level of institutional knowledge and real-world program experience is what I bring to every client engagement.",
      "\"To The King\" has been my email signature since 2018. It is a cheerful gesture to suggest unity and service — and for me personally, a reminder that I am not the boss but am to serve others, and in particular, to serve the King of Kings (Rev 19:16). As such, my actions and my work (Col 3:23) should reflect that belief.",
    ],
  },
  values: {
    headline: "What I Believe",
    items: [
      {
        title: "Service Above Self",
        body:  "I'm here to help you succeed. That means honest advice, even when it's hard to hear.",
      },
      {
        title: "Mission Clarity",
        body:  "Ambiguity is the enemy of execution. I help you define the goal, the path, and the metrics that matter.",
      },
      {
        title: "Technical Integrity",
        body:  "I don't guess. Every recommendation is grounded in engineering data, program history, and operational reality.",
      },
    ],
  },
};

// ── Services Page ─────────────────────────────────────────────────────────────

export const servicesPage = {
  hero: {
    eyebrow:     "What I Do",
    headline:    "My Services",
    subheadline: "Four practice areas. One commitment: your program's success.",
  },
  services: [
    {
      id:          "mosa",
      number:      "01",
      title:       "MOSA Advisory",
      tagline:     "Open architecture strategy for complex defense programs.",
      description:
        "The Modular Open Systems Approach (MOSA) is now mandated across DoD programs — but real implementation remains deeply misunderstood. I help government Program Offices achieve compliant MOSA strategies and help industry partners align their products and proposals accordingly.",
      offerings: [
        "MOSA strategy development and documentation",
        "Government program MOSA compliance reviews",
        "Industry alignment for proposals, OSMPs, and RFP responses",
        "Technical Interface Definition support",
        "Architecture roadmap development",
        "Vendor evaluation and MOSA gap analysis",
      ],
    },
    {
      id:          "engineering",
      number:      "02",
      title:       "Engineering & Technical Advisory",
      tagline:     "Deep technical expertise across fixed-wing, rotary, and UAS platforms.",
      description:
        "With nearly two decades inside Army and Air Force aviation programs, I provide engineering advisory that only comes from having held the roles yourself. From airworthiness to acquisition, I engage at the right level of technical depth.",
      offerings: [
        "Airworthiness and acquisition engineering support",
        "Design Review preparation and facilitation (PDR/CDR/PRR)",
        "New program role coaching and onboarding advisory",
        "Technical risk identification and mitigation strategies",
        "Platform expertise: UH/MH-60, AH-64, C-130, UAS, FVL",
        "Chief/senior engineer mentorship and coaching",
      ],
    },
    {
      id:          "strategy",
      number:      "03",
      title:       "Strategy",
      tagline:     "Clarity on where you're going and how to get there.",
      description:
        "My strategy consulting is hands-on and practical. I help organizations at all levels define their desired end state, identify the obstacles, and build a plan that accounts for the real constraints of government and defense environments.",
      offerings: [
        "Program-level strategy sessions",
        "Corporate strategy for defense contractors",
        "Change management and transformation planning",
        "Growth strategy for small businesses entering the defense market",
        "Mission alignment and goal-setting workshops",
        "Strategic communications and positioning",
      ],
    },
    {
      id:          "leadership",
      number:      "04",
      title:       "Leadership & Coaching",
      tagline:     "Develop the leaders your mission depends on.",
      description:
        "My leadership training is built around real-world defense and government experience — not generic corporate programs. From emotional intelligence to team dynamics, I help leaders at every level perform at the next level.",
      offerings: [
        "1–16 hour leadership training sessions",
        "Emotional intelligence and self-awareness development",
        "Change management and effective teams",
        "Individual coaching (rising stars to senior leaders)",
        "By-the-Book Leadership framework delivery",
        "Types of Leaders assessment and application",
      ],
    },
  ],
};

// ── Contact Page ──────────────────────────────────────────────────────────────

export const contactPage = {
  hero: {
    eyebrow:     "Get In Touch",
    headline:    "Let's Talk.",
    subheadline: "Tell me about your program challenge, upcoming review, or leadership initiative. I respond within one business day.",
  },
  form: {
    namePlaceholder:    "Your full name",
    emailPlaceholder:   "Your email address",
    orgPlaceholder:     "Organization or company",
    subjectOptions: [
      "MOSA Advisory",
      "Engineering & Technical",
      "Strategy",
      "Leadership & Coaching",
      "General Inquiry",
    ],
    messagePlaceholder: "Describe your challenge or what you're trying to accomplish.",
    submitLabel:        "Send Message",
  },
};
