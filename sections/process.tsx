"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";
import { gsap, registerGsap } from "@/lib/gsap";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const section = sectionRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const scrollWidth = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        if (progress) {
          gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${scrollWidth}`,
              scrub: 1.2,
            },
          });
        }
      });

      mm.add("(max-width: 1023px)", () => {
        const steps = track.querySelectorAll("[data-step]");
        gsap.from(steps, {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: track,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-primary"
    >
      <div
        className="hidden h-px w-full origin-left scale-x-0 bg-ice lg:block"
        ref={progressRef}
      />

      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          label="Our Process"
          title="From Vision To Launch"
          description="A refined four-step journey that keeps you informed at every stage."
          className="mb-8 sm:mb-12"
        />
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-10 px-4 pb-16 sm:gap-12 sm:px-6 sm:pb-24 lg:flex-row lg:gap-0 lg:px-10 lg:pb-32"
      >
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.step}
            data-step
            className="relative flex w-full flex-col justify-between border-t border-white/10 pt-6 sm:pt-8 lg:min-w-[70vw] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 xl:min-w-[50vw]"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-ice">
              Step {step.step}
            </span>
            <div className="mt-6 lg:mt-auto lg:pt-32">
              <h3 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
                {step.description}
              </p>
            </div>
            {index < PROCESS_STEPS.length - 1 && (
              <div
                className="absolute right-0 bottom-0 hidden h-px w-24 bg-white/10 lg:block"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
