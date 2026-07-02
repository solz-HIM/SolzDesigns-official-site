import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://solzdesigns.co.zw";
  const routes = [
    "",
    "/services/e-commerce",
    "/services/portfolio",
    "/services/website-maintenance",
    "/web-design-harare",
    "/web-development-zimbabwe",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
