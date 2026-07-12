import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    category: "Product development",
    title: "From product idea to a clear OEM brief",
    excerpt: "The decisions that help brand owners move from an early concept to a focused, manufacturable product brief.",
    image: "/hero/quality-lab.png",
  },
  {
    category: "Market readiness",
    title: "What to prepare before entering the Malaysian market",
    excerpt: "A practical look at documentation, product positioning, and manufacturing coordination for a smoother market-entry path.",
    image: "/sections/export-logistics.jpg",
  },
  {
    category: "Ingredient technology",
    title: "Why controlled cultivation matters in wheatgrass products",
    excerpt: "How controlled growing conditions and careful processing can support consistency in whole-plant wheatgrass concepts.",
    image: "/sections/wheatgrass-aeroponic.png",
  },
] as const;

export function InsightsSection() {
  return (
    <section className="insights-section" id="insights" aria-labelledby="insights-title">
      <div className="section-inner">
        <div className="insights-header">
          <div className="section-heading">
            <span className="section-kicker">Insights</span>
            <h2 id="insights-title">Ideas and perspectives for growing wellness brands</h2>
            <p>Useful perspectives from product development, manufacturing, market preparation, and ingredient technology.</p>
          </div>
          <Link className="insights-view-link" href="#contact">Explore all insights</Link>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article className="insight-card" key={insight.title}>
              <div className="insight-image">
                <Image src={insight.image} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw" />
              </div>
              <div className="insight-body">
                <span>{insight.category}</span>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <Link href="#contact">Read insight <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
