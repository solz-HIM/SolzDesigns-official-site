"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { getWhatsAppUrl, QUOTE_MESSAGE } from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * `tone` describes the panel the header floats over at scroll position zero,
 * so the header can pick readable colours without measuring anything.
 * Pages that open on the lime panel pass "ink"; pages that open on black
 * take the default.
 */
type Tone = "ink" | "paper";

export function Navigation({ tone = "paper" }: { tone?: Tone }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile overlay, and let Escape dismiss it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Once scrolled the header always sits on its own ink surface, so link
  // colour only depends on `tone` while we're still at the top of the page.
  const onLime = tone === "ink" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-ink-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${SITE.name} — home`}
          >
            {/* The logo's chrome and cyan read as neutral metal on ink, but
                fight the lime. On the lime panel it gets an ink chip to sit in. */}
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300",
                onLime ? "bg-ink" : "bg-transparent",
              )}
            >
              <Image
                src="/logo.png"
                alt=""
                width={30}
                height={30}
                priority
                className="h-[30px] w-[30px] object-contain"
              />
            </span>
            <span
              className={cn(
                "font-display text-base font-bold tracking-tight uppercase transition-colors duration-300",
                onLime ? "text-ink" : "text-paper",
              )}
            >
              Solz Designs
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-display text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-colors duration-200",
                    onLime
                      ? "text-ink/70 hover:text-ink aria-[current=page]:text-ink"
                      : "text-ash hover:text-paper aria-[current=page]:text-acid",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={getWhatsAppUrl(QUOTE_MESSAGE)}
              external
              variant={onLime ? "ink" : "acid"}
              className="hidden px-5 py-2.5 text-xs sm:inline-flex"
            >
              Let&apos;s Talk
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
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden",
                onLime
                  ? "border-ink/20 text-ink"
                  : "border-ink-line text-paper",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay. CSS-only transition — no animation library. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-24 pb-10 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Dismiss on click rather than reacting to a pathname change:
              // tapping a link is the actual intent to close, and it avoids a
              // setState-in-effect cascade.
              onClick={() => setOpen(false)}
              className="border-b border-ink-line py-5 font-display text-3xl font-bold tracking-tight text-paper uppercase transition-colors hover:text-acid"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-8">
          <ButtonLink
            href={getWhatsAppUrl(QUOTE_MESSAGE)}
            external
            variant="acid"
            className="w-full"
          >
            Start a project
          </ButtonLink>
          <a
            href={`tel:${SITE.phone}`}
            className="block text-center font-display text-sm tracking-[0.1em] text-ash uppercase"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
