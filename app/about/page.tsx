import type { Metadata } from "next";
import { Cta } from "@/sections/cta";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/sections/process";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Why } from "@/sections/why";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { SERVICE_AREAS, SITE } from "@/lib/site";

const TITLE = "About Solz Designs — Web Design in Harare";
const DESCRIPTION =
  "Founder-led web design studio in Harare, Zimbabwe. You work directly with the person who designs and builds your site — no account managers, no queue.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

/**
 * The about page carries the E-E-A-T load: who is behind the work, where they
 * are, and what they actually know. Google and the LLM crawlers both want a
 * named, locatable person attached to a business making claims — an anonymous
 * "we" is worth very little as a trust signal.
 */
export default function AboutPage() {
  const jsonLd = graph(
    webPageNode({ path: "/about", name: TITLE, description: DESCRIPTION, crumbs }),
    breadcrumbNode(crumbs),
    {
      "@type": "AboutPage",
      "@id": `${SITE.url}/about#aboutpage`,
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
          eyebrow="About"
          title="A small studio in Harare"
          lead={`Solz Designs is founder-led. ${SITE.founder} designs and builds every site personally — there is no account manager, no junior handover, and no queue.`}
          crumbs={crumbs}
        />

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="The studio" title="Why this exists" />
            </div>

            <div className="space-y-6 text-base leading-relaxed text-ash lg:col-span-7 sm:text-lg">
              <Reveal>
                <p>
                  Most Zimbabwean businesses are told they have two options: pay
                  a Harare agency two thousand dollars for a website, or pay a
                  subscription builder every month for a template you never
                  actually own. Neither is a good deal, and both leave you with
                  a site nobody can find.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Solz Designs exists for the space in between — properly
                  designed, hand-coded websites at a price a real Zimbabwean
                  business can justify. That is possible because the studio runs
                  without an office, without a sales team, and without the
                  layers that make up most of a traditional agency&apos;s quote.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  The work itself is not cut down to match. Every site is
                  designed from a blank canvas, built in Next.js, tested on real
                  devices, and configured for search before it goes live. The
                  build is held to the same checklist regardless of what you
                  paid — Core Web Vitals, structured data, mobile-first testing,
                  Search Console configured at launch.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-line pt-10 sm:grid-cols-4">
                  {[
                    { term: "Based in", detail: SITE.city },
                    { term: "Founded", detail: SITE.foundingDate },
                    { term: "Works", detail: "Remotely" },
                    { term: "Sites from", detail: "$80" },
                  ].map((item) => (
                    <div key={item.term}>
                      <dt className="eyebrow text-ash">{item.term}</dt>
                      <dd className="mt-2 font-display text-xl font-bold text-acid">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Founder — the named-person E-E-A-T signal */}
        <section className="on-acid bg-acid px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Who you work with"
                  tone="ink"
                  title={SITE.founder}
                />
              </div>
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-base leading-relaxed text-olive sm:text-lg">
                    Founder and lead designer. Mcgyver handles the brief, the
                    design, the build and the launch on every project — which
                    means the person you explain your business to is the person
                    who writes the code, and nothing gets lost in between.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-5 text-base leading-relaxed text-olive sm:text-lg">
                    The studio&apos;s technical position is deliberate: sites
                    are built with Next.js and React rather than WordPress or a
                    page builder, because the resulting pages are dramatically
                    lighter. On Zimbabwean mobile data, that difference is the
                    difference between a visitor waiting and a visitor leaving.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {[
                      "Next.js & React",
                      "Technical SEO",
                      "Core Web Vitals",
                      "E-commerce",
                      "Structured data",
                      "UI design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-pill bg-ink px-4 py-2 font-display text-xs tracking-[0.1em] text-paper uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Why />
        <Process />

        <section className="border-t border-ink-line bg-ink px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-[88rem]">
            <h2 className="eyebrow text-acid">Where we work</h2>
            <p className="mt-4 max-w-2xl text-ash">
              Solz Designs is based in {SITE.city} and works remotely with
              businesses across Zimbabwe, including{" "}
              {SERVICE_AREAS.slice(0, -1).join(", ")} and{" "}
              {SERVICE_AREAS[SERVICE_AREAS.length - 1]} — as well as with
              clients abroad. Location makes no difference to price or timeline.
            </p>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
