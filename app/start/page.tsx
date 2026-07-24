import type { Metadata } from "next";
import Link from "next/link";
import styles from "./start.module.css";

export const metadata: Metadata = {
  title: "Quick Access | The Origin Foods",
  description: "Quick links to The Origin Foods services, company information, and contact channels.",
};

type IconName =
  | "website"
  | "factory"
  | "document"
  | "certification"
  | "award"
  | "video"
  | "quotation"
  | "whatsapp"
  | "calendar"
  | "linkedin"
  | "facebook"
  | "instagram";

type QuickLink = {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
  download?: boolean;
};

const projectLinks: QuickLink[] = [
  { label: "Request an OEM Quotation", href: "/#contact", icon: "quotation" },
  { label: "Book a Meeting / Factory Visit", href: "#", icon: "calendar", external: true },
  { label: "Chat with Us on WhatsApp", href: "https://wa.me/60109638126", icon: "whatsapp", external: true },
];

const exploreLinks: QuickLink[] = [
  { label: "Explore Our OEM/ODM Process", href: "/#manufacturing", icon: "factory" },
  { label: "Download Company Profile", href: "/downloads/the-origin-foods-company-profile-2024.pdf", icon: "document", download: true },
  { label: "View Our Certifications", href: "#", icon: "certification" },
  { label: "Awards & Recognition", href: "/about#awards", icon: "award" },
  { label: "Watch Our Factory Video", href: "https://youtu.be/OQmTDvRnNgw?si=c_ZWRInJ3ATf8vwz", icon: "video", external: true },
  { label: "Watch Bar Production Video", href: "https://youtu.be/0kQIqbVwVr0?si=0WuW-sg-LbbK6kVT", icon: "video", external: true },
];

const socialLinks: QuickLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theoriginfoods/", icon: "linkedin", external: true },
  { label: "Facebook", href: "https://www.facebook.com/TheOriginFoods/", icon: "facebook", external: true },
  { label: "Instagram", href: "https://www.instagram.com/theoriginfoods.my?igsh=bzFmejBjYjg0bTkw", icon: "instagram", external: true },
];

function QuickAccessIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  if (name === "website") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" /></svg>;
  if (name === "factory") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 21V10l6 3V9l6 4V5h4v16H3ZM7 17h2M13 17h2M18 9h2" /></svg>;
  if (name === "document") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M6 3h8l4 4v14H6V3Zm8 0v5h4M9 12h6M9 16h6" /><path d="m12 9 2-2m-2 2-2-2M12 5v4" /></svg>;
  if (name === "certification") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="10" r="6" /><path d="m8.5 15-1 6 4.5-2.5 4.5 2.5-1-6M9.5 10.2l1.7 1.7 3.4-3.6" /></svg>;
  if (name === "award") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6" /></svg>;
  if (name === "video") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m10 9 5 3-5 3V9Z" /></svg>;
  if (name === "quotation") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M5 3h14v18H5V3ZM8 8h8M8 12h5M8 16h3" /><path d="m15 15 1.5 1.5L19 14" /></svg>;
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" /><path d="M9 8.5c.5 2.8 1.9 4.2 4.7 5l1.2-1.2 2 .9c-.4 1.5-1.4 2.2-2.7 2.1-3.6-.2-7.4-4-7.5-7.6 0-1.3.7-2.3 2.1-2.7l1 2L9 8.5Z" /></svg>;
  if (name === "calendar") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h6" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M8 10v7M8 7.5v.1M12 17v-4.1c0-1.6 1-2.9 2.7-2.9s2.3 1.1 2.3 2.9V17M12 10v7" /></svg>;
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="9" /><path d="M14.5 7.5H13c-1.1 0-1.8.7-1.8 2V21M8.5 12h6" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
}

export default function StartPage() {
  return (
    <main className={`quick-access-page ${styles.page}`}>
      <header className={styles.header}>
        <div className={styles.introduction}>
          <h1>Quick Access</h1>
          <p>Start a project, explore our capabilities, or connect with the Origin Foods team.</p>
        </div>
      </header>

      <div className={styles.directory}>
        <section className={styles.websiteGroup} aria-labelledby="quick-website">
          <div>
            <h2 id="quick-website">The Origin Foods</h2>
            <p>Explore our health supplement manufacturing capabilities, products, and expertise.</p>
          </div>
          <Link className={styles.websiteLink} href="/">
            <span className={styles.icon}><QuickAccessIcon name="website" /></span>
            <span>Visit Our Website</span>
            <svg className={styles.arrow} viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>
          </Link>
        </section>

        <section className={styles.projectGroup} aria-labelledby="quick-project">
          <div className={styles.sectionHeading}>
            <h2 id="quick-project">Start a project</h2>
            <p>Speak with our team about your product or factory visit.</p>
          </div>
          <nav className={styles.projectLinks} aria-label="Start a project">
            {projectLinks.map((item) => <QuickAccessLink item={item} key={item.label} className={styles.projectLink} />)}
          </nav>
        </section>

        <section className={styles.exploreGroup} aria-labelledby="quick-explore">
          <div className={styles.sectionHeading}>
            <h2 id="quick-explore">Explore Origin Foods</h2>
            <p>Learn more about our manufacturing process, standards, and company.</p>
          </div>
          <nav className={styles.exploreLinks} aria-label="Explore Origin Foods">
            {exploreLinks.map((item) => <QuickAccessLink item={item} key={item.label} />)}
          </nav>
        </section>

        <section className={styles.followGroup} aria-labelledby="quick-follow">
          <div className={styles.sectionHeading}>
            <h2 id="quick-follow">Follow</h2>
            <p>Updates from our team and facilities.</p>
          </div>
          <nav className={styles.socialLinks} aria-label="Follow Origin Foods">
            {socialLinks.map((item) => <QuickAccessLink item={item} key={item.label} className={styles.socialLink} />)}
          </nav>
        </section>
      </div>
    </main>
  );
}

function QuickAccessLink({ item, className }: { item: QuickLink; className?: string }) {
  return (
    <Link
      className={`${styles.link}${className ? ` ${className}` : ""}`}
      href={item.href}
      target={item.external && item.href !== "#" ? "_blank" : undefined}
      rel={item.external && item.href !== "#" ? "noreferrer" : undefined}
      download={item.download && item.href !== "#" ? true : undefined}
    >
      <span className={styles.icon}><QuickAccessIcon name={item.icon} /></span>
      <span>{item.label}</span>
      <svg className={styles.arrow} viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 10h11M11 6l4 4-4 4" />
      </svg>
    </Link>
  );
}
