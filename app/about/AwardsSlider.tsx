"use client";

import { useEffect, useState } from "react";

const awards = [
  { title: "Silver Medal", detail: "Indoor Organic Aeroponic Cultivation", source: "28th Geneva International Exhibition of Inventions, Innovation & New Technique", year: "2000" },
  { title: "Gold Medal", detail: "Wheatgrass Tea Producer", source: "Hong Kong International Invention Expo", year: "2000" },
  { title: "The Largest Wheatgrass Producer in Malaysia", detail: "National record recognition", source: "Malaysia Books of Record", year: "Recognition" },
  { title: "Top 10 Winner", detail: "Malaysia Enterprise 50 Award", source: "Malaysia Enterprise 50 Award", year: "2017" },
  { title: "Outstanding SME", detail: "Golden Bull Award", source: "Golden Bull Award", year: "2018" },
  { title: "Manufacturing Excellence Award", detail: "Sin Chew Business Excellence Award", source: "Manufacturing excellence recognition", year: "2018 / 2020 / 2022" },
  { title: "SME Export Excellence Award", detail: "Platinum Business Awards", source: "Export excellence recognition", year: "2018" },
  { title: "Outstanding SME", detail: "Golden Bull Award", source: "Golden Bull Award", year: "2020" },
  { title: "PKT Export Excellence Awards", detail: "Sin Chew Business Excellence Award", source: "Export excellence recognition", year: "2020 / 2022" },
] as const;

export default function AwardsSlider() {
  const [active, setActive] = useState(0);
  const visibleAwards = [0, 1, 2, 3].map((offset) => awards[(active + offset) % awards.length]);
  const move = (direction: number) => setActive((active + direction + awards.length) % awards.length);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % awards.length), 1500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="awards-slider" aria-roledescription="carousel" aria-label="Awards and recognition">
      <div className="awards-slide" key={active} aria-live="polite">{visibleAwards.map((award) => <article className="award-slide-card" key={`${award.title}-${award.year}`}>
        <div className="awards-slide-image" aria-label={`Image placeholder for ${award.title}`}>
          <div className="about-image-placeholder"><span>Award image</span></div>
        </div>
        <div className="awards-slide-copy">
          <span className="section-kicker">{award.year}</span>
          <h3>{award.title}</h3>
          <p className="awards-slide-detail">{award.detail}</p>
          <p>{award.source}</p>
        </div>
      </article>)}</div>
      <div className="awards-slider-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous award">←</button>
        <div className="awards-slider-dots">{awards.map((item, index) => <button key={`${item.title}-${item.year}`} type="button" className={active === index ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show award ${index + 1}`} aria-current={active === index ? "true" : undefined} />)}</div>
        <button type="button" onClick={() => move(1)} aria-label="Next award">→</button>
      </div>
    </div>
  );
}
