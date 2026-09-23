import { createFileRoute } from "@tanstack/react-router";
import { PageHero, TechnologyIndex, ContactBand, Eyebrow } from "@/components/page-sections";
import { images, supportStages } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => seo("Solutions — From Requirement to Research Capability | NB Instrument", "How NB Instrument turns a research requirement into a supported scientific system: consultation, technology selection, installation, training and post-supply support."),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main>
      <PageHero eyebrow="Solutions" title="From requirement to research capability." intro="We begin with the scientific question, then build the technology path around it — and stay for the life of the system." image={images.heroImage} />
      <section className="section">
        <div className="container detail-intro">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2>One partner across the entire system lifecycle.</h2>
          </div>
          <div className="topic-list stage-list">
            {supportStages.map((s, i) => (
              <div key={s.name}>
                <small>0{i + 1}</small>
                <div><span>{s.name}</span><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="soft-section"><TechnologyIndex /></div>
      <ContactBand />
    </main>
  );
}
