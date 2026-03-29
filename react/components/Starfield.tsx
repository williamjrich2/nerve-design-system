"use client";

import { useStarfield } from "../hooks/useStarfield";

interface StarfieldProps {
  count?: number;
  color?: string;
  className?: string;
}

export function Starfield({
  count = 200,
  color = "255,255,255",
  className,
}: StarfieldProps) {
  const canvasRef = useStarfield({ count, color });

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
