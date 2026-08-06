import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { NAV_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * A 404 is a navigation failure, so it gets navigation — not an apology and a
 * dead end. Every route in the site is one tap away.
 */
export default function NotFound() {
  return (
    <>
      <Navigation tone="ink" />
      <main
        id="main"
        className="on-acid flex min-h-dvh flex-col justify-center bg-acid px-5 py-32 sm:px-8"
      >
        <div className="mx-auto w-full max-w-[88rem]">
          <p className="eyebrow text-olive">Error 404</p>
          <h1 className="display-xl mt-4 text-ink">
            Page
            <br />
            not found
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-olive sm:text-lg">
            That address doesn&apos;t exist — it may have moved during our
            redesign. Everything is one tap away below.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" variant="ink" className="w-full sm:w-auto">
              Back to home
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="ghostInk"
              className="w-full sm:w-auto"
            >
              Contact us
            </ButtonLink>
          </div>

          <nav aria-label="Site" className="mt-12 border-t border-ink/15 pt-8">
            <ul className="flex flex-wrap gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-pill bg-ink px-5 py-2.5 font-display text-sm text-paper transition-colors hover:bg-ink-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
