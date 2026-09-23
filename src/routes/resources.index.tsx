import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { images, resourceCategories } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/")({
  head: () => seo("Resources — Research Intelligence | NB Instrument", "Technical articles, application notes, case studies and news from NB Instrument on advanced research technology."),
  component: () => (
    <main>
      <PageHero eyebrow="Resources" title="Research intelligence." intro="Technical perspectives, application guidance and developments from across our technology portfolio." image={images.waferImage} />
      <section className="section">
        <div className="container">
          <div className="section-heading"><Eyebrow>Publications</Eyebrow><h2>Explore by format.</h2></div>
          <div className="editorial-grid">
            {resourceCategories.map((c, i) => (
              <article key={c.slug} className={i === 0 || i === 3 ? "wide" : ""}>
                <Link to="/resources/$category" params={{ category: c.slug }} className="editorial-link">
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                  <span className="text-link">Read <ArrowRight size={16} /></span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  ),
});
