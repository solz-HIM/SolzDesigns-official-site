import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { baseNodes, graph } from "@/lib/schema";
import { SITE } from "@/lib/site";

/**
 * Two variable families, latin only. Archivo carries the whole display system
 * — the 800-weight statement and the 300-weight wide-tracked caps come from
 * one file, which is why the pairing costs less than a single extra family.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  // Weight axis only. The width axis was requested at first and never used —
  // nothing in the stylesheet sets font-stretch — and carrying it cost ~50KB
  // on the single largest asset on the page.
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // Leads with the phrase carrying real measured demand ("web design
    // Zimbabwe"), not with a studio-speak abstraction.
    default: "Web Design Zimbabwe | Website Design Agency in Harare — Solz Designs",
    template: "%s | Solz Designs",
  },
  description:
    "Solz Designs is a web design agency in Harare, Zimbabwe. Custom business websites, online stores and SEO from $80. Built fast, built to rank, delivered in 5–10 days.",
  applicationName: SITE.name,
  authors: [{ name: SITE.founder, url: `${SITE.url}/about` }],
  creator: SITE.founder,
  publisher: SITE.name,
  category: "Web Design",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: SITE.url,
    siteName: SITE.name,
    title: "Web Design Zimbabwe | Website Design Agency in Harare",
    description:
      "Custom websites, online stores and SEO for Zimbabwean businesses. From $80, delivered in 5–10 days.",
    // og:image is injected by the app/opengraph-image.tsx file convention —
    // setting it here as well would emit the tag twice.
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Zimbabwe | Solz Designs",
    description:
      "Custom websites, online stores and SEO for Zimbabwean businesses. From $80.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "yJNaF4bQ9cogswtp8Gz5Xy2NPG5nRFW8C17dHCSRmYw",
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZW" className={`${archivo.variable} ${instrument.variable}`}>
      <head>
        {/* One connected graph for the whole site. Page-level nodes are added
            per route and reference these by @id. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: graph(...baseNodes) }}
        />
      </head>
      <body className="min-h-dvh overflow-x-hidden bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
