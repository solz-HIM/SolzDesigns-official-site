import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MagneticButton } from "@/components/magnetic-button";
import { getWhatsAppUrl, getEmailUrl, QUOTE_MESSAGE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Web Design in Harare",
  description:
    "Solz Designs offers premium web design services in Harare, Zimbabwe. Portfolio websites from $80–$150, business and e-commerce sites from $500. Custom design, mobile-first, fast delivery.",
  alternates: { canonical: "https://solzdesigns.co.zw/web-design-harare" },
  openGraph: {
    title: "Web Design in Harare | Solz Designs",
    description:
      "Premium web design services in Harare. Portfolio sites from $80, business websites from $500. Custom design, mobile-first, fast delivery.",
    url: "https://solzdesigns.co.zw/web-design-harare",
  },
};

const faq = [
  {
    q: "How much does web design cost in Harare?",
    a: "Web design in Harare typically costs between $80 and $500+. Solz Designs offers portfolio websites from $80–$150, e-commerce or business websites from $500, and ongoing maintenance at $150 per month. All prices are fixed — no hidden fees and no templates.",
  },
  {
    q: "Do you work with clients outside Harare?",
    a: "Yes. While we're based in Harare, Solz Designs works remotely with clients across Zimbabwe — including Bulawayo, Mutare, and Gweru — and with international clients. Our remote workflow means distance never affects quality or communication.",
  },
  {
    q: "How long does a website take to build?",
    a: "A portfolio website is typically delivered within 5–10 business days from the moment we receive your content and feedback. E-commerce and business sites take 2–4 weeks depending on complexity. We agree on a timeline at the start of every project.",
  },
  {
    q: "Is hosting included in your web design packages?",
    a: "Hosting is not included in the build price, but we'll recommend the best option for your project and help you set it up. Most clients spend $5–$20 per month on hosting. We factor hosting into your total budget planning from day one.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes — redesigns are one of our most popular services. We'll rebuild your site from the ground up using modern technology, preserving any content you want to keep while giving it a completely fresh, high-performance design.",
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
      name: "Web Design in Harare",
      item: "https://solzdesigns.co.zw/web-design-harare",
    },
  ],
};

export default function WebDesignHararePage() {
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
              Web Design Services — Harare, Zimbabwe
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Web Design
              <br className="hidden sm:block" /> in Harare
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Solz Designs is a remote web design studio based in Harare,
              Zimbabwe — building premium websites for professionals, creatives,
              and businesses across the country and worldwide.
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
                href={getEmailUrl("Web Design Enquiry — Harare")}
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
              How much does web design cost in Harare?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Web design in Harare typically costs between{" "}
              <span className="text-white">$80 and $500+</span> depending on
              the scope of the project. A portfolio website costs $80–$150,
              while a full e-commerce or business website starts at $500. All
              packages include custom design, mobile optimisation, and SEO
              foundations — no hidden costs, no templates.
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Why It Matters
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Your website is your most important business asset
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                In 2025, your website is your most important business asset.
                Whether you&apos;re a freelance photographer in Harare, a
                fashion brand launching online, or a professional consultancy
                establishing credibility — a well-designed website can be the
                difference between a prospect reaching out or clicking away.
              </p>
              <p>
                Many businesses in Zimbabwe are still running on generic
                templates that load slowly, look outdated on mobile, and do
                nothing to distinguish them from competitors. A professionally
                designed website from Solz Designs does more than look good —
                it builds trust, communicates value, and converts visitors into
                clients.
              </p>
              <p>
                Every site we build is optimised for mobile, fast to load, and
                structured for search engines from day one. You won&apos;t need
                to come back in a year for a performance fix — we build it
                right the first time.
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
              Our web design packages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Three focused packages tailored to the most common project types.
              Every package includes a custom design built to your brief, a
              mobile-first responsive layout, and a clean, performance-optimised
              codebase.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-6 text-left font-mono text-xs tracking-widest text-ice uppercase">
                      Package
                    </th>
                    <th className="py-3 pr-6 text-left font-mono text-xs tracking-widest text-ice uppercase">
                      Best For
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
                      Freelancers, creatives, professionals
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
                      Online stores, companies, brands
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
                      Existing site owners
                    </td>
                    <td className="py-4 font-medium text-white">$150/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              How We Work
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Our 4-step design process
            </h2>
            <ol className="mt-8 space-y-8">
              <li className="flex gap-6">
                <span className="shrink-0 font-mono text-sm font-bold text-ice">
                  01
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Discover
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    We start by learning your brand, your goals, and your
                    audience. A short brief and a conversation is all we need to
                    shape a clear creative direction before any design begins.
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="shrink-0 font-mono text-sm font-bold text-ice">
                  02
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Design
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Wireframes evolve into polished, high-fidelity designs.
                    You&apos;ll see the full visual direction before a single
                    line of code is written — so you can give feedback at the
                    right moment.
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="shrink-0 font-mono text-sm font-bold text-ice">
                  03
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Develop
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Clean, performant code brings every design detail to life.
                    We build with modern tools — Next.js, TypeScript, Tailwind
                    CSS — so your site is fast, scalable, and SEO-ready from
                    launch.
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="shrink-0 font-mono text-sm font-bold text-ice">
                  04
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Deliver
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    We hand off a fully tested, live website with documentation.
                    You&apos;ll know exactly how to update your content, and our
                    support doesn&apos;t end at launch — we&apos;re here when
                    you need us.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Why Solz Designs */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Why Solz Designs
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Premium quality at Zimbabwe-friendly prices
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                When you work with Solz Designs, you&apos;re not getting a
                template with your name swapped in. Every site is built from
                scratch around your brand, your goals, and your audience. We
                combine premium visual design with clean, modern code — the
                result is a website that looks exceptional and performs at a
                technical level that supports your SEO and user experience
                long-term.
              </p>
              <p>
                We&apos;re one of the few studios in Zimbabwe building with
                Next.js and modern web technologies — the same stack used by
                companies like Vercel, Linear, and Stripe. Your site
                won&apos;t just look premium; it will load fast, rank well, and
                scale with your business.
              </p>
              <p>
                Interested in the technical side?{" "}
                <Link
                  href="/web-development-zimbabwe"
                  className="text-ice underline-offset-2 hover:underline"
                >
                  Read about our web development approach in Zimbabwe
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Remote-first */}
        <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Remote-First
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              We work with clients anywhere in Zimbabwe
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We&apos;re based in Harare and serve clients across Zimbabwe —
              Bulawayo, Mutare, Gweru, and beyond — as well as international
              clients. Our entirely remote workflow means you get the same
              quality and attention regardless of where you are. Communication
              happens over WhatsApp and email, with clear updates at every stage
              of the project.
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
              Let&apos;s build your website
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
                href={getEmailUrl("Web Design Quote — Harare")}
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
