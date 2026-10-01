import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Eyebrow } from "@/components/page-sections";
import { EnquiryForm } from "@/components/enquiry-form";
import { images, contact } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact NB Instrument — Discuss Your Technology Requirement", "Contact NB Instrument in New Delhi to discuss a research requirement, system configuration, installation or technical support.", "/contact"),
  component: () => (
    <main>
      <PageHero eyebrow="Contact" title="Let's discuss your technology requirement." intro="Start with the research objective. Our technical team will help map it to the right technology path." image={images.plasmaImage} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="location-title">Every system begins with a conversation.</h2>
            <div className="contact-details">
              <div><span>Head office</span><p>{contact.address}</p></div>
              <div><span>Telephone</span>{contact.phones.map((p) => <a key={p} href={`tel:${p}`}>{p}</a>)}</div>
              <div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  ),
});
