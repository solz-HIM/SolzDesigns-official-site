"use client";

import { SectionReveal } from "@/animations/section-reveal";
import { TextReveal } from "@/animations/text-reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-bg-primary px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl lg:px-10">
        <SectionHeading
          label="About Us"
          title="Crafting Digital Presence With Purpose"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
          <SectionReveal>
            <TextReveal
              text="We help businesses establish a professional online presence that earns trust and drives results."
              as="p"
              className="text-xl leading-snug font-medium text-white sm:text-2xl md:text-3xl"
            />
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Solz Designs was founded on a simple belief: every brand
                deserves a digital experience that feels as premium as the
                business behind it — without the premium agency price tag.
              </p>
              <p>
                From portfolio websites to full e-commerce platforms, we
                deliver affordable digital solutions with meticulous attention
                to detail. Every project is approached with a results-driven
                mindset, ensuring your investment translates into real impact.
              </p>
              <p>
                Based in Zimbabwe and serving clients worldwide, we combine
                creative vision with technical precision to build websites and
                digital assets that make your brand unforgettable.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/5 pt-10">
              {[
                { value: "4+", label: "Core Services" },
                { value: "100%", label: "Dedicated Support" },
                { value: "Global", label: "Client Reach" },
                { value: "Detail", label: "Driven Craft" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-heading text-2xl font-semibold text-ice">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
