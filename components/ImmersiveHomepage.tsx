"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";

const heroSlides = [
  {
    title: "Health. Innovation. Partnership.",
    text: "Where product possibilities become dependable wellness brands.",
    image: "/hero/manufacturing-floor.png",
    alt: "Nutraceutical manufacturing floor",
  },
  {
    title: "Manufacturing excellence for growing brands.",
    text: "Formulation, quality, documentation, and production through one coordinated partner.",
    image: "/hero/quality-lab.png",
    alt: "Product development work inside a modern quality laboratory",
  },
  {
    title: "Making better health more accessible.",
    text: "Controlled cultivation and practical product development for purposeful wellness products.",
    image: "/sections/wheatgrass-aeroponic.png",
    alt: "Controlled indoor wheatgrass cultivation",
  },
] as const;

const audiences = [
  {
    title: "New brands",
    text: "Turn an idea into a product.",
    image: "/case-studies/new-brand-launch.png",
  },
  {
    title: "Growing brands",
    text: "Expand or improve your range.",
    image: "/case-studies/reformulation.png",
  },
  {
    title: "Malaysia entry",
    text: "Prepare for a local launch.",
    image: "/case-studies/malaysia-market-entry.png",
  },
  {
    title: "Regional supply",
    text: "Manufacture for regional growth.",
    image: "/case-studies/export-ready.png",
  },
] as const;

const stages = [
  {
    label: "Discover",
    title: "Define the opportunity.",
    text: "Clarify the audience, product format, commercial goals, and route to market before development begins.",
    image: "/hero/quality-lab.png",
  },
  {
    label: "Formulate",
    title: "Build the formulation.",
    text: "Shape the ingredient system, dosage, flavour, format, positioning, and target cost into a practical formula.",
    image: "/case-studies/botanical-wellness.png",
  },
  {
    label: "Validate",
    title: "Prepare quality and documentation.",
    text: "Complete product testing, quality checks, technical documentation, and market-specific compliance preparation.",
    image: "/sections/quality-control-cleanroom.jpg",
  },
  {
    label: "Manufacture",
    title: "Move into production.",
    text: "Confirm scalable processes, packaging, production planning, quality controls, and dependable supply requirements.",
    image: "/hero/manufacturing-floor.png",
  },
  {
    label: "Launch",
    title: "Prepare for market.",
    text: "Coordinate final production readiness, delivery planning, and repeat supply so your product can enter market with confidence.",
    image: "/sections/export-logistics.jpg",
  },
] as const;

export function ImmersiveHomepage() {
  const [activeHero, setActiveHero] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("home-scroll-snap");
    return () => document.documentElement.classList.remove("home-scroll-snap");
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (heroPaused || reduceMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [heroPaused, reduceMotion]);

  const handleEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
    ].join("\n");

    window.location.href = `mailto:inquiry@mytof-main.com.my?subject=${encodeURIComponent("Product enquiry from Origin Foods website")}&body=${encodeURIComponent(details)}`;
  };

  const hero = heroSlides[activeHero];

  return (
    <main className="editorial-home">
      <section className="editorial-scene editorial-hero" id="home" aria-labelledby="hero-title">
        {heroSlides.map((slide, index) => (
          <Image key={slide.image} className={`editorial-hero-image${index === activeHero ? " is-active" : ""}`} src={slide.image} alt={index === activeHero ? slide.alt : ""} fill priority={index === 0} sizes="100vw" aria-hidden={index !== activeHero} />
        ))}
        <div className="editorial-hero-overlay" />
        <div className="editorial-width editorial-hero-copy" key={hero.title}>
          <h1 id="hero-title">{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="editorial-actions">
            <Link href="#contact">Discuss your product</Link>
            <Link href="#manufacturing">How we work</Link>
          </div>
        </div>
        <div className="editorial-width editorial-hero-controls" onMouseEnter={() => setHeroPaused(true)} onMouseLeave={() => setHeroPaused(false)} onFocusCapture={() => setHeroPaused(true)} onBlurCapture={() => setHeroPaused(false)}>
          <button type="button" onClick={() => setActiveHero((activeHero + 2) % 3)}>Previous</button>
          <div>
            {heroSlides.map((slide, index) => <button key={slide.title} className={index === activeHero ? "is-active" : ""} type="button" onClick={() => setActiveHero(index)} aria-label={`Show slide ${index + 1}`}>{String(index + 1).padStart(2, "0")}</button>)}
          </div>
          <button type="button" onClick={() => setActiveHero((activeHero + 1) % 3)}>Next</button>
        </div>
      </section>

      <section className="editorial-scene editorial-proof" id="about" aria-labelledby="proof-title">
        <div className="editorial-proof-image"><Image src="/about/company-campus.png" alt="Origin Foods company and product development campus" fill sizes="100vw" /></div>
        <div className="editorial-proof-band">
          <div className="editorial-width editorial-proof-grid">
            <div><h2 id="proof-title">Experience behind every product decision.</h2><p>Origin Foods has supported wellness product development and manufacturing since 1999.</p></div>
            <dl>
              <div><dt>1999</dt><dd>Established in Malaysia</dd></div>
              <div><dt>One partner</dt><dd>Formulation through manufacturing</dd></div>
              <div><dt>Practical support</dt><dd>From product direction to production readiness</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="editorial-scene editorial-audiences" id="services" aria-labelledby="audiences-title">
        <header className="editorial-paths-head editorial-paths-width">
          <h2 id="audiences-title">Four paths. One manufacturing partner.</h2>
          <p>From first product to regional scale.</p>
        </header>
        <div className="editorial-paths-rail editorial-paths-width">
          {audiences.map((audience, index) => (
            <article key={audience.title}>
              <figure>
                <Image src={audience.image} alt={audience.title} fill sizes="(max-width: 760px) 82vw, 25vw" loading="eager" unoptimized />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figure>
              <div><h3>{audience.title}</h3><p>{audience.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-scene editorial-process" id="manufacturing" aria-label="Product development process">
        <span id="facilities" />
        <div className="editorial-process-lanes" aria-live="polite">
          {stages.map((item, index) => (
            <button key={item.label} className={`editorial-process-lane${index === activeStage ? " is-active" : ""}`} type="button" onClick={() => setActiveStage(index)} aria-pressed={index === activeStage}>
              <span className="editorial-process-lane-image"><Image src={item.image} alt="" fill sizes={index === activeStage ? "56vw" : "11vw"} loading="eager" unoptimized /></span>
              <span className="editorial-process-lane-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
                <span className="editorial-process-lane-detail"><span>{item.title}</span><span>{item.text}</span></span>
                <span className="editorial-process-lane-cue" aria-hidden="true">+</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="editorial-scene editorial-source" id="wheatgrass" aria-labelledby="source-title">
        <span id="products" /><span id="insights" />
        <div className="editorial-source-intro">
          <div>
            <h2 id="source-title">From controlled source to finished product.</h2>
            <p>Cultivation, development, and production stay connected around one product goal.</p>
          </div>
        </div>
        <div className="editorial-source-flow">
          <article>
            <span>01</span>
            <div><h3>Cultivation</h3><p>Grow selected plant materials in controlled indoor conditions, from seed through harvest.</p><span className="editorial-source-outcome">Controlled from seed to harvest.</span></div>
            <figure><Image src="/sections/wheatgrass-aeroponic.png" alt="Controlled indoor wheatgrass cultivation" fill sizes="34vw" loading="eager" unoptimized /></figure>
          </article>
          <article>
            <span>02</span>
            <div><h3>Development</h3><p>Turn the product direction into a practical formulation with the right quality and technical preparation.</p><span className="editorial-source-outcome">Built for the intended product format.</span></div>
            <figure><Image src="/hero/quality-lab.png" alt="Product development laboratory" fill sizes="34vw" loading="eager" /></figure>
          </article>
          <article>
            <span>03</span>
            <div><h3>Production</h3><p>Bring the approved product into reliable manufacturing, packaging, and supply planning.</p><span className="editorial-source-outcome">Ready for repeatable supply.</span></div>
            <figure><Image src="/hero/manufacturing-floor.png" alt="Nutraceutical manufacturing line" fill sizes="34vw" loading="eager" /></figure>
          </article>
        </div>
      </section>

      <section className="editorial-scene editorial-contact" id="contact" aria-labelledby="contact-title">
        <div className="editorial-contact-cta">
          <div className="editorial-width">
            <div>
              <h2 id="contact-title">Let&apos;s discuss your product.</h2>
              <p>Tell us what you want to create, where you are in the process, and the support you need to move forward.</p>
            </div>
            <form className="editorial-enquiry-form" onSubmit={handleEnquirySubmit}>
              <div className="editorial-enquiry-heading">
                <h3>Start an enquiry</h3>
                <p>Leave your details and we&apos;ll help direct the next conversation.</p>
              </div>
              <div className="editorial-enquiry-fields">
                <label>Name<input name="name" type="text" autoComplete="name" required /></label>
                <label>Company<input name="company" type="text" autoComplete="organization" required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
              </div>
              <button type="submit">Send enquiry <span aria-hidden="true">→</span></button>
            </form>
          </div>
        </div>
      </section>
      <section className="editorial-scene editorial-footer-scene" id="footer" aria-label="Site footer">
        <SiteFooter />
      </section>
    </main>
  );
}
