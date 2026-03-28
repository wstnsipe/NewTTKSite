// ── LinkedIn Posts ─────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW POST:
//   1. Save the screenshot to:  public/images/linkedin/post-N.jpg
//   2. Copy one of the entries below and paste it at the top of the array.
//   3. Update id, image, alt, postUrl, and (optionally) date and label.
//   No component files need to change — the page reads directly from this array.
//
// HOW TO REPLACE A SCREENSHOT:
//   - Swap the image file in public/images/linkedin/
//   - Update the `image` path and `alt` text here to match.
//
// ──────────────────────────────────────────────────────────────────────────────

export interface LinkedInPost {
  /** Unique identifier — used as the React key */
  id: string;
  /** Image path relative to /public — e.g. "/images/linkedin/post-1.jpg" */
  image: string;
  /** Descriptive alt text for screen readers (describe what's actually in the post) */
  alt: string;
  /** Full URL to the real LinkedIn post */
  postUrl: string;
  /** Optional: human-readable date shown on the card — e.g. "Feb 2025" */
  date?: string;
  /** Optional: short topic label shown on the card — e.g. "MOSA" or "Acquisition" */
  label?: string;
}

export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/matt-sipe-12180218";

// Posts are displayed in the order listed here. Put newest posts first.
export const linkedInPosts: LinkedInPost[] = [
  {
    id: "ats-mosa-acquisition-freedom",
    image: "/images/linkedin/post-1.jpg",          // ← swap file name here to replace
    alt: "Matt Sipe LinkedIn post: The Acquisition Transformation Strategy (ATS) is a FANTASTIC way to drive the kind of change that the Department has needed — includes MOSA = Acquisition Freedom diagram showing capability agility through acquisition transformation",
    postUrl: "https://www.linkedin.com/posts/matt-sipe-12180218_change-leadership-capability-activity-7392759997140512768-ItUp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZCQ-MBprRxaCpmBOmawULLDIRAob7ZV08",
    date: "Feb 2025",
    label: "Acquisition",
  },
  {
    id: "mosa-at-scale-transformation",
    image: "/images/linkedin/post-2.jpg",          // ← swap file name here to replace
    alt: "Matt Sipe LinkedIn post: I loudly applaud Acquisition TRANSFORMATION, but ONLY if what we do is going to actually be TRANSFORMATIVE — includes MOSA at Scale Forces Acquisition Transformation to Occur graphic",
    postUrl: "https://www.linkedin.com/posts/matt-sipe-12180218_mosa-change-transformation-activity-7411941105375719424-dKv9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZCQ-MBprRxaCpmBOmawULLDIRAob7ZV08",
    date: "Jan 2025",
    label: "MOSA",
  },
  {
    id: "mosa-capability-centric-curve",
    image: "/images/linkedin/post-3.jpg",          // ← swap file name here to replace
    alt: "Matt Sipe LinkedIn post: MOSA is acquisition reform — includes Parry Labs capability-centric vs platform-centric defense program performance curve for 2020–2026",
    postUrl: "https://www.linkedin.com/posts/matt-sipe-12180218_mosa-acquisitiontransformation-defenseinnovation-activity-7428517302347870209-pZOx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZCQ-MBprRxaCpmBOmawULLDIRAob7ZV08",
    date: "Nov 2024",
    label: "MOSA",
  },
];
