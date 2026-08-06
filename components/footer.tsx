import Image from "next/image";
import Link from "next/link";
import { getEmailUrl, getWhatsAppUrl, CONTACT_MESSAGE } from "@/lib/contact";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES, SITE } from "@/lib/site";

/**
 * The footer does real SEO work, not just legal boilerplate: it is the site's
 * internal link hub. Every service and location page is reachable from every
 * page, which is how deep pages get crawled and how link equity reaches them.
 *
 * The address block is marked up so the NAP here matches the NAP in the
 * organisation schema exactly — both read from lib/site.ts.
 *
 * Every link here sets prefetch={false}. Next prefetches links as they enter
 * the viewport, and twenty footer links means the whole route tree downloads
 * the moment someone scrolls to the bottom — bandwidth a visitor on Zimbabwean
 * mobile data pays for and almost never uses. Crawlers still follow these
 * links normally; only the speculative fetch is switched off.
 */

const SOCIALS = [
  {
    name: "Facebook",
    href: SITE.social.facebook,
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    href: SITE.social.instagram,
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    extra: true,
  },
  {
    name: "TikTok",
    href: SITE.social.tiktok,
    path: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink px-5 pt-16 pb-10 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identity + NAP */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label={`${SITE.name} — home`}
            >
              <Image
                src="/logo.png"
                alt=""
                width={34}
                height={34}
                className="h-[34px] w-[34px] object-contain"
              />
              <span className="font-display text-lg font-bold tracking-tight text-paper uppercase">
                Solz Designs
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash">
              A web design agency in Harare building fast, findable websites for
              businesses across Zimbabwe. Founded by {SITE.founder}.
            </p>

            <address className="mt-6 space-y-2 text-sm not-italic text-ash">
              <p>
                {SITE.city}, {SITE.country}
              </p>
              <p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-acid"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={getEmailUrl("Enquiry — Solz Designs")}
                  className="break-all transition-colors hover:text-acid"
                >
                  {SITE.email}
                </a>
              </p>
            </address>

            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${s.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ash transition-colors hover:border-acid hover:text-acid"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {s.extra ? (
                        <>
                          <rect width="20" height="20" x="2" y="2" rx="5" />
                          <path d={s.path} />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </>
                      ) : (
                        <path d={s.path} />
                      )}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn
            title="Services"
            className="lg:col-span-2"
            links={[
              ...SERVICES.map((s) => ({
                label: s.short,
                href: `/services/${s.slug}`,
              })),
              { label: "All services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />

          <FooterColumn
            title="Areas we serve"
            className="lg:col-span-3"
            links={LOCATIONS.map((l) => ({
              label: l.linkLabel,
              href: `/${l.slug}`,
            }))}
          />

          <FooterColumn
            title="Company"
            className="lg:col-span-3"
            links={[
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Get a quote", href: getWhatsAppUrl(CONTACT_MESSAGE), external: true },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ash">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.24em] text-ash uppercase">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="eyebrow text-acid">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ash transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                prefetch={false}
                className="text-sm text-ash transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
