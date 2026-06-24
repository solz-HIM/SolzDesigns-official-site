import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://solzdesigns.co.zw/sitemap.xml",
    host: "https://solzdesigns.co.zw",
  };
}
