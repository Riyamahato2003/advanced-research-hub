import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import aboutHero from "@/assets/image-25.png.asset.json";
import founder from "@/assets/image-26.png.asset.json";
import training from "@/assets/image-27.png.asset.json";
import partnership from "@/assets/image-35.png.asset.json";
import { seo } from "@/lib/seo";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => seo("About NB Instrument — Engineering Technology for India", "Led by Mr. Nitay Kumar Mahato, NB Instrument connects advanced scientific technologies with research and manufacturing in India through technical support and long-term partnerships.", "/about"),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <main>
      <div className="about-hero"><PageHero eyebrow="About NB Instrument" title="Engineering technology for the work that matters." intro="Advanced scientific and industrial technologies for India." image={aboutHero.url} /></div>
      <section className="section">
        <div className="container about-intro">
          <figure className="founder-portrait" data-reveal="image"><img src={founder.url} alt="Portrait of Mr. Nitay Kumar Mahato" loading="lazy" /><figcaption><strong>Mr. Nitay Kumar Mahato</strong><span>Founder &amp; Managing Director</span></figcaption></figure>
          <div className="about-copy" data-reveal><Eyebrow>About NB Instrument</Eyebrow><h2>Engineering technology for the work that matters.</h2>
            <p>NB Instrument works with researchers, engineers, manufacturers and institutions to bring advanced scientific and industrial technologies to India.</p>
            <p>Led by <strong>Mr. Nitay Kumar</strong>, we work across areas including vacuum technology, thin-film deposition, ALD, PVD, surface engineering, analytical instrumentation, nanotechnology, semiconductor processing and advanced manufacturing.</p>
            <p>We represent specialised technology companies from around the world and work closely with them to understand their systems, applications and technical requirements. Our role goes beyond supplying equipment. We help customers identify the right technology, configure systems around their application and support them through installation, training and operation.</p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container about-support"><div data-reveal><h2>Technology is only as good as the support behind it.</h2>
          <p>For us, after-sales support starts long before a system reaches the customer.</p>
          <p>We <strong>invest heavily in our engineers</strong>, giving them detailed technical and application training with our international technology partners. Our engineers are trained to understand the equipment at a practical level, so they can support installation, commissioning, troubleshooting, preventive maintenance and day-to-day operation.</p>
          <p>This investment in people allows us to stay close to our customers after the purchase, when the real work begins.</p></div>
          <figure data-reveal="image"><img src={training.url} alt="Technical training session and practical equipment instruction" loading="lazy" /></figure></div>
      </section>
      <section className="section">
        <div className="container about-closing with-image">
          <figure className="closing-frame" data-reveal="image"><img src={partnership.url} alt="NB Instrument engineers working with international technology partners" loading="lazy" /></figure>
          <div data-reveal>
          <h2>Built around long-term technical partnerships.</h2>
          <p>Our partnerships span specialised manufacturers across Europe, the UK, Israel, Japan, Korea and other technology hubs. We work with each partner closely to bring technologies that solve real problems in research, manufacturing and industrial development.</p>
          <p className="closing-line">We believe good equipment gets a customer started. Good engineering support keeps them moving.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
