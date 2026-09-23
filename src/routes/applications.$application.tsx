import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { applications, applicationTechnologies, technologies } from "@/lib/site-data";
import { PageHero, ContactBand, ProductGrid, Eyebrow } from "@/components/page-sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/applications/$application")({
  loader: ({ params }) => {
    const item = applications.find((a) => a.slug === params.application);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => seo(`${loaderData?.name ?? "Application"} — Applications | NB Instrument`, loaderData?.summary ?? "Research application supported by NB Instrument."),
  component: ApplicationPage,
});

function ApplicationPage() {
  const a = Route.useLoaderData();
  const related = technologies.filter((t) => (applicationTechnologies[a.slug] ?? []).includes(t.slug));
  return (
    <main>
      <PageHero eyebrow="Application" title={a.name} intro={a.summary} image={a.image} />
      <section className="section">
        <div className="container detail-intro">
          <div>
            <Eyebrow>Research context</Eyebrow>
            <h2>Every application begins with a specific scientific question.</h2>
          </div>
          <div>
            <p className="lead-copy">Our team works from your material, process and measurement requirements to identify the technology environment and system configuration that fits — then supports it through installation, training and operation.</p>
            <div className="topic-list">
              {related.map((t) => (
                <Link key={t.slug} to="/technologies/$slug" params={{ slug: t.slug }} className="topic-link">
                  <small>{t.number}</small><span>{t.name}</span><ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading"><Eyebrow>Relevant systems</Eyebrow><h2>Platforms used in this area.</h2></div>
          <ProductGrid limit={3} />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
