import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { Why } from "@/sections/why";
import { Areas } from "@/sections/areas";
import { Work } from "@/sections/work";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  // Overrides the template so the homepage title is not suffixed twice.
  // Absolute: the brand is already in the string, so the template suffix
  // would duplicate it.
  title: {
    absolute: "Web Design Zimbabwe — Websites From $80 | Solz Designs",
  },
  description:
    "Web design agency in Harare, Zimbabwe. Custom business websites, online stores and SEO from $80, live in 5–10 days. Fixed prices — see them before you ask.",
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
        <Areas />
        <Why />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
