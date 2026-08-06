import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getWhatsAppUrl } from "@/lib/contact";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { PROJECTS, SITE } from "@/lib/site";
import { formatDomain } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.client} — ${project.type}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${slug}`,
      type: "article",
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  // Cycle to the following project rather than "the first one that isn't this
  // one" — with three entries that older logic sent two of the three pages
  // back to the same project, so you could never reach the third by clicking.
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.client, path: `/work/${slug}` },
  ];

  const jsonLd = graph(
    webPageNode({
      path: `/work/${slug}`,
      name: `${project.client} — ${project.type}`,
      description: project.summary,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    {
      "@type": "CreativeWork",
      "@id": `${SITE.url}/work/${slug}#project`,
      name: `${project.client} — ${project.type}`,
      description: project.summary,
      dateCreated: project.year,
      creator: { "@id": `${SITE.url}/#organization` },
      about: project.sector,
      image: `${SITE.url}${project.image}`,
      // The live site is the canonical artefact this case study describes.
      ...(project.liveUrl ? { url: project.liveUrl, sameAs: project.liveUrl } : {}),
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
          eyebrow={`${project.type} · ${project.year}`}
          title={project.client}
          lead={project.summary}
          crumbs={crumbs}
        >
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} external variant="ink">
              Visit {formatDomain(project.liveUrl)}
              <svg
                width="13"
                height="13"
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
            </ButtonLink>
          ) : null}
        </PageHero>

        <section className="bg-ink px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[88rem]">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-card">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <SectionHeading eyebrow="The brief" title="What it had to solve" />
                <Reveal delay={140}>
                  <p className="mt-8 text-base leading-relaxed text-ash sm:text-lg">
                    {project.brief}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={100}>
                  <div className="rounded-card border border-ink-line bg-ink-soft p-7 sm:p-8">
                    <h2 className="eyebrow text-acid">Scope</h2>
                    <ul className="mt-6 space-y-4">
                      {project.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ash"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-8 space-y-3 border-t border-ink-line pt-6">
                      <div className="flex justify-between gap-4">
                        <dt className="eyebrow text-ash">Sector</dt>
                        <dd className="text-right text-sm text-paper">
                          {project.sector}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="eyebrow text-ash">Year</dt>
                        <dd className="text-sm text-paper">{project.year}</dd>
                      </div>
                      {project.liveUrl ? (
                        <div className="flex justify-between gap-4">
                          <dt className="eyebrow text-ash">Live at</dt>
                          <dd className="text-right text-sm">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-acid underline-offset-4 hover:underline"
                            >
                              {formatDomain(project.liveUrl)}
                            </a>
                          </dd>
                        </div>
                      ) : null}
                    </dl>

                    <ButtonLink
                      href={getWhatsAppUrl(
                        `Hi Solz Designs! I saw the ${project.client} project and I'd like something similar.`,
                      )}
                      external
                      variant="acid"
                      className="mt-7 w-full"
                    >
                      Build something like this
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {next ? (
          <section className="border-t border-ink-line bg-ink px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-[88rem]">
              <h2 className="eyebrow text-acid">Next project</h2>
              <Link
                href={`/work/${next.slug}`}
                className="group mt-5 inline-flex items-baseline gap-4"
              >
                <span className="display-lg text-paper transition-colors group-hover:text-acid">
                  {next.client}
                </span>
                <span className="eyebrow text-ash">{next.type}</span>
              </Link>
            </div>
          </section>
        ) : null}

        <Cta />
      </main>
      <Footer />
    </>
  );
}
