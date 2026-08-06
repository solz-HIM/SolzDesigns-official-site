import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { getEmailUrl, getWhatsAppUrl, QUOTE_MESSAGE } from "@/lib/contact";
import { SITE } from "@/lib/site";

/**
 * The closing lime panel — the hero's bookend. Same surface, same type
 * treatment, so the page resolves where it started.
 */
export function Cta() {
  return (
    <section
      id="contact"
      className="on-acid relative overflow-hidden bg-acid px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4%] -bottom-16 font-display text-[34vw] leading-none font-extrabold text-ink/[0.05] select-none"
      >
        SD
      </span>

      <div className="relative mx-auto max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5 text-olive">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
                />
                Let&apos;s talk
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-xl mt-4 text-ink">
                Start your
                <br />
                project
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-olive sm:text-lg">
                Tell us what your business does and what you need the site to
                achieve. You&apos;ll get a fixed price and a delivery date back
                — usually the same day, always within 24 hours.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={220}>
              <div className="flex flex-col gap-3">
                <ButtonLink
                  href={getWhatsAppUrl(QUOTE_MESSAGE)}
                  external
                  variant="ink"
                  className="w-full"
                >
                  Message us on WhatsApp
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghostInk" className="w-full">
                  Use the enquiry form
                </ButtonLink>
              </div>

              <dl className="mt-8 space-y-4 border-t border-ink/15 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow text-olive/80">Call</dt>
                  <dd>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="font-display font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow text-olive/80">Email</dt>
                  <dd>
                    <a
                      href={getEmailUrl("Project enquiry — Solz Designs")}
                      className="font-display font-semibold break-all text-ink underline-offset-4 hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow text-olive/80">Based in</dt>
                  <dd className="font-display font-semibold text-ink">
                    {SITE.city}, {SITE.country}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
