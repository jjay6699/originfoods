# The Origin Foods — Design Memory

This file is the visual and interaction reference for all future public pages. New pages should feel like natural extensions of the current homepage, not a separate template.

## Brand position

The Origin Foods is a Malaysian B2B manufacturing partner for wellness, nutraceutical, functional food, and nutrition brands. The visual voice should feel precise, established, practical, and manufacturing-led—never clinical in a cold way, and never like a generic SaaS site.

## Core visual principles

- Lead with real process, product, facility, cultivation, or laboratory photography. Images do the storytelling; copy explains only what the image cannot.
- Build each major subject as one clear editorial composition rather than a grid of interchangeable cards.
- Use ample but intentional whitespace. It should frame a focal message or visual, not leave a section unfinished.
- Prefer strong alignment, simple dividers, and calm surfaces over shadows, gradients, floating panels, rounded-card systems, or decorative effects.
- Avoid left/right/left/right repetition. Give successive sections different structures: image-led proof, path selector, process sequence, source-to-production story, and contact close.

## Colour system

- Forest green (primary dark): `#103824`
- Brand green (interactive accent): `#126A3D`
- Deep ink: `#10261B`
- Warm off-white page surface: `#F4F5EF`
- Secondary light surface: `#F2F3EC`
- Footer surface: `#EEF4F9`
- Structural borders: muted sage/grey such as `#CBD0C6`
- Use white type only over dark green or suitably darkened photography. Body copy on light surfaces should remain deep ink or a restrained green-grey.

## Shared width, spacing, and header

- All desktop content aligns with the header: `width: min(1180px, calc(100% - 80px))`.
- On mobile, preserve a consistent side inset rather than allowing content to touch the viewport edges.
- The shared header is off-white, visually light, and uses the supplied Origin Foods logo. It is 92px tall on desktop and 82px on mobile.
- On the homepage, the header remains fixed above the scenes; on normal pages it behaves as the shared sticky site header.
- Do not add a new page-specific navigation style.

## Typography

- Use the project’s existing sans-serif typography. Do not introduce a contrasting serif or a new display font.
- Main editorial titles are bold, compact, and slightly tight in letter spacing. They should have confident line breaks, not oversized decorative treatment.
- Standard section titles should generally sit around `clamp(1.7rem, 2.2vw, 2.35rem)`.
- Hero and CTA titles can be larger only because they are the clear scene focal point.
- Supporting text should remain readable at normal browser zoom: avoid tiny labels and descriptions. Component titles remain smaller than their section title.
- Never use title text shadows.

## Homepage composition reference

1. **Hero** — full-width manufacturing/laboratory imagery with a dark overlay, concise headline, brief supporting copy, and direct actions. The three hero slides auto-advance every 3 seconds, with manual controls.
2. **Proof / company story** — a wide campus image paired with an off-white information band: a headline, one short credibility statement, and three proof points.
3. **Business paths** — four distinct entry paths presented as image-led, clickable panels. Keep their labels concise and use photography rather than dense feature lists.
4. **End-to-end process** — a clear, expandable manufacturing journey. Large image strips and a focused active stage explain the workflow without turning it into a dashboard.
5. **Controlled source to finished product** — cultivation, development, and production shown as connected stages, balancing one dark statement field with process detail and imagery.
6. **CTA / enquiry** — full-screen forest-green close with a large invitation and a slim four-field enquiry form. The form prepares an email to `inquiry@mytof-main.com.my` until a real CRM or form endpoint is added.
7. **Footer** — use the shared `SiteFooter` at its natural height. It is never a full-screen scene.

## Interaction and scrolling

- Homepage scrolling is native document scrolling on desktop and mobile. The browser scrollbar must begin at the top of the viewport beside the header, just as it does on all other pages.
- Do **not** use scroll snapping, wheel interception, touch interception, hash-driven scene navigation, or scripted scroll control. These patterns have caused accessibility and footer-reachability problems.
- Full-screen scene heights are visual composition tools only; they must not block access to the following content or footer.
- Keep transitions understated: opacity, colour, and simple state changes. Respect `prefers-reduced-motion`.

## Forms and actions

- Use direct, descriptive labels: “Discuss your product”, “Contact us”, “Send enquiry”, “Explore our OEM/ODM process”.
- Keep forms slim and functional. Use standard visible labels, normal input controls, clear focus states, and no floating-label treatment.
- Do not duplicate contact details beside an action unless the detail itself is useful to the task.
- Until backend integration exists, clearly rely on the configured email/intent behaviour rather than showing a fake success message.

## Responsive rules

- Recompose layouts for small screens; do not merely shrink the desktop arrangement.
- Preserve image-led storytelling but allow content to stack naturally.
- Maintain comfortable tap targets and readable supporting text at high browser zoom.
- The footer must remain reachable through a normal swipe and must not be pulled back by scripted or snapping behaviour.

## Content rules

- Tone: direct, capable, practical, and B2B.
- Avoid medical, therapeutic, disease-prevention, certification, award, or regulatory claims unless supplied and verified.
- Prefer wording such as “supports”, “develops”, “manufactures”, “coordinates”, and “helps bring to market”.
- Use concise copy: one strong headline and one useful supporting thought is usually enough.

## Final checklist for every new public page

- Content width matches the shared header width.
- The page uses the forest/off-white visual system and existing typography.
- At least one meaningful visual carries the section’s message where appropriate.
- No title shadows, generic gradients, glass effects, floating cards, or excessive rounded corners.
- Header and shared footer are present and function consistently.
- Native desktop and mobile scrolling work from top to footer without special gestures.
- Build succeeds before hand-off.
