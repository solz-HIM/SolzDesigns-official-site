"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
  external?: boolean;
};

const magneticHandlers = (
  handlers: ReturnType<typeof useMagnetic<HTMLElement>>,
) => ({
  onMouseMove: handlers.onMouseMove,
  onMouseLeave: handlers.onMouseLeave,
  onMouseEnter: handlers.onMouseEnter,
});

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const magnetic = useMagnetic<HTMLElement>();
  const handlers = magneticHandlers(magnetic);

  const base = cn(
    "relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 sm:px-7",
    variant === "primary" &&
      "bg-ice text-bg-primary hover:bg-ice-light",
    variant === "white" &&
      "bg-white text-bg-primary shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:bg-white/90",
    variant === "secondary" &&
      "border border-white/15 bg-transparent text-white hover:border-ice/40 hover:text-ice",
    variant === "ghost" &&
      "bg-transparent text-muted hover:text-white",
    className,
  );

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <Link
        ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={base}
        {...handlers}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={magnetic.ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={base}
      onClick={onClick}
      {...handlers}
    >
      {inner}
    </button>
  );
}
