"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "OEM / ODM Solution", href: "#services" },
  { label: "Functional ingredients", href: "#wheatgrass" },
  { label: "Insights", href: "#facilities" },
  { label: "Contacts", href: "#contact" },
];

const productConceptGroups = [
  {
    title: "Core nutrition",
    items: ["Wheatgrass series", "Detox and Weight Management series", "Nutrition and nourishment series", "Nutri bar series"],
  },
  {
    title: "Wellness ranges",
    items: ["Function and nutraceutical series", "Hot beverage series", "Skin beauty series", "Women health series"],
  },
  {
    title: "Specialised nutrition",
    items: ["Men health series", "Immunological and cellular health series", "Child’s growth development series", "Sport nutrition series"],
  },
] as const;

const oemSolutionGroups = [
  { title: "Development and manufacturing", items: ["OEM/ODM Process", "Dosage forms", "Packaging types", "Research and development"] },
  { title: "Brand and quality support", items: ["Branding and art design", "Quality assurance and control", "Regulatory and export support", "FAQ"] },
] as const;

const aboutGroups = [
  { title: "Company and people", items: ["Company Introduction", "Professional team", "Awards"] },
  { title: "Manufacturing and quality", items: ["Manufacturing excellence", "In house laboratory and analysis", "Manufacturing certifications"] },
] as const;

const simpleMenus = [
  { label: "Functional ingredients", items: ["Wheatgrass", "Sacha inchi oil/powder"] },
  { label: "Insights", items: ["Events", "Industry insights", "Company gallery", "Educational"] },
  { label: "Contacts", items: ["Contact details", "Request quotation"] },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isOemMenuOpen, setIsOemMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [openSimpleMenu, setOpenSimpleMenu] = useState<string | null>(null);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);
  const oemTriggerRef = useRef<HTMLButtonElement>(null);
  const productTriggerRef = useRef<HTMLButtonElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
  const oemMenuRef = useRef<HTMLDivElement>(null);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const alignPointers = () => {
      const pairs = [[aboutTriggerRef, aboutMenuRef], [oemTriggerRef, oemMenuRef], [productTriggerRef, productMenuRef]] as const;
      pairs.forEach(([triggerRef, menuRef]) => {
        const trigger = triggerRef.current;
        const menu = menuRef.current;
        if (!trigger || !menu) return;
        const triggerBox = trigger.getBoundingClientRect();
        const menuBox = menu.getBoundingClientRect();
        menu.style.setProperty("--mega-pointer-left", `${triggerBox.left + triggerBox.width / 2 - menuBox.left - 7}px`);
      });
    };

    alignPointers();
    window.addEventListener("resize", alignPointers);
    return () => window.removeEventListener("resize", alignPointers);
  }, [isAboutMenuOpen, isOemMenuOpen, isProductMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="The Origin Foods home">
          <span className="brand-mark">
            <Image
              src="/logo-footer.png"
              alt="The Origin Foods"
              width={210}
              height={68}
              priority
            />
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/" className={pathname === "/" ? "is-active" : undefined} aria-current={pathname === "/" ? "page" : undefined} onClick={() => setIsOpen(false)}>Home</Link>

          <div className={`nav-mega-item ${isAboutMenuOpen ? "is-open" : ""}`}>
            <button ref={aboutTriggerRef} className="nav-mega-trigger" type="button" aria-expanded={isAboutMenuOpen} aria-controls="about-menu" onClick={() => { setIsAboutMenuOpen((current) => !current); setIsOemMenuOpen(false); setIsProductMenuOpen(false); setOpenSimpleMenu(null); }}>
              About Us <span aria-hidden="true">⌄</span>
            </button>
            <div ref={aboutMenuRef} className="product-mega-menu about-mega-menu" id="about-menu">
              <div className="product-mega-intro"><span>About Us</span><p>Learn about the people, facilities, and experience behind Origin Foods.</p></div>
              <div className="product-mega-groups">
                {aboutGroups.map((group) => <div className="product-mega-group" key={group.title}><h2>{group.title}</h2>{group.items.map((item) => <Link key={item} href={group.title === "Company and people" ? `/about#${item === "Company Introduction" ? "company" : item === "Professional team" ? "people" : "awards"}` : "#manufacturing"} onClick={() => { setIsAboutMenuOpen(false); setIsOpen(false); }}>{item}</Link>)}</div>)}
              </div>
            </div>
          </div>

          <div className={`nav-mega-item ${isOemMenuOpen ? "is-open" : ""}`}>
            <button ref={oemTriggerRef} className="nav-mega-trigger" type="button" aria-expanded={isOemMenuOpen} aria-controls="oem-solution-menu" onClick={() => { setIsOemMenuOpen((current) => !current); setIsProductMenuOpen(false); setIsAboutMenuOpen(false); setOpenSimpleMenu(null); }}>
              OEM / ODM Solution <span aria-hidden="true">⌄</span>
            </button>
            <div ref={oemMenuRef} className="product-mega-menu oem-mega-menu" id="oem-solution-menu">
              <div className="product-mega-intro"><span>OEM / ODM Solution</span><p>From product development and manufacturing to quality, regulatory, and brand support.</p></div>
              <div className="product-mega-groups">
                {oemSolutionGroups.map((group) => <div className="product-mega-group" key={group.title}><h2>{group.title}</h2>{group.items.map((item) => <Link key={item} href="/#services" onClick={() => { setIsOemMenuOpen(false); setIsOpen(false); }}>{item}</Link>)}</div>)}
              </div>
            </div>
          </div>

          <div className={`nav-mega-item ${isProductMenuOpen ? "is-open" : ""}`}>
            <button ref={productTriggerRef} className="nav-mega-trigger" type="button" aria-expanded={isProductMenuOpen} aria-controls="product-concept-menu" onClick={() => { setIsProductMenuOpen((current) => !current); setIsOemMenuOpen(false); setIsAboutMenuOpen(false); setOpenSimpleMenu(null); }}>
              Product Concept <span aria-hidden="true">⌄</span>
            </button>
            <div ref={productMenuRef} className="product-mega-menu" id="product-concept-menu">
              <div className="product-mega-intro"><span>Product Concept</span><p>Explore product directions across nutrition, wellness, and functional food.</p></div>
              <div className="product-mega-groups">
                {productConceptGroups.map((group) => <div className="product-mega-group" key={group.title}><h2>{group.title}</h2>{group.items.map((item) => <Link key={item} href="/#products" onClick={() => { setIsProductMenuOpen(false); setIsOpen(false); }}>{item}</Link>)}</div>)}
              </div>
            </div>
          </div>

          {simpleMenus.map((menu) => (
            <div className={`nav-simple-item ${openSimpleMenu === menu.label ? "is-open" : ""}`} key={menu.label}>
              <button className="nav-simple-trigger" type="button" aria-expanded={openSimpleMenu === menu.label} onClick={() => { setOpenSimpleMenu((current) => current === menu.label ? null : menu.label); setIsAboutMenuOpen(false); setIsOemMenuOpen(false); setIsProductMenuOpen(false); }}>
                {menu.label} <span aria-hidden="true">⌄</span>
              </button>
              <div className="simple-dropdown">
                {menu.items.map((item) => <Link key={item} href={menu.label === "Contacts" ? "/#contact" : menu.label === "Functional ingredients" ? "/#wheatgrass" : "/#insights"} onClick={() => { setOpenSimpleMenu(null); setIsOpen(false); }}>{item}</Link>)}
              </div>
            </div>
          ))}
        </nav>
        {(isProductMenuOpen || isOemMenuOpen || isAboutMenuOpen || openSimpleMenu) && <button className="mega-menu-backdrop" type="button" aria-label="Close open navigation menu" onClick={() => { setIsProductMenuOpen(false); setIsOemMenuOpen(false); setIsAboutMenuOpen(false); setOpenSimpleMenu(null); }} />}
      </div>
    </header>
  );
}
