"use client";

import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  scrollTrigger?: boolean;
};

export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  scrollTrigger = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const words = useMemo(() => text.split(" "), [text]);

  useGSAP(
    () => {
      registerGsap();
      const el = containerRef.current;
      if (!el) return;

      const spans = el.querySelectorAll("[data-word]");

      const tweenVars = {
        y: "110%",
        opacity: 0,
        duration: 1,
        ease: "power4.out" as const,
        stagger: 0.07,
        delay,
      };

      if (scrollTrigger) {
        gsap.from(spans, {
          ...tweenVars,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.from(spans, tweenVars);
      }
    },
    { scope: containerRef, dependencies: [text, delay, scrollTrigger] },
  );

  return (
    <Tag ref={containerRef} className={cn("flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
