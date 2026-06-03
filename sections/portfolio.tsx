"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { PORTFOLIO } from "@/lib/constants";
import { gsap, registerGsap } from "@/lib/gsap";

export function PortfolioSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const grid = gridRef.current;
      if (!grid) return;

      const items = grid.querySelectorAll("[data-project]");
      gsap.from(items, {
        y: 80,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: gridRef },
  );

  return (
    <section
      id="portfolio"
      className="bg-bg-secondary py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Selected Work"
          title="Projects That Speak For Themselves"
          description="A curated showcase of our craft. Each project reflects our commitment to premium design."
        />

        <div
          ref={gridRef}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {PORTFOLIO.map((project, index) => (
            <motion.article
              key={project.title}
              data-project
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/3]"
              }`}
              whileHover="hover"
              initial="rest"
            >
              <div className="relative h-full min-h-[280px] w-full overflow-hidden">
                <motion.div
                  className="relative h-full w-full"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.06 },
                  }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8 md:p-10"
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -4 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-primary">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <motion.p
                    className="mt-3 max-w-sm text-sm text-muted"
                    variants={{
                      rest: { opacity: 0, height: 0, marginTop: 0 },
                      hover: { opacity: 1, height: "auto", marginTop: 12 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    Premium digital experience crafted with attention to every
                    detail.
                  </motion.p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
