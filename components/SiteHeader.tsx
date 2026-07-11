"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "OEM / ODM Solution", href: "#services" },
  { label: "Product Concept", href: "#products" },
  { label: "Functional ingredients", href: "#wheatgrass" },
  { label: "Insights", href: "#facilities" },
  { label: "Contacts", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={item.href === "/" && pathname === "/" ? "is-active" : undefined} aria-current={item.href === "/" && pathname === "/" ? "page" : undefined} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
