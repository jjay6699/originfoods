# Origin Foods Redesign: Header + Hero

## Goal

Create the first slice of a full corporate redesign for The Origin Foods Sdn Bhd. The homepage should immediately position the company as a credible Malaysian OEM partner for nutraceutical, wellness, functional food, and wheatgrass-based products.

## Audience

The primary audience is B2B: brand owners, supplement companies, distributors, export partners, and businesses looking for contract manufacturing or custom formulation.

## Brand System

- Primary accent: `#005DAB`
- Primary dark: `#003D72`
- Soft accent: `#EAF5FF`
- Main text: near-navy `#102033`
- Muted text: cool gray `#5D6B7C`
- Page background: white and very light cool gray
- Style: clean, corporate, precise, manufacturing-led

## Header

- Use a solid `#005DAB` corporate header with a sticky position.
- Use the existing white transparent `logo.png` directly on the blue header background.
- Do not show the old subtitle/tagline beside the logo.
- Navigation items: About, OEM Services, Facilities, Wheatgrass, Products, Contact.
- Do not show a header CTA button until the enquiry/contact section is designed.
- Mobile header should collapse into a menu button with a clean vertical menu.

## Hero

- Eyebrow: "OEM Nutraceutical Manufacturing"
- Headline: "Manufacturing Health, Wellness & Functional Food Products in Malaysia"
- Body: "The Origin Foods supports brand owners with contract manufacturing, custom formulation, product registration support, and biotechnology-led wheatgrass expertise."
- Primary CTA: "Discuss Your Product"
- Secondary CTA: "Explore Capabilities"
- Visual direction: facility, lab, manufacturing, or clean OEM production imagery.
- Use a full-width hero background image slider with text and buttons over the image, similar in purpose to a Revolution Slider but cleaner and more corporate.
- Use two slides: one manufacturing/facility image and one quality lab/formulation image.
- Apply a dark blue overlay so white text remains readable on every slide.
- Keep the hero around 55% viewport height on desktop, not full-screen.
- Do not place the text inside a visible box; use open overlay text with enough width for natural line breaks.
- Do not show an eyebrow/tag above the hero headline.
- Keep title font sizes restrained; avoid oversized hero typography.

## Services Section

- Use content from the old Personalised Services page, rewritten into modern B2B language.
- Present four services: Contract Manufacturing, Custom Formulation, Registration & Export Documentation, and Laboratory Testing & Analysis.
- Use professional cards with clear numbering, concise summaries, and service enquiry links.
- Avoid the old sparse icon/button layout; the section should feel like a credible OEM capability overview.
- Certification and regulatory wording must remain support-oriented unless verified as current.

## Facilities Section

- Replace the old plain text block with a split section: facility image plus capability copy.
- Present manufacturing standards and product formats as capability signals, with a note that certifications/facility claims must be verified before publishing.
- Use blue accents, compact highlight rows, and production-format chips instead of a single long paragraph.

## Wheatgrass Section

- Replace the old text/image row with a clean technology story.
- Use a relevant indoor aeroponic wheatgrass image.
- Present the story as controlled cultivation, whole-plant harvesting, and low-temperature processing.
- Copy must be public-facing and must not mention the old website or the redesign process.
- Avoid strong medical or disease-prevention claims; keep the copy focused on process and product quality.

## Products Section

- Present four core product category cards, matching the simpler intent of the previous product preview.
- Use polished, public-facing copy only; do not mention redesign, development state, old website, or original website.
- Present category capability instead of medical or disease claims.
- Use relevant category images instead of initials.
- Do not show bottom format tags in product cards.

## Contact Section

- Replace the old embedded map screenshot and plain form with a professional contact section.
- Use a two-column layout: compact company contact details and an enquiry form.
- Use the main brand accent `#005DAB` consistently for buttons and blue panels.
- Show a real map embed for the Puchong address with a clear address card beside it.
- The form is frontend-only until backend/CRM integration is added.

## Copy Rules

- Keep the tone corporate, direct, and B2B.
- Avoid exaggerated health or disease-treatment claims.
- Treat certifications, facility size, awards, and regulatory language as facts that must be verified before final publication.
- Prefer "supports", "helps develop", "manufacturing capability", and "product registration support" over medical guarantees.

## Future CRM Notes

- Keep the public site under `/`.
- Reserve future CRM/admin work for `/admin` or `/crm`.
- The enquiry CTA and future contact form should later be connectable to a lead database and CRM inbox.
- Do not expose unfinished CRM UI during this first slice.

## Acceptance Checklist

- Homepage loads without runtime errors.
- Header is readable and responsive.
- Existing logo is visible on the blue header.
- `#005DAB` is the main accent.
- Hero copy matches the approved first-slice plan.
- CTAs are prominent and do not overlap on mobile.
- Hero slider uses two relevant manufacturing/lab background images and can later be replaced with real company photography.
