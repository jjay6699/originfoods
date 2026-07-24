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

// Replace these placeholder destinations when the final URLs are supplied.
const quickLinks: { title: string; items: QuickLink[] }[] = [
  {
    title: "Company",
    items: [
      { label: "Visit Our Website", href: "/", icon: "website" },
      { label: "Explore Our OEM/ODM Process", href: "/#manufacturing", icon: "factory" },
      { label: "Download Company Profile", href: "#", icon: "document", download: true },
      { label: "View Our Certifications", href: "#", icon: "certification" },
      { label: "Awards & Recognition", href: "/about#awards", icon: "award" },
      { label: "Watch Our Factory Video", href: "#", icon: "video" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Request an OEM Quotation", href: "/#contact", icon: "quotation" },
      { label: "Chat with Us on WhatsApp", href: "#", icon: "whatsapp", external: true },
      { label: "Book a Meeting / Factory Visit", href: "#", icon: "calendar", external: true },
      { label: "Follow Us on LinkedIn", href: "#", icon: "linkedin", external: true },
      { label: "Follow Us on Facebook", href: "#", icon: "facebook", external: true },
      { label: "Follow Us on Instagram", href: "#", icon: "instagram", external: true },
    ],
  },
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
          <p>Company information, manufacturing services, and direct contact—all in one place.</p>
        </div>
      </header>

      <div className={styles.directory}>
        {quickLinks.map((group) => (
          <section className={styles.group} key={group.title} aria-labelledby={`quick-${group.title.toLowerCase()}`}>
            <h2 id={`quick-${group.title.toLowerCase()}`}>{group.title}</h2>
            <nav aria-label={`${group.title} quick links`}>
              {group.items.map((item) => (
                <Link
                  className={styles.link}
                  href={item.href}
                  key={item.label}
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
              ))}
            </nav>
          </section>
        ))}
      </div>
    </main>
  );
}
