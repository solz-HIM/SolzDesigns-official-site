import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: { root: path.join(__dirname) },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "gsap"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;