import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { partners, images } from "@/lib/site-data";
import { PageHero, ContactBand, Eyebrow } from "@/components/page-sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/partners/$partner")({
  loader: ({ params }) => {
    const item = partners.find((p) => p.slug === params.partner);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => seo(`${loaderData?.name ?? "Partner"} — Technology Partner | NB Instrument`, `${loaderData?.name ?? "Partner"} (${loaderData?.country ?? ""}) — ${loaderData?.focus ?? "technology partner"}, represented in India by NB Instrument.`),
  component: PartnerPage,
});

function PartnerPage() {
  const p = Route.useLoaderData();
  return (
    <main>
      <PageHero eyebrow={`Technology partner · ${p.country}`} title={p.name} intro={p.focus} image={images.plasmaImage} />
      <section className="section">
        <div className="container detail-intro">
          <div>
            <Eyebrow>Partnership</Eyebrow>
            <h2>International capability, supported locally.</h2>
          </div>
          <div>
            <p className="lead-copy">NB Instrument represents {p.name} in India — providing application consultation, installation coordination, training and post-supply support for research teams working with its technology.</p>
            <div className="topic-list">
              <div><small>01</small><span>Country</span><em>{p.country}</em></div>
              <div><small>02</small><span>Technology focus</span><em>{p.focus}</em></div>
              <div><small>03</small><span>Role of NB Instrument</span><em>Representation & support in India</em></div>
            </div>
            <p className="page-note">Editable placeholder: a detailed partner profile, product range and approved logo will be added once confirmed with the partner.</p>
            <Link to="/partners" className="text-link">All partners ↗</Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
