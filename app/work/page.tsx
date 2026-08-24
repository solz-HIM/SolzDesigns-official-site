import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowPip } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { SocialStrip } from "@/components/social-strip";
import { PROJECTS, SITE } from "@/lib/site";
import { formatDomain } from "@/lib/utils";

const TITLE = "Our Work — Websites Built in Zimbabwe";
const DESCRIPTION =
  "Live websites designed and built by Solz Designs for Zimbabwean businesses — a 5-a-side football league, an online eyewear store and a developer portfolio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/work" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/work" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
];

export default function WorkPage() {
  const jsonLd = graph(
    webPageNode({
      path: "/work",
      name: TITLE,
      description: DESCRIPTION,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}/work#collection`,
      name: TITLE,
      hasPart: PROJECTS.map((p) => ({
        "@type": "CreativeWork",
        name: `${p.client} — ${p.type}`,
        url: `${SITE.url}/work/${p.slug}`,
        dateCreated: p.year,
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
          eyebrow="Selected work"
          title="Recent builds"
          lead="A short, honest portfolio. Every site here is live for a real client right now — no concepts, no mockups, and nothing dressed up as a case study. Click through and judge them yourself."
          crumbs={crumbs}
        />

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem] space-y-5">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                {/* An <article> rather than one big <a>: the card carries two
                    distinct destinations — the case study and the live site —
                    and nesting an anchor inside an anchor is invalid HTML that
                    screen readers and browsers both handle badly. */}
                <article className="group grid overflow-hidden rounded-card border border-ink-line bg-ink-soft transition-colors focus-within:border-acid/50 hover:border-acid/50 lg:grid-cols-2">
                  <Link
                    href={`/work/${project.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[24rem]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-12">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="eyebrow rounded-pill bg-acid px-3 py-1.5 text-ink">
                          {project.type}
                        </span>
                        <span className="eyebrow text-ash">{project.year}</span>
                      </div>

                      <h2 className="display-lg mt-6 text-paper">
                        <Link
                          href={`/work/${project.slug}`}
                          className="transition-colors hover:text-acid"
                        >
                          {project.client}
                        </Link>
                      </h2>
                      <p className="eyebrow mt-3 text-ash">{project.sector}</p>

                      <p className="mt-5 max-w-md text-sm leading-relaxed text-ash sm:text-base">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.12em] text-acid uppercase"
                      >
                        Case study
                        <ArrowPip className="h-8 w-8 border-acid/40 text-acid transition-colors group-hover:bg-acid group-hover:text-ink" />
                      </Link>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.12em] text-paper uppercase underline-offset-4 hover:text-acid hover:underline"
                        >
                          {formatDomain(project.liveUrl)}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Relevant rather than decorative internal linking: these clients are
            Harare businesses, so the city pages are a natural next step. */}
        <section className="border-t border-ink-line bg-ink px-5 pt-16 sm:px-8">
          <div className="mx-auto max-w-[88rem]">
            <p className="max-w-3xl text-sm leading-relaxed text-ash sm:text-base">
              These projects were built for businesses in and around Harare, but
              we work remotely across the country. See how we approach{" "}
              <Link href="/web-design-harare" className="text-acid underline underline-offset-4 decoration-acid/40 hover:decoration-acid">
                web design in Harare
              </Link>
              ,{" "}
              <Link href="/web-design-bulawayo" className="text-acid underline underline-offset-4 decoration-acid/40 hover:decoration-acid">
                web design in Bulawayo
              </Link>{" "}
              and{" "}
              <Link href="/web-design-victoria-falls" className="text-acid underline underline-offset-4 decoration-acid/40 hover:decoration-acid">
                web design in Victoria Falls
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Most of the day-to-day work lands on social before it lands here. */}
        <SocialStrip />

        <Cta />
      </main>
      <Footer />
    </>
  );
}
