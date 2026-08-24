import Link from "next/link";
import { ArrowPip } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LOCATIONS } from "@/lib/locations";

/**
 * Where we work — the homepage's link into the location cluster.
 *
 * Before this existed the city pages were reachable only from the footer,
 * which is the weakest internal link position on a page. Search Console shows
 * those pages taking real impressions at poor positions, and thin internal
 * linking is a plausible part of why: a page nothing on the site points at
 * with descriptive anchor text is a page Google has little reason to rank.
 *
 * The anchor text deliberately matches the queries each page targets — "web
 * design in Bulawayo", not "read more" — because the anchor is one of the few
 * direct signals about what the destination page is for.
 */
export function Areas() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Where we work"
          title={
            <>
              Web design <span className="text-acid">across Zimbabwe</span>
            </>
          }
          lead="We are based in Harare and work remotely nationwide. These pages cover what a website actually has to do in each place — the local market, the customers, and what changes."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {LOCATIONS.map((location, i) => (
            <li key={location.slug}>
              <Reveal delay={i * 90} className="h-full">
                <Link
                  href={`/${location.slug}`}
                  className="group flex h-full cursor-pointer flex-col rounded-card border border-ink-line bg-ink-soft p-7 transition-colors hover:border-acid/50 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="eyebrow text-acid">{location.city}</span>
                    <ArrowPip className="border-ink-line text-ash group-hover:border-acid group-hover:bg-acid group-hover:text-ink" />
                  </div>

                  <h3 className="display-sm mt-8 text-paper">
                    Web design in {location.city}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                    {location.industries.slice(0, 3).join(" · ")}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={280}>
          <p className="mt-8 text-sm text-ash">
            Working elsewhere in the country? See{" "}
            <Link
              href="/web-development-zimbabwe"
              className="text-acid underline underline-offset-4 decoration-acid/40 hover:decoration-acid"
            >
              web development across Zimbabwe
            </Link>{" "}
            — we build for businesses in Mutare, Gweru, Kwekwe, Masvingo and
            Chitungwiza at the same fixed prices.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
