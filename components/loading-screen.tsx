"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("introPlayed")) {
      return;
    }

    setVisible(true);
    const start = Date.now();
    const duration = 2200;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("introPlayed", "1");
        }, 400);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  const letters = SITE.name.replace(" ", "").split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          aria-hidden={!visible}
          role="presentation"
        >
          <div className="flex gap-1 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                className="font-heading text-5xl font-semibold text-white md:text-7xl"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs tracking-[0.4em] text-ice uppercase">
            {SITE.tagline}
          </p>
          <div className="mt-12 h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              className="h-full origin-left bg-ice"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
