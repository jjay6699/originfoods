"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  { company: "Meranti Vita Labs", service: "New product development", outcome: "Developed a daily wellness range from product concept through formulation, packaging direction, and production planning.", brief: "A new wellness business needed a clear route from initial idea to a market-ready product family.", support: ["Product format and positioning workshop", "Ingredient and formulation direction", "Packaging and production-readiness planning"], image: "/case-studies/new-brand-launch.png" },
  { company: "Bayu Botanika", service: "Formulation support", outcome: "Reformulated a flagship nutrition powder with a clearer ingredient story and commercially practical format.", brief: "A growing nutrition line needed to refresh an existing powder range for a more focused category position.", support: ["Ingredient and format review", "Reformulation planning", "Production and pack-format coordination"], image: "/case-studies/reformulation.png" },
  { company: "Langit Health", service: "Malaysia market entry", outcome: "Supported a local product entry route with documentation coordination, registration planning, and launch preparation.", brief: "A product programme required a structured route into the Malaysian market.", support: ["Documentation readiness review", "Registration planning support", "Local launch and manufacturing coordination"], image: "/case-studies/malaysia-market-entry.png" },
  { company: "Saji Seimbang", service: "Product range development", outcome: "Built a family nutrition range around suitable formats, powder development, and production readiness.", brief: "A family nutrition concept needed to become a coherent, practical product range.", support: ["Range architecture and format selection", "Powder development support", "Production planning for launch"], image: "/case-studies/family-nutrition.png" },
  { company: "Teras Nutrition", service: "Export manufacturing", outcome: "Aligned pack formats and manufacturing coordination for an export-oriented regional supply programme.", brief: "A regional supply programme needed suitable product formats and a dependable manufacturing route.", support: ["Format and pack specification alignment", "Manufacturing coordination", "Export documentation planning support"], image: "/case-studies/export-ready.png" },
  { company: "Harmoni Naturals", service: "Botanical product concept", outcome: "Shaped a botanical wellness product from ingredient positioning into a finished product direction.", brief: "A botanical product idea needed a practical path from positioning to a finished product concept.", support: ["Product proposition development", "Ingredient and format selection", "Manufacturing-readiness planning"], image: "/case-studies/botanical-wellness.png" },
] as const;

export function BrandsHelpedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section className="brands-helped-section" aria-labelledby="brands-helped-title">
      <div className="section-inner brands-helped-portfolio">
        <div className="brands-helped-intro">
          <span className="section-kicker">Brand partnerships</span>
          <h2 id="brands-helped-title">Brands we&apos;ve helped grow</h2>
          <p>From first product concepts to market-ready ranges, we work alongside wellness brands through development, preparation, and manufacturing.</p>
        </div>

        <div className="project-selector" aria-label="Choose a partner profile">
          {projects.map((project, index) => (
            <button key={project.company} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex}>
              <span>{project.company}</span>
              <small>{project.service}</small>
            </button>
          ))}
        </div>

        <div className="project-showcase" aria-live="polite">
          <article className="project-feature" key={activeProject.company}>
            <Image src={activeProject.image} alt={`${activeProject.company} product project imagery`} fill priority sizes="(max-width: 980px) 100vw, 56vw" />
          </article>
          <div className="project-feature-details">
            <span>{activeProject.service}</span>
            <h3>{activeProject.company}</h3>
            <p>{activeProject.outcome}</p>
            <button className="project-read-more" type="button" onClick={() => setIsModalOpen(true)}>Read More</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setIsModalOpen(false)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="project-modal-close" type="button" onClick={() => setIsModalOpen(false)} aria-label="Close project details">×</button>
            <span className="section-kicker">{activeProject.service}</span>
            <h3 id="project-modal-title">{activeProject.company}</h3>
            <div className="project-modal-grid">
              <div><span>Project brief</span><p>{activeProject.brief}</p></div>
              <div><span>How we supported</span><ul>{activeProject.support.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
            <div className="project-modal-outcome"><span>Outcome</span><p>{activeProject.outcome}</p></div>
          </section>
        </div>
      )}
    </section>
  );
}
