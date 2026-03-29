"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  speed: number;
  phase: number;
}

interface UseStarfieldOptions {
  count?: number;
  color?: string;
  maxRadius?: number;
  parallaxIntensity?: number;
}

export function useStarfield({
  count = 200,
  color = "255,255,255",
  maxRadius = 1.4,
  parallaxIntensity = 0.8,
}: UseStarfieldOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);

  const createStars = useCallback(() => {
    const w = window.innerWidth;
    const h = document.body.scrollHeight || window.innerHeight * 5;
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * maxRadius + 0.3,
        a: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.3 + 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;
  }, [count, maxRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
    };

    const onScroll = () => {
      scrollRef.current = window.pageYOffset;
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const t = Date.now() * 0.001;
      const sy = scrollRef.current;

      for (const s of starsRef.current) {
        const py =
          (s.y - sy * s.speed * parallaxIntensity) %
          (h * 4);
        const screenY = ((py % h) + h) % h;
        const screenX = s.x % w;

        const twinkle = Math.sin(t * 1.5 + s.phase) * 0.3 + 0.7;
        const alpha = s.a * twinkle;

        ctx.beginPath();
        ctx.arc(screenX, screenY, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [color, parallaxIntensity, createStars]);

  return canvasRef;
}
