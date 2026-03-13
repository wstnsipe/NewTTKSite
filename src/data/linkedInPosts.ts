// ─────────────────────────────────────────────────────────────────────────────
// LinkedIn Posts Data
//
// HOW TO ADD A NEW POST:
//   1. Copy the template block below and paste it at the TOP of the `posts`
//      array (newest first — the homepage always shows the first 3 entries).
//   2. Fill in each field. Use ISO format for `date` (YYYY-MM-DD) so sorting
//      works correctly. Set `displayDate` to a human-readable label ("Mar 2025").
//   3. Set `url` to the full LinkedIn post URL (not the profile URL).
//   4. Save — no component files need to change.
//
// TEMPLATE:
//   {
//     id:          "unique-slug",
//     tag:         "MOSA | Acquisition | Leadership | Strategy | Engineering",
//     date:        "2025-03-01",
//     displayDate: "Mar 2025",
//     title:       "Post title here",
//     excerpt:     "Two to three sentence teaser that appears on the card.",
//     url:         "https://www.linkedin.com/posts/...",
//   },
// ─────────────────────────────────────────────────────────────────────────────

export interface LinkedInPost {
  /** Unique kebab-case identifier — used as React key */
  id:          string;
  /** Short category label shown in the card tag pill */
  tag:         string;
  /** ISO date string (YYYY-MM-DD) — used for chronological sorting */
  date:        string;
  /** Human-readable date label shown in the UI ("Feb 2025") */
  displayDate: string;
  /** Card headline — keep under ~60 characters for best layout */
  title:       string;
  /** Card body — 2–3 sentences; rendered with line-clamp in the UI */
  excerpt:     string;
  /** Full URL to the LinkedIn post */
  url:         string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Posts — newest first. The homepage shows the first FEATURED_COUNT entries.
// Add new posts at the TOP of this array.
// ─────────────────────────────────────────────────────────────────────────────

export const posts: LinkedInPost[] = [
  // ↓ ADD NEW POSTS HERE ↓
  {
    id:          "mosa-programs-wrong",
    tag:         "MOSA",
    date:        "2025-02-15",
    displayDate: "Feb 2025",
    title:       "Why Most Programs Are Getting MOSA Wrong",
    excerpt:
      "MOSA compliance isn't just about checking a box on your RFP. After reviewing dozens of OSMPs, I keep seeing the same costly misunderstanding — and it's setting programs up for integration failure down the road.",
    url:         "https://www.linkedin.com/in/matt-sipe-12180218",
  },
  {
    id:          "hidden-cost-cdr",
    tag:         "Acquisition",
    date:        "2025-01-20",
    displayDate: "Jan 2025",
    title:       "The Hidden Cost of a Poorly Run CDR",
    excerpt:
      "A Critical Design Review isn't a presentation — it's a decision gate. When program managers treat it like a briefing, they burn credibility, delay timelines, and miss the exact risks they were supposed to catch.",
    url:         "https://www.linkedin.com/in/matt-sipe-12180218",
  },
  {
    id:          "20-years-dod-leadership",
    tag:         "Leadership",
    date:        "2024-12-10",
    displayDate: "Dec 2024",
    title:       "What 20 Years in DoD Programs Taught Me About Leadership",
    excerpt:
      "The best leaders I worked with in government weren't the ones with the most technical knowledge. They were the ones who knew how to get clarity — and transfer that clarity to their teams under pressure.",
    url:         "https://www.linkedin.com/in/matt-sipe-12180218",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper — returns the N most recent posts, sorted by date descending.
// The homepage calls getFeaturedPosts() with no argument to get the default 3.
// ─────────────────────────────────────────────────────────────────────────────

export const FEATURED_COUNT = 3;

export function getFeaturedPosts(count: number = FEATURED_COUNT): LinkedInPost[] {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
