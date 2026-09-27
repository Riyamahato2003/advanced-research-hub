import heroImage from "@/assets/nb-hero-vacuum.jpg";
import waferImage from "@/assets/nb-wafer.jpg";
import plasmaImage from "@/assets/nb-plasma.jpg";
import photonicsImage from "@/assets/nb-photonics.jpg";
import saldCard from "@/assets/product-7.png.asset.json";
import fuelCard from "@/assets/product-9.png.asset.json";
import nanoCard from "@/assets/product-11.png.asset.json";
import octoCard from "@/assets/product-13.png.asset.json";
import ionCard from "@/assets/image-15.png.asset.json";
import pvdCard from "@/assets/image-17.png.asset.json";
import chemCard from "@/assets/image-19.png.asset.json";
import pilotCard from "@/assets/image-21.png.asset.json";

/**
 * Photography supplied by NB Instrument, served from the project asset store.
 * Pointer files: src/assets/nb-hero-lab.webp.asset.json
 *                src/assets/nb-partner-map.webp.asset.json
 */
const labImage = "/__l5e/assets-v1/76597500-d483-42b3-92ba-721988e89390/nb-hero-lab.webp";
const partnerMapImage = "/__l5e/assets-v1/6f797a36-79d4-48e4-9985-982479e94c3a/nb-partner-map.webp";

export const images = { heroImage, waferImage, plasmaImage, photonicsImage, labImage, partnerMapImage };

export type Technology = { slug: string; name: string; number: string; summary: string; details: string; topics: string[]; image: string };
export const technologies: Technology[] = [
  { slug: "thin-film-vacuum", name: "Thin Film & Vacuum", number: "01", summary: "Controlled environments for deposition, coating and vacuum research.", details: "Platforms spanning magnetron sputtering, PVD coating, evaporation and vacuum technology for research and precision-led process development.", topics: ["Magnetron sputtering", "PVD coating", "Vacuum systems", "Deposition"], image: plasmaImage },
  { slug: "materials-nanotechnology", name: "Materials & Nanotechnology", number: "02", summary: "Systems for synthesis, surfaces and next-generation materials.", details: "Research instrumentation for nanomaterial synthesis, surface engineering and controlled materials processing.", topics: ["Nanomaterials", "Surface engineering", "Plasma processing", "Materials development"], image: waferImage },
  { slug: "characterization", name: "Characterization", number: "03", summary: "Analytical insight from elemental composition to material response.", details: "Scientific platforms for elemental analysis, spectroscopy and materials characterization across advanced laboratories.", topics: ["ICP-OES", "Spectroscopy", "Elemental analysis", "Materials testing"], image: photonicsImage },
  { slug: "magnetic-spin", name: "Magnetic & Spin Science", number: "04", summary: "High-sensitivity systems for magnetic resonance and spin research.", details: "Specialized electron spin resonance and magnetic science instrumentation for demanding research environments.", topics: ["ESR / EPR", "Magnetic systems", "Spin science", "Field control"], image: photonicsImage },
  { slug: "photonics", name: "Photonics & Lasers", number: "05", summary: "Precision optical technologies for measurement and research.", details: "Optical and laser-enabled systems selected around application requirements and research outcomes.", topics: ["Laser systems", "Photonics", "Optical technologies", "Precision measurement"], image: photonicsImage },
  { slug: "semiconductor", name: "Semiconductor & Microfabrication", number: "06", summary: "Process platforms for wafer research and microfabrication workflows.", details: "Equipment supporting semiconductor fabrication, precision wet processing, deposition and process development.", topics: ["Wafer processing", "Wet processing", "Deposition", "Microfabrication"], image: waferImage },
];

export const products = [
  { slug: "u-fast-sps-mass", name: "U-FAST (SPS) MASS", category: "Advanced Materials Processing", line: "Industrial-Scale Advanced SPS Sintering.", image: "/__l5e/assets-v1/69b38b08-9d5e-4235-81a9-9342ed46b0ba/ufast-home.png" },
  { slug: "x-band-pulsed-esr-epr", name: "X-band Pulsed ESR / EPR", category: "Spectroscopy Systems", line: "High-sensitivity electron spin resonance for advanced research.", image: "/__l5e/assets-v1/2aa938a8-3395-46bf-9eb4-829c5e74748f/pulsed-epr-home.png" },
  { slug: "hex-series", name: "HEX Series – Modular Thin Film Deposition Systems", category: "Thin Film Deposition Systems", line: "Highly Modular Thin-Film Deposition.", image: "/__l5e/assets-v1/55c4db38-4132-4d41-a344-185b543d2fe6/hex-home.png" },
  { slug: "sald-rd-spatial-ald-platform", name: "SALD R&D Spatial ALD Platform", category: "Atomic Layer Deposition Systems", line: "Atomic-precision coatings for research and scale-up.", image: saldCard.url },
  { slug: "tsfc-1001-pem-fuel-cell-test-station", name: "TSFC-1001 PEM Fuel Cell Test Station", category: "Fuel Cell Systems", line: "Controlled PEM fuel-cell testing for research and prototyping.", image: fuelCard.url },
  { slug: "nanocoat-c3-plus", name: "nanoCOAT C3+", category: "Nano-Coating Systems", line: "Integrated coating processes for wafers and large substrates.", image: nanoCard.url },
  { slug: "octomag-series", name: "OCTOMAG Series", category: "PVD Coating Systems", line: "Advanced Precision PVD Coating.", image: octoCard.url },
  { slug: "ion-beam-milling-system-7500", name: "Ion Beam Milling System 7500", category: "Ion Beam Systems", line: "Broad ion-beam processing for precision thin films and etching.", image: ionCard.url },
  { slug: "nordiko-2000-2550-pvd-systems", name: "2000 & 2550 PVD Systems", category: "Physical Vapour Deposition Systems", line: "Flexible automatic batch-load sputtering systems.", image: pvdCard.url },
  { slug: "nanochem", name: "nanoCHEM", category: "Wet Processing Systems", line: "Configurable developing, cleaning, etching and lift-off.", image: chemCard.url },
  { slug: "sald-sheet-to-sheet-spatial-ald-pilot-platform", name: "SALD Sheet-to-Sheet Spatial ALD Pilot Platform", category: "Atomic Layer Deposition Systems", line: "Pilot-scale spatial ALD for large-area substrates.", image: pilotCard.url },
];

export const applications = [
  { slug: "thin-film-deposition", name: "Thin Film Deposition", summary: "Engineer controlled films for optical, electronic and protective applications.", image: plasmaImage },
  { slug: "semiconductor-rd", name: "Semiconductor R&D", summary: "Support wafer-scale process development and microfabrication research.", image: waferImage },
  { slug: "vacuum-surface-science", name: "Vacuum & Surface Science", summary: "Create stable environments for surface preparation and analysis.", image: heroImage },
  { slug: "epr-magnetic-resonance", name: "EPR / Magnetic Resonance", summary: "Investigate paramagnetic species, free radicals and spin behavior.", image: photonicsImage },
  { slug: "nanotechnology", name: "Nanotechnology", summary: "Develop and study nanostructures, coatings and functional materials.", image: waferImage },
  { slug: "materials-characterization", name: "Materials Characterization", summary: "Connect composition and structure to material performance.", image: photonicsImage },
  { slug: "plasma-processing", name: "Plasma Processing", summary: "Use controlled plasma environments for deposition and surface engineering.", image: plasmaImage },
  { slug: "photonics", name: "Photonics", summary: "Enable optical measurement, light–matter research and precision experiments.", image: photonicsImage },
];

export const contact = {
  address: "Gulmohar Commercial Complex, B-2A, B-3, Rakesh Deep Building 11, Yusuf Sarai, New Delhi, Delhi 110057",
  phones: ["011-46056867", "011-46056868"],
  email: "contact@nbinstrument.in",
};

export const partners = [
  { slug: "sald", name: "SALD", country: "Netherlands", focus: "Spatial atomic layer deposition" },
  { slug: "parteq", name: "ParteQ GmbH", country: "Germany", focus: "Advanced research technology" },
  { slug: "sint-technology", name: "SINT Technology S.r.l.", country: "Italy", focus: "Measurement and materials testing" },
  { slug: "pg-instruments", name: "P.G. Instruments Ltd.", country: "United Kingdom", focus: "Analytical instrumentation" },
  { slug: "thesix-solutions", name: "Thesix Solutions Technology", country: "Canada", focus: "Scientific systems" },
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
