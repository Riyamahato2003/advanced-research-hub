import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Eyebrow } from "@/components/page-sections";
import heroImg from "@/assets/image-34.png.asset.json";
import { seo } from "@/lib/seo";
import { useReveal } from "@/hooks/use-reveal";

const institutions = [
  ["IITs", "Indian Institutes of Technology"],
  ["IISc", "Indian Institute of Science"],
  ["IISERs", "Indian Institutes of Science Education and Research"],
  ["CSIR", "Council of Scientific and Industrial Research laboratories"],
  ["DRDO", "Defence Research and Development Organisation"],
  ["ISRO", "Indian Space Research Organisation"],
  ["IGCAR", "Indira Gandhi Centre for Atomic Research"],
  ["NITs", "National Institutes of Technology"],
  ["IIITs", "Indian Institutes of Information Technology"],
];

export const Route = createFileRoute("/customers")({
  head: () => seo("Customers — Research Institutions | NB Instrument", "NB Instrument works across India's research and industrial ecosystem, including leading scientific and engineering institutions.", "/customers"),
  component: CustomersPage,
});

function CustomersPage() {
  useReveal();
  return <main>
    <PageHero eyebrow="Customers" title="The people advancing research." intro="Scientific institutions and engineering teams across India's research ecosystem." image={heroImg.url} />
    <section className="section"><div className="container">
      <div className="customer-intro" data-reveal><div><Eyebrow>Research ecosystem</Eyebrow><h2>Built around the institutions doing the work.</h2></div><p>From academic laboratories to national research organisations, our focus is on the technology and support behind the work.</p></div>
      <div className="customer-grid">{institutions.map(([short, full], i) => <article key={short} data-reveal><small>{String(i + 1).padStart(2, "0")}</small><h3>{short}</h3><p>{full}</p></article>)}</div>
    </div></section>
  </main>;
}