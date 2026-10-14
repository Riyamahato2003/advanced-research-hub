import { ActionLink } from "./button";
import { ContactBand, Eyebrow } from "./page-sections";
const ionCard = "/images/image-15.png";
const ionHero = "/images/image-16.png";
const pvdCard = "/images/image-17.png";
const pvdHero = "/images/image-18.png";
const chemCard = "/images/image-19.png";
const chemHero = "/images/image-20.png";
const pilotCard = "/images/image-21.png";
const pilotHero = "/images/sheet-ald.webp";
const rollCard = "/images/image-22.png";
const rollHero = "/images/image-23.png";
function Hero({ category, title, intro, image, alt }: { category: string; title: string; intro: string; image: string; alt: string }) {
  return <section className="pd-hero"><img src={image} alt={alt} fetchPriority="high" /><div className="container"><Eyebrow>{category}</Eyebrow><h1>{title}</h1><p>{intro}</p><div className="hero-actions"><ActionLink to="/contact" tone="light">Discuss your requirement</ActionLink></div></div></section>;
}

function Intro({ eyebrow, title, paragraphs, image, alt }: { eyebrow: string; title: string; paragraphs: string[]; image: string; alt: string }) {
  return <section className="pd-section"><div className="container pd-split"><div data-reveal><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{paragraphs.map(p => <p key={p}>{p}</p>)}</div><figure className="pd-figure" data-reveal="image"><img src={image} alt={alt} loading="lazy" /></figure></div></section>;
}

function Features({ eyebrow, title, items }: { eyebrow: string; title: string; items: [string, string][] }) {
  return <section className="pd-section dark"><div className="container"><div className="pd-head" data-reveal><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div><div className="pd-features">{items.map(([name, text], i) => <div key={name} data-reveal data-delay={String(i % 3)}><small>{String(i + 1).padStart(2, "0")}</small><h3>{name}</h3><p>{text}</p></div>)}</div></div></section>;
}

function Specs({ title, rows, note }: { title: string; rows: [string, string][]; note?: string }) {
  return <section className="pd-section"><div className="container"><div className="pd-head" data-reveal><Eyebrow>Specification</Eyebrow><h2>{title}</h2></div><div className="pd-table-wrap" data-reveal><table className="pd-table"><tbody>{rows.map(([key, value]) => <tr key={key}><th scope="row">{key}</th><td>{value}</td></tr>)}</tbody></table></div>{note && <p className="pd-note">{note}</p>}</div></section>;
}

function Applications({ title, items }: { title: string; items: string[] }) {
  return <section className="pd-section grey"><div className="container pd-split"><div data-reveal><Eyebrow>Applications</Eyebrow><h2>{title}</h2></div><ul className="pd-list" data-reveal>{items.map(item => <li key={item}>{item}</li>)}</ul></div></section>;
}

export function IonBeamPage() {
  return <main>
    <Hero category="Ion Beam Systems · Nordiko" title="Ion Beam Milling System 7500" intro="Broad ion-beam processing for precision thin-film milling and surface preparation." image={ionHero} alt="Diagram of an ion source, broad ion beam and wafer inside a vacuum chamber" />
    <Intro eyebrow="Ion beam technology" title="A controlled beam, directed at the surface." paragraphs={["Nordiko describes a gridded ion source that forms a broad beam by drawing positive ions from a low-pressure plasma and accelerating them through perforated electrodes.", "In milling, energetic ions physically remove material from a substrate. The process is especially relevant where conventional chemical etching is less suitable, including noble metals and magnetic thin films."]} image={ionCard} alt="Nordiko ion beam milling system and control cabinet" />
    <Features eyebrow="Process" title="From plasma to precise patterning." items={[["Broad ion beam", "A gridded accelerator forms beamlets that merge into a broad beam for thin-film processing."], ["Physical milling", "Ion impact removes material through sputtering rather than relying solely on chemical reactions."], ["Beam neutralisation", "Nordiko describes a filament-less plasma-bridge neutraliser for its broad ion-beam systems."], ["Reactive option", "Reactive gases may be introduced in the source or at the substrate, depending on the process approach."]]} />
    <Specs title="Ion-beam process principles." rows={[["Technology", "Gridded broad ion-beam milling / etching"], ["Typical process beam range", "200–2,000 V (Nordiko's published technology range; not a confirmed 7500-system specification)"], ["Processing environment", "Low-pressure vacuum"], ["Process modes", "Physical ion milling; reactive ion-beam approaches described by Nordiko"], ["Neutralisation", "Plasma-bridge neutraliser described for Nordiko broad ion-beam systems"]]} note="Nordiko's ion-beam technology page explains the process, but does not publish a model-specific 7500 datasheet. Confirm system configuration and performance before procurement." />
    <Applications title="Thin films that need a different approach." items={["Noble-metal thin-film patterning", "Magnetic-film and MRAM research", "Precision ion-beam etching", "Surface preparation and thin-film development"]} />
    <ContactBand />
  </main>;
}

export function NordikoPvdPage() {
  return <main>
    <Hero category="Physical Vapour Deposition Systems · Nordiko" title="2000 & 2550 PVD Systems" intro="Flexible, automatic batch-load sputtering systems designed around different loading and wafer-handling requirements." image={pvdHero} alt="Sputtering cathodes depositing thin films onto substrates in a PVD chamber" />
    <Intro eyebrow="Overview" title="One process module. Two ways to load." paragraphs={["Nordiko's 2000 and 2550 series share a common process module. The 2000 can cycle to atmosphere for batch loading or use a single-shot load lock.", "Pairing the module with a wafer-handling platform and vacuum cassette load lock creates the 2550 configuration."]} image={pvdCard} alt="Batch-load PVD chamber with a substrate carousel" />
    <Features eyebrow="System architecture" title="Configured for the process at hand." items={[["Flexible cathode population", "Choose four 200 mm cathodes or six 150 mm cathodes."], ["Power choices", "Each cathode may be configured for RF diode, DC, RF magnetron or DC/RF magnetron operation."], ["Substrate formats", "The rotating table can be configured to accommodate different substrate formats."], ["Geometry control", "Adjust table height to optimise the process and rotate substrates from 2 to 30 rpm."]]} />
    <Specs title="2000 / 2550 configuration." rows={[["Series", "2000 batch load / 2550 vacuum cassette load-lock wafer handling"], ["Process module", "Common to both series"], ["2000 loading", "Atmospheric batch cycling or single-shot load lock"], ["2550 loading", "Wafer-handling platform with vacuum cassette load lock"], ["Cathode options", "Four 200 mm or six 150 mm cathodes"], ["Cathode operation", "RF diode / DC / RF magnetron / DC-RF magnetron"], ["Substrate table", "Rotating, height-adjustable; accepts varied substrate formats"], ["Rotation speed", "2–30 rpm"]]} />
    <Applications title="A flexible thin-film platform." items={["Batch sputter deposition", "Wafer-based thin-film processing", "Research and process development", "Physical vapour deposition workflows"]} />
    <ContactBand />
  </main>;
}

export function NanoChemPage() {
  const sizes: [string, string][] = [["450", "Up to 320 × 320 mm"], ["750", "Up to 535 × 535 mm"], ["1,200", "Up to 850 × 850 mm"], ["1,400", "Up to 1,000 × 1,000 mm"], ["1,800", "Up to 1,300 × 1,300 mm"], ["2,800", "Up to 2,000 × 2,000 mm"]];
  return <main>
    <Hero category="Wet Processing Systems" title="nanoCHEM" intro="Wet processing for substrates from research format to large-area manufacturing." image={chemHero} alt="Large-area substrate undergoing controlled wet chemical processing" />
    <Intro eyebrow="Overview" title="A process matched to the substrate." paragraphs={["The nanoCHEM range covers developing, cleaning, etching and lift-off across six substrate-size classes.", "A standalone unit is available, with manual or automatic loading depending on the selected workflow."]} image={chemCard} alt="nanoCHEM wet processing equipment" />
    <Features eyebrow="Processes & handling" title="From chemistry to controlled throughput." items={[["Developing", "Controlled developing for patterned substrate workflows."], ["Cleaning", "Wet cleaning in preparation for subsequent steps."], ["Etching", "Wet chemical removal for process-defined material layers."], ["Lift off", "Remove unwanted material after patterning."], ["Standalone option", "Configure as an independent processing unit."], ["Loading choice", "Manual or automatic substrate loading."]]} />
    <Specs title="Substrate-size range." rows={sizes.map(([model, size]) => [`nanoCHEM ${model}`, size])} note="Maximum substrate sizes supplied for each nanoCHEM processing class; confirm chosen chemistry, automation and process configuration with NB Instrument." />
    <Applications title="Wet processing across scales." items={["Developing", "Cleaning", "Etching", "Lift off"]} />
    <ContactBand />
  </main>;
}

export function SaldPilotPage() {
  return <main>
    <Hero category="Atomic Layer Deposition Systems · SALD" title="SALD Sheet-to-Sheet Spatial ALD Pilot Platform" intro="Pilot-Scale Spatial ALD for Large-Area Substrates" image={pilotHero} alt="Large-area sheets passing through an automated spatial ALD coating line" />
    <Intro eyebrow="Overview" title="Pilot-Scale Spatial ALD for Large-Area Substrates" paragraphs={["A pilot-scale deposition system designed for large-area substrates and process scale-up.", "Patented Spatial Atomic Layer Deposition technology delivers uniform, conformal films with automated sheet handling and industrial-grade reliability for solar, semiconductor and advanced materials industries."]} image={pilotCard} alt="SALD sheet-to-sheet spatial ALD pilot platform with conveyor" />
    <Features eyebrow="Key features" title="From pilot process to production pathway." items={[["Pilot-Scale Spatial ALD Technology", "Spatially separated precursors support continuous atomic-layer deposition."], ["Large-Area Substrate Processing", "Designed for functional films on large-area sheets."], ["Industrial Process Scale-Up", "A pilot environment for transferring developed processes toward production."], ["Automated Sheet Handling", "Conveyor-based substrate transport through the coating process."]]} />
    <Specs title="Pilot platform specification." rows={[["Deposition Technology", "Spatial Atomic Layer Deposition"], ["Process Mode", "Atmospheric pressure"], ["Substrate Format", "Large-area sheet-to-sheet"], ["Throughput", "Pilot-scale continuous processing"], ["Materials", "SnOx, NiOx, Al₂O₃, AZO and other functional oxides"], ["Handling", "Automated conveyor-based substrate transport"], ["Automation", "PLC controlled with recipe management"], ["Safety", "Integrated industrial safety systems"]]} />
    <Applications title="From energy to functional surfaces." items={["Perovskite & Tandem Solar Cells", "Photovoltaic Pilot Manufacturing", "Semiconductor Process Scale-Up", "Barrier & Passivation Coatings", "Functional Oxide Thin Films", "Industrial R&D and Process Transfer"]} />
    <section className="pd-section"><div className="container pd-split rev"><figure className="pd-figure" data-reveal="image"><img src={pilotHero} alt="Continuous coating process for large-area substrates" loading="lazy" /></figure><div data-reveal><Eyebrow>Technologies</Eyebrow><h2>Thin Film & PVD Coating. Nanotechnology & Nanomaterials.</h2><p>Explore the connected research environments behind functional thin-film processes.</p><ActionLink to="/#technology-portfolio" tone="outline">Explore thin film technology</ActionLink></div></div></section>
    <ContactBand />
  </main>;
}

export function SaldRollToRollPage() {
  return <main>
    <Hero category="Atomic Layer Deposition Systems · SALD" title="SALD Roll-to-Roll Spatial ALD Manufacturing Platform" intro="High-Throughput Roll-to-Roll Spatial ALD" image={rollHero} alt="Flexible foil passing through a roll-to-roll coating line" />
    <Intro eyebrow="Overview" title="High-Throughput Roll-to-Roll Spatial ALD" paragraphs={["A high-throughput continuous deposition system engineered for industrial-scale coating of flexible substrates. Patented Spatial Atomic Layer Deposition technology delivers dense, uniform and conformal films at roll-to-roll production speeds for flexible photovoltaics, encapsulation barrier films and flexible electronics."]} image={rollCard} alt="SALD roll-to-roll spatial ALD manufacturing platform" />
    <Features eyebrow="Key features" title="Continuous coating, production scale." items={[["High-Throughput Roll-to-Roll Processing", "Continuous deposition for industrial-scale flexible web production."], ["Industrial-Grade Encapsulation", "Dense, uniform barrier coatings for demanding applications."], ["Flexible Substrate Compatibility", "Designed for polymer films and flexible web formats."], ["Production-Scale Automation", "PLC-controlled production with recipe management."]]} />
    <Specs title="Roll-to-roll platform specification." rows={[["Deposition Technology", "Roll-to-Roll Spatial Atomic Layer Deposition"], ["Process Mode", "Atmospheric pressure continuous coating"], ["Substrate Format", "Flexible web / polymer film"], ["Throughput", "High-speed industrial-scale production"], ["Materials", "Al₂O₃, SnOx, NiOx, AZO and barrier oxides"], ["Web Handling", "Precision tension and speed control"], ["Automation", "PLC controlled with recipe management"], ["Safety", "Integrated industrial safety systems"]]} />
    <Applications title="Functional films on flexible materials." items={["Flexible Photovoltaics", "Encapsulation Barrier Films", "Flexible Electronics Manufacturing", "OLED & Display Encapsulation", "Functional Coatings on Polymer Films", "Advanced Packaging & Barrier Applications"]} />
    <section className="pd-section"><div className="container pd-split rev"><figure className="pd-figure" data-reveal="image"><img src={rollHero} alt="Flexible web moving through a continuous spatial ALD process" loading="lazy" /></figure><div data-reveal><Eyebrow>Technologies</Eyebrow><h2>Thin Film & PVD Coating.</h2><p>Discover the related thin-film deposition technology environment.</p><ActionLink to="/#technology-portfolio" tone="outline">Explore thin film technology</ActionLink></div></div></section>
    <ContactBand />
  </main>;
}