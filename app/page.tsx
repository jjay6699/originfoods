import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

const heroSlides = [
  {
    src: "/hero/manufacturing-floor.png",
    alt: "Clean nutraceutical manufacturing floor with production equipment",
    label: "Manufacturing",
  },
  {
    src: "/hero/quality-lab.png",
    alt: "Modern nutraceutical quality laboratory with botanical formulation samples",
    label: "Quality Lab",
  },
];

const services = [
  {
    number: "01",
    title: "Contract Manufacturing",
    summary:
      "Turn-key production support for tablets, capsules, powders, chewables, sachets, tea bags, liquids, bottles, canisters, and pouch filling.",
  },
  {
    number: "02",
    title: "Custom Formulation",
    summary:
      "R&D support to translate a product concept into a practical formulation, including raw material, packaging, and technical product guidance.",
  },
  {
    number: "03",
    title: "Registration & Export Documentation",
    summary:
      "Client support for product documentation, certification applications, costing analysis, and relevant Malaysia regulatory endorsements.",
  },
  {
    number: "04",
    title: "Laboratory Testing & Analysis",
    summary:
      "Testing coordination for physical, heavy metal, disintegration, stability, nutritional, and microbiological analysis through qualified resources.",
  },
];

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
    <main>
      <SiteHeader />

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
            <h1 id="hero-title">
              Manufacturing Health, Wellness & Functional Food Products in Malaysia
            </h1>
            <p className="hero-body">
              The Origin Foods supports brand owners with contract manufacturing,
              custom formulation, product registration support, and biotechnology-led
              wheatgrass expertise.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <Link className="button button-primary" href="#contact">
                Discuss Your Product
              </Link>
              <Link className="button button-secondary" href="#facilities">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-dots" aria-hidden="true">
          <span />
          <span />
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-kicker">Personalised Services</span>
            <h2 id="services-title">OEM support from concept to finished product</h2>
              <p>
                Origin Foods works with brand owners as an OEM partner, supporting the
              formulation, manufacturing, documentation, and testing steps needed to
              bring wellness and functional food products to market.
              </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <div>
              <span>Need a custom OEM pathway?</span>
              <strong>Start with the product type, target market, and documentation needs.</strong>
            </div>
            <Link className="button button-primary" href="#contact">
              Plan My Product
            </Link>
          </div>
        </div>
      </section>

      <section className="facilities-section" id="facilities" aria-labelledby="facilities-title">
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

            <div className="format-list" aria-label="Supported production formats">
              {productionFormats.map((format) => (
                <span key={format}>{format}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wheatgrass-section" id="wheatgrass" aria-labelledby="wheatgrass-title">
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

      <section className="products-section" id="products" aria-labelledby="products-title">
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

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
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

      <footer className="site-footer">
        <div className="section-inner footer-main">
          <div className="footer-brand">
            <Image
              src="/logo-origin.png"
              alt="The Origin Foods"
              width={132}
              height={46}
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
