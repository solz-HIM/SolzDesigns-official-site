"use client";

import { useCallback, useRef } from "react";

const STRENGTH = 0.35;

export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = STRENGTH,
) {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    const reset = () => {
      if (ref.current) ref.current.style.transition = "";
    };
    el.addEventListener("transitionend", reset, { once: true });
  }, []);

  const onMouseEnter = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transition = "transform 0.15s ease-out";
  }, []);

  return { ref, onMouseMove, onMouseLeave, onMouseEnter };
}
