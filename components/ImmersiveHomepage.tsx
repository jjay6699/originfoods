"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

const sceneIds = ["home", "about", "services", "manufacturing", "wheatgrass", "contact"] as const;
const sceneAliases: Record<string, number> = {
  home: 0,
  about: 1,
  services: 2,
  manufacturing: 3,
  facilities: 3,
  products: 4,
  wheatgrass: 4,
  insights: 4,
  contact: 5,
};

export function ImmersiveHomepage() {
  const [activeHero, setActiveHero] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const scrollerRef = useRef<HTMLElement>(null);
  const wheelLocked = useRef(false);
  const touchStartY = useRef<number | null>(null);

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let unlockTimer = 0;

    const goTo = (index: number, updateHash = true) => {
      const nextIndex = Math.max(0, Math.min(sceneIds.length - 1, index));
      scroller.scrollTo({
        top: nextIndex * scroller.clientHeight,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      if (updateHash) window.history.replaceState(null, "", `#${sceneIds[nextIndex]}`);
    };

    const currentIndex = () => Math.round(scroller.scrollTop / Math.max(1, scroller.clientHeight));

    const lockNavigation = () => {
      wheelLocked.current = true;
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        wheelLocked.current = false;
      }, reduceMotion ? 120 : 700);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      if (wheelLocked.current) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const current = currentIndex();
      const next = Math.max(0, Math.min(sceneIds.length - 1, current + direction));
      if (next === current) return;
      lockNavigation();
      goTo(next);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select")) return;
      const current = currentIndex();
      let next: number | null = null;
      if (["ArrowDown", "PageDown", " "].includes(event.key)) next = current + 1;
      if (["ArrowUp", "PageUp"].includes(event.key)) next = current - 1;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = sceneIds.length - 1;
      if (next === null) return;
      event.preventDefault();
      goTo(next);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartY.current;
      const end = event.changedTouches[0]?.clientY;
      touchStartY.current = null;
      if (start === null || end === undefined || Math.abs(start - end) < 48) return;
      goTo(currentIndex() + (start > end ? 1 : -1));
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id in sceneAliases) goTo(sceneAliases[id], false);
    };

    const onResize = () => goTo(currentIndex(), false);

    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("touchstart", onTouchStart, { passive: true });
    scroller.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("resize", onResize);

    window.setTimeout(onHashChange, 0);

    return () => {
      window.clearTimeout(unlockTimer);
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("touchstart", onTouchStart);
      scroller.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("resize", onResize);
    };
  }, [reduceMotion]);

  const hero = heroSlides[activeHero];

  return (
    <main className="editorial-home" ref={scrollerRef}>
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
            <div><h2 id="contact-title">Let&apos;s discuss your product.</h2><p>Tell us what you want to create and how far the idea has progressed.</p></div>
            <address><a href="mailto:origincares@tof.com.my">origincares@tof.com.my</a><a href="tel:+60358821860">+6 03 5882 1860</a></address>
          </div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
