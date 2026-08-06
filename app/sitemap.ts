import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { PROJECTS, SERVICES, SITE } from "@/lib/site";

/**
 * The previous sitemap stamped every URL with `new Date()` at build time, so
 * every page claimed to have changed on every deploy. Google learns to ignore
 * lastModified when it is always "now", which throws away the one signal the
 * field exists to send. These dates are fixed and only move when the content
 * behind them actually moves.
 */
const CONTENT_UPDATED = "2026-08-06";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"] = "monthly",
  ): Entry => ({
    url: `${SITE.url}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),

    // Commercial pages — the ones we want crawled most often.
    entry("/services", 0.9),
    ...SERVICES.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry("/pricing", 0.9),

    // Location cluster.
    entry("/web-development-zimbabwe", 0.9),
    ...LOCATIONS.map((l) => entry(`/${l.slug}`, 0.8)),

    // Proof and trust.
    entry("/work", 0.7),
    ...PROJECTS.map((p) => entry(`/work/${p.slug}`, 0.6)),
    entry("/about", 0.6),
    entry("/contact", 0.7),
  ];
}
