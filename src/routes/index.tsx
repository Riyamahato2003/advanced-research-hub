import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { images, technologies, applications } from "@/lib/site-data";
import { ActionLink } from "@/components/button";
import { ApplicationGrid, ContactBand, Eyebrow, ProductGrid, TechnologyIndex } from "@/components/page-sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "NB Instrument — Technology Partners for Advanced Research" },
    { name: "description", content: "NB Instrument connects India's research ecosystem with advanced scientific, semiconductor, analytical and materials technologies." },
    { property: "og:title", content: "NB Instrument — Technology Partners for Advanced Research" },
    { property: "og:description", content: "Advanced international technologies, technical understanding and application-focused support for research in India." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function Finder() {
 const [step,setStep]=useState(0); const [answers,setAnswers]=useState<string[]>([]);
 const questions=[{q:"What are you working on?",a:["Thin films & surfaces","Semiconductor devices","Advanced materials","Spin & spectroscopy"]},{q:"What are you trying to achieve?",a:["Deposit or coat","Process or fabricate","Analyze or characterize","Develop a new method"]},{q:"Which environment matters most?",a:["Vacuum","Plasma","Optical","Magnetic"]}];
 const choose=(a:string)=>{setAnswers([...answers,a]);setStep(step+1)};
 return <section className="finder-section"><div className="container finder-grid"><div><Eyebrow>Solution finder</Eyebrow><h2>Find the right technology.</h2><p>Begin with the research objective, not a model number.</p><div className="finder-progress">{[0,1,2].map(i=><span key={i} className={i<=step?"active":""}/>)}</div></div><div className="finder-panel">{step<3?<><small>0{step+1} / 03</small><h3>{questions[step].q}</h3><div className="finder-options">{questions[step].a.map(a=><button key={a} onClick={()=>choose(a)}>{a}<ArrowRight/></button>)}</div></>:<><Eyebrow>Recommended direction</Eyebrow><h3>{answers.includes("Thin films & surfaces")||answers.includes("Vacuum")||answers.includes("Plasma")?"Thin Film & Vacuum":"Application-led technology review"}</h3><p>Your selections: {answers.join(" · ")}. Our team can translate this into a relevant system configuration.</p><ActionLink to="/contact">Review this requirement</ActionLink><button className="finder-reset" onClick={()=>{setStep(0);setAnswers([])}}>Start again</button></>}</div></div></section>
}

function HomePage(){return <main>
 <section className="home-hero"><img src={images.heroImage} alt="Ultra-high-vacuum thin-film deposition chamber" width={1920} height={1080}/><div className="image-shade"/><div className="container hero-content"><Eyebrow>Scientific instrumentation · India</Eyebrow><h1>Advanced technology.<br/><em>Engineered for research.</em></h1><p>NB Instrument connects India’s research and innovation ecosystem with advanced scientific technologies and application-focused technical expertise.</p><div className="hero-actions"><ActionLink to="/technologies" tone="light">Explore technologies</ActionLink><ActionLink to="/contact" tone="outline">Discuss your requirement</ActionLink></div><span className="scroll-cue"><ArrowDown/>Scroll to explore</span></div></section>
 <section className="intro-section"><div className="container intro-grid"><Eyebrow>Our role</Eyebrow><h2>Technology partners for advanced research.</h2><div><p>We work at the intersection of international technology and India’s research ecosystem—helping laboratories and R&D teams move from technical requirement to a capable, supportable system.</p><ActionLink to="/about" tone="outline">Meet NB Instrument</ActionLink></div></div><div className="container stats"><div><strong>18+</strong><span>Years of experience</span></div><div><strong>15</strong><span>Business partners</span></div><div><strong>Pan-India</strong><span>Technical reach</span></div><div><strong>Research</strong><span>Focused</span></div></div></section>
 <TechnologyIndex/>
 <section className="feature-story dark-section"><div className="feature-image"><img src={images.plasmaImage} alt="Plasma process inside a vacuum chamber" loading="lazy" width={1600} height={1200}/></div><div className="feature-copy"><Eyebrow>Featured technology</Eyebrow><h2>Advanced thin-film deposition.</h2><p>Configurable platforms for controlled coating, materials development and precision process research—from magnetron sputtering to vacuum integration.</p><ul><li>Research-led configurations</li><li>Process flexibility</li><li>Installation and technical support</li></ul><ActionLink to="/technologies/thin-film-vacuum" tone="light">Explore thin film & vacuum</ActionLink></div></section>
 <section className="section applications-section"><div className="container"><div className="section-heading split"><div><Eyebrow>Applications</Eyebrow><h2>Start with what you need to achieve.</h2></div><p>Explore technologies through research outcomes, materials and process environments.</p></div><ApplicationGrid/></div></section>
 <Finder/>
 <section className="section systems-section"><div className="container"><div className="section-heading split"><div><Eyebrow>Selected systems</Eyebrow><h2>Purpose-built scientific platforms.</h2></div><div><p>Each system is presented through its research role, core capability and relevant application environment.</p><ActionLink to="/products" tone="outline">Explore all systems</ActionLink></div></div><ProductGrid limit={3}/></div></section>
 <section className="why-section"><div className="container"><Eyebrow>Why NB</Eyebrow><div className="why-grid">{[["01","Technical understanding"],["02","International technology access"],["03","Application support"],["04","Research ecosystem"],["05","OEM collaboration"],["06","Lifecycle support"]].map(([n,t])=><div key={n}><small>{n}</small><h3>{t}</h3></div>)}</div></div></section>
 <section className="ecosystem"><div className="container ecosystem-grid"><div><Eyebrow>Research ecosystem</Eyebrow><h2>Built around the institutions advancing Indian science.</h2></div><div className="institution-list">{["IITs","IISc","IISERs","CSIR","DRDO","ISRO","National Laboratories","Universities","Industrial R&D"].map(x=><span key={x}>{x}</span>)}</div></div></section>
 <section className="section journal"><div className="container"><div className="section-heading split"><div><Eyebrow>Research intelligence</Eyebrow><h2>Ideas, applications and developments.</h2></div><ActionLink to="/resources" tone="outline">Visit resources</ActionLink></div><div className="journal-grid"><Link to="/resources/application-notes" className="lead-story"><img src={images.waferImage} alt="Semiconductor wafer process" loading="lazy" width={1600} height={1200}/><Eyebrow>Application notes</Eyebrow><h3>Connecting process requirements to the right research platform.</h3></Link><div>{["Thin-film process considerations","Choosing an elemental analysis workflow","Building a supportable research environment"].map((x,i)=><Link key={x} to="/resources/articles"><small>Insight 0{i+1}</small><h3>{x}</h3><ArrowRight/></Link>)}</div></div></div></section>
 <ContactBand/>
 </main>}
