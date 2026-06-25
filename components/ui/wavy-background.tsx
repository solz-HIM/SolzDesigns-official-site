"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number>(0);
  const nt = useRef(0);
  const lastFrame = useRef(0);
  // Store dimensions in refs — never read from DOM inside draw loop
  const dims = useRef({ w: 0, h: 0 });


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    // Safari needs CSS blur on the element (ctx.filter not supported)
    const isSafari =
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");
    if (isSafari) canvas.style.filter = `blur(${blur}px)`;
    const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);
    const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
    const step = window.innerWidth < 768 ? 10 : 5;
    const FRAME_MS = 1000 / 30; // cap at 30 fps

    const resize = () => {
      dims.current.w = window.innerWidth;
      dims.current.h = window.innerHeight;
      canvas.width = dims.current.w;
      canvas.height = dims.current.h;
      ctx.filter = `blur(${blur}px)`;
    };
    resize();

    // Respect prefers-reduced-motion — paint one static frame then stop
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawWave = (n: number) => {
      const { w, h } = dims.current;
      nt.current += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth ?? 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += step) {
          const y = noise(x / 800, 0.3 * i, nt.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = (ts: number) => {
      if (ts - lastFrame.current < FRAME_MS) {
        animationId.current = requestAnimationFrame(render);
        return;
      }
      lastFrame.current = ts;

      const { w, h } = dims.current;
      ctx.fillStyle = backgroundFill ?? "black";
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);

      if (!prefersReduced) {
        animationId.current = requestAnimationFrame(render);
      }
    };

    const paused = { current: false };
    const onVisibility = () => {
      if (document.hidden) {
        paused.current = true;
        cancelAnimationFrame(animationId.current);
      } else if (!prefersReduced) {
        paused.current = false;
        lastFrame.current = 0;
        animationId.current = requestAnimationFrame(render);
      }
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    animationId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0"
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
