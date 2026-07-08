"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About TOF", href: "#about" },
  { label: "Personalised Services", href: "#services" },
  { label: "Facilities (4G)", href: "#facilities" },
  { label: "Wheatgrass", href: "#wheatgrass" },
  { label: "Quality Products", href: "#products" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="The Origin Foods home">
          <span className="brand-mark">
            <Image
              src="/logo.png"
              alt="The Origin Foods"
              width={132}
              height={46}
              priority
            />
          </span>
          <span className="brand-text">
            <strong>The Origin Foods</strong>
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
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
