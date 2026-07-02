import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MagneticButton } from "@/components/magnetic-button";
import { getWhatsAppUrl, getEmailUrl, QUOTE_MESSAGE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Web Development in Zimbabwe",
  description:
    "Professional web development in Zimbabwe from Solz Designs. Custom websites built with Next.js, TypeScript, and Tailwind CSS for businesses across Harare and beyond. Starting from $80.",
  alternates: {
    canonical: "https://solzdesigns.co.zw/web-development-zimbabwe",
  },
  openGraph: {
    title: "Web Development in Zimbabwe | Solz Designs",
    description:
      "Professional web development in Zimbabwe. Custom Next.js websites for businesses across Harare and beyond. From $80.",
    url: "https://solzdesigns.co.zw/web-development-zimbabwe",
  },
};

const faq = [
  {
    q: "What does web development cost in Zimbabwe?",
    a: "Professional web development in Zimbabwe typically ranges from $80 for a portfolio to $500+ for a full e-commerce or business platform. Solz Designs' pricing is fixed and transparent: portfolios are $80–$150, business and e-commerce sites are $500, and ongoing maintenance is $150 per month.",
  },
  {
    q: "What technologies do you use to build websites?",
    a: "We build with Next.js, TypeScript, and Tailwind CSS — modern tools that produce fast, SEO-friendly, scalable websites. Our sites pass Google's Core Web Vitals targets and are optimised for performance from day one.",
  },
  {
    q: "Do you build e-commerce websites in Zimbabwe?",
    a: "Yes. Our E-Commerce / Business Website package at $500 covers full product listings, cart and checkout functionality, mobile responsiveness, payment integration, and SEO optimisation. It's everything a business needs to sell online.",
  },
  {
    q: "How do remote projects work?",
    a: "We communicate via WhatsApp and email throughout the project. You'll receive regular progress updates, a review stage before the site goes live, and handoff documentation when we deliver. The entirely remote workflow is the same quality you'd expect from an in-person studio.",
  },
  {
    q: "Do you offer ongoing support after the website is launched?",
    a: "Yes. Our Website Maintenance package covers monthly security updates, performance monitoring, content changes, and priority support for $150 per month. It's designed to keep your site fast, secure, and up to date without you having to think about it.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://solzdesigns.co.zw",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Development in Zimbabwe",
      item: "https://solzdesigns.co.zw/web-development-zimbabwe",
    },
  ],
};

export default function WebDevelopmentZimbabwePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="hero-gradient px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Web Development — Zimbabwe
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Web Development
              <br className="hidden sm:block" /> in Zimbabwe
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Solz Designs builds modern, high-performance websites for
              businesses and individuals across Zimbabwe — using the same
              technologies that power the world&apos;s leading digital products.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                href={getWhatsAppUrl(QUOTE_MESSAGE)}
                external
                variant="primary"
              >
                Get a Free Quote
              </MagneticButton>
              <MagneticButton
                href={getEmailUrl("Web Development Enquiry — Zimbabwe")}
                variant="secondary"
              >
                Email Us Instead
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Cost anchor */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10" id="cost">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              What does web development cost in Zimbabwe?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Professional web development in Zimbabwe typically ranges from{" "}
              <span className="text-white">$80 to $500+</span> depending on the
              project&apos;s scope and complexity. At Solz Designs, all prices
              are fixed and transparent: a portfolio site costs $80–$150, a
              full business or e-commerce site costs $500, and ongoing
              maintenance is $150 per month. No hidden costs, no hourly billing
              surprises.
            </p>
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Technology
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Built with modern technology
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Every website we build uses a modern, battle-tested technology
                stack — the same tools used by companies like Vercel, Stripe,
                and Linear. We build with{" "}
                <span className="text-white">Next.js</span>,{" "}
                <span className="text-white">TypeScript</span>, and{" "}
                <span className="text-white">Tailwind CSS</span>, producing
                sites that are fast by default, highly maintainable, and ready
                for growth.
              </p>
              <p>
                Modern frameworks mean your site benefits from server-side
                rendering for fast page loads, built-in image optimisation for
                mobile performance, and a static export that can be served from
                a CDN with sub-second load times anywhere in the world —
                including on Zimbabwe&apos;s mobile networks.
              </p>
              <p>
                Every site we ship passes Google&apos;s Core Web Vitals
                benchmarks, which directly influence your search rankings. Good
                code and good design aren&apos;t separate — they&apos;re the
                same goal.
              </p>
            </div>
          </div>
        </section>

        {/* Packages table */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Packages
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Web development packages for Zimbabwe
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Three clear packages designed to match the most common project
              types. Every build is fully custom — no templates, no page
              builders.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-6 text-left font-mono text-xs tracking-widest text-ice uppercase">
                      Package
                    </th>
                    <th className="py-3 pr-6 text-left font-mono text-xs tracking-widest text-ice uppercase">
                      What You Get
                    </th>
                    <th className="py-3 text-left font-mono text-xs tracking-widest text-ice uppercase">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-4 pr-6 font-medium text-white">
                      <Link
                        href="/services/portfolio"
                        className="transition-colors hover:text-ice"
                      >
                        Web Portfolio
                      </Link>
                    </td>
                    <td className="py-4 pr-6 text-muted">
                      Custom design, up to 10 project showcases, mobile-first,
                      SEO-ready
                    </td>
                    <td className="py-4 font-medium text-white">$80 – $150</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 font-medium text-white">
                      <Link
                        href="/services/e-commerce"
                        className="transition-colors hover:text-ice"
                      >
                        E-Commerce / Business
                      </Link>
                    </td>
                    <td className="py-4 pr-6 text-muted">
                      Full online store or business site, cart, checkout,
                      payment integration
                    </td>
                    <td className="py-4 font-medium text-white">$500</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 font-medium text-white">
                      <Link
                        href="/services/website-maintenance"
                        className="transition-colors hover:text-ice"
                      >
                        Website Maintenance
                      </Link>
                    </td>
                    <td className="py-4 pr-6 text-muted">
                      Security updates, performance monitoring, content changes,
                      priority support
                    </td>
                    <td className="py-4 font-medium text-white">$150/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why quality development matters */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Why It Matters
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Why quality development makes the difference
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                A website built on a page builder or a generic WordPress
                template will typically score 40–60 on Google&apos;s PageSpeed
                Insights. That means slow load times, poor mobile experience,
                and lower search rankings. On Zimbabwe&apos;s mobile networks,
                slow sites don&apos;t just lose users — they never even reach
                them.
              </p>
              <p>
                Every site Solz Designs builds targets a PageSpeed score of 90+
                on mobile. This isn&apos;t optional — it&apos;s the foundation
                of everything else. A fast, accessible website is one that can
                actually be found, used, and trusted.
              </p>
              <p>
                Design matters as much as code. Learn more about our approach
                to{" "}
                <Link
                  href="/web-design-harare"
                  className="text-ice underline-offset-2 hover:underline"
                >
                  web design in Harare
                </Link>{" "}
                — design and development aren&apos;t separate services at Solz
                Designs, they&apos;re the same process.
              </p>
            </div>
          </div>
        </section>

        {/* Remote + Zimbabwe */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Serving Zimbabwe
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Remote-first, Zimbabwe-rooted
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We&apos;re based in Harare but work with clients across Zimbabwe
              — Bulawayo, Mutare, Gweru, and beyond. Our entirely remote
              workflow means you get the same attention and quality regardless
              of location. Projects are managed over WhatsApp and email, with
              regular milestones and check-ins so you always know where things
              stand.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              FAQ
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="mt-8 space-y-8">
              {faq.map(({ q, a }) => (
                <div
                  key={q}
                  className="border-b border-white/5 pb-8 last:border-0 last:pb-0"
                >
                  <dt className="font-heading text-base font-semibold text-white">
                    {q}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Ready to Start?
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s build something great
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Get in touch today. We&apos;ll discuss your project, answer your
              questions, and send you a no-obligation quote.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton
                href={getWhatsAppUrl(QUOTE_MESSAGE)}
                external
                variant="primary"
              >
                Get a Quote on WhatsApp
              </MagneticButton>
              <MagneticButton
                href={getEmailUrl("Web Development Quote — Zimbabwe")}
                variant="secondary"
              >
                Send an Email
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
