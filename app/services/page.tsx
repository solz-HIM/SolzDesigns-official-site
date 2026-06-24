import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium web design services from Solz Designs — e-commerce stores, portfolio sites, and custom business websites built with modern tech.",
  alternates: { canonical: "https://solzdesigns.co.zw/services" },
};

export default function Services() {
  return (
    <main>
      <section>
        <h1>Premium websites, built to your brand.</h1>
        <p>
          We specialise in modern, high-performance websites — designed in
          Zimbabwe, built for any market.
        </p>
      </section>

      <section>
        <h2>E-commerce Websites</h2>
        <p>
          Fast, beautiful online stores designed to sell. Clean product pages,
          smooth checkout, and a shopping experience that builds trust.
        </p>
      </section>

      <section>
        <h2>Portfolio Websites</h2>
        <p>
          Showcase your work the way it deserves — immersive, editorial layouts
          with motion and polish that make your projects the hero.
        </p>
      </section>

      <section>
        <h2>Business Websites</h2>
        <p>
          Professional, conversion-focused sites for brands and companies.
          Strategy, design, and development under one roof.
        </p>
      </section>

      <section>
        <h2>What every project includes</h2>
        <ul>
          <li>Custom design — no templates</li>
          <li>Mobile-first, fully responsive build</li>
          <li>Performance &amp; SEO optimisation</li>
          <li>Smooth animations and micro-interactions</li>
        </ul>
      </section>

      <section>
        <h2>Start your project</h2>
        <p>
          <a href="/contact">Contact us</a> for a quote tailored to your goals.
        </p>
      </section>
    </main>
  );
}
