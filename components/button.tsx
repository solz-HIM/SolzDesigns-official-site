import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The lime pill from the reference, plus the two inversions it needs to
 * survive on both surfaces. Hover moves colour only — never scale — so a
 * pointer crossing a row of buttons doesn't shove the layout around.
 */

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-display text-sm font-semibold uppercase tracking-[0.12em] " +
  "transition-colors duration-200 cursor-pointer select-none " +
  // 44px minimum touch target, per WCAG 2.5.5
  "min-h-11 px-6 py-3 sm:px-7";

const variants = {
  /** Lime pill on a dark surface. The primary action everywhere. */
  acid: "bg-acid text-ink hover:bg-paper",
  /** Ink pill on a lime surface. Primary action inside acid panels. */
  ink: "bg-ink text-paper hover:bg-ink-soft",
  /** Outline on dark — secondary. */
  ghost:
    "border border-ink-line text-paper hover:border-acid hover:text-acid bg-transparent",
  /** Outline on lime — secondary inside acid panels. */
  ghostInk:
    "border border-ink/25 text-ink hover:bg-ink hover:text-paper bg-transparent",
} as const;

type Variant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "acid",
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/**
 * The circular arrow affordance from the reference cards. Decorative — it
 * always sits inside a link that already has an accessible name.
 */
export function ArrowPip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
        className,
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </span>
  );
}
