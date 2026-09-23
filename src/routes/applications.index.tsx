import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ApplicationGrid, ContactBand, Eyebrow } from "@/components/page-sections";
import { images } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/applications/")({
  head: () => seo("Applications — Research Outcomes | NB Instrument", "Explore NB Instrument technologies by research outcome: thin films, semiconductor R&D, surface science, EPR, nanotechnology, characterization, plasma and photonics."),
  component: () => (
    <main>
      <PageHero eyebrow="Applications" title="Start with what you need to achieve." intro="Explore technology through research outcomes, materials and process environments — not model numbers." image={images.waferImage} />
      <section className="section">
        <div className="container">
          <div className="section-heading split">
            <div><Eyebrow>Application areas</Eyebrow><h2>Where the technology meets the research.</h2></div>
            <p>Each area connects to the technology environments and systems most relevant to it.</p>
          </div>
          <ApplicationGrid />
        </div>
      </section>
      <ContactBand />
    </main>
  ),
});
