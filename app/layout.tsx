import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solzdesigns.co.zw"),
  title: {
    default: "Solz Designs — Premium Web & Brand Design Studio",
    template: "%s | Solz Designs",
  },
  description:
    "Solz Designs is a creative design studio in Zimbabwe building premium websites, brand identities, and immersive digital experiences.",
  keywords: ["web design Zimbabwe", "branding Harare", "Solz Designs", "UI UX design", "creative studio Zimbabwe"],
  authors: [{ name: "Solz Designs" }],
  creator: "Solz Designs",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://solzdesigns.co.zw",
    siteName: "Solz Designs",
    title: "Solz Designs — Premium Web & Brand Design Studio",
    description: "Premium websites, branding, and immersive digital experiences.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Solz Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solz Designs — Premium Web & Brand Design Studio",
    description: "Premium websites, branding, and immersive digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://solzdesigns.co.zw" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Solz Designs",
              url: "https://solzdesigns.co.zw",
              logo: "https://solzdesigns.co.zw/logo.png",
              description: "Premium web and brand design studio in Zimbabwe.",
              address: { "@type": "PostalAddress", addressCountry: "ZW" },
              sameAs: ["https://www.facebook.com/profile.php?id=61590005594397"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
