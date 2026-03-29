"use client";

import { useEffect, useRef } from "react";

interface WaveformProps {
  bars?: number;
  color?: string;
  className?: string;
}

export function Waveform({
  bars = 20,
  color = "rgba(255,255,255,0.2)",
  className,
}: WaveformProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.querySelectorAll<HTMLDivElement>("[data-bar]").forEach((bar) => {
        bar.style.height = `${Math.random() * 24 + 6}px`;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "flex", alignItems: "center", gap: 2, height: 32 }}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          data-bar
          style={{
            width: 3,
            borderRadius: 999,
            background: color,
            height: Math.random() * 24 + 6,
            transition: "height 300ms ease",
          }}
        />
      ))}
    </div>
  );
}
