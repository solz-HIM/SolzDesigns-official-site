"use client";

import { useGSAP } from "@gsap/react";
import { type ReactNode, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 60,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = ref.current;
      if (!el) return;

      gsap.from(el, {
        y,
        opacity: 0,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies: [delay, y] },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
