import Link from "next/link";
import type { Crumb } from "@/lib/schema";

/**
 * The inner-page counterpart to the homepage lime panel. Same surface and
 * same notch, at a smaller scale, so every page in the site reads as one
 * family without repeating the homepage's full-height statement.
 *
 * Visible breadcrumbs are here for a reason beyond navigation: Google renders
 * breadcrumb trails in place of the raw URL in results, which measurably
 * improves click-through on deep pages. The markup mirrors the BreadcrumbList
 * node emitted in the page's JSON-LD.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="on-acid notch-bottom relative overflow-hidden bg-acid px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-[5%] font-display text-[38vw] leading-none font-extrabold text-ink/[0.04] select-none"
      >
        SD
      </span>

      <div className="relative mx-auto max-w-[88rem]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-2">
                  {last ? (
                    <span
                      aria-current="page"
                      className="eyebrow text-olive"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={crumb.path}
                        className="eyebrow text-olive underline-offset-4 hover:underline"
                      >
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true" className="text-ink/30">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <p className="eyebrow mt-8 flex items-center gap-2.5 text-olive">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
          />
          {eyebrow}
        </p>

        {/* display-xl sets the font-size on this element, so a ch-based
            max-width does resolve correctly here. */}
        <h1 className="display-xl mt-4 max-w-[14ch] text-balance text-ink">
          {title}
        </h1>

        {lead ? (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-olive sm:text-lg">
            {lead}
          </p>
        ) : null}

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
