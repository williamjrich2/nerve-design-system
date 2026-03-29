"use client";

import { type FormEvent, useState } from "react";

interface PromptBarProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function PromptBar({
  placeholder = "Describe what you want to build...",
  onSubmit,
  className,
}: PromptBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit?.(value);
      setValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 999,
        padding: "10px 14px 10px 20px",
        maxWidth: 500,
        width: "100%",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1,
          fontSize: 14,
          color: "rgba(255,255,255,0.8)",
          background: "none",
          border: "none",
          outline: "none",
          fontFamily: "inherit",
        }}
      />
      <button
        type="submit"
        style={{
          width: 36,
          height: 36,
          borderRadius: 999,
          background: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 150ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0c0c0e"
          strokeWidth={2.5}
          width={16}
          height={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </form>
  );
}
