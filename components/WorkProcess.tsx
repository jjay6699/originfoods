"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Product Innovation & Formulation", text: "Differentiated, science-backed, commercially competitive products.", bullets: ["Global branded ingredient library", "Mechanism-driven formulations", "Evidence-based ingredient selection", "Competitive cost-performance"] },
  { title: "Regulatory & Compliance Expertise", text: "Smooth registration and compliance for faster market entry.", bullets: ["Complex product registration", "KKLIU & label compliance", "Halal advisory", "Import & export guidance"] },
  { title: "Quality Assurance & Validation", text: "Consistent, high-quality products backed by scientific validation.", bullets: ["QA & QC systems", "Assay & stability testing", "COA & product documentation", "Batch consistency monitoring"] },
  { title: "Manufacturing Excellence", text: "Reliable, efficient and scalable manufacturing solutions.", bullets: ["Flexible production capacity", "Capacity & process optimization", "Lead-time optimization", "Continuous improvement"] },
  { title: "Commercialization & Market Success", text: "Helping clients build successful, sustainable brands beyond manufacturing.", bullets: ["Go-to-market strategy", "Market trend insights", "Brand positioning support", "Product lifecycle management", "Product packaging design"] },
];

export function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const activeStep = steps[activeIndex];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 760 || wheelLockedRef.current) return;
      const bounds = section.getBoundingClientRect();
      const sectionIsActive = bounds.top <= 8 && bounds.bottom >= window.innerHeight * 0.72;
      if (!sectionIsActive) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const current = activeIndexRef.current;
      const next = Math.max(0, Math.min(steps.length - 1, current + direction));
      if (next === current) return;

      event.preventDefault();
      wheelLockedRef.current = true;
      activeIndexRef.current = next;
      setActiveIndex(next);
      window.setTimeout(() => { wheelLockedRef.current = false; }, 620);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="work-process" ref={sectionRef}>
      <div className="process-heading">
        <span className="section-kicker">How we work</span>
        <h2>Five pillars that deliver on our promise</h2>
        <p>From product innovation to market success, each pillar is designed to keep development practical, compliant, and commercially focused.</p>
      </div>

      <div className="process-layout">
        <nav className="process-timeline" aria-label="Our five pillars">
          {steps.map((step, index) => (
            <button
              className={`process-timeline-item ${index === activeIndex ? "is-active" : ""}`}
              key={step.title}
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span className="process-timeline-number">0{index + 1}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </nav>

        <article className="process-detail" aria-live="polite">
          <span className="process-detail-kicker">0{activeIndex + 1}</span>
          <h3>{activeStep.title}</h3>
          <p>{activeStep.text}</p>
          <div className="process-detail-rule" />
          <strong>What this includes</strong>
          <ul>{activeStep.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </article>
      </div>
    </div>
  );
}
