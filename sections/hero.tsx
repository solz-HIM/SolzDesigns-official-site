"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "@/components/magnetic-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { QUOTE_MESSAGE, getWhatsAppUrl } from "@/lib/contact";
import { SITE } from "@/lib/constants";
import { gsap, registerGsap } from "@/lib/gsap";

const WAVE_COLORS = [
  "#A5F3FC",
  "#67E8F9",
  "#22D3EE",
  "#38BDF8",
  "#7DD3FC",
];

export function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const cta = ctaRef.current;
      if (!cta) return;

      gsap.from(cta.children, {
        y: 24,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: ctaRef },
  );

  return (
    <section id="hero" className="relative min-h-[100dvh]">
      <WavyBackground
        containerClassName="min-h-[100dvh] w-full"
        className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-28 pt-24 text-center sm:px-6 sm:pb-40 sm:pt-28"
        colors={WAVE_COLORS}
        backgroundFill="#090909"
        waveOpacity={0.35}
        blur={12}
        speed="slow"
        waveWidth={45}
      >
        <motion.p
          className="mb-4 font-mono text-[10px] tracking-[0.3em] text-ice uppercase sm:mb-6 sm:text-xs sm:tracking-[0.4em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Digital Agency — Zimbabwe
        </motion.p>

        <motion.h1
          className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl px-2 text-sm font-normal leading-relaxed text-subtle sm:mt-6 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          {SITE.mission}
        </motion.p>

        <div
          ref={ctaRef}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <MagneticButton
            href="#services"
            variant="white"
            className="w-full sm:w-auto"
          >
            View Services
          </MagneticButton>
          <MagneticButton
            href={getWhatsAppUrl(QUOTE_MESSAGE)}
            external
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Get A Quote
          </MagneticButton>
        </div>
      </WavyBackground>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted sm:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
