import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { images, partners } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/partners/")({
  head: () => seo("Partners — Technology Without Borders | NB Instrument", "The international technology companies NB Instrument represents in India, across deposition, spectroscopy, analytical instrumentation, vacuum and nanotechnology."),
  component: () => (
    <main>
      <PageHero eyebrow="Partners" title="Technology without borders." intro="Specialised manufacturers from Europe, North America, Israel and Japan — connected to India's research ecosystem through one technical partner." image={images.photonicsImage} />
      <section className="section">
        <div className="container">
          <div className="section-heading split">
            <div><Eyebrow>International technology partners</Eyebrow><h2>Selected for depth, not volume.</h2></div>
            <p>Each partnership is chosen for the specific capability it brings to research in India.</p>
          </div>
          <div className="partner-grid">
            {partners.map((p, i) => (
              <Link key={p.slug} to="/partners/$partner" params={{ partner: p.slug }} className="partner-row">
                <small>{String(i + 1).padStart(2, "0")} · {p.country}</small>
                <h3>{p.name}</h3>
                <p>{p.focus}</p>
                <ArrowRight size={18} className="partner-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  ),
});
