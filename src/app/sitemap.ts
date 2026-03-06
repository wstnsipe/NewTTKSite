import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ttkllc.com";
  const lastModified = new Date();

  return [
    { url: base,                 lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,      lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,   lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,    lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
