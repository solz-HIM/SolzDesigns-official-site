import type { Metadata } from "next";
import Link from "next/link";
import { ArrowPip } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/sections/process";
import { Reveal } from "@/components/reveal";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { SERVICES } from "@/lib/site";

const TITLE = "Web Design & SEO Services in Zimbabwe";
const DESCRIPTION =
  "Website design, e-commerce, SEO and website maintenance for Zimbabwean businesses. Fixed prices from $80, quoted before work starts. No templates, no lock-in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/services" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  const jsonLd = graph(
    webPageNode({
      path: "/services",
      name: TITLE,
      description: DESCRIPTION,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    {
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://solzdesigns.co.zw/services/${s.slug}`,
      })),
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
          eyebrow="Services"
          title="What we do"
          lead="Four services, priced openly. Every quote is fixed before work begins — you will never receive an invoice larger than the number we agreed."
          crumbs={crumbs}
        />

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem] space-y-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid cursor-pointer gap-6 rounded-card border border-ink-line bg-ink-soft p-7 transition-colors hover:border-acid/50 sm:p-10 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-7">
                    <span className="eyebrow text-acid">{service.short}</span>
                    <h2 className="display-lg mt-4 text-paper">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ash sm:text-base">
                      {service.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <ul className="space-y-2.5">
                      {service.includes.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-ash"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-ink-line pt-5 lg:col-span-1 lg:flex-col lg:items-end lg:border-none lg:pt-0">
                    <div className="lg:text-right">
                      <p className="font-display text-2xl font-bold whitespace-nowrap text-paper">
                        {service.price}
                      </p>
                      <p className="mt-1 text-xs text-ash">
                        {service.turnaround}
                      </p>
                    </div>
                    <ArrowPip className="border-ink-line text-ash group-hover:border-acid group-hover:bg-acid group-hover:text-ink" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
