import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ApplicationGrid, ContactBand, Eyebrow } from "@/components/page-sections";
import heroImg from "@/assets/image-31.png.asset.json";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/applications/")({
  head: () => seo("Applications — Research Outcomes | NB Instrument", "Explore NB Instrument technologies by research outcome: thin films, semiconductor R&D, surface science, EPR, nanotechnology, characterization, plasma and photonics."),
  component: () => (
    <main>
      <PageHero eyebrow="Applications" title="Technology Built Around Your Research" intro="From thin film deposition and surface engineering to semiconductor processing, advanced materials and magnetic research, connect your research objective with the right technology, process and instrumentation." image={heroImg.url} />
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
