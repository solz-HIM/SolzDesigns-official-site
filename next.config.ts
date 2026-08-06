import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: { root: path.join(__dirname) },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * URL continuity for the redesign.
   *
   * Search Console shows /web-development-zimbabwe carrying 184 of the site's
   * 208 impressions, so that URL is kept exactly as-is rather than redirected.
   * Only genuinely renamed paths appear below, and each is a permanent (308)
   * redirect so Google transfers the old URL's signals to the new one instead
   * of treating it as a deletion.
   */
  async redirects() {
    return [
      // /services/portfolio, /services/e-commerce and
      // /services/website-maintenance all keep their original URLs, so there
      // is nothing to redirect for them — that continuity is deliberate.
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/services/seo", destination: "/services/seo-optimisation", permanent: true },
      { source: "/services/web-design", destination: "/services/business-website", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Defence-in-depth. The site has no auth, no cookies and no user
          // input reaching a server, so these are cheap insurance rather than
          // load-bearing controls.
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Immutable, content-hashed assets.
        source: "/logo.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
