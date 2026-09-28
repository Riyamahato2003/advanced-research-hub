import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/site-data";
import emblem from "@/assets/nb-emblem.png.asset.json";
import { ActionLink } from "./button";

const nav = [["Technologies", "/technologies"], ["Products", "/products"], ["Applications", "/applications"], ["Partners", "/partners"], ["Customers", "/customers"], ["About", "/about"]] as const;
const technologyAreas = ["Thin Film & Vacuum", "Materials & Nanotechnology", "Characterization", "Magnetic & Spin Science", "Photonics & Lasers", "Semiconductor & Microfabrication", "Surface Engineering", "Atomic Layer Deposition", "Advanced Manufacturing / Processing"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="nav-shell">
      <Link to="/" className="wordmark" aria-label="NB Instrument home"><img src={emblem.url} alt="" /><strong>NB INSTRUMENT</strong></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, to]) => label === "Technologies" ? <div className={`mega-trigger ${mega ? "is-open" : ""}`} key={label} onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}><Link to={to} onFocus={() => setMega(true)} aria-expanded={mega} aria-haspopup="true">{label}<ChevronDown size={13}/></Link><div className={`mega-menu ${mega ? "is-open" : ""}`}><div className="mega-intro"><span className="eyebrow">Technology portfolio</span><h2>Systems selected around the research.</h2><Link to="/technologies">View all technologies ↗</Link></div><div className="mega-grid">{technologyAreas.map((name, i) => <div key={name} className="mega-item"><small>{String(i + 1).padStart(2, "0")}</small><span>{name}</span></div>)}</div></div></div> : <Link key={label} to={to}>{label}</Link>)}
      </nav>
      <ActionLink to="/contact" className="nav-cta">Discuss your requirement</ActionLink>
      <button type="button" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label,to]) => <Link key={label} to={to} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}<ActionLink to="/contact">Discuss your requirement</ActionLink></nav>}
  </header>;
}

export function SiteFooter() {
   return <footer className="site-footer"><div className="container"><div className="footer-lead"><div><div className="wordmark wordmark-footer"><img src={emblem.url} alt="" /><strong>NB INSTRUMENT</strong></div><h2>Technology for the questions that move research forward.</h2></div><ActionLink to="/contact" tone="light">Start a conversation</ActionLink></div><div className="footer-grid"><div><span className="eyebrow">Explore</span>{nav.slice(0,3).map(([l,t])=><Link key={l} to={t}>{l}</Link>)}</div><div><span className="eyebrow">Company</span>{nav.slice(3).map(([l,t])=><Link key={l} to={t}>{l}</Link>)}<Link to="/locations">Locations</Link><Link to="/contact">Contact</Link></div><div className="footer-contact"><span className="eyebrow">New Delhi</span><p>{contact.address}</p><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phones[0]}`}>{contact.phones[0]}</a></div></div><div className="footer-bottom"><span>© 2026 NB Instrument Pvt. Ltd.</span><span>Innovation · Commitment · Dedication</span></div></div></footer>;
}
