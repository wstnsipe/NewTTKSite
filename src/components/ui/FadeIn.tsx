"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;       // ms
  direction?: Direction;
  className?: string;
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const initial: Record<Direction, string> = {
    up:    "opacity-0 translate-y-7",
    left:  "opacity-0 -translate-x-7",
    right: "opacity-0 translate-x-7",
    none:  "opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : initial[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
