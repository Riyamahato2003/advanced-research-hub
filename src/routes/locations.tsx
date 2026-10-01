import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { ActionLink } from "@/components/button";
import { images, contact } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/locations")({
  head: () => seo("Locations — NB Instrument, New Delhi", "NB Instrument's head office in New Delhi and pan-India technical reach for research institutions and industrial R&D.", "/locations"),
  component: () => (
    <main>
      <PageHero eyebrow="Locations" title="New Delhi, with pan-India reach." intro="Our head office coordinates technical support for research institutions across the country." image={images.photonicsImage} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <Eyebrow>Head office</Eyebrow>
            <h2 className="location-title">New Delhi</h2>
            <p className="lead-copy">{contact.address}</p>
            <ActionLink to="/contact">Discuss your requirement</ActionLink>
          </div>
          <div className="contact-details">
            <div><span>Telephone</span>{contact.phones.map((p) => <a key={p} href={`tel:${p}`}>{p}</a>)}</div>
            <div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            <div><span>Coverage</span><p>Pan-India technical reach</p></div>
            <p className="page-note">Editable placeholder: additional regional service locations can be listed here once confirmed.</p>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  ),
});
