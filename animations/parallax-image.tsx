"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const container = containerRef.current;
      const image = imageRef.current;
      if (!container || !image) return;

      gsap.fromTo(
        image,
        { scale: 1.15, yPercent: 5 },
        {
          scale: 1,
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div ref={imageRef} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
