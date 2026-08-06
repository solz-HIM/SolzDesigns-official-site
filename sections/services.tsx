import Link from "next/link";
import { ArrowPip, ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SERVICES } from "@/lib/site";

/**
 * Services on the ink panel, in elevated cards.
 *
 * Each card is a single link to its service page — the whole card is the
 * target rather than a "read more" at the bottom, so there is one large,
 * thumb-friendly hit area instead of a small one.
 */
export function Services() {
  return (
    <section
      id="services"
      className="bg-ink px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                What we build{" "}
                <span className="text-acid">for Zimbabwean business</span>
              </>
            }
            lead="Four things, done properly. Fixed prices quoted before we start — no hourly billing, no scope surprises."
          />
          <Reveal delay={120}>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <li key={service.slug}>
              <Reveal delay={i * 90} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full cursor-pointer flex-col rounded-card border border-ink-line bg-ink-soft p-7 transition-colors duration-200 hover:border-acid/50 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="eyebrow text-acid">{service.short}</span>
                    <ArrowPip className="border-ink-line text-ash group-hover:border-acid group-hover:bg-acid group-hover:text-ink" />
                  </div>

                  <h3 className="display-sm mt-8 text-paper">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ash">
                    {service.summary}
                  </p>

                  <div className="mt-8 flex items-baseline justify-between gap-3 border-t border-ink-line pt-5">
                    <span className="font-display text-2xl font-bold text-paper">
                      {service.price}
                    </span>
                    <span className="text-xs text-ash">
                      {service.turnaround}
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
