import { useEffect, useState } from "react";

const slides = [
  { id: "Z1KbNVT3IxA", title: "KORVUS TECHNOLOGY", sub: "Technology that evolves with research.", text: "Configurable thin-film deposition systems built for advanced materials, semiconductor, photovoltaic, optical and nanomaterials research.", bullets: ["Modular by design", "Multiple deposition techniques", "Research-ready platforms"], cta: "Explore Korvus Technology", href: "https://korvustech.com/" },
  { id: "J4sVcx6Fads", title: "SALD", sub: "Atomic precision. Built for scale.", text: "Spatial Atomic Layer Deposition technology for high-quality conformal coatings, combining atomic-level control with high-throughput, large-area manufacturing.", bullets: ["Spatial ALD technology", "Built for high throughput", "Enabling next-generation industries"], cta: "Explore SALD", href: "https://spatialald.com/" },
  { id: "NOwwH8SFRWg", title: "TEER COATINGS", sub: "Advanced surface engineering for demanding applications.", text: "Teer Coatings develops coating systems and surface technologies spanning industrial manufacturing, minting, advanced materials and research applications.", bullets: ["Industrial & Minting Systems", "Advanced Materials & Research", "Bespoke Engineering"], cta: "Explore Teer Coatings", href: "https://www.teercoatings.co.uk/" },
];
const DURATION = 9000;

export function FeaturedSlider() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section className="feature-story feature-slider dark-section" aria-roledescription="carousel" aria-label="Featured technologies">
      <div className="feature-video" aria-hidden="true">
        {mounted && slides.map((s, i) => (
          <iframe
            key={s.id}
            className={i === active ? "is-active" : ""}
            src={`https://www.youtube-nocookie.com/embed/${s.id}?autoplay=1&mute=1&loop=1&playlist=${s.id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&fs=0&cc_load_policy=0`}
            title={`${s.title} video`}
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        ))}
      </div>
      <div className="feature-copy slider-copy">
        <span className="eyebrow">Featured technology · 0{active + 1} / 0{slides.length}</span>
        <div className="slider-stage">
          {slides.map((s, i) => (
            <div key={s.id} className={`slider-panel ${i === active ? "is-active" : ""}`} aria-hidden={i !== active}>
              <h2>{s.title}</h2>
              <p className="slider-sub">{s.sub}</p>
              <p>{s.text}</p>
              <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <a className="action action-light" href={s.href} target="_blank" rel="noopener noreferrer" tabIndex={i === active ? 0 : -1}>{s.cta}<span aria-hidden="true">↗</span></a>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((s, i) => (
            <button key={s.id} type="button" aria-label={`Show ${s.title}`} aria-current={i === active} className={i === active ? "is-active" : ""} onClick={() => setActive(i)}>
              <span style={{ animationDuration: `${DURATION}ms` }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
