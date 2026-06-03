import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.mission,
  keywords: [
    "web design",
    "digital agency",
    "portfolio websites",
    "e-commerce",
    "Zimbabwe",
    "Solz Designs",
  ],
  authors: [{ name: SITE.owner }],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.mission,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
      <body className="min-h-screen overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
