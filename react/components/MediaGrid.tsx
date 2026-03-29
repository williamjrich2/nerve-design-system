"use client";

import { type ReactNode } from "react";

interface MediaCardProps {
  children?: ReactNode;
  tall?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function MediaCard({ children, tall, className, style }: MediaCardProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
        border: "1px solid rgba(255,255,255,0.06)",
        gridRow: tall ? "span 2" : undefined,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: tall ? undefined : 200,
          background:
            "linear-gradient(180deg,rgba(255,255,255,0.03) 0%,rgba(0,0,0,0.2) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children || (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            width={36}
            height={36}
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </div>
    </div>
  );
}

interface MediaGridProps {
  children: ReactNode;
  columns?: "2x2" | "single";
  className?: string;
}

export function MediaGrid({
  children,
  columns = "2x2",
  className,
}: MediaGridProps) {
  const gridStyle: React.CSSProperties =
    columns === "2x2"
      ? {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "200px 200px",
          gap: 12,
        }
      : {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 12,
        };

  return (
    <div className={className} style={gridStyle}>
      {children}
    </div>
  );
}
