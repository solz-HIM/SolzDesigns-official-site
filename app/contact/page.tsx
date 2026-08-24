import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getEmailUrl, getWhatsAppUrl, CONTACT_MESSAGE } from "@/lib/contact";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { SITE } from "@/lib/site";

const TITLE = "Contact Solz Designs — Web Design Harare";
const DESCRIPTION =
  "Get a fixed quote for your website. Message Solz Designs on WhatsApp, call +263 77 823 1792, or send an enquiry. Based in Harare, working across Zimbabwe.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const DAY_LABEL: Record<string, string> = {
  Monday: "Mon",
  Friday: "Fri",
  Saturday: "Sat",
};

export default function ContactPage() {
  const jsonLd = graph(
    webPageNode({ path: "/contact", name: TITLE, description: DESCRIPTION, crumbs }),
    breadcrumbNode(crumbs),
    {
      "@type": "ContactPage",
      "@id": `${SITE.url}/contact#contactpage`,
      mainEntity: { "@id": `${SITE.url}/#organization` },
    },
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Navigation tone="ink" />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Get a quote"
          lead="Tell us what your business does and what you need the site to achieve. You'll get a fixed price and a delivery date back — usually same day, always within 24 hours."
          crumbs={crumbs}
        />

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Direct contact first — most people will use WhatsApp, not the form */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="eyebrow text-acid">Talk to us directly</h2>
                <ul className="mt-6 space-y-3">
                  <li>
                    <a
                      href={getWhatsAppUrl(CONTACT_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-card border border-ink-line bg-ink-soft p-6 transition-colors hover:border-acid/50"
                    >
                      <span>
                        <span className="eyebrow text-ash">Fastest</span>
                        <span className="mt-1.5 block font-display text-xl font-bold text-paper">
                          WhatsApp
                        </span>
                        <span className="mt-1 block text-sm text-ash">
                          Usually answered within a few hours
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-line text-acid transition-colors group-hover:bg-acid group-hover:text-ink"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="group flex items-center justify-between gap-4 rounded-card border border-ink-line bg-ink-soft p-6 transition-colors hover:border-acid/50"
                    >
                      <span>
                        <span className="eyebrow text-ash">Call</span>
                        <span className="mt-1.5 block font-display text-xl font-bold text-paper">
                          {SITE.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={getEmailUrl("Project enquiry — Solz Designs")}
                      className="group flex items-center justify-between gap-4 rounded-card border border-ink-line bg-ink-soft p-6 transition-colors hover:border-acid/50"
                    >
                      <span className="min-w-0">
                        <span className="eyebrow text-ash">Email</span>
                        <span className="mt-1.5 block truncate font-display text-xl font-bold text-paper">
                          {SITE.email}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 rounded-card border border-ink-line bg-ink-soft p-6">
                  <h2 className="eyebrow text-acid">Studio</h2>
                  <address className="mt-4 space-y-1 text-sm not-italic text-ash">
                    <p className="font-display text-base font-semibold text-paper">
                      {SITE.city}, {SITE.country}
                    </p>
                    <p>Remote-first — we work across Zimbabwe and abroad.</p>
                  </address>

                  <dl className="mt-5 space-y-2 border-t border-ink-line pt-5">
                    {SITE.hours.map((h) => {
                      const first = DAY_LABEL[h.days[0]] ?? h.days[0];
                      const last = h.days[h.days.length - 1];
                      const range =
                        h.days.length > 1
                          ? `${first}–${DAY_LABEL[last] ?? last}`
                          : first;
                      return (
                        <div
                          key={range}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <dt className="text-ash">{range}</dt>
                          <dd className="text-paper">
                            {h.open} – {h.close}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <h2 className="eyebrow text-acid">Or send the details</h2>
                <p className="mt-3 mb-6 max-w-lg text-sm text-ash">
                  Fill this in and it opens WhatsApp with everything already
                  written out — you just press send.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <EnquiryForm />
              </Reveal>
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
