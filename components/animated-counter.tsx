"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useGSAP(
    () => {
      registerGsap();
      const el = ref.current;
      if (!el) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => setDisplay(Math.round(obj.val)),
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
        {display}
        <span className="text-ice">{suffix}</span>
      </p>
      <p className="mt-3 text-sm tracking-wide text-muted">{label}</p>
    </div>
  );
}
