import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { ActionLink } from "@/components/button";
import { images, supportStages } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About NB Instrument — Building Access to Advanced Technology", "Founded by Nitay Kumar Mahato, NB Instrument has spent 18+ years connecting India's research ecosystem with international scientific technology and lifetime support."),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About NB Instrument" title="Building access to advanced technology." intro="For more than eighteen years, we have connected India's laboratories with specialised international technology — and stayed beside them afterwards." image={images.heroImage} />
      <section className="section">
        <div className="container detail-intro">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2>A technology partner, not a catalogue.</h2>
          </div>
          <div>
            <p className="lead-copy">Founded by Mr. Nitay Kumar Mahato in New Delhi, NB Instrument grew by bringing one advanced technology at a time into the Indian market. Today we represent specialised manufacturers from around the world, supporting universities, national laboratories and industrial R&D teams.</p>
            <div className="stats about-stats">
              <div><strong>18+</strong><span>Years of experience</span></div>
              <div><strong>13</strong><span>Technology partners</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-story dark-section">
        <div className="feature-image"><img src={images.plasmaImage} alt="Plasma glow inside a vacuum deposition chamber" loading="lazy" width={1600} height={1200} /></div>
        <div className="feature-copy">
          <Eyebrow>Technical expertise</Eyebrow>
          <h2>Understanding the science behind the system.</h2>
          <p>Application engineering sits at the centre of how we work — translating research goals into configurations that perform in real laboratories.</p>
          <ul>{supportStages.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          <ActionLink to="/solutions" tone="light">How we work</ActionLink>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><Eyebrow>What we bring</Eyebrow><h2>Built on long-term relationships.</h2></div>
          <div className="editorial-grid">
            {[
              ["International partnerships", "Specialised manufacturers from Europe, North America, Israel and Japan."],
              ["Installation", "Coordinated with manufacturer teams for dependable commissioning."],
              ["Training", "Research teams learn to operate systems with confidence."],
              ["After-sales support", "Service coordination and application help for the system's working life."],
            ].map(([t, d], i) => (
              <article key={t} className={i === 0 || i === 3 ? "wide" : ""}><Eyebrow>0{i + 1}</Eyebrow><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
