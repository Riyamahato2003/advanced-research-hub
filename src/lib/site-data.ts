import heroImage from "@/assets/nb-hero-vacuum.jpg";
import waferImage from "@/assets/nb-wafer.jpg";
import plasmaImage from "@/assets/nb-plasma.jpg";
import photonicsImage from "@/assets/nb-photonics.jpg";

export const images = { heroImage, waferImage, plasmaImage, photonicsImage };

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
  { slug: "tsfc-1001-pem-fuel-cell-test-station", name: "TSFC-1001 PEM Fuel Cell Test Station", category: "Fuel Cell Systems", line: "Automated platform for controlled PEM fuel-cell research and characterization.", image: heroImage },
  { slug: "x-band-pulsed-esr-epr", name: "X-band Pulsed ESR / EPR", category: "Spectroscopy Systems", line: "High-sensitivity electron spin resonance for advanced research.", image: photonicsImage },
  { slug: "icp5000-dual-view-icp-oes", name: "ICP5000 Dual View ICP-OES", category: "Elemental Analysis", line: "Automated elemental analysis with axial and radial plasma viewing.", image: plasmaImage },
  { slug: "magnetron-sputtering-system", name: "Magnetron Sputtering System", category: "Thin Film & PVD", line: "Configurable deposition for conductive and insulating materials.", image: plasmaImage },
  { slug: "precision-wet-processing-system", name: "Precision Wet Processing System", category: "Semiconductor", line: "Stable process integration for research and pilot-scale workflows.", image: waferImage },
  { slug: "nanomaterial-synthesis-system", name: "Nanomaterial Synthesis System", category: "Nanotechnology", line: "Controlled platform for nanoparticle and functional material development.", image: waferImage },
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
