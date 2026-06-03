"use client";

import { SectionReveal } from "@/animations/section-reveal";
import { TextReveal } from "@/animations/text-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import {
  GENERAL_INQUIRY_MESSAGE,
  getEmailUrl,
  getWhatsAppUrl,
} from "@/lib/contact";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg-primary px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-10 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="h-[300px] w-[min(100%,600px)] rounded-full bg-ice/[0.04] blur-[100px] sm:h-[400px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center lg:px-10">
        <SectionReveal>
          <TextReveal
            text="Ready To Make Your Brand Unforgettable?"
            as="h2"
            className="font-heading justify-center text-[clamp(1.75rem,5vw,3.75rem)] leading-tight font-semibold text-white"
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle sm:mt-8 sm:text-lg">
            Let&apos;s bring your vision to life. Reach out today and take the
            first step toward a digital presence that sets you apart.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.35}>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-4 sm:mt-12 sm:max-w-lg sm:flex-row sm:justify-center">
            <MagneticButton
              href={getWhatsAppUrl(GENERAL_INQUIRY_MESSAGE)}
              external
              variant="white"
              className="w-full sm:flex-1 sm:max-w-[220px]"
            >
              Start Your Project
            </MagneticButton>
            <MagneticButton
              href={getEmailUrl(
                "Project enquiry — Solz Designs",
                "Hi Solz Designs,\n\nI'd like to discuss a project.\n\n",
              )}
              variant="secondary"
              className="w-full sm:flex-1 sm:max-w-[220px]"
            >
              Email Us
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
