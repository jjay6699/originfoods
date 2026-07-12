import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <div className="section-inner">
        <div className="final-cta-card">
          <Image src="/sections/final-cta-partnership.png" alt="Origin Foods formulation and manufacturing partnership environment" fill sizes="100vw" />
          <div className="final-cta-overlay" />
          <div className="final-cta-content">
            <span className="section-kicker">Let&apos;s build what&apos;s next</span>
            <h2 id="final-cta-title">Ready to move your next product forward?</h2>
            <p>Talk to Origin Foods about formulation, manufacturing, market preparation, and your next growth opportunity.</p>
            <Link className="final-cta-button" href="#contact">Book a growth consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
