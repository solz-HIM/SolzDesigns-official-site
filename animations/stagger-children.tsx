"use client";

import { useGSAP } from "@gsap/react";
import { type ReactNode, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
};

export function StaggerChildren({
  children,
  className,
  childSelector = ":scope > *",
  stagger = 0.12,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = ref.current;
      if (!el) return;

      const items = el.querySelectorAll(childSelector);
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies: [stagger, childSelector] },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
