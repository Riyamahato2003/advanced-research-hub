import heroImage from "/images/nb-hero-vacuum.jpg";
import waferImage from "/images/nb-wafer.jpg";
import plasmaImage from "/images/nb-plasma.jpg";
import photonicsImage from "/images/nb-photonics.jpg";
const saldCard = "/images/product-7.png";
const fuelCard = "/images/product-9.png";
const nanoCard = "/images/product-11.png";
const octoCard = "/images/product-13.png";
const ionCard = "/images/image-15.png";
const pvdCard = "/images/image-17.png";
const chemCard = "/images/image-19.png";
const pilotCard = "/images/image-21.png";
const rollCard = "/images/image-22.png";
const category36 = "/images/image-36.png";
const category37 = "/images/image-37.png";
const category38 = "/images/image-38.png";
const category39 = "/images/image-39.png";
const category40 = "/images/image-40.png";
const category41 = "/images/image-41.png";
const category42 = "/images/image-42.png";
const category43 = "/images/image-43.png";
const vacuumApplication = "/images/image-44.png";
const energyApplication = "/images/image-45.png";
/**
 * Photography supplied by NB Instrument, served from the project asset store.
 * Pointer files: src/assets/nb-hero-lab.webp.asset.json
 *                src/assets/nb-partner-map.webp.asset.json
 */
const labImage = "/images/nb-hero-lab.webp";
const partnerMapImage = "/images/nb-partner-map.webp";

export const images = { heroImage, waferImage, plasmaImage, photonicsImage, labImage, partnerMapImage };

export type Technology = { slug: string; name: string; number: string; summary: string; details: string; topics: string[]; image: string };
export const technologies: Technology[] = [
  { slug: "thin-film-vacuum", name: "Thin Film & Vacuum", number: "01", summary: "Controlled environments for deposition, coating and vacuum research.", details: "Platforms spanning magnetron sputtering, PVD coating, evaporation and vacuum technology for research and precision-led process development.", topics: ["Magnetron sputtering", "PVD coating", "Vacuum systems", "Deposition"], image: plasmaImage },
  { slug: "materials-nanotechnology", name: "Materials & Nanotechnology", number: "02", summary: "Systems for synthesis, surfaces and next-generation materials.", details: "Research instrumentation for nanomaterial synthesis, surface engineering and controlled materials processing.", topics: ["Nanomaterials", "Surface engineering", "Plasma processing", "Materials development"], image: category36 },
  { slug: "characterization", name: "Characterization", number: "03", summary: "Analytical insight from elemental composition to material response.", details: "Scientific platforms for elemental analysis, spectroscopy and materials characterization across advanced laboratories.", topics: ["ICP-OES", "Spectroscopy", "Elemental analysis", "Materials testing"], image: category37 },
  { slug: "magnetic-spin", name: "Magnetic & Spin Science", number: "04", summary: "High-sensitivity systems for magnetic resonance and spin research.", details: "Specialized electron spin resonance and magnetic science instrumentation for demanding research environments.", topics: ["ESR / EPR", "Magnetic systems", "Spin science", "Field control"], image: category38 },
  { slug: "photonics", name: "Photonics & Lasers", number: "05", summary: "Precision optical technologies for measurement and research.", details: "Optical and laser-enabled systems selected around application requirements and research outcomes.", topics: ["Laser systems", "Photonics", "Optical technologies", "Precision measurement"], image: category39 },
  { slug: "semiconductor", name: "Semiconductor & Microfabrication", number: "06", summary: "Process platforms for wafer research and microfabrication workflows.", details: "Equipment supporting semiconductor fabrication, precision wet processing, deposition and process development.", topics: ["Wafer processing", "Wet processing", "Deposition", "Microfabrication"], image: category40 },
];

export const products = [
  { slug: "u-fast-sps-mass", name: "U-FAST (SPS) MASS", category: "Advanced Materials Processing", line: "Industrial-Scale Advanced SPS Sintering.", image: "/images/ufast-home.png" },
  { slug: "x-band-pulsed-esr-epr", name: "X-band Pulsed ESR / EPR", category: "Spectroscopy Systems", line: "High-sensitivity electron spin resonance for advanced research.", image: "/images/pulsed-epr-home.png" },
  { slug: "hex-series", name: "HEX Series – Modular Thin Film Deposition Systems", category: "Thin Film Deposition Systems", line: "Highly Modular Thin-Film Deposition.", image: "/images/hex-home.png" },
  { slug: "sald-rd-spatial-ald-platform", name: "SALD R&D Spatial ALD Platform", category: "Atomic Layer Deposition Systems", line: "Atomic-precision coatings for research and scale-up.", image: saldCard },
  { slug: "tsfc-1001-pem-fuel-cell-test-station", name: "TSFC-1001 PEM Fuel Cell Test Station", category: "Fuel Cell Systems", line: "Controlled PEM fuel-cell testing for research and prototyping.", image: fuelCard },
  { slug: "nanocoat-c3-plus", name: "nanoCOAT C3+", category: "Nano-Coating Systems", line: "Integrated coating processes for wafers and large substrates.", image: nanoCard },
  { slug: "octomag-series", name: "OCTOMAG Series", category: "PVD Coating Systems", line: "Advanced Precision PVD Coating.", image: octoCard },
  { slug: "ion-beam-milling-system-7500", name: "Ion Beam Milling System 7500", category: "Ion Beam Systems", line: "Broad ion-beam processing for precision thin films and etching.", image: ionCard },
  { slug: "nordiko-2000-2550-pvd-systems", name: "2000 & 2550 PVD Systems", category: "Physical Vapour Deposition Systems", line: "Flexible automatic batch-load sputtering systems.", image: pvdCard },
  { slug: "nanochem", name: "nanoCHEM", category: "Wet Processing Systems", line: "Configurable developing, cleaning, etching and lift-off.", image: chemCard },
  { slug: "sald-sheet-to-sheet-spatial-ald-pilot-platform", name: "SALD Sheet-to-Sheet Spatial ALD Pilot Platform", category: "Atomic Layer Deposition Systems", line: "Pilot-scale spatial ALD for large-area substrates.", image: pilotCard },
  { slug: "sald-roll-to-roll-spatial-ald-manufacturing-platform", name: "SALD Roll-to-Roll Spatial ALD Manufacturing Platform", category: "Atomic Layer Deposition Systems", line: "High-Throughput Roll-to-Roll Spatial ALD", image: rollCard },
];

export const applications = [
  { slug: "thin-film-deposition", name: "Thin Film Deposition", summary: "Engineer controlled films for optical, electronic and protective applications.", image: plasmaImage },
  { slug: "semiconductor-rd", name: "Semiconductor R&D", summary: "Support wafer-scale process development and microfabrication research.", image: category40 },
  { slug: "vacuum-surface-science", name: "Vacuum & Surface Science", summary: "Create stable environments for surface preparation and analysis.", image: vacuumApplication },
  { slug: "epr-magnetic-resonance", name: "EPR / Magnetic Resonance", summary: "Investigate paramagnetic species, free radicals and spin behavior.", image: category38 },
  { slug: "nanotechnology", name: "Nanotechnology", summary: "Develop and study nanostructures, coatings and functional materials.", image: category41 },
  { slug: "materials-characterization", name: "Materials Characterization", summary: "Connect composition and structure to material performance.", image: category37 },
  { slug: "plasma-processing", name: "Plasma Processing", summary: "Use controlled plasma environments for deposition and surface engineering.", image: category42 },
  { slug: "photonics", name: "Photonics", summary: "Enable optical measurement, light–matter research and precision experiments.", image: category39 },
  { slug: "surface-engineering-coatings", name: "Surface Engineering & Coatings", summary: "Develop wear-resistant, functional and decorative coatings for demanding surfaces.", image: category43 },
  { slug: "energy-electrochemical-materials", name: "Energy & Electrochemical Materials", summary: "Advance fuel cell, battery and electrochemical materials research.", image: energyApplication },
];

export const contact = {
  address: "Gulmohar Commercial Complex, B-2A, B-3, Rakesh Deep Building 11, Yusuf Sarai, New Delhi, Delhi 110057",
  phones: ["011-46056867", "011-46056868"],
  email: "contact@nbinstrument.in",
};

export const partners = [
  { slug: "sald", name: "SALD", country: "Netherlands", focus: "Spatial atomic layer deposition" },
  { slug: "parteq", name: "ParteQ GmbH", country: "Germany", focus: "Advanced research technology" },
  { slug: "teer-coatings", name: "TEER Coatings Ltd", country: "UK", focus: "Advanced surface engineering solutions" },
  { slug: "pg-instruments", name: "P.G. Instruments Ltd.", country: "United Kingdom", focus: "Analytical instrumentation" },
  { slug: "ultech", name: "ULTECH Co. Ltd", country: "Korea", focus: "Leading company of semiconductor manufacturing equipment specialist" },
  { slug: "genicore", name: "GeniCore", country: "Poland", focus: "Spark plasma sintering" },
  { slug: "nordiko", name: "Nordiko Technical Service", country: "United Kingdom", focus: "Thin-film deposition" },
  { slug: "nippon-instruments", name: "Nippon Instruments Corporation", country: "Japan", focus: "Analytical instruments" },
  { slug: "spinflex", name: "Spinflex Instruments", country: "Israel", focus: "ESR / EPR spectroscopy" },
  { slug: "staton", name: "STATON", country: "Slovakia", focus: "Vacuum coating systems" },
  { slug: "korvus-technology", name: "Korvus Technology", country: "United Kingdom", focus: "Modular deposition systems" },
  { slug: "on-nano", name: "ON NANO", country: "International", focus: "Nanotechnology systems" },
];

export const resourceCategories = [
  { slug: "articles", name: "Technical Articles", description: "Perspectives on scientific processes, instrument selection and laboratory capability." },
  { slug: "application-notes", name: "Application Notes", description: "Application-led guidance connecting research requirements to appropriate technologies." },
  { slug: "case-studies", name: "Case Studies", description: "A structure for documented installations and research outcomes as verified stories become available." },
  { slug: "news", name: "News", description: "Updates from NB Instrument, its technology portfolio and the research ecosystem." },
];

/** Which technology environments each application draws on (for related links). */
export const applicationTechnologies: Record<string, string[]> = {
  "thin-film-deposition": ["thin-film-vacuum", "semiconductor"],
  "semiconductor-rd": ["semiconductor", "thin-film-vacuum"],
  "vacuum-surface-science": ["thin-film-vacuum", "characterization"],
  "epr-magnetic-resonance": ["magnetic-spin", "characterization"],
  nanotechnology: ["materials-nanotechnology", "characterization"],
  "materials-characterization": ["characterization", "materials-nanotechnology"],
  "plasma-processing": ["thin-film-vacuum", "materials-nanotechnology"],
  photonics: ["photonics", "characterization"],
};

/** NB Instrument's published support model, from requirement to long-term operation. */
export const supportStages = [
  { name: "Requirement consultation", text: "Understanding the research objective, sample, process and laboratory environment before any system is discussed." },
  { name: "Technology selection", text: "Matching the requirement with the most appropriate international technology partner and configuration." },
  { name: "Supply & installation", text: "Coordinating delivery, site readiness and installation with the manufacturer's technical teams." },
  { name: "Training", text: "Hands-on training so research teams can operate the system confidently from the first day." },
  { name: "Post-supply support", text: "Application guidance, service coordination and support throughout the working life of the system." },
];
