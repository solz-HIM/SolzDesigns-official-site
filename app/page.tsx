import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { Why } from "@/sections/why";
import { Work } from "@/sections/work";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  // Overrides the template so the homepage title is not suffixed twice.
  title:
    "Web Design Zimbabwe | Website Design Agency in Harare — Solz Designs",
  description:
    "Solz Designs is a web design agency in Harare, Zimbabwe. Custom business websites, online stores and SEO from $80. Built fast, built to rank, delivered in 5–10 days.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = graph(
    webPageNode({
      path: "/",
      name: "Web Design Zimbabwe | Website Design Agency in Harare",
      description:
        "Web design agency in Harare, Zimbabwe. Custom websites, online stores and SEO from $80, delivered in 5–10 days.",
      crumbs: [{ name: "Home", path: "/" }],
    }),
    breadcrumbNode([{ name: "Home", path: "/" }]),
    faqNode(FAQS, "/"),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      {/* The page now opens on the dark artwork hero, so the header keeps
          its default light colours rather than the ink-on-lime treatment. */}
      <Navigation />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Why />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
