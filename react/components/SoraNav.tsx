"use client";

import { type ReactNode } from "react";

interface SoraNavProps {
  brand?: string;
  children?: ReactNode;
}

export function SoraNav({ brand = "Anova", children }: SoraNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 4,
        background: "rgba(20,20,22,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 999,
        padding: "6px 8px",
      }}
    >
      <span
        style={{
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          padding: "8px 18px",
          color: "#fff",
        }}
      >
        {brand}
      </span>
      {children}
    </nav>
  );
}

interface SoraNavLinkProps {
  href?: string;
  active?: boolean;
  cta?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function SoraNavLink({
  href,
  active,
  cta,
  children,
  onClick,
}: SoraNavLinkProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 400,
    color: active ? "#fff" : "rgba(255,255,255,0.5)",
    padding: "8px 16px",
    borderRadius: 999,
    border: cta ? "1px solid rgba(255,255,255,0.1)" : "none",
    background: cta ? "rgba(255,255,255,0.08)" : "none",
    cursor: "pointer",
    transition: "all 200ms ease",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  };

  if (href) {
    return (
      <a href={href} style={baseStyle} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
