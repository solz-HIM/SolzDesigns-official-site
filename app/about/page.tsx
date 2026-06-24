import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Solz Designs is a Zimbabwe-based design studio crafting premium, modern websites — e-commerce, portfolio, and business sites built to perform.",
  alternates: { canonical: "https://solzdesigns.co.zw/about" },
};

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <section>
          <h1>We build websites that feel premium and perform like it.</h1>
          <p>
            Solz Designs is a creative studio based in Zimbabwe. We design and
            build modern, high-end websites for brands that refuse to look like
            everyone else — e-commerce stores, portfolios, and business sites
            engineered for speed, clarity, and conversion.
          </p>
        </section>

        <section>
          <h2>What we believe</h2>
          <p>
            Great design isn't decoration — it's strategy made visible. Every
            layout, motion, and interaction we ship has a job: to make your brand
            unforgettable and your visitors take action.
          </p>
        </section>

        <section>
          <h2>How we work</h2>
          <p>
            We treat every project like a flagship. From the first wireframe to
            the final deploy, we obsess over typography, motion, performance, and
            the small details that separate a good site from a memorable one.
          </p>
        </section>

        <section>
          <h2>Let's build something premium</h2>
          <p>
            Ready to start? <a href="/contact">Get in touch</a> and tell us about
            your project.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
