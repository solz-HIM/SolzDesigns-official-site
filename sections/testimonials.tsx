"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = TESTIMONIALS[index];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 80 : -80, opacity: 0 }),
  };

  return (
    <section className="bg-bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/5 bg-bg-elevated p-10 md:p-14">
            <Quote
              className="absolute top-8 left-8 h-8 w-8 text-gold/30"
              strokeWidth={1}
              aria-hidden
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10"
              >
                <p className="text-xl leading-relaxed text-white md:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <p className="font-heading text-lg font-semibold text-white">
                      {current.author}
                    </p>
                    <p className="mt-1 text-sm text-muted">{current.role}</p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-white/20 hover:bg-white/40",
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
