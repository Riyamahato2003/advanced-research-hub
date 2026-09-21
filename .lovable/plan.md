# NB Instrument Flagship Website

## Goal
Build a complete multi-page website that positions NB Instrument as a technology partner for advanced research—not an equipment reseller. The experience will be original, with Posalux used only as a benchmark for restraint, editorial composition, technical imagery, and interaction quality.

## Visual direction
- **Palette:** white, cool grey, deep navy, near-black, and one restrained electric-blue accent; no gradients or decorative color effects.
- **Typography:** Manrope for display and body, with large architectural headlines, compact uppercase labels, and disciplined line lengths.
- **Composition:** 12-column editorial grid, generous whitespace, asymmetrical image/text layouts, restrained 0–8px radii, hairline borders, and minimal shadows.
- **Rhythm:** alternate white, grey, navy, image-led, and near-black sections; use full-bleed technical imagery and oversized crops rather than thumbnail grids.
- **Motion:** subtle reveal, image scale, arrow movement, menu transitions, and sticky storytelling; reduced-motion support throughout.

## Information architecture
Create the requested routes:
- Home, Solutions, Technologies, Products, Applications, Partners, Resources, About, Locations, Contact
- Six technology detail pages
- Product, application, and partner detail routes
- Resource category routes for articles, application notes, case studies, and news

Every route will have unique titles, descriptions, Open Graph metadata, semantic headings, and internal links.

## Site-wide experience
- Premium sticky navigation with transparent-over-image and solid-on-scroll states
- Keyboard-accessible Technologies mega menu and carefully designed mobile navigation
- Shared editorial page introductions, breadcrumbs, content bands, calls to action, and substantial footer
- Reusable technology, product, application, partner, and editorial-story treatments without reducing everything to identical cards
- Consistent focus states, form labels, image descriptions, and touch targets

## Homepage
- Near-full-height cinematic technical hero with the supplied positioning and two restrained actions
- Editorial introduction: “Technology Partners for Advanced Research”
- Credibility figures shown as typography and dividers, not animated counters
- Asymmetrical technology atlas and alternating featured-technology stories
- Applications explorer with varied tile scales
- Three-step “Find the Right Technology” interaction with progressive transitions and recommendations
- Curated systems, partner showcase, research ecosystem, “Why NB,” application stories, and editorial resources
- Large contact transition into the footer

## Inner pages
- **Technologies:** overview plus six editorial category pages with related systems, applications, resources, and enquiry path
- **Products:** non-commerce system index and reusable detail page with overview, verified capabilities, specifications, applications, resources, and contact
- **Applications:** outcome-led overview and reusable application detail story
- **Partners:** restrained interactive index and reusable partner profile pages
- **Resources:** publication-style hub and focused category indexes
- **About:** company story, verified history, operating model, support lifecycle, and locations presented visually
- **Contact:** premium split composition with contact details and a fully validated enquiry form interface

## Content and imagery safeguards
- Use only claims, partners, products, specifications, locations, and contact details verifiable from NB Instrument’s published material.
- Label incomplete records as editable placeholders instead of inventing facts, customer claims, awards, certifications, testimonials, or offices.
- Produce original technical imagery inspired by vacuum, deposition, wafers, plasma, microscopy, magnetic systems, and precision engineering; no copied Posalux assets or generic lab-coat stock photography.
- Partner and institution logos appear only when legitimacy is verifiable; otherwise use typographic treatments.

## Technical implementation
- Define all color, type, spacing, motion, border, and shadow tokens in the global design system.
- Build focused reusable React components and content collections so detail routes remain consistent and editable.
- Use responsive image loading, lazy loading below the fold, lightweight CSS motion, and minimal client-side JavaScript.
- Keep the enquiry experience frontend-only unless backend delivery is requested separately.

## Validation
- Check all routes and interactions at 1440, 1280, 1024, 768, 390, and 375px.
- Verify navigation, menus, finder steps, forms, keyboard use, focus states, reduced motion, overflow, typography, image crops, metadata, and console/runtime health.
- Complete a final visual pass specifically for template-like patterns, catalogue density, repetitive cards, weak hierarchy, and inconsistent spacing.
