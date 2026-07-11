"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const cards = [
  { title: "Own wheatgrass farm", text: "Vertically integrated, bio-economy business.", detail: "Controlled indoor cultivation supports consistent sourcing and whole-plant processing.", image: "/sections/wheatgrass-aeroponic.png", alt: "Indoor aeroponic wheatgrass cultivation" },
  { title: "Product development", text: "In-house formulation and innovation capability.", detail: "Formulation support from the initial product brief through format, ingredient, and development decisions.", image: "/hero/quality-lab.png", alt: "Product development laboratory" },
  { title: "Registration expertise", text: "NPRA, traditional medicine and label compliance.", detail: "Documentation and registration support aligned with Malaysia market requirements and product category needs.", image: "/sections/quality-control-cleanroom.jpg", alt: "Quality control cleanroom" },
  { title: "Manufacturing facility", text: "Capsules, tablets, sachets, canisters, snackable bars, and more.", detail: "Production support across a range of nutraceutical formats, with practical coordination from brief to finished pack.", image: "/hero/manufacturing-floor.png", alt: "Nutraceutical manufacturing facility" },
  { title: "Flexible MOQ", text: "Accessible entry for emerging brands.", detail: "Practical production pathways designed to help emerging brands enter the category with a clear and manageable starting point.", image: "/products/nutrition-nourishment.png", alt: "Nutrition product development" },
  { title: "Export experience and connection", text: "Proven cross-border regulatory navigation.", detail: "Documentation and coordination for brands planning cross-border supply and regional market expansion.", image: "/sections/export-logistics.jpg", alt: "Packaged goods prepared for export logistics" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === "left" ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function CapabilitiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(4);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    const updateVisibleRange = () => {
      const nextMaxIndex = window.innerWidth <= 760 ? 5 : 4;
      setMaxIndex(nextMaxIndex);
      setActiveIndex((current) => Math.min(current, nextMaxIndex));
    };

    updateVisibleRange();
    window.addEventListener("resize", updateVisibleRange);

    return () => {
      window.removeEventListener("resize", updateVisibleRange);
    };
  }, []);

  const move = (direction: "next" | "previous") => {
    setActiveIndex((current) => Math.max(0, Math.min(current + (direction === "next" ? 1 : -1), maxIndex)));
  };

  return (
    <div className="capabilities-carousel" aria-label="Origin Foods capabilities">
      <div className="capabilities-carousel-viewport">
        <div className="capabilities-carousel-track" style={{ "--active-index": activeIndex } as CSSProperties}>
          {cards.map((card, index) => (
            <article
              className={`capability-card${flippedCard === card.title ? " is-flipped" : ""}`}
              key={card.title}
              role="button"
              tabIndex={0}
              aria-pressed={flippedCard === card.title}
              onMouseEnter={() => setFlippedCard((current) => current && current !== card.title ? null : current)}
              onClick={() => setFlippedCard((current) => current === card.title ? null : card.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setFlippedCard((current) => current === card.title ? null : card.title);
                }
              }}
            >
              <div className="capability-card-inner">
                <div className="capability-card-face capability-card-front">
                  <div className="capability-image">
                    <img src={card.image} alt={card.alt} loading={index < 3 ? "eager" : "lazy"} />
                  </div>
                  <div className="capability-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <span className="capability-card-action">More info <span aria-hidden="true">-&gt;</span></span>
                  </div>
                </div>
                <div className="capability-card-face capability-card-back">
                  <span className="capability-card-label">{card.title}</span>
                  <h3>More about this capability</h3>
                  <p>{card.detail}</p>
                  <span className="capability-card-action">Back to summary <span aria-hidden="true">-&lt;</span></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="capabilities-carousel-controls" aria-label="Carousel controls">
        <div className="capabilities-carousel-buttons">
          <button className={activeIndex === maxIndex ? "is-active" : ""} type="button" onClick={() => move("previous")} aria-label="Previous capability" disabled={activeIndex === 0}><ArrowIcon direction="left" /></button>
          <button className={activeIndex < maxIndex ? "is-active" : ""} type="button" onClick={() => move("next")} aria-label="Next capability" disabled={activeIndex === maxIndex}><ArrowIcon direction="right" /></button>
        </div>
      </div>
    </div>
  );
}
