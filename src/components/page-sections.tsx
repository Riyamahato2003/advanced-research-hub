import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { technologies, products, applications, images } from "@/lib/site-data";
import { ActionLink } from "./button";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span>; }
export function PageHero({ eyebrow, title, intro, image = images.heroImage }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return <section className="page-hero"><img src={image} alt="Precision scientific research instrumentation" width={1920} height={1080}/><div className="image-shade"/><div className="container page-hero-content"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p><ArrowDown className="page-hero-arrow" aria-hidden="true"/></div></section>;
}
export function ContactBand() { return <section className="contact-band"><div className="container contact-band-grid"><Eyebrow>Begin a technical conversation</Eyebrow><h2>Tell us what you are working on.</h2><div><p>Start with the research objective. We’ll help connect the requirement to the right technology path.</p><ActionLink to="/contact" tone="light">Discuss your requirement</ActionLink></div></div></section>; }

export function TechnologyIndex() { return <section className="section"><div className="container"><div className="section-heading"><Eyebrow>Technology portfolio</Eyebrow><h2>Explore our technologies</h2><p>Specialized systems organized around the research environment—not a conventional product catalogue.</p></div><div className="tech-index">{technologies.map((t,i)=><Link key={t.slug} to="/technologies/$slug" params={{slug:t.slug}} className={`tech-row ${i===0?"featured":""}`}><div className="tech-image"><img src={t.image} alt={`${t.name} research instrumentation`} loading="lazy" width={1600} height={1200}/></div><small>{t.number}</small><div><h3>{t.name}</h3><p>{t.summary}</p></div><ArrowRight/></Link>)}</div></div></section>; }

export function ProductGrid({ limit }: { limit?: number }) { const items=limit?products.slice(0,limit):products; return <div className="product-grid">{items.map(p=><Link key={p.slug} to="/products/$product" params={{product:p.slug}} className="product-card"><div><img src={p.image} alt={p.name} loading="lazy" width={1600} height={1200}/></div><Eyebrow>{p.category}</Eyebrow><h3>{p.name}</h3><p>{p.line}</p><span className="text-link">Explore system <ArrowRight size={16}/></span></Link>)}</div>; }
export function ApplicationGrid() { return <div className="application-grid">{applications.map((a,i)=><div key={a.slug} className={`application-tile tile-${i%4}`}><img src={a.image} alt={`${a.name} application`} loading="lazy" width={1600} height={1200}/><div className="image-shade"/><div><Eyebrow>Application {String(i+1).padStart(2,"0")}</Eyebrow><h3>{a.name}</h3><p>{a.summary}</p></div></div>)}</div>; }
