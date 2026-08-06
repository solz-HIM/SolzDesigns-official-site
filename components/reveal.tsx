"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal, IntersectionObserver only.
 *
 * This replaces GSAP + ScrollTrigger + Lenis (~180 KB gzipped between them)
 * with roughly forty lines and one shared observer. The animation itself lives
 * in globals.css under [data-reveal], so the transition runs on the compositor
 * and never touches the main thread.
 *
 * The element is visible by default in the markup Google receives — the
 * hiding happens in CSS, and content is unhidden permanently once seen. A
 * crawler that ignores CSS still reads fully-formed content.
 */

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-shown", "");
        observer?.unobserve(entry.target);
      }
    },
    // Fire slightly before the element reaches the fold so the motion has
    // finished by the time the reader's eye arrives.
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
  );
  return observer;
}

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. Keep under ~450ms; beyond that it reads as lag. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or a crawler shimming it away): show immediately.
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-shown", "");
      return;
    }

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
