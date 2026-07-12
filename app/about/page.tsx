import Image from "next/image";
import AwardsSlider from "./AwardsSlider";

const values = [
  { number: "01", title: "Health", text: "Keeping product development focused on practical nutrition, wellness, and everyday wellbeing." },
  { number: "02", title: "Innovation", text: "Bringing biotechnology, formulation thinking, and product development experience into the work." },
  { number: "03", title: "Partnership", text: "Working alongside brand owners with coordinated support from the first brief through production planning." },
] as const;

const peopleCapabilities = [
  { number: "01", title: "Leadership and direction", text: "A clear commercial and product perspective helps teams move from an opportunity to a focused development route." },
  { number: "02", title: "Research and formulation", text: "Technical and formulation capability supports ingredient selection, format decisions, and product refinement." },
  { number: "03", title: "Manufacturing and quality", text: "Cross-functional teams connect development, documentation, production, and quality requirements." },
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-page-title">
        <div className="about-hero-image"><Image src="/about/company-campus.png" alt="Modern health-product development campus and laboratory environment" fill priority sizes="100vw" /></div>
        <div className="about-hero-overlay" />
        <div className="section-inner about-hero-content">
          <span className="section-kicker">Company and people</span>
          <h1 id="about-page-title">The people and purpose behind Origin Foods</h1>
          <p>A Malaysian health-product partner bringing biotechnology, formulation, and manufacturing capability together for growing brands.</p>
        </div>
      </section>

      <section className="about-introduction" id="company" aria-labelledby="company-title">
        <div className="section-inner about-introduction-layout">
          <div className="section-heading">
            <span className="section-kicker">Company introduction</span>
            <h2 id="company-title">Bringing health, innovation, and partnership into every product journey</h2>
          </div>
          <div className="about-copy">
            <p>The Origin Foods Sdn Bhd was established in 1999 and has developed around biotechnology-based health products, OEM manufacturing, and product development support.</p>
            <p>Our role is to help brand owners turn product opportunities into considered, manufacturable ranges across health food, functional food, dietary supplements, beverages, and nutrition products.</p>
            <p>From formulation and format selection to registration support, packaging direction, testing, and production planning, our teams bring the different parts of the journey into one coordinated conversation.</p>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-title">
        <div className="section-inner">
          <div className="about-values-layout">
            <div className="section-heading"><span className="section-kicker">Our values</span><h2 id="values-title">The principles behind the way we work</h2><p>Our approach is grounded in practical health outcomes, thoughtful innovation, and long-term partnerships.</p></div>
            <div className="about-values-list">{values.map((value) => <article key={value.title}><span>{value.number}</span><div><h3>{value.title}</h3><p>{value.text}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="about-people" id="people" aria-labelledby="people-title">
        <div className="section-inner about-people-layout">
          <div className="about-people-image"><Image src="/about/professional-team.png" alt="Technical product development team collaborating in a laboratory" fill sizes="(max-width: 980px) 100vw, 48vw" /></div>
          <div className="about-people-copy"><span className="section-kicker">Professional team</span><h2 id="people-title">Capability comes from people working across the whole journey</h2><p>Product, technical, regulatory, quality, and manufacturing perspectives work together to give each project a practical route forward.</p><div className="people-capability-list">{peopleCapabilities.map((item) => <div key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="about-awards" id="awards" aria-labelledby="awards-title">
        <div className="section-inner">
          <div className="about-awards-heading"><span className="section-kicker">Awards and recognition</span><h2 id="awards-title">Recognition across innovation and manufacturing</h2><p>A selection of awards and formal recognition recorded in The Origin Foods company profile.</p></div>
          <AwardsSlider />
        </div>
      </section>
    </main>
  );
}
