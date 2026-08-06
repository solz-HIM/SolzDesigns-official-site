import Image from "next/image";
import Link from "next/link";
import { ArrowPip, ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/lib/site";
import { formatDomain } from "@/lib/utils";

/**
 * Case studies: ink cards on the lime panel.
 *
 * The reference numbers these 01/02/03, but this portfolio has no inherent
 * order — a number there would be decoration pretending to be structure. The
 * meta rail carries the build type, sector and year instead, which is what a
 * prospect actually uses to decide "is this like me?".
 */
export function Work() {
  return (
    <section
      id="work"
      className="on-acid bg-acid px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            tone="ink"
            title="Recent builds"
            lead="Three live sites, all shipped in 2026. Real clients, real briefs — every one of them is online right now, so go and click around."
          />
          <Reveal delay={120}>
            <ButtonLink href="/work" variant="ink">
              View all work
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 space-y-5 lg:mt-20 lg:space-y-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid cursor-pointer gap-0 overflow-hidden rounded-card bg-ink lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    // First card is likely in view on tall screens; the rest lazy-load.
                    loading={i === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="eyebrow rounded-pill bg-acid px-3 py-1.5 text-ink">
                        {project.type}
                      </span>
                      <span className="eyebrow text-ash">{project.year}</span>
                      <span aria-hidden="true" className="text-ink-line">
                        /
                      </span>
                      <span className="eyebrow text-ash">
                        {project.sector}
                      </span>
                    </div>

                    <h3 className="display-lg mt-6 text-paper">
                      {project.client}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-relaxed text-ash sm:text-base">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.12em] text-acid uppercase">
                      Read the case study
                      <ArrowPip className="h-8 w-8 border-acid/40 text-acid group-hover:bg-acid group-hover:text-ink" />
                    </span>
                    {project.liveUrl ? (
                      // A live URL is the strongest proof a portfolio can
                      // offer, so it is shown as the domain rather than a
                      // generic "visit site".
                      <span className="font-display text-xs tracking-[0.12em] text-ash uppercase">
                        {formatDomain(project.liveUrl)}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
