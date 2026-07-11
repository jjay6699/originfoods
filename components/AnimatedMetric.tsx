"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedMetric({ value }: { value: string }) {
  const target = Number(value.replace(/[^0-9]/g, ""));
  const suffix = value.includes("+") ? "+" : "";
  const [displayValue, setDisplayValue] = useState("0");
  const metricRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const startedAt = performance.now();
        const duration = 2200;

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased).toLocaleString());
        if (progress < 1) frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return <strong ref={metricRef}>{displayValue}{suffix}</strong>;
}
