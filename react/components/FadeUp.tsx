"use client";

import { type ReactNode, type CSSProperties } from "react";
import { useFadeUp } from "../hooks/useFadeUp";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 700,
  distance = 24,
  className,
  style,
  as: Tag = "div",
}: FadeUpProps) {
  const { ref, isVisible } = useFadeUp();

  return (
    // @ts-expect-error -- dynamic tag
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
