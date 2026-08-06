import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/site";

/**
 * Objection handling, stated plainly.
 *
 * The honest competition for a Zimbabwean business is not another agency —
 * it is a Wix subscription or a cousin with a laptop. So this section answers
 * that comparison directly rather than listing adjectives about ourselves.
 */
const POINTS = [
  {
    title: "Hand-coded, not assembled",
    body: "Template builders ship two to four megabytes of JavaScript before your first word of content loads. Our builds ship a fraction of that, which is why they open quickly on mobile data and why Google can crawl them properly.",
  },
  {
    title: "You own everything",
    body: "Domain, hosting and source code are registered in your name from day one. No platform lock-in, no monthly ransom to keep your own site online, no asking permission to move to another developer.",
  },
  {
    title: "Built to be found",
    body: "Search Console, Analytics, structured data and a sitemap are configured before launch, not sold to you as an upsell six months later when you notice nobody is visiting.",
  },
  {
    title: "One person, start to finish",
    body: `You work directly with ${SITE.founder} — the person designing and building your site. Nothing gets lost being relayed through an account manager, and the answer to a question takes hours, not a week.`,
  },
];

export function Why() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Solz Designs"
            title={
              <>
                Most Zimbabwean sites are{" "}
                <span className="text-acid">invisible</span>
              </>
            }
            lead="Not because they look bad — because nothing on them matches what customers search for, and they are too slow to keep the ones who do arrive. We build for the opposite outcome."
          />
        </div>

        <ul className="lg:col-span-7">
          {POINTS.map((point, i) => (
            <li key={point.title}>
              <Reveal delay={i * 80}>
                <div className="flex gap-5 border-b border-ink-line py-7 sm:gap-8">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-acid"
                  />
                  <div>
                    <h3 className="display-md text-paper">{point.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
