"use client";

import { Heart, Sparkles, Tag, Zap } from "lucide-react";
import { StaggerChildren } from "@/animations/stagger-children";
import { AnimatedCounter } from "@/components/animated-counter";
import { SectionHeading } from "@/components/section-heading";
import { FEATURES, STATS } from "@/lib/constants";

const featureIcons = {
  tag: Tag,
  sparkles: Sparkles,
  zap: Zap,
  heart: Heart,
} as const;

export function WhyChooseUsSection() {
  return (
    <section className="bg-bg-primary px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why Choose Us"
          title="Built On Trust, Driven By Results"
          className="mb-10 sm:mb-16"
        />

        <StaggerChildren className="mb-12 grid gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-bg-primary p-6 transition-colors duration-500 hover:border-ice/20 sm:p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-ice/20 bg-ice/5 text-ice sm:mb-5">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </StaggerChildren>

        <div className="grid gap-8 rounded-2xl border border-white/10 bg-bg-primary p-8 sm:grid-cols-3 sm:gap-12 sm:rounded-3xl sm:p-12 md:p-16">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
