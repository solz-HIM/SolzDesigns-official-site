import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/sections/process";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { LOCATIONS } from "@/lib/locations";
import {
  breadcrumbNode,
  faqNode,
  graph,
  serviceNode,
  webPageNode,
} from "@/lib/schema";
import { SERVICE_BY_SLUG, SERVICES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/** Any slug not in SERVICES is a 404 rather than a rendered empty page. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG.get(slug);
  if (!service) return {};

  const title = `${service.title} in Zimbabwe`;
  const description = `${service.summary} ${service.price}, delivered in ${service.turnaround}. Solz Designs, Harare.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${slug}`,
      type: "website",
      ...(service.image
        ? { images: [{ url: service.image, alt: service.imageAlt }] }
        : {}),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG.get(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.short, path: `/services/${slug}` },
  ];

  const jsonLd = graph(
    webPageNode({
      path: `/services/${slug}`,
      name: `${service.title} in Zimbabwe`,
      description: service.summary,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    serviceNode(slug),
    faqNode(undefined, `/services/${slug}`),
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
          eyebrow={service.short}
          title={service.title}
          lead={service.summary}
          crumbs={crumbs}
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <div>
              <p className="eyebrow text-olive/80">Price</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {service.price}
              </p>
            </div>
            <div>
              <p className="eyebrow text-olive/80">Turnaround</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {service.turnaround}
              </p>
            </div>
            <ButtonLink
              href={getServiceWhatsAppUrl(service.title, service.price)}
              external
              variant="ink"
            >
              Get a quote
            </ButtonLink>
          </div>
        </PageHero>

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="What this is"
                title={`About ${service.short.toLowerCase()}`}
              />
              <Reveal delay={140}>
                <p className="mt-8 text-base leading-relaxed text-ash sm:text-lg">
                  {service.description}
                </p>
              </Reveal>

              {service.image ? (
                <Reveal delay={200}>
                  <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-card">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-card border border-ink-line bg-ink-soft p-7 sm:p-8 lg:sticky lg:top-28">
                  <h2 className="eyebrow text-acid">What&apos;s included</h2>
                  <ul className="mt-6 space-y-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ash"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 shrink-0 text-acid"
                          aria-hidden="true"
                        >
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-ink-line pt-6">
                    <p className="font-display text-3xl font-bold text-paper">
                      {service.price}
                    </p>
                    <p className="mt-1 text-xs text-ash">
                      Fixed price, quoted in writing before work starts
                    </p>
                    <ButtonLink
                      href={getServiceWhatsAppUrl(service.title, service.price)}
                      external
                      variant="acid"
                      className="mt-5 w-full"
                    >
                      Start this project
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Process />

        {/* Location cross-links keep the service and location clusters connected */}
        <section className="on-acid bg-acid px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[88rem]">
            <h2 className="display-md text-ink">
              {service.short} across Zimbabwe
            </h2>
            <p className="mt-3 max-w-2xl text-olive">
              We work remotely nationwide. These pages cover how {service.short.toLowerCase()} works in each area.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    prefetch={false}
                    className="inline-flex rounded-pill bg-ink px-5 py-2.5 font-display text-sm text-paper transition-colors hover:bg-ink-soft"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sibling services */}
        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[88rem]">
            <h2 className="eyebrow text-acid">Other services</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map((other, i) => (
                <li key={other.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <Link
                      href={`/services/${other.slug}`}
                      className="flex h-full cursor-pointer flex-col rounded-card border border-ink-line bg-ink-soft p-7 transition-colors hover:border-acid/50"
                    >
                      <span className="eyebrow text-acid">{other.short}</span>
                      <h3 className="display-sm mt-5 text-paper">
                        {other.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                        {other.summary}
                      </p>
                      <span className="mt-6 font-display text-xl font-bold text-paper">
                        {other.price}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
