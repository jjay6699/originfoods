"use client";

import { useState, type CSSProperties } from "react";

const journeyStages = [
  { title: "Market Opportunity", text: "Clarify the opportunity, audience, and commercial direction before development begins." },
  { title: "Product Strategy", text: "Shape a practical product route around positioning, format, target market, and launch priorities." },
  { title: "Formulation", text: "Translate the product brief into a considered formulation with the right ingredients and format." },
  { title: "Registration", text: "Coordinate product documentation and registration support for a smoother route to market." },
  { title: "Quality Validation", text: "Align testing, documentation, and quality checks with the product and market requirements." },
  { title: "Manufacturing", text: "Move into planned production with suitable processes, formats, and supply coordination." },
  { title: "Commercialization", text: "Support the transition from finished product to a launch-ready commercial proposition." },
  { title: "Market Success", text: "Build a dependable foundation for repeat supply, growth, and long-term brand development." },
] as const;

export function EndToEndJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = journeyStages[activeIndex];

  return (
    <section className="end-to-end-section" aria-labelledby="end-to-end-title">
      <div className="section-inner">
        <div className="section-heading end-to-end-heading">
          <span className="section-kicker">One partner, end to end</span>
          <h2 id="end-to-end-title">From the first market insight to lasting market success</h2>
          <p>Origin Foods supports every stage of the journey, bringing strategy, formulation, compliance, quality, and manufacturing into one coordinated path.</p>
        </div>

        <div className="journey-orbit" style={{ "--journey-progress-angle": `${activeIndex * 45}deg` } as CSSProperties}>
          <div className="journey-orbit-ring" aria-hidden="true" />
          <div className="journey-orbit-center" aria-live="polite">
            <span className="journey-orbit-center-step">{activeIndex + 1} / {journeyStages.length}</span>
            <h3>{activeStage.title}</h3>
            <p>{activeStage.text}</p>
          </div>

          <div className="journey-stage-list" aria-label="End-to-end product journey">
            {journeyStages.map((stage, index) => (
              <button
                className={`journey-stage journey-stage-${index + 1}${activeIndex === index ? " is-active" : ""}`}
                key={stage.title}
                type="button"
                aria-label={`View ${stage.title}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span className="journey-stage-number">{index + 1}</span>
                <span className="journey-stage-title">{stage.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
