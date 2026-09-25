import { ActionLink } from "./button";
import { ContactBand, Eyebrow } from "./page-sections";
import ufastMachine from "@/assets/ufast-machine-transparent.png";

const IMG = {
  ufastHero: "/__l5e/assets-v1/5f00504a-b890-4273-9bed-1c287f8ec625/ufast-hero.png",
  eprHome: "/__l5e/assets-v1/2aa938a8-3395-46bf-9eb4-829c5e74748f/pulsed-epr-home.png",
  eprHero: "/__l5e/assets-v1/16a23f97-bdb3-46b8-a8dd-f6f65acb6cd8/pulsed-epr-hero.png",
  hexHome: "/__l5e/assets-v1/55c4db38-4132-4d41-a344-185b543d2fe6/hex-home.png",
  hexHero: "/__l5e/assets-v1/2fea3731-45a8-472e-b8fe-c525d99e218a/hex-hero.png",
};

function Hero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string; image: string; alt: string }) {
  return (
    <section className="pd-hero">
      <img src={image} alt={alt} width={1920} height={1080} fetchPriority="high" />
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="hero-actions"><ActionLink to="/contact" tone="light">Discuss your requirement</ActionLink></div>
      </div>
    </section>
  );
}

function Features({ items }: { items: [string, string][] }) {
  return <div className="pd-features">{items.map(([h, p], i) => <div key={h} data-reveal data-delay={String(i % 3)}><small>{String(i + 1).padStart(2, "0")}</small><h3>{h}</h3><p>{p}</p></div>)}</div>;
}

function Metrics({ items }: { items: [string, string][] }) {
  return <div className="pd-metrics" data-reveal>{items.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>;
}

export function UfastPage() {
  return (
    <main>
      <Hero eyebrow="Advanced Materials Processing · GeniCore" title="U-FAST (SPS) MASS" intro="Industrial-scale advanced SPS sintering — pulsed-current densification that turns powders into dense, fine-grained components in minutes rather than hours." image={IMG.ufastHero} alt="Spark plasma sintering chamber glowing during a sintering cycle" />
      <section className="pd-section">
        <div className="container pd-split">
          <div data-reveal>
            <Eyebrow>The technology</Eyebrow>
            <h2>Spark plasma sintering, engineered for scale.</h2>
            <p>Spark Plasma Sintering (SPS) — also known as FAST, U-FAST, PECS or P²C — consolidates powders by passing pulsed direct current through a graphite tool and the material itself while uniaxial pressure is applied.</p>
            <p>Joule heating is the primary mechanism. Heat is generated directly inside the tooling and sample, enabling very fast, uniform heating and short process cycles.</p>
          </div>
          <figure className="pd-figure contain" data-reveal="image"><img src={ufastMachine} alt="GeniCore U-FAST sintering system" width={619} height={798} /></figure>
        </div>
      </section>
      <section className="pd-section dark">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Process advantages</Eyebrow><h2>Faster cycles. Finer structures.</h2><p>Compared with conventional furnace sintering, pulsed-current sintering offers a fundamentally different process window.</p></div>
          <Metrics items={[["100–1000 °C/min", "Heating rate (vs 5–10 °C/min conventional)"], ["200–300 °C", "Lower sintering temperatures"], ["0–15 min", "Typical holding time, often 3–5 min"], ["95–99.99 %", "Near-theoretical density"]]} />
        </div>
      </section>
      <section className="pd-section">
        <div className="container pd-split rev">
          <figure className="pd-figure" data-reveal="image"><img src="https://genicore.eu/wp-content/uploads/2023/08/vacuum-chamber-sps-device.png" alt="Vacuum chamber of an SPS device" loading="lazy" /><figcaption>Vacuum chamber of an SPS device. Image: GeniCore.</figcaption></figure>
          <div data-reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2>Current, pressure and control — in one cycle.</h2>
            <ul className="pd-list">
              <li>Powder is loaded into a graphite die set between two punches</li>
              <li>Uniaxial pressure is applied under vacuum or protective atmosphere</li>
              <li>Pulsed DC current heats tooling and sample directly by Joule heating</li>
              <li>Rapid densification preserves nanostructures, with grain sizes of 10–100 nm retained</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pd-section grey">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Applications</Eyebrow><h2>Materials that conventional sintering struggles with.</h2></div>
          <Features items={[["Advanced ceramics", "Dense structural and technical ceramics with controlled microstructure."], ["Metals & alloys", "Fast consolidation of metallic powders and hard-to-sinter alloys."], ["Metal matrix composites", "Composite materials combining metallic and ceramic phases."], ["Nanostructured materials", "Short cycles limit grain growth to preserve nanoscale features."], ["Functional materials", "Thermoelectric, magnetic and other functional material development."], ["Diffusion bonding", "Joining of similar and dissimilar materials under controlled conditions."]]} />
        </div>
      </section>
      <section className="pd-section">
        <div className="container pd-gallery">
          <figure className="pd-figure wide" data-reveal="image"><img src={IMG.ufastHero} alt="SPS process with powder samples" loading="lazy" /></figure>
          <figure className="pd-figure" data-reveal="image"><img src="https://genicore.eu/wp-content/uploads/2023/08/graphite-set-sps.png" alt="Graphite die set for SPS" loading="lazy" /></figure>
        </div>
        <p className="container pd-note">Technology information referenced from GeniCore. Detailed U-FAST MASS configuration and specifications are available on request from NB Instrument.</p>
      </section>
      <ContactBand />
    </main>
  );
}

export function PulsedEprPage() {
  return (
    <main>
      <Hero eyebrow="Spectroscopy Systems · Spin-Flex" title="X-band Pulsed ESR / EPR" intro="A modular pulse EPR spectrometer that puts the entire spectrometer inside a single PC — from S-band to W-band." image={IMG.eprHero} alt="Pulsed EPR system on an optical table" />
      <section className="pd-section">
        <div className="container pd-split">
          <div data-reveal>
            <Eyebrow>Introduction</Eyebrow>
            <h2>Pulse EPR, reimagined as a compact modular system.</h2>
            <p>The spinUP platform is a modular pulse EPR spectrometer. Microwave bridges for different frequency bands connect to a single computer that generates, controls and acquires every experiment.</p>
            <p>It is designed for research groups who need advanced pulse capability without the footprint and complexity of traditional systems.</p>
          </div>
          <figure className="pd-figure contain" data-reveal="image"><img src={IMG.eprHome} alt="Spin-Flex pulsed EPR spectrometer" /></figure>
        </div>
      </section>
      <section className="pd-section dark">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>System performance</Eyebrow><h2>Fast, precise pulse control.</h2></div>
          <Metrics items={[["250 MHz", "Bandwidth"], ["0.5 ns", "Arbitrary waveform resolution"], ["5 ns", "Minimum pulse length"], ["10–100 ns", "Dead time"]]} />
        </div>
      </section>
      <section className="pd-section">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Frequency bands</Eyebrow><h2>One platform, four bands.</h2></div>
          <div className="pd-table-wrap" data-reveal>
            <table className="pd-table">
              <thead><tr><th>Band</th><th>Frequency</th><th>Max output power</th></tr></thead>
              <tbody>
                <tr><th>S + C</th><td>2–6 GHz</td><td>30 W</td></tr>
                <tr><th>C + X</th><td>6–12 GHz</td><td>30 W</td></tr>
                <tr><th>Q</th><td>32–38 GHz</td><td>10 W</td></tr>
                <tr><th>W</th><td>92–96 GHz</td><td>1 W</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pd-section grey">
        <div className="container pd-split rev">
          <figure className="pd-figure" data-reveal="image"><img src="https://spin-flex.com/wp-content/uploads/2025/11/Pulsed-ESR-X-band-bridge-1024x576.png" alt="X-band pulsed ESR microwave bridge" loading="lazy" /><figcaption>X-band microwave bridge. Image: Spin-Flex.</figcaption></figure>
          <div data-reveal>
            <Eyebrow>Software</Eyebrow>
            <h2>Ready-made experiments, open scripting.</h2>
            <p>Pre-programmed pulse sequences, phase cycling of up to 128 steps and MATLAB™ scripting for custom experiments.</p>
            <div className="pd-tags">{["FID", "Hahn echo", "Inversion recovery", "DEER", "ENDOR", "CPMG", "EDMR", "ODMR"].map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      </section>
      <section className="pd-section">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Key features</Eyebrow><h2>Built for modern spin research.</h2></div>
          <Features items={[["Entire spectrometer in a PC", "Pulse generation, control and acquisition in a single computer."], ["Modular bridges", "Add frequency bands as research needs evolve."], ["Advanced sequences", "DEER, ENDOR, CPMG and more, ready to run."], ["Phase cycling", "Up to 128 phase-cycling steps."], ["MATLAB™ scripting", "Full flexibility to design new experiments."], ["Compact footprint", "Fits research labs without dedicated infrastructure."]]} />
          <p className="pd-note">Product information referenced from Spin-Flex. Final configuration and specifications are confirmed by NB Instrument per requirement.</p>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

export function HexPage() {
  const tiers = [
    ["Sample size", "4\"", "6\"", "12\""],
    ["Max. sources", "3", "6", "6"],
    ["Magnetron size", "2\"", "2\" or 3\"", "3\" or 4\""],
    ["Chamber volume", "12 L / 24 L stacked", "50 L / 100 L stacked", "86 L / 172 L stacked"],
    ["Base pressure*", "5×10⁻⁷ mbar", "<5×10⁻⁷ mbar", "<5×10⁻⁷ mbar"],
  ];
  return (
    <main>
      <Hero eyebrow="Thin Film Deposition Systems · Korvus Technology" title="HEX Series – Modular Thin Film Deposition" intro="Highly modular thin-film deposition. A platform that grows with your research — add sources, stack chambers and reconfigure at any point." image={IMG.hexHero} alt="Stainless steel vacuum chamber with blue plasma viewport" />
      <section className="pd-section">
        <div className="container pd-split">
          <div data-reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2>One system. Many deposition techniques.</h2>
            <p>The HEX Series is a family of highly modular PVD systems. Magnetron sputtering, electron-beam, low-temperature and thermal evaporation sources can be combined in a single compact platform.</p>
            <p>Available in three sizes — HEX, HEX-L and HEX-XL — for samples from 4" to 12".</p>
          </div>
          <figure className="pd-figure contain" data-reveal="image"><img src={IMG.hexHome} alt="Korvus HEX Series systems" /></figure>
        </div>
      </section>
      <section className="pd-section dark">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Future-proof</Eyebrow><h2>Designed to evolve.</h2></div>
          <Features items={[["Add sources anytime", "Expand the system as new deposition needs arise."], ["Stackable chambers", "Double chamber volume by stacking."], ["Sputter up or down", "Detachable plates allow either orientation."], ["Adjustable geometry", "Change source-to-substrate distance and angle."], ["Compact footprint", "Full research capability in a benchtop-scale frame."], ["Research-ready", "Configured for materials, semiconductor, optical and PV research."]]} />
        </div>
      </section>
      <section className="pd-section">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Specifications</Eyebrow><h2>Three sizes, one philosophy.</h2></div>
          <div className="pd-table-wrap" data-reveal>
            <table className="pd-table">
              <thead><tr><th></th><th>HEX</th><th>HEX-L</th><th>HEX-XL</th></tr></thead>
              <tbody>{tiers.map(([k, ...v]) => <tr key={k}><th>{k}</th>{v.map((x, i) => <td key={i}>{x}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="pd-note">*Ultimate base pressure measured on factory-tested systems.</p>
        </div>
      </section>
      <section className="pd-section grey">
        <div className="container">
          <div className="pd-head" data-reveal><Eyebrow>Source modules</Eyebrow><h2>Choose your deposition techniques.</h2></div>
          <div className="pd-gallery">
            {[
              ["FISSION", "Magnetron sputtering — 2\"–3\" targets, DC / RF / HiPIMS / pulsed-DC.", "https://korvustech.com/wp-content/uploads/2024/10/Magnetron-Sputtering-Scource.webp"],
              ["TAU", "Electron-beam evaporation with sub-monolayer control.", "https://korvustech.com/wp-content/uploads/2024/10/electron-beam-evaporation.jpg"],
              ["ORCA", "Low-temperature evaporation, 50–600 °C, for organics.", "https://korvustech.com/wp-content/uploads/2024/10/low-temperature-evaporation.webp"],
            ].map(([n, d, src]) => (
              <figure key={n} className="pd-figure" data-reveal="image" style={{ aspectRatio: "auto", background: "transparent" }}>
                <img src={src} alt={`${n} source module`} loading="lazy" style={{ aspectRatio: "4/3" }} />
                <figcaption><strong style={{ color: "var(--ink)", fontSize: "1.1rem" }}>{n}</strong><br />{d}</figcaption>
              </figure>
            ))}
          </div>
          <p className="pd-note">Also available: TES thermal boat evaporation. Module images: Korvus Technology.</p>
        </div>
      </section>
      <section className="pd-section">
        <div className="container pd-gallery">
          <figure className="pd-figure wide" data-reveal="image"><img src={IMG.hexHero} alt="HEX vacuum chamber with plasma" loading="lazy" /></figure>
          <figure className="pd-figure" data-reveal="image"><img src="https://korvustech.com/wp-content/uploads/2024/10/HEX-Side-View-3-797x1024.jpg" alt="HEX system side view" loading="lazy" /></figure>
        </div>
        <p className="container pd-note">Product information referenced from Korvus Technology.</p>
      </section>
      <ContactBand />
    </main>
  );
}
