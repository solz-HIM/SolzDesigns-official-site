import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected projects by Solz Designs — e-commerce, portfolio, and business websites crafted with premium design and modern technology.",
  alternates: { canonical: "https://solzdesigns.co.zw/work" },
};

export default function Work() {
  return (
    <>
      <Navigation />
      <main>
        <section>
          <h1>Selected work.</h1>
          <p>
            A look at projects we've designed and built — each one custom, each
            one premium.
          </p>
        </section>

        <section>
          <h2>Sunnies by Mel — E-commerce Store</h2>
          <p>
            A modern online store built for a sunglasses brand. Clean product
            presentation, smooth browsing, and a checkout experience designed to
            convert.
          </p>
        </section>

        <section>
          <h2>Portfolio Websites</h2>
          <p>
            Two premium portfolio sites built to showcase creative work with
            immersive layouts, motion, and editorial typography.
          </p>
        </section>

        <section>
          <h2>Restaurant Websites</h2>
          <p>
            Two custom restaurant websites — menu-forward, atmospheric, and built
            to bring the in-house experience online.
          </p>
        </section>

        <section>
          <h2>Want your project here?</h2>
          <p>
            <a href="/contact">Let's talk.</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
