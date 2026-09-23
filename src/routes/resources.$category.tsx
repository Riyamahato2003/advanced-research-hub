import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { resourceCategories, images } from "@/lib/site-data";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/$category")({
  loader: ({ params }) => {
    const item = resourceCategories.find((c) => c.slug === params.category);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => seo(`${loaderData?.name ?? "Resources"} — NB Instrument`, loaderData?.description ?? "Resources from NB Instrument."),
  component: CategoryPage,
});

const heroFor: Record<string, string> = { articles: images.plasmaImage, "application-notes": images.waferImage, "case-studies": images.heroImage, news: images.photonicsImage };

function CategoryPage() {
  const c = Route.useLoaderData();
  return (
    <main>
      <PageHero eyebrow="Resources" title={c.name} intro={c.description} image={heroFor[c.slug] ?? images.heroImage} />
      <section className="section">
        <div className="container">
          <p className="page-note">Editable placeholder: the stories below show the publication layout. Replace them with verified NB Instrument publications.</p>
          <div className="journal-grid">
            <article className="lead-story">
              <img src={images.waferImage} alt="Semiconductor wafer surface under inspection light" loading="lazy" width={1600} height={1200} />
              <Eyebrow>{c.name} · Featured</Eyebrow>
              <h3>Featured {c.name.toLowerCase()} title</h3>
              <p className="lead-copy">A short standfirst summarising the story will appear here.</p>
            </article>
            <div>
              {["Story title placeholder", "Story title placeholder", "Story title placeholder"].map((x, i) => (
                <article key={i} className="journal-item">
                  <small>{c.name} · 0{i + 2}</small>
                  <h3>{x}</h3>
                  <ArrowRight />
                </article>
              ))}
            </div>
          </div>
          <div className="category-nav">
            {resourceCategories.filter((r) => r.slug !== c.slug).map((r) => (
              <Link key={r.slug} to="/resources/$category" params={{ category: r.slug }}>{r.name} ↗</Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
