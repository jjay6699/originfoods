import Link from "next/link";
import Image from "next/image";
import { WorkProcess } from "@/components/WorkProcess";
import { CapabilitiesCarousel } from "@/components/CapabilitiesCarousel";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { EndToEndJourney } from "@/components/EndToEndJourney";
import { BrandsHelpedCarousel } from "@/components/BrandsHelpedCarousel";
import { InsightsSection } from "@/components/InsightsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

const heroSlides = [
  {
    src: "/hero/manufacturing-floor.png",
    alt: "Clean nutraceutical manufacturing floor with production equipment",
    title: "Health. Innovation. Partnership.",
    body: "Where product possibilities become dependable wellness brands, supported by an experienced Malaysian manufacturing partner.",
  },
  {
    src: "/hero/quality-lab.png",
    alt: "Modern nutraceutical quality laboratory with botanical formulation samples",
    title: "Manufacturing excellence for growing brands",
    body: "From formulation and production to documentation and testing, Origin Foods helps health and wellness brands move forward with confidence.",
  },
  {
    src: "/sections/wheatgrass-aeroponic.png",
    alt: "Indoor aeroponic wheatgrass cultivation for nutraceutical products",
    title: "Making better health more accessible",
    body: "Restoring health. Transforming lives. Building practical product concepts for everyday nutrition and wellbeing.",
  },
];

const journeyCards = [
  {
    icon: "launch",
    title: "New Brand Owners",
    audience: "Entrepreneurs entering the supplement industry.",
    help: "End-to-end guidance from concept to market launch.",
    details: "Product concept, format selection, formulation, packaging, and production planning.",
  },
  {
    icon: "growth",
    title: "Growing Brands",
    audience: "Established brands facing growth bottlenecks.",
    help: "Innovation, reformulation, and growth-oriented strategy.",
    details: "New product development, reformulation, production planning, and repeat supply support.",
  },
  {
    icon: "market",
    title: "International Brands Entering Malaysia",
    audience: "Overseas brands entering Malaysia.",
    help: "Regulatory, registration, and market-entry support.",
    details: "Local product documentation, registration support, and manufacturing coordination in Malaysia.",
  },
  {
    icon: "manufacturing",
    title: "International Manufacturing Partners",
    audience: "Overseas brands seeking export manufacturing.",
    help: "Flexible manufacturing, export, and regional reach.",
    details: "Contract manufacturing for export programs, specified formats, and regional supply requirements.",
  },
];

const companyMetrics = [
  { value: "26+", label: "Years of experience", icon: "experience" },
  { value: "23+", label: "Countries exported", icon: "global" },
  { value: "5", label: "GMP certified sites", icon: "facility" },
  { value: "12+", label: "Global awards recognition", icon: "award" },
  { value: "1,000+", label: "Formulations developed", icon: "formula" },
  { value: "250+", label: "People supporting production", icon: "people" },
];

const workSteps = [
  { title: "Product Innovation & Formulation", text: "Differentiated, science-backed, commercially competitive products.", bullets: ["Global branded ingredient library", "Mechanism-driven formulations", "Evidence-based ingredient selection", "Competitive cost-performance"] },
  { title: "Regulatory & Compliance Expertise", text: "Smooth registration and compliance for faster market entry.", bullets: ["Complex product registration", "KKLIU & label compliance", "Halal advisory", "Import & export guidance"] },
  { title: "Quality Assurance & Validation", text: "Consistent, high-quality products backed by scientific validation.", bullets: ["QA & QC systems", "Assay & stability testing", "COA & product documentation", "Batch consistency monitoring"] },
  { title: "Manufacturing Excellence", text: "Reliable, efficient and scalable manufacturing solutions.", bullets: ["Flexible production capacity", "Capacity & process optimization", "Lead-time optimization", "Continuous improvement"] },
  { title: "Commercialization & Market Success", text: "Helping clients build successful, sustainable brands beyond manufacturing.", bullets: ["Go-to-market strategy", "Market trend insights", "Brand positioning support", "Product lifecycle management", "Product packaging design"] },
];

function WorkStepIcon({ type }: { type: string }) {
  if (type === "innovation") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 4h10M14 4v8l-6 11a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 24 23L18 12V4M11 19h10" /></svg>;
  if (type === "compliance") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 4 3 2 3.6-.2 1.2 3.4 2.8 2.2-1.2 3.4 1.2 3.4-2.8 2.2-1.2 3.4L19 21l-3 2-3-2-3.6.2-1.2-3.4-2.8-2.2 1.2-3.4-1.2-3.4 2.8-2.2 1.2-3.4L13 6l3-2Z" /><path d="m11.5 14.5 3 3 6-6" /></svg>;
  if (type === "quality") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 25h18M9 22V11h6v11M17 22V7h6v15M12 15h0M20 11h0" /></svg>;
  if (type === "manufacturing") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 26V13l8 5v-7l8 5V8l8 5v13H4ZM9 26v-4h4v4M19 26v-4h4v4" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25 26 4M17 4h9v9M7 18l-3 3 7 7 3-3M20 14l5 5" /></svg>;
}

function MetricIcon({ type }: { type: string }) {
  if (type === "global") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" /><path d="M5 16h22M16 5c3 3.1 4.5 6.8 4.5 11S19 23 16 27c-3-4-4.5-7.7-4.5-11S13 8.1 16 5Z" /></svg>;
  if (type === "facility") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 27V10l11-5 11 5v17M10 15h3M19 15h3M10 20h3M19 20h3M14 27v-5h4v5" /></svg>;
  if (type === "award") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="13" r="8" /><path d="m12 20-2 8 6-3 6 3-2-8M16 9l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L16 9Z" /></svg>;
  if (type === "formula") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 6h18M7 26h18M10 6l12 20M22 6 10 26" /><circle cx="16" cy="16" r="12" /></svg>;
  if (type === "people") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="4" /><path d="M9 27c.5-5 3-8 7-8s6.5 3 7 8M7 16c-3 1-4.5 3.5-5 7M25 16c3 1 4.5 3.5 5 7" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 19 11l7 .6-5.3 4.6 1.6 7-6.3-3.8-6.3 3.8 1.6-7L6 11.6l7-.6 3-7Z" /></svg>;
}

function JourneyIcon({ type }: { type: string }) {
  if (type === "launch") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3c5.6 2.3 8.8 6.6 8.8 12.2 0 5.2-3.2 8.9-8.8 13.2-5.6-4.3-8.8-8-8.8-13.2C7.2 9.6 10.4 5.3 16 3Z" /><path d="m11.5 21.5-4 1.5 1.5-4M20.5 21.5l4 1.5-1.5-4M16 10.5v7M12.5 14h7" /></svg>;
  }

  if (type === "growth") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25V7M5 25h22M9 20l5-5 4 3 8-9M21 9h5v5" /></svg>;
  }

  if (type === "market") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="14" r="9" /><path d="M7 14h18M16 5c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S13.6 7.5 16 5ZM16 23v5M11 28h10" /></svg>;
  }

  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 27V14h7V9h7v5h10v13H4ZM11 27v-6h7v6M22 18h3M22 22h3M7 18h2" /></svg>;
}

const facilityHighlights = [
  "GMP, GLP, GAP and HACCP-oriented operating standards",
  "Manufacturing and laboratory facilities planned for nutraceutical products",
  "Powders, tablets, capsules, sachets, tea bags, canisters and pouches",
];

const productionFormats = [
  "Tablet",
  "Capsule",
  "Powder",
  "Sachet",
  "Tea Bag",
  "Bottle",
  "Canister",
  "Pouch",
];

const productCategories = [
  {
    title: "Children's Health & Growth Series",
    summary:
      "Nutrition-focused concepts for family and children's wellness ranges.",
    image: "/products/children-health-growth.png",
  },
  {
    title: "Detoxification & Weight Management Series",
    summary:
      "Functional food concepts for digestive support, fibre blends, and weight-management positioning.",
    image: "/products/detox-weight-management.png",
  },
  {
    title: "Bio Drink Beverage Series",
    summary:
      "Beverage concepts using soy, grains, botanical ingredients, and functional drink formats.",
    image: "/products/bio-drink-beverage.png",
  },
  {
    title: "Nutrition & Nourishment Series",
    summary:
      "Daily nourishment concepts including protein, peptides, grains, and milk-style powder blends.",
    image: "/products/nutrition-nourishment.png",
  },
];

const footerColumns = [
  {
    title: "About TOF",
    links: [
      { label: "Journey", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Core Values", href: "#about" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Personalised Services",
    links: [
      { label: "Contract Manufacturing", href: "#services" },
      { label: "Custom Formulation", href: "#services" },
      { label: "Registration & Export Documentation", href: "#services" },
      { label: "Laboratory Testing & Analysis", href: "#services" },
    ],
  },
  {
    title: "Facilities (4G)",
    links: [
      { label: "GMP, GAP, GLP, GSP", href: "#facilities" },
      { label: "HACCP & Facilities", href: "#facilities" },
    ],
  },
  {
    title: "Wheatgrass",
    links: [
      { label: "Indoor Organic Cultivation Technology", href: "#wheatgrass" },
      { label: "Manufacturing Process", href: "#wheatgrass" },
    ],
  },
  {
    title: "Quality Products",
    links: [
      { label: "Children's Health & Growth", href: "#products" },
      { label: "Detoxification & Weight Management", href: "#products" },
      { label: "Bio Drink Beverage", href: "#products" },
      { label: "Nutrition & Nourishment", href: "#products" },
    ],
  },
];

export default function Home() {
  return (
    <main className="homepage">

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true">
          {heroSlides.map((slide) => (
            <Image
              key={slide.src}
              className="hero-background-image"
              src={slide.src}
              alt=""
              fill
              priority={slide.src === heroSlides[0].src}
              sizes="100vw"
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-copy hero-copy-panel">
            {heroSlides.map((slide, index) => (
              <div className="hero-slide-copy" key={slide.src}>
                {index === 0 ? (
                  <h1 id="hero-title">{slide.title}</h1>
                ) : (
                  <h2>{slide.title}</h2>
                )}
                <p className="hero-body">{slide.body}</p>

                <div className="hero-actions" aria-label="Primary actions">
                  <Link className="button button-primary" href="#contact">
                    Discuss Your Product
                  </Link>
                  <Link className="button button-secondary" href="#facilities">
                    Explore Capabilities
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="company-overview-section" aria-labelledby="overview-title">
        <div className="section-inner">
          <div className="overview-banner">
            <Image src="/sections/quality-control-cleanroom.jpg" alt="Quality control work in a cleanroom manufacturing environment" fill sizes="100vw" />
            <div className="overview-banner-overlay" />
            <div className="overview-banner-copy">
              <span className="section-kicker">The Origin Foods</span>
              <h2 id="overview-title">Experience behind every product decision</h2>
              <p>Our experience across formulation, manufacturing, and product support helps brand owners move from a clear idea to a dependable finished product.</p>
            </div>
          </div>

          <div className="metrics-grid overview-metrics" aria-label="Origin Foods at a glance">
            {companyMetrics.map((metric) => (
              <div className="metric-item" key={metric.label}>
                <span className="metric-icon"><MetricIcon type={metric.icon} /></span>
                <div><AnimatedMetric value={metric.value} /><span>{metric.label}</span></div>
              </div>
            ))}
          </div>

          <WorkProcess />
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="journey-heading">
            <span className="section-kicker">Who we support</span>
            <h2 id="services-title">A manufacturing pathway built around your stage of growth</h2>
            <p>From first product concept to regional supply, Origin Foods supports the next step in your commercial journey.</p>
          </div>

          <div className="journey-grid">
            {journeyCards.map((card) => (
              <article className="journey-card" key={card.title} tabIndex={0}>
                <div className="journey-card-inner">
                  <div className="journey-card-face journey-card-front">
                    <span className="journey-icon"><JourneyIcon type={card.icon} /></span>
                    <h3>{card.title}</h3>
                    <p className="journey-audience">{card.audience}</p>
                    <span className="journey-card-action">More Info <span aria-hidden="true">-&gt;</span></span>
                  </div>
                  <div className="journey-card-face journey-card-back">
                    <span className="journey-card-label">How Origin Foods helps</span>
                    <h3>{card.help}</h3>
                    <p>{card.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="journey-band">
            <strong>From concept to commercialization</strong>
            <span>One experienced partner for formulation, documentation, manufacturing, and product development support.</span>
          </div>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-inner">
          <div className="section-heading capabilities-heading">
            <span className="section-kicker">Our capabilities</span>
            <h2 id="capabilities-title">The support behind better product development</h2>
            <p>From cultivation and formulation to manufacturing and market readiness, our capabilities are built to support brands at every stage.</p>
          </div>

          <CapabilitiesCarousel />
        </div>
      </section>

      <EndToEndJourney />

      <BrandsHelpedCarousel />

      <InsightsSection />

      <FinalCtaSection />

      <section className="facilities-section legacy-home-section" id="facilities" aria-labelledby="facilities-title">
        <div className="section-inner facilities-layout">
          <div className="facilities-image">
            <Image
              src="/hero/manufacturing-floor.png"
              alt="Clean nutraceutical production facility"
              width={1200}
              height={820}
            />
          </div>

          <div className="facilities-copy">
            <span className="section-kicker">Facilities</span>
            <h2 id="facilities-title">Manufacturing capability built for nutraceutical products</h2>
            <p>
              Origin Foods presents its facilities as purpose-built for nutraceutical
              production, with manufacturing and laboratory support for multiple product
              formats.
            </p>

            <div className="highlight-list">
              {facilityHighlights.map((item) => (
                <div className="highlight-item" key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="format-carousel" aria-label="Supported production formats">
              <div className="format-carousel-header">
                <span>Production formats</span>
                <small>Scroll to view</small>
              </div>
              <div className="format-track">
                {productionFormats.map((format) => (
                  <span key={format}>{format}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wheatgrass-section legacy-home-section" id="wheatgrass" aria-labelledby="wheatgrass-title">
        <div className="section-inner wheatgrass-layout">
          <div className="wheatgrass-copy">
            <span className="section-kicker green">Wheatgrass Technology</span>
            <h2 id="wheatgrass-title">Indoor aeroponic cultivation for whole-plant wheatgrass</h2>
            <p>
              Origin Foods focuses on controlled indoor cultivation and whole-plant
              wheatgrass processing, bringing together the leaves and roots through a
              clean, technology-led process for consistent product quality.
            </p>

            <div className="process-grid">
              <div>
                <span>01</span>
                <strong>Controlled Cultivation</strong>
                <p>Indoor aeroponic growing conditions support consistency and cleaner handling.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Whole-Plant Harvesting</strong>
                <p>Leaves and roots are brought together as part of the wheatgrass process.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Low-Temperature Processing</strong>
                <p>Powder processing is presented as designed to preserve product quality.</p>
              </div>
            </div>
          </div>

          <div className="wheatgrass-image">
            <Image
              src="/sections/wheatgrass-aeroponic.png"
              alt="Indoor aeroponic wheatgrass cultivation trays"
              width={1200}
              height={820}
              loading="eager"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="products-section legacy-home-section" id="products" aria-labelledby="products-title">
        <div className="section-inner">
          <div className="products-header">
            <div className="section-heading">
              <span className="section-kicker">Quality Products</span>
              <h2 id="products-title">Product categories for wellness brands and OEM ranges</h2>
              <p>
                Explore core OEM product directions that can be developed into branded
                wellness, beverage, nutrition, and functional food ranges.
              </p>
            </div>
            <Link className="products-link" href="#contact">Discuss a product range</Link>
          </div>

          <div className="products-grid">
            {productCategories.map((category) => (
              <article className="product-card" key={category.title}>
                <div className="product-image">
                  <Image
                    src={category.image}
                    alt={`${category.title} concept`}
                    width={720}
                    height={460}
                    unoptimized
                  />
                </div>
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section legacy-home-section" id="contact" aria-labelledby="contact-title">
        <div className="section-inner contact-layout">
          <div className="contact-info">
            <span className="section-kicker">Contact Us</span>
            <h2 id="contact-title">Start a conversation about your OEM product</h2>
            <p>
              Share your product idea, target market, and preferred format. The Origin Foods
              team can follow up on manufacturing, formulation, documentation, or product
              category enquiries.
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail primary">
                <span>Headquarter</span>
                <strong>
                  Lot 1, Jalan Industri PBP 11, Taman Perindustrian Pusat Bandar
                  Puchong, 47100 Puchong, Selangor, Malaysia.
                </strong>
              </div>
              <div className="contact-detail-grid">
                <div className="contact-detail">
                  <span>Phone</span>
                  <strong>+6 03 5882 1860</strong>
                </div>
                <div className="contact-detail">
                  <span>Fax</span>
                  <strong>+6 03 5882 4486</strong>
                </div>
                <div className="contact-detail wide">
                  <span>Email</span>
                  <strong>origincares@tof.com.my</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" aria-label="Product enquiry form">
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input name="company" type="text" placeholder="Company name" />
              </label>
              <label>
                Product Interest
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Contract Manufacturing</option>
                  <option>Custom Formulation</option>
                  <option>Product Registration Support</option>
                  <option>Quality Products</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your product idea, target market, and preferred format."
              />
            </label>
            <button className="button button-primary" type="button">
              Send Enquiry
            </button>
          </form>
        </div>

        <div className="section-inner location-panel" aria-label="Origin Foods location">
          <div className="map-visual">
            <iframe
              title="The Origin Foods location map"
              src="https://www.google.com/maps?q=Lot%201%2C%20Jalan%20Industri%20PBP%2011%2C%20Taman%20Perindustrian%20Pusat%20Bandar%20Puchong%2C%2047100%20Puchong%2C%20Selangor%2C%20Malaysia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location-card">
            <span>Visit / Delivery Address</span>
            <strong>Pusat Bandar Puchong, Selangor</strong>
            <p>Located within the Taman Perindustrian Pusat Bandar Puchong industrial area.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer legacy-page-footer" aria-hidden="true">
        <div className="section-inner footer-main">
          <div className="footer-brand">
            <Image
              src="/logo-footer.png"
              alt="The Origin Foods"
              width={210}
              height={68}
              unoptimized
            />
            <p>
              OEM nutraceutical manufacturing support for wellness, functional
              food, beverage, and nutrition product ranges.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {footerColumns.map((column) => (
              <div className="footer-column" key={column.title}>
                <h2>{column.title}</h2>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="section-inner footer-bottom-inner">
            <p>Copyright © 2026 The Origin Foods Sdn Bhd. All Rights Reserved.</p>
            <div className="footer-socials" aria-label="Social links">
              <Link href="#" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.9 10.6 21.3 2h-1.8l-6.4 7.5L8 2H2.1l7.8 11.4L2.1 22h1.8l6.8-7.9 5.4 7.9H22l-8.1-11.4Zm-2.4 2.8-.8-1.1L4.4 3.3h2.8l5 7.1.8 1.1 6.6 9.3h-2.8l-5.3-7.4Z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm0 1.8a3.6 3.6 0 0 0-3.6 3.6v9.2a3.6 3.6 0 0 0 3.6 3.6h9.2a3.6 3.6 0 0 0 3.6-3.6V7.4a3.6 3.6 0 0 0-3.6-3.6H7.4Zm4.6 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.4-2.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.1 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.2-1.5 1.6-1.5h1.7V4.5c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.9V14h2.8v8h3.4Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
