import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  { title: "About Us", links: [["Company Introduction", "#about"], ["Professional Team", "#about"], ["Manufacturing Excellence", "#about"], ["Awards", "#about"]] },
  { title: "Solutions", links: [["OEM/ODM Process", "#services"], ["Dosage Forms", "#services"], ["Packaging Types", "#services"], ["Research & Development", "#services"], ["Product Concept", "#products"]] },
  { title: "Resources", links: [["Functional Ingredients", "#wheatgrass"], ["Insights", "#insights"], ["Events", "#insights"], ["Industry Insights", "#insights"]] },
  { title: "Contact", links: [["Contact Details", "#contact"], ["Request a Quotation", "#contact"], ["Malaysia Headquarters", "#contact"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-main">
        <div className="footer-brand"><Image src="/logo-footer.png" alt="The Origin Foods" width={210} height={68} unoptimized /><p>OEM nutraceutical manufacturing support for wellness, functional food, beverage, and nutrition product ranges.</p></div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerColumns.map((column) => <div className="footer-column" key={column.title}><h2>{column.title}</h2>{column.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}
        </nav>
      </div>
      <div className="footer-bottom"><div className="section-inner footer-bottom-inner"><p>Copyright © 2026 The Origin Foods Sdn Bhd. All Rights Reserved.</p><div className="footer-socials" aria-label="Social links">
        <Link href="#" aria-label="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.9 10.6 21.3 2h-1.8l-6.4 7.5L8 2H2.1l7.8 11.4L2.1 22h1.8l6.8-7.9 5.4 7.9H22l-8.1-11.4Zm-2.4 2.8-.8-1.1L4.4 3.3h2.8l5 7.1.8 1.1 6.6 9.3h-2.8l-5.3-7.4Z" /></svg></Link>
        <Link href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm0 1.8a3.6 3.6 0 0 0-3.6 3.6v9.2a3.6 3.6 0 0 0 3.6 3.6h9.2a3.6 3.6 0 0 0 3.6-3.6V7.4a3.6 3.6 0 0 0-3.6-3.6H7.4Zm4.6 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.4-2.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg></Link>
        <Link href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.1 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.2-1.5 1.6-1.5h1.7V4.5c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.9V14h2.8v8h3.4Z" /></svg></Link>
      </div></div></div>
    </footer>
  );
}
