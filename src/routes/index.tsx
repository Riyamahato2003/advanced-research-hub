import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { images } from "@/lib/site-data";
import { ActionLink } from "@/components/button";
import { ContactBand, Eyebrow, ProductGrid, TechnologyIndex } from "@/components/page-sections";
import { FeaturedSlider } from "@/components/featured-slider";
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
            />
            <figcaption>
              <span>Where our technology partners are based</span>
              <span>Canada · Netherlands · United Kingdom · Germany · Italy · Poland · Slovakia · Israel · Japan</span>
            </figcaption>
          </figure>

          <div className="story-copy">
            <Eyebrow>Our story</Eyebrow>
            <h2 data-reveal>Global technology. Local understanding. Long-term support.</h2>
            <p className="lead" data-reveal data-delay="1">NB Instrument connects specialised technology companies with India's rapidly developing research and advanced manufacturing ecosystem.</p>
            <p data-reveal data-delay="2">We bring technologies that solve specific engineering and research problems rather than simply adding another product to a catalogue.</p>
            <p data-reveal data-delay="2">From the first technical discussion to evaluation, procurement, installation, training and service, we work closely with both sides: <strong>understanding what Indian research teams actually need and helping global technology companies build meaningful presence in the market.</strong></p>
            <p data-reveal data-delay="2">Our goal is simple: <strong>make advanced technology easier to access, understand and use in India.</strong></p>
            <p data-reveal data-delay="2">And build the relationships that make it useful long after the first installation.</p>
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

      <FeaturedSlider />

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
