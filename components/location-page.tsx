import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/sections/process";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getWhatsAppUrl } from "@/lib/contact";
import { LOCATION_BY_SLUG, type Location } from "@/lib/locations";
import { SERVICES } from "@/lib/site";

/**
 * Shared shell for the city pages. The *layout* is shared; the *content* is
 * not — every string rendered here comes from that city's own entry in
 * lib/locations.ts, written separately. Sharing the chrome is fine. Sharing
 * the prose is what turns location pages into doorway pages.
 */
export function LocationPage({ location }: { location: Location }) {
  const related = location.related
    .map((slug) => LOCATION_BY_SLUG.get(slug))
    .filter((l): l is Location => Boolean(l));

  return (
    <>
      <Navigation tone="ink" />
      <main id="main">
        <PageHero
          eyebrow={`${location.city}, Zimbabwe`}
          title={location.heading}
          lead={location.intro}
          crumbs={[
            { name: "Home", path: "/" },
            { name: location.city, path: `/${location.slug}` },
          ]}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={getWhatsAppUrl(
                `Hi Solz Designs! I'm in ${location.city} and I'd like a quote for a website.`,
              )}
              external
              variant="ink"
              className="w-full sm:w-auto"
            >
              Get a {location.city} quote
            </ButtonLink>
            <ButtonLink href="/pricing" variant="ghostInk" className="w-full sm:w-auto">
              See pricing
            </ButtonLink>
          </div>
        </PageHero>

        {/* Why search works differently in this city */}
        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="The local picture"
                title={`Getting found in ${location.city}`}
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-base leading-relaxed text-ash sm:text-lg">
                  {location.context}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 rounded-card border border-ink-line bg-ink-soft p-7 sm:p-8">
                  <h3 className="eyebrow text-acid">
                    Businesses we build for in {location.city}
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {location.industries.map((industry) => (
                      <li
                        key={industry}
                        className="flex items-start gap-3 text-sm text-ash"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid"
                        />
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The city-specific angles */}
        <section className="on-acid bg-acid px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem]">
            <SectionHeading
              eyebrow="What matters here"
              tone="ink"
              title={`What a ${location.city} website has to get right`}
            />

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {location.angle.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 90} className="h-full">
                    <div className="flex h-full flex-col rounded-card bg-ink p-7 sm:p-8">
                      <h3 className="display-md text-paper">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ash">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services available here — internal links into the service cluster */}
        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem]">
            <SectionHeading
              eyebrow="Services"
              title={`What we offer ${location.city} businesses`}
              lead={`Every service below is available to ${location.city} clients at the same fixed price, with no travel or distance surcharge.`}
            />

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, i) => (
                <li key={service.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full cursor-pointer flex-col rounded-card border border-ink-line bg-ink-soft p-7 transition-colors hover:border-acid/50"
                    >
                      <span className="eyebrow text-acid">{service.short}</span>
                      <h3 className="display-sm mt-6 text-paper">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                        {service.summary}
                      </p>
                      <span className="mt-6 font-display text-xl font-bold text-paper">
                        {service.price}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Process />

        <Faq
          items={location.faqs}
          eyebrow={`${location.city} questions`}
          title={`Web design in ${location.city}, answered`}
        />

        {/* Sibling locations */}
        {related.length ? (
          <section className="border-t border-ink-line bg-ink px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-[88rem]">
              <h2 className="eyebrow text-acid">Other areas we serve</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.slug}`}
                      prefetch={false}
                      className="inline-flex rounded-pill border border-ink-line px-5 py-2.5 font-display text-sm text-ash transition-colors hover:border-acid hover:text-acid"
                    >
                      Web design in {r.city}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/web-development-zimbabwe"
                    prefetch={false}
                    className="inline-flex rounded-pill border border-ink-line px-5 py-2.5 font-display text-sm text-ash transition-colors hover:border-acid hover:text-acid"
                  >
                    Web development across Zimbabwe
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        ) : null}

        <Cta />
      </main>
      <Footer />
    </>
  );
}
