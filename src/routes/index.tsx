import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { images } from "@/lib/site-data";
import { ActionLink } from "@/components/button";
import { ApplicationGrid, ContactBand, Eyebrow, ProductGrid, TechnologyIndex } from "@/components/page-sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NB Instrument — Technology Partners for Advanced Research" },
      { name: "description", content: "NB Instrument connects India's research ecosystem with advanced scientific, semiconductor, analytical and materials technologies." },
      { property: "og:title", content: "NB Instrument — Technology Partners for Advanced Research" },
      { property: "og:description", content: "Advanced international technologies, technical understanding and application-focused support for research in India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const questions = [
  { q: "What are you working on?", a: ["Thin films & surfaces", "Semiconductor devices", "Advanced materials", "Spin & spectroscopy"] },
  { q: "What are you trying to achieve?", a: ["Deposit or coat", "Process or fabricate", "Analyze or characterize", "Develop a new method"] },
  { q: "Which environment matters most?", a: ["Vacuum", "Plasma", "Optical", "Magnetic"] },
];

function Finder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const question = step < questions.length ? questions[step] : undefined;

  const choose = (a: string) => {
    setAnswers([...answers, a]);
    setStep(step + 1);
  };

  const recommended =
    answers.includes("Thin films & surfaces") || answers.includes("Vacuum") || answers.includes("Plasma")
      ? "Thin Film & Vacuum"
      : "Application-led technology review";

  return (
    <section className="finder-section">
      <div className="container finder-grid">
        <div data-reveal>
          <Eyebrow>Solution finder</Eyebrow>
          <h2>Find the right technology.</h2>
          <p>Begin with the research objective, not a model number.</p>
          <div className="finder-progress">
            {[0, 1, 2].map((i) => <span key={i} className={i <= step ? "active" : ""} />)}
          </div>
        </div>
        <div className="finder-panel" data-reveal>
          {question ? (
            <>
              <small>0{step + 1} / 03</small>
              <h3>{question.q}</h3>
              <div className="finder-options">
                {question.a.map((a) => (
                  <button key={a} type="button" onClick={() => choose(a)}>{a}<ArrowRight /></button>
                ))}
              </div>
            </>
          ) : (
            <>
              <Eyebrow>Recommended direction</Eyebrow>
              <h3>{recommended}</h3>
              <p>Your selections: {answers.join(" · ")}. Our team can translate this into a relevant system configuration.</p>
              <ActionLink to="/contact">Review this requirement</ActionLink>
              <button type="button" className="finder-reset" onClick={() => { setStep(0); setAnswers([]); }}>Start again</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  useReveal();

  return (
    <main>
      <section className="home-hero">
        <img
          src={images.labImage}
          alt="Ultra-high-vacuum deposition system with a glowing plasma viewport in a darkened research laboratory"
          width={1665}
          height={944}
          fetchPriority="high"
        />
        <div className="image-shade" />
        <div className="container hero-content">
          <Eyebrow>Scientific instrumentation · India</Eyebrow>
          <h1>Advanced technology.<br /><em>Engineered for research.</em></h1>
          <p>NB Instrument connects India’s research and innovation ecosystem with advanced scientific technologies and application-focused technical expertise.</p>
          <div className="hero-actions">
            <ActionLink to="/technologies" tone="light">Explore technologies</ActionLink>
            <ActionLink to="/contact" tone="outline">Discuss your requirement</ActionLink>
          </div>
          <span className="scroll-cue"><ArrowDown />Scroll to explore</span>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <figure className="story-map" data-reveal="image">
            <img
              src={images.partnerMapImage}
              alt="World map highlighting the countries where NB Instrument's technology partners are based"
              width={1779}
              height={884}
              loading="lazy"
            />
            <figcaption>
              <span>Where our technology partners are based</span>
              <span>Canada · Netherlands · United Kingdom · Germany · Italy · Poland · Slovakia · Israel · Japan</span>
            </figcaption>
          </figure>

          <div className="story-copy">
            <Eyebrow>Our story</Eyebrow>
            <h2 data-reveal>Built one piece at a time.</h2>
            <p className="lead" data-reveal data-delay="1">NB Instrument began with a simple belief: that research in India deserves the same access to advanced technology as anywhere else in the world.</p>
            <p data-reveal data-delay="2">Founded by Mr. Nitay Kumar Mahato, the company came together step by step — one technology, one partnership, one laboratory at a time. We entered the Indian market not with a catalogue, but with a willingness to understand what each team was actually trying to build.</p>
            <p data-reveal data-delay="2">We stay close to the people we work with: through the first conversation, through installation and training, and for as long as the system is in service.</p>
            <div className="story-signature" data-reveal>
              <strong>Mr. Nitay Kumar Mahato</strong>
              <span>Founder · NB Instrument Pvt. Ltd.</span>
            </div>
          </div>
        </div>

        <div className="container stats" data-reveal>
          <div><strong>18+</strong><span>Years of experience</span></div>
          <div><strong>13</strong><span>Technology partners</span></div>
          <div><strong>12,028+</strong><span>Indian clients</span></div>
          <div><strong>28</strong><span>Industry awards</span></div>
        </div>
      </section>

      <div data-reveal><TechnologyIndex /></div>

      <section className="feature-story dark-section">
        <div className="feature-image" data-reveal="image">
          <img src={images.plasmaImage} alt="Plasma process inside a vacuum chamber" loading="lazy" width={1600} height={1200} />
        </div>
        <div className="feature-copy" data-reveal>
          <Eyebrow>Featured technology</Eyebrow>
          <h2>Advanced thin-film deposition.</h2>
          <p>Configurable platforms for controlled coating, materials development and precision process research—from magnetron sputtering to vacuum integration.</p>
          <ul>
            <li>Research-led configurations</li>
            <li>Process flexibility</li>
            <li>Installation and technical support</li>
          </ul>
          <ActionLink to="/technologies/thin-film-vacuum" tone="light">Explore thin film &amp; vacuum</ActionLink>
        </div>
      </section>

      <section className="section applications-section">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div>
              <Eyebrow>Applications</Eyebrow>
              <h2>Start with what you need to achieve.</h2>
            </div>
            <p>Explore technologies through research outcomes, materials and process environments.</p>
          </div>
          <div data-reveal><ApplicationGrid /></div>
        </div>
      </section>

      <Finder />

      <section className="section systems-section">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div>
              <Eyebrow>Selected systems</Eyebrow>
              <h2>Purpose-built scientific platforms.</h2>
            </div>
            <div>
              <p>Each system is presented through its research role, core capability and relevant application environment.</p>
              <ActionLink to="/products" tone="outline">Explore all systems</ActionLink>
            </div>
          </div>
          <div data-reveal><ProductGrid limit={3} /></div>
        </div>
      </section>

      <div data-reveal><ContactBand /></div>
    </main>
  );
}
