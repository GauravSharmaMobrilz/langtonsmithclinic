# Langton Smith Clinic — React Homepage Mock Design Plan

**Project:** Consolidation of `bioresonancetraining.com` and `langtonsmithclinic.com`  
**Destination domain:** `langtonsmithclinic.com`  
**Prototype stack:** React + JavaScript (no TypeScript) + Tailwind CSS + Vite  
**WordPress target:** Finix theme (assumed to be the Power-Squall “Finix – Technology & IT Solutions WordPress Theme”; verify the exact purchased theme/version before porting)  
**Deliverables in this workspace:** Two distinct homepage concepts, a reusable React component system, this plan, and a local-only `dailylog.md`.

---

## 1. Project interpretation and design objective

The project is not simply a visual refresh of one website. It consolidates two existing web properties into one brand and one information architecture:

1. **Langton Smith Clinic** — client-facing therapies and health-Testing services, Julie Langton Smith's background, testimonials, contact information, forms, shop/catalog links, and policies.
2. **Bioresonance Training** — practitioner education, course information and pricing, registration, devices, training handbook, and practitioner-facing resources.

The unified website must make these two journeys easy to understand without making the homepage feel like two unrelated websites joined together. The homepage should introduce the clinic and its services, explain Biofeedback/Bioresonance using the existing source copy, introduce Julie, and provide a visible route to practitioner training. The SOW also includes logo refinement for modern digital resolution and header integration; use the existing approved mark as the source of truth and do not create a new brand identity. Prepare a high-resolution/vector-ready treatment only as a faithful refinement of the source logo, retaining its recognisable proportions and colours.

**Important:** This deliverable is a client-facing *homepage mock design*, not the complete 14-page WordPress build. The architecture and visual language must anticipate all 14 SOW modules so the approved direction can be extended consistently.

## 2. Content and source-of-truth rules

### 2.1 Primary source websites

Use the existing pages and original media from these websites as the content and asset sources:

- Clinic: <https://www.langtonsmithclinic.com/>
- Training: <https://bioresonancetraining.com/>

Useful reviewed source pages:

- Clinic home: <https://www.langtonsmithclinic.com/>
- Clinic About: <https://www.langtonsmithclinic.com/about-1>
- Counselling & Transpersonal Psychotherapy: <https://www.langtonsmithclinic.com/counselling-and-transpersonal-psychotherapy>
- Hypnotherapy: <https://www.langtonsmithclinic.com/hypnotherapy>
- Full Health Testing: <https://www.langtonsmithclinic.com/full-health-Testing>
- Book: <https://www.langtonsmithclinic.com/book>
- Terms & Policies: <https://www.langtonsmithclinic.com/terms-policies>
- Training home: <https://bioresonancetraining.com/>
- Training About: <https://bioresonancetraining.com/about-us/>
- Training Courses: <https://bioresonancetraining.com/training-courses/>
- Practitioner Training: <https://bioresonancetraining.com/bioresonance-business-practitioner-training/>
- Devices: <https://bioresonancetraining.com/bioresonance-devices/>
- Training Handbook: <https://bioresonancetraining.com/bioresonance-training-handbook/>

### 2.2 Copy rules — strict

- Reuse existing website copy verbatim wherever it is used. Preserve spelling, punctuation, names, qualifications, prices, disclaimers, and testimonial wording unless the SOW explicitly supplies an updated value.
- Do **not** write new marketing copy, invent benefits, add trust claims, invent statistics, create testimonials, add service descriptions, or paraphrase health-related claims.
- Do not invent section headings or CTA wording. Use headings and link labels already present on the sites or in the SOW. Layout labels used only in code/comments are not website copy.
- A sentence may be shortened for a homepage teaser only by copying an exact contiguous excerpt from the source. Do not rewrite it. Link to the page containing the complete original copy.
- Keep the distinction between source copy and SOW-supplied additions visible in the content data file and comments.
- The updated SOW values take precedence over outdated live-site wording where they explicitly conflict. These include the training prices and the exact hypnotherapy title **“Fully qualified Senior Clinical Hypnotherapist”**.
- For health-related copy, reproduce source text without making it more definitive or stronger. Do not add clinical/medical efficacy claims.
- Use the original Julie portrait, training/device photos, book/handbook cover images, and other relevant assets from the source sites where available. Do not substitute generated people, invented product images, or unrelated stock photography. If an original asset cannot be obtained, use a neutral image placeholder clearly marked for replacement.
- For logo refinement, retain the existing brand identity; do not invent a new symbol, brand name, or tagline. The final high-resolution logo file should be supplied/approved before production deployment.

### 2.3 Source content verified during the initial review

The clinic homepage currently introduces Langton Smith Clinic as incorporating Bioresonance Training, uses the line **“For better health naturally”**, and lists Counselling, Hypnotherapy, and Full Health Testing. It also contains testimonials and a link to Bioresonance Training.

The clinic About page states that Julie Langton Smith MSc has run the clinic since 1997 and contains the founder story, training history, qualifications, and associations. The counselling page contains the counselling/transpersonal psychotherapy overview and issue list. The hypnotherapy page contains the current service copy and older accreditation wording. The full health-Testing page includes the six test categories, sample instructions, turnaround details, consultation information, and qualifications. The terms page includes clinic address/directions, fees/cancellation information, and client/patient disclaimer guidance.

The training site contains an introduction to Biofeedback/Bioresonance, the practitioner course, course prerequisites and certification information, training modules, the SCOPE and MARS III device descriptions, and the Bioresonance Training Handbook content and existing book pricing. The SOW further requires the training page to cover Part 1, Part 2, combined training, annual refresher, course modules, certification criteria, case studies, device sourcing, and customs/shipping guidance; include each of these only with source/client-approved detail, and flag any missing copy instead of inventing it.

### 2.4 Unavailable source documents / mandatory content blockers

The SOW provides these source attachments:

- Practitioner Registration Form: <https://docs.google.com/document/d/1KERq5c1zafcyy_P1Wgc5PzmbjK_UQt9R/edit?usp=share_link>
- Bioresonance Health Form: <https://docs.google.com/document/d/11b1fMjNjnVViDw4tdREZOMVIMjoDYwXG/edit?usp=share_link>

These two Google Docs could not be read in the initial review environment. Antigravity must attempt to open them using the supplied links and available local/browser access. If either document remains inaccessible, record the blocker in `dailylog.md` and leave the relevant form-field mapping explicitly pending. **Do not make up fields, consent wording, medical questions, validation rules, or legal statements.** Request a DOCX/PDF export or working access from the project owner before implementing the actual forms.

The SOW also requires a **verbatim Professional Medical Disclaimer** on the Clinical Health Testing page. The exact required text was not present in the SOW body, and the currently accessible source extracts did not establish which text is the mandatory approved version. Do not invent or paraphrase it. Locate the exact approved disclaimer in the source material or mark it as a content dependency for client confirmation before the page is built.

---

## 3. SOW coverage matrix

| SOW item | Required destination page/module | Homepage mock treatment |
|---|---|---|
| 1. Home Page | Unified homepage | Full mock; include introduction, Biofeedback/Bioresonance explanation, clinic-service overview, training highlight, Julie introduction, and navigation CTAs. |
| 2. About Us | About Us | Show a concise exact-copy founder/technology teaser and clear route to the page. Full page will separate therapy science/technology theory from Julie's qualifications and clinical background. |
| 3. Bioresonance Practitioner Training | Training page | Feature the practitioner-training path and the SOW course prices; link to full course details. |
| 4. Registration Form | Registration page/form | Show a clear practitioner registration route; actual fields must map to the client document. |
| 5. Bioresonance Devices | Devices page | Include a small device/product teaser using original SCOPE/MARS imagery if available. |
| 6. Bioresonance Training Handbook | Handbook page | Include the handbook/book teaser with the correct original cover and inquiry route. |
| 7. Clinical Health Testing | Health Testing page | Promote Full Health Testing using source copy and the SOW price of £300; link to the page containing the exact approved disclaimer. |
| 8. Counselling & Psychotherapy | Counselling page | Include a service card/teaser using exact source wording. |
| 9. Clinical Hypnotherapy | Hypnotherapy page | Include a service card/teaser and use the SOW's updated title wherever the new title appears. |
| 10. Shop | Inquiry/link-based catalog | Provide a Shop navigation item. Do not show cart, checkout, payment, or payment gateway UI. |
| 11. Health Form | Health Form page/form | Provide a client/patient health-form route; actual fields must map to the supplied form document. |
| 12. Contact Us | Contact page | Prominent contact route; use the SOW mail destination and verified source contact details. |
| 13. Terms & Policies | Footer/legal module | Include footer links to Terms, Privacy, and policies using actual approved destinations/copy. |
| 14. CMS & Responsive Framework | WordPress and responsive system | Build the mock at desktop/tablet/mobile sizes and structure components for Elementor/Finix recreation. |

### 3.1 SOW values to treat as authoritative

Display these amounts exactly as supplied by the SOW, without recalculation or reinterpretation:

| Training/service | SOW value |
|---|---:|
| Practitioner Training — Part 1 | £1,250 |
| Practitioner Training — Part 2 | £1,500 |
| Combined | £2,650 |
| Annual Refresher | £350/hr |
| Bioresonance/Biofeedback Clinical Health Testing | £300 |

The source websites may display older or different amounts. Use the SOW amounts for the new design. Do not add tax, payment, financing, or currency-conversion wording.

The handbook source currently shows UK and international book prices. Retain those only where the SOW page/catalog requires them and verify them against the approved source before final production. Do not confuse handbook/book pricing with the training-course pricing above.

### 3.2 Delivery, technical and commercial requirements

- WordPress is the final CMS; the React mock is not the production site. The eventual WordPress build must be responsive across modern desktop, tablet, and mobile browsers.
- Configure standard inquiry mailer forms to send to `langtonsmithclinic@hotmail.co.uk`. Do not claim successful delivery until a live mail configuration is tested.
- Include one month of complimentary post-launch technical support for bugs/layout defects covered by the SOW. This is a delivery/support commitment, not a homepage marketing section.
- Keep direct online payment gateway/merchant processor setup out of scope. The Shop remains a link/inquiry catalog.
- Domain registration fees, hosting renewals, and paid third-party WordPress plugin licenses are out of scope.
- Structure the final WordPress pages with clean hierarchy and standard on-page SEO metadata. For the mock, use semantic headings and meaningful image alt text; do not invent SEO copy or keyword-stuffed metadata.

---

## 4. Homepage information architecture

### 4.1 Navigation grouping for the unified site

Use one header and one footer. Keep the menu understandable and avoid placing all 14 items as separate top-level links.

**Suggested desktop menu grouping (labels must be drawn from the existing site/SOW):**

- Home
- About Us
- Clinic Services (dropdown): Bioresonance/Biofeedback Clinical Health Testing; Counselling & Psychotherapy; Clinical Hypnotherapy; Health Form
- Practitioner Training (dropdown): Training; Registration Form; Bioresonance Devices; Training Handbook
- Shop
- Contact Us

Use a visible enquiry/contact action in the header if it fits the approved site navigation. Do not invent an appointment-booking workflow. Footer should include Terms & Policies, Privacy, and other approved legal links, along with existing contact/social links.

### 4.2 Recommended home page section sequence

The exact sequence may vary by concept, but both versions must cover the same essential information and routes:

1. **Header:** Existing brand/logo treatment, unified menu, contact/enquiry route, accessible mobile navigation.
2. **Hero:** Use the existing clinic name/incorporation wording and “For better health naturally” line or existing Biofeedback/Bioresonance wording. Use existing source images. Provide routes for clinic information and practitioner training; use existing link text such as “Visit Bioresonance Training” / “Contact Us” where suitable.
3. **Clinic service overview:** Counselling, Hypnotherapy, and Full Health Testing, reflecting the clinic homepage's existing three-service grouping.
4. **Biofeedback/Bioresonance introduction:** Exact excerpt from the training homepage's “What is Biofeedback and Bioresonance therapy?” section, with a route to About/technology details.
5. **Two audience paths:** Clearly separate the patient/client route from the practitioner-training route. Use source wording and links only.
6. **Practitioner training highlight:** Practitioner course introduction, prerequisites, course-module highlights, and the SOW prices. Do not overload the homepage with the whole syllabus; link to the complete course page.
7. **Julie Langton Smith introduction:** Original portrait, approved biography excerpt, and relevant qualifications from the About page.
8. **Device/handbook highlight:** Existing device and book/handbook assets, with route links. Keep it compact so it supports, rather than competes with, the main clinic journey.
9. **Testimonials:** Reuse only testimonials already published on the source site; keep attribution as originally shown. Do not edit or fabricate results.
10. **Contact/enquiry CTA:** Use the approved contact email `langtonsmithclinic@hotmail.co.uk` for standard mailer forms in the eventual WordPress site.
11. **Footer:** Unified page links, terms/privacy links, source contact details and existing social channels.

The above is a content architecture, not permission to create additional marketing copy. If a source paragraph or approved CTA does not exist, do not fill the gap with new copy.

---

## 5. Two visual design concepts

Both concepts must use the same approved source content, same page hierarchy, same destination links, and same SOW facts. They differ in composition, visual hierarchy, colour treatment, typography, imagery balance, and card/section patterns.

> **Palette note:** The initial content extraction confirms the sites' subject matter and media but does not reliably expose their complete CSS brand palette. Antigravity must inspect the actual logo and existing website styles first. The palette values below are proposed design directions, not claims that these exact hex values are current brand colours. Preserve recognizable logo colours and adjust the proposed values to harmonise with them.

### Concept A — Warm, human-centred editorial clinic

**Design idea:** A calm, personal, editorial experience. Lead with the clinic and Julie's established practice, then introduce the technology and practitioner training as a closely related specialist pathway.

**Provisional palette:**

- Warm ivory: `#F6F3ED` — primary page background.
- Deep botanical green: `#2F5147` — primary headings, navigation emphasis, primary buttons.
- Muted sage: `#A9BBA9` — secondary surfaces and small accents.
- Soft clay: `#C58F75` — restrained accent for links, labels, or small details.
- Charcoal: `#303832` — body copy.
- White: `#FFFFFF` — cards and content panels.

**Typography direction:** Editorial serif for large headings (for example, Cormorant Garamond or a close available equivalent) paired with a highly readable sans serif for body text (for example, Inter). Use the theme-supported font controls during the eventual Finix port.

**Layout direction:**

- Spacious, asymmetrical split hero with a large authentic Julie/clinic image and a clear text column.
- Warm neutral section backgrounds and restrained organic curves/soft shapes; do not use decorative shapes behind important text.
- Services in three balanced editorial cards, not a generic icon grid.
- Biofeedback/Bioresonance explanation as a broad reading section with a supporting source image.
- Two audience pathways presented as distinct, elegant panels, with practitioner training visually clear but not overpowering the clinic.
- Julie's introduction as a portrait-led story section.
- Testimonials in a restrained horizontal slider or quote layout using existing copy only.
- Rounded corners around 14–20px; soft, subtle shadows; generous whitespace.

**Overall feel:** Warm, composed, personal, natural, credible, and established. Avoid spa clichés, leaf-pattern overload, overly feminine styling, or an exaggerated luxury aesthetic.

### Concept B — Contemporary clinical and technology-led platform

**Design idea:** A more structured, modern experience that connects personal therapies with the technical/training side of bioresonance. The homepage should feel like one professional organisation with two clearly signposted audiences.

**Provisional palette:**

- Deep ink/navy: `#1F303A` — hero/feature panels and strong contrast areas.
- Deep teal: `#14545A` — primary buttons and key headings.
- Sea-glass: `#A8CDC4` — small accents and selected cards.
- Mist: `#EEF3F2` — large light sections.
- Warm white: `#FAFAF7` — primary page background.
- Graphite: `#303B40` — body copy.
- Muted brass: `#B99A62` — very limited highlight accent.

**Typography direction:** A modern sans-serif family for headings and body copy (for example, Manrope or Inter), using strong typographic scale and clean spacing. Avoid a futuristic or sci-fi typeface.

**Layout direction:**

- Structured split hero or asymmetric 60/40 grid with a clean device/clinic image composition.
- More defined section boundaries, editorial grid, and clear 12-column layout.
- Strong “Clinic Services” and “Practitioner Training” pathway panels near the top.
- Technology explanation in a structured content/image block with subtle frequency-line or waveform-inspired graphic details. These must be decorative only; do not imply medical test data or create fake scan visualisations.
- Device showcase teaser with original SCOPE/MARS images and clean specification-style cards.
- Julie's profile in a professional profile panel rather than a full-width editorial story.
- Testimonials as a compact, clean card slider.
- Smaller corner radii (8–12px), crisp borders, and subtle shadows.

**Overall feel:** Clear, contemporary, precise, professional, technology-aware, and easy to navigate. Avoid dark-mode overload, neon colours, clinical stock photography, and fabricated analytics/dashboard visuals.

### 5.1 Concept parity and switching

- Build both concepts as separate, easy-to-review React homepage variants.
- Provide a small **prototype-only** concept switcher outside the website header (for example, `Concept A` / `Concept B`). It must not be mistaken for a real website navigation item and must be removable before final client handover.
- Both concepts must have equivalent content coverage, CTA destinations, responsive states, and interactions.
- Do not blend the two concepts into one hybrid. Their layout systems and palettes must remain clearly distinguishable.

---

## 6. Design system and implementation parameters

### 6.1 Canvas, grid, and spacing

- Desktop design review: 1440px viewport, with content max width approximately 1200–1280px.
- Tablet review: 768px and 1024px widths.
- Mobile review: 390px and 360px widths.
- Use a consistent 12-column desktop grid; collapse to 6 columns/tablet and 4 columns/mobile as appropriate.
- Use a spacing scale based on 4px/8px increments; create consistent section spacing rather than arbitrary per-section values.
- Keep text measure comfortable: approximately 55–75 characters per line for long-form copy.
- Maintain generous section separation without making the homepage excessively long.
- Avoid horizontal overflow at all viewport widths.

### 6.2 Components and content model

Build reusable components rather than a single long homepage JSX file. Recommended reusable UI elements include:

- SiteHeader, DesktopNavigation, DropdownMenu, MobileNavigation, SiteFooter
- Button/LinkButton, SectionHeading, Breadcrumb (only where needed)
- ServiceCard, TrainingHighlight, DeviceCard, HandbookCard
- FounderProfile, QualificationList, TestimonialCard/TestimonialSlider
- ContactStrip, CTASection, ImageFrame, SectionContainer

Keep all site copy in a dedicated data module, not scattered through component markup. Example:

- `src/data/siteContent.js` — exact source copy, navigation labels, contact details, SOW values, source references.
- `src/data/mediaManifest.js` — original image paths, subject, source URL, intended use, dimensions/alt text once verified.

Keep the content source auditable: comments should identify whether an item came from the clinic website, training website, or SOW. Do not use placeholder paragraphs that look like final copy.

### 6.3 Accessibility

- Use semantic HTML landmarks and a logical heading hierarchy.
- All interactive controls must be keyboard accessible and have visible focus states.
- Use descriptive alt text based only on what is visible/known about the image; decorative imagery gets empty alt text.
- Maintain WCAG AA contrast for normal text and controls.
- Do not use colour alone to communicate meaning.
- Respect `prefers-reduced-motion`; provide an equivalent non-animated experience.
- Mobile menu and dropdowns must support keyboard and touch.
- Use accessible labels and error messages for any prototype interaction. Do not create real form fields until their source documents have been inspected.

### 6.4 Motion and interaction

- Motion must feel calm and deliberate, not distracting.
- Use short transitions, typically 180–350ms, with restrained easing.
- Use small hover/focus elevation, border/colour transitions, and subtle image scale only where appropriate.
- Use IntersectionObserver for gentle in-view reveals; avoid animation on every text line or every card.
- Keep carousels user-controlled; do not force rapid autoplay. Pause or disable movement when reduced motion is requested.
- Header sticky behaviour must not cover anchor targets. Provide a clear mobile menu open/close state.
- Buttons and links must have real destinations or be visibly marked as non-functional prototype controls. Do not use dead buttons.
- Avoid heavy parallax, looping video, background particles, fake scanning results, or excessive animation libraries.

### 6.5 Technical and performance expectations

- Use React with JavaScript (`.js` / `.jsx`), Vite, and Tailwind CSS.
- Do not use TypeScript.
- Do not add a standalone traditional `core.css` or large custom CSS framework. Use Tailwind utility classes and a minimal Tailwind entry/configuration only.
- Use lightweight vanilla JavaScript and React state for behaviours. Avoid jQuery and unnecessary animation dependencies.
- Use responsive local images, appropriate `width`/`height` or aspect-ratio constraints, and lazy loading below the fold.
- No autoplay hero video. Avoid large image downloads and layout shift.
- Ensure browser console is clean and React key warnings are resolved.

### 6.6 Tailwind / WordPress style collision prevention

The mock will be a separate React application, but it must be easy to translate into Finix/Elementor without global style conflicts:

- Use a Tailwind prefix such as `tw-` for utility classes.
- Disable Tailwind Preflight (`corePlugins: { preflight: false }`) to avoid a broad reset that would conflict with a WordPress theme when styles are reused.
- Scope prototype markup under a dedicated wrapper class such as `.ls-mock-root`.
- Avoid global element selectors and avoid broad `!important` rules.
- Do not style generic selectors such as `header`, `footer`, `h1`, `a`, or `button` outside the application wrapper.
- Keep colours, spacing, typography, radii, shadows, and breakpoints tokenised so they can be recreated in Finix Theme Options/Elementor Global Styles.

---

## 7. Recommended project file structure

Use a clear, production-minded structure while keeping the project appropriate for a focused homepage prototype. JavaScript only; no TypeScript files.

```text
langton-smith-mock/
├── public/
│   ├── favicon/                  # Only if an existing approved icon is available
│   └── media/                    # Optimised, licensed/source-approved public assets
├── src/
│   ├── assets/
│   │   ├── images/               # Source-site images, locally stored and optimised
│   │   ├── logos/                # Original logo variants
│   │   └── icons/                # Small approved SVG/icon assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.jsx
│   │   │   ├── DesktopNavigation.jsx
│   │   │   ├── MobileNavigation.jsx
│   │   │   └── SiteFooter.jsx
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionContainer.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── ImageFrame.jsx
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── ServiceOverview.jsx
│   │       ├── BioresonanceIntro.jsx
│   │       ├── AudiencePathways.jsx
│   │       ├── TrainingHighlight.jsx
│   │       ├── FounderIntroduction.jsx
│   │       ├── DeviceHandbookHighlight.jsx
│   │       ├── TestimonialsSection.jsx
│   │       └── ContactCallout.jsx
│   ├── concepts/
│   │   ├── concept-a/
│   │   │   ├── HomePage.jsx
│   │   │   └── conceptA.tokens.js
│   │   └── concept-b/
│   │       ├── HomePage.jsx
│   │       └── conceptB.tokens.js
│   ├── data/
│   │   ├── siteContent.js        # Exact content and SOW values, source-noted
│   │   └── mediaManifest.js      # Asset source/use/alt-text register
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useReducedMotion.js
│   ├── utils/
│   │   └── navigation.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── implementation-plan.md
└── dailylog.md                  # LOCAL ONLY — must be ignored by Git
```

The component names are guidance; Antigravity may refine them as long as responsibilities remain clear and reusable. Avoid creating components that only wrap one element without a meaningful role.

---

## 8. Finix WordPress compatibility and migration handoff

### 8.1 Assumption to verify

This plan assumes Finix means **Finix – Technology & IT Solutions WordPress Theme by Power-Squall**. Its published product information describes Elementor page building, multiple header layouts, responsive layouts, Gutenberg compatibility, and a Bootstrap 4.x grid foundation. Its documentation describes Elementor-built inner pages and theme options. Verify the purchased theme package, exact version, bundled plugins, and actual site setup before final WordPress implementation.

References:

- Theme landing page: <https://finix.powersquall.com/intro/>
- Theme documentation: <https://powersquall.com/wp-themes/docs/finix/>
- ThemeForest product listing: <https://themeforest.net/item/finix-technology-it-solutions-wordpress-theme/33239452>

### 8.2 Prototype-to-WordPress rules

- The React mock is a visual/interaction prototype. Do not claim that the React application itself is the final WordPress theme or that it can be copied directly into Elementor.
- Build each visible section so it can be reconstructed using Elementor containers/columns, theme-supported widgets, and reusable Elementor templates.
- Keep the global header and footer logically separate from page sections so they can be mapped to Finix header/footer options or Elementor templates according to the installed version.
- Use standard semantic sections, headings, buttons/links, image blocks, and repeatable cards. Avoid unusual DOM dependencies, canvas-only text, CSS grid tricks that cannot be recreated in Elementor, and complex JS-only layouts.
- Keep every section's content separate from its presentation. This supports copying the same exact source copy into WordPress fields/widgets.
- Use a small, tokenised design system that can be translated into Finix theme colours, typography, spacing, and Elementor Global Styles.
- Keep custom behaviours progressively enhanced. Do not require a React runtime, custom API, or client-side application state for ordinary WordPress content sections.
- Use the theme's existing header/footer and global settings where possible; avoid rebuilding or overriding the entire theme.
- If a feature cannot be reproduced cleanly in Elementor/Finix, flag it and propose a theme-native alternative rather than silently implementing a fragile custom dependency.
- The Shop remains a product catalog with inquiry/outbound links only. Do not add WooCommerce checkout or payment gateway elements to the mock.
- Forms are visual destinations only until the supplied original documents are available and the WordPress mailer configuration is approved. The final standard inquiry forms must send to `langtonsmithclinic@hotmail.co.uk` as the SOW specifies.

### 8.3 WordPress page mapping (for later build)

| Prototype component | Likely WordPress/Finix implementation |
|---|---|
| SiteHeader / navigation | Finix header layout + WordPress menu / Elementor header template if supported |
| Hero | Elementor container with heading, text, buttons, and image |
| Service cards | Reusable Elementor containers or theme service/card elements |
| Bioresonance content | Standard Elementor text/image sections |
| Practitioner training highlight | Elementor content section + course pricing cards/table |
| Julie profile | Image/text two-column container |
| Testimonials | Elementor/theme testimonial element using approved existing testimonials |
| Device/handbook highlight | Reusable image/content cards linked to dedicated pages |
| Contact callout | Theme/Elementor section + approved form plugin integration |
| Footer / legal links | Finix footer layout or Elementor footer template |

---

## 9. Five Antigravity prompts — use in sequence

Paste each prompt as a separate task. Keep the project open in the same Antigravity workspace so later prompts can build on the existing implementation. The prompts are deliberately constrained to prevent content invention and to keep the React output portable to Finix/Elementor.

### Prompt 1 — Audit, project setup, content register, and design foundation

```text
You are the lead frontend architect and senior UI/UX designer for the Langton Smith Clinic website merger.

PROJECT GOAL
Create a client-presentable React homepage prototype for a unified website at langtonsmithclinic.com, merging the existing content and assets from:
- https://www.langtonsmithclinic.com/
- https://bioresonancetraining.com/

Read the supplied SOW and implementation-plan.md completely before coding. This is a homepage mock only, but its structure must anticipate all 14 SOW pages/modules. The final approved design will later be rebuilt in WordPress using the Finix WordPress theme (assume Power-Squall Finix unless the project files identify a different purchased version).

STRICT CONTENT RULE
Use only content that already exists on the two source websites or that is explicitly supplied in the SOW. Do not invent, paraphrase, embellish, or write marketing copy. Preserve original text exactly. SOW values override older source values where the SOW explicitly specifies an update. Do not invent form questions or medical/legal wording.

SOURCE DOCUMENTS
Try to inspect these exact Google Docs links:
- Registration Form: https://docs.google.com/document/d/1KERq5c1zafcyy_P1Wgc5PzmbjK_UQt9R/edit?usp=share_link
- Health Form: https://docs.google.com/document/d/11b1fMjNjnVViDw4tdREZOMVIMjoDYwXG/edit?usp=share_link
If you cannot access either document, record the blocker in dailylog.md and mark the field mapping as pending. Do not create placeholder medical questions or consent language that could be mistaken for approved content.

FIRST TASKS
1. Inspect both source websites and all relevant pages listed in implementation-plan.md. Review their real logo, brand colours, original images, Julie's portrait, device photographs, book/handbook images, current copy, contact links, social links, testimonials, and existing page hierarchy.
2. Create a content register in src/data/siteContent.js. For every content block, add a code comment or metadata field identifying its source (clinic site, training site, or SOW). Keep original content as exact strings. Keep source URLs in the register.
3. Create src/data/mediaManifest.js with each reused asset's source URL, local file path, intended use, and accurate alt text. Download/use only original or client-approved site assets. Do not hotlink images as the final solution. If an asset cannot be retrieved, use a neutral labelled placeholder and log the issue.
4. Set up React + JavaScript (no TypeScript) + Vite + Tailwind CSS. Do not use a standalone core.css. Use Tailwind utility classes. Configure a `tw-` Tailwind prefix, disable Preflight, and scope the app under `.ls-mock-root` to reduce WordPress/Finix CSS collisions.
5. Create the industry-level component structure shown in implementation-plan.md or improve it while preserving clear separation of layout, common UI, homepage sections, design concepts, content, hooks, and utilities.
6. Create two separately addressable homepage concept components: Concept A and Concept B. Do not merge their visual direction. Add a prototype-only switcher outside the website header.
7. Add `/dailylog.md` to `.gitignore`. The log must stay local and must never be committed or published. Keep `.gitignore` itself committed so the ignore rule is retained.
8. Create a README with install/run commands and a brief explanation of the two concept routes/switcher.

DO NOT build the page visuals yet beyond a minimal shell/design-token foundation. First finish the content/media inventory, folder structure, configuration, and log. Then report what source content/assets were found and what is still blocked.

TECH RULES
- React, JavaScript, Vite, Tailwind CSS only for styling; no TypeScript.
- No custom core CSS framework or global broad selectors.
- Use clean, reusable, well-named components.
- No jQuery and no unnecessary libraries.
- Do not change or delete existing project files without inspecting them first.
- Do not add fake testimonials, invented claims, fake stats, placeholder prices, or lorem ipsum.
```

### Prompt 2 — Build Concept A: warm, human-centred editorial homepage

```text
Implement Concept A of the Langton Smith Clinic homepage in the existing React project.

Read implementation-plan.md and the content register before changing code. Use only exact, approved copy from src/data/siteContent.js. Do not write new copy, do not paraphrase, and do not use lorem ipsum. If an area has no verified copy, omit the paragraph or show a clearly labelled design placeholder that cannot be mistaken for final website content.

CONCEPT A DESIGN DIRECTION
Warm, human-centred editorial clinic. Provisional palette:
- Warm ivory #F6F3ED
- Deep botanical green #2F5147
- Muted sage #A9BBA9
- Soft clay #C58F75
- Charcoal #303832
- White #FFFFFF
First inspect the actual source logo and styles. Preserve recognizable logo colours and adjust these provisional tokens to harmonise with the real brand.

TYPOGRAPHY
Use an editorial serif heading style (Cormorant Garamond or a suitable available equivalent) with a clean sans-serif body family (Inter or equivalent). Use readable sizes and line lengths. Keep typography tokens centralised.

HOMEPAGE CONTENT AND ORDER
1. Unified header and navigation grouping from the plan.
2. Split editorial hero using existing clinic title/incorporation content and the exact existing line “For better health naturally” where appropriate. Use a real source-site image. Include valid routes such as “Contact Us” and “Visit Bioresonance Training” only where these exact labels exist in the source.
3. Clinic service overview: Counselling, Hypnotherapy, Full Health Testing.
4. “What is Biofeedback and Bioresonance therapy?” introduction using an exact excerpt from the training website.
5. Two visually distinct audience paths: existing clinic services and practitioner training. Use only source/SOW wording.
6. Practitioner training highlight with SOW pricing exactly: Part 1 £1,250; Part 2 £1,500; Combined £2,650; Annual Refresher £350/hr. Link to the training page. Do not imply payment checkout.
7. Julie Langton Smith introduction using the original portrait and a verified exact biography excerpt/qualifications.
8. Compact devices/handbook preview using actual images from the training site.
9. Existing testimonials only, with original attribution and no edits.
10. Contact/enquiry section and unified footer with legal links.

VISUAL EXECUTION
- Use an asymmetrical image-led hero, generous whitespace, warm neutral section backgrounds, subtle organic shapes, and editorial image framing.
- Use three service cards with restrained borders/shadows; avoid a generic icon-heavy layout.
- Keep the clinic journey primary while ensuring the practitioner training route is immediately visible.
- Use 14–20px corner radii and subtle shadow only where it helps hierarchy.
- Avoid spa clichés, excessive leaves, fake wellness badges, decorative medical symbols, and luxury-hotel styling.

RESPONSIVE
Design and implement clean states at 1440px, 1024px, 768px, 390px, and 360px. At mobile, stack split layouts, preserve readable text size, avoid horizontal overflow, and keep tap targets comfortable.

CODE QUALITY
Use shared components where appropriate, but do not force Concept A and Concept B to share the same layout. Keep content in the data file. Add only Tailwind utility classes with the `tw-` prefix. Do not use TypeScript or a global custom CSS file. Log every action and validation result in dailylog.md.

Finish Concept A fully before starting Concept B. Ensure all links/buttons work or are marked as prototype-only; no dead controls.
```

### Prompt 3 — Build Concept B: contemporary clinical and technology-led homepage

```text
Now implement Concept B as a genuinely different visual concept in the same React project. Do not simply recolour or rearrange Concept A. Read the plan and source content register first.

STRICT COPY RULE
Use exactly the same approved source content and SOW data as Concept A. Do not invent headings, paragraphs, testimonials, medical claims, prices, statistics, or form fields. Do not paraphrase. Where exact copy is not available, omit the copy or label a neutral placeholder clearly as pending.

CONCEPT B DESIGN DIRECTION
A contemporary, structured, technology-aware clinic and practitioner platform. Provisional palette:
- Deep ink/navy #1F303A
- Deep teal #14545A
- Sea-glass #A8CDC4
- Mist #EEF3F2
- Warm white #FAFAF7
- Graphite #303B40
- Muted brass #B99A62
Inspect the actual logo and current styles first; preserve the existing brand identity and adjust these provisional values to fit it.

TYPOGRAPHY
Use a modern sans-serif family such as Manrope or Inter. Strong, clean heading scale, crisp body typography, and consistent spacing. Do not use a futuristic or sci-fi font.

LAYOUT REQUIREMENTS
1. Structured hero: asymmetric 60/40 or carefully balanced split layout with source-site clinic/device imagery and clear content hierarchy.
2. Bring the Clinic Services and Practitioner Training pathways close to the top, as clearly differentiated panels.
3. Present Counselling, Hypnotherapy, and Full Health Testing in a disciplined grid.
4. Present the Biofeedback/Bioresonance introduction as a structured image-and-copy block. Subtle wave/frequency line graphics may be used decoratively, but they must not look like real test data or imply clinical results.
5. Training highlight with the exact SOW price set: Part 1 £1,250; Part 2 £1,500; Combined £2,650; Annual Refresher £350/hr.
6. Julie's introduction as a professional profile panel with the verified original portrait and source biography/qualifications.
7. A device/handbook preview using original images and links.
8. Existing testimonials only.
9. Clear contact/enquiry path and unified legal footer.

VISUAL EXECUTION
- Use a deliberate 12-column grid, clearer section boundaries, strong alignment, clean card surfaces, fine borders, and a smaller 8–12px radius system.
- Use deep ink/teal in selected feature areas and light surfaces for the majority of content. Do not turn the entire site into dark mode.
- The technology styling must remain calm, premium, and human. No neon, sci-fi imagery, fabricated dashboards, fake data visualisations, or generic hospital stock photography.
- Make this design compositionally distinct from Concept A: more structured, grid-led, and technology-forward rather than editorial and organic.

RESPONSIVE AND IMPLEMENTATION
Build at 1440px, 1024px, 768px, 390px, and 360px. Reuse data and appropriately shared UI primitives, but create a separate Concept B HomePage and token file. Preserve the `tw-` Tailwind prefix, disabled Preflight, `.ls-mock-root` scope, JavaScript-only code, and no custom core.css. Log all work in dailylog.md.

Ensure Concept B has the same content coverage and functional link targets as Concept A. Do not blend the concepts.
```

### Prompt 4 — Responsive behaviour, interactions, motion, accessibility, and refinement

```text
Audit and refine both homepage concepts (A and B) for production-quality responsive behaviour and interaction. Do not change approved copy or introduce new content.

RESPONSIVE QA
Check 1440px, 1280px, 1024px, 768px, 390px, and 360px. Fix:
- horizontal overflow and clipped content;
- broken grid/card alignment;
- image stretching or unexpected cropping;
- too-small text or line lengths;
- awkward heading wraps;
- overlapping sticky header or anchor targets;
- buttons that are too close together or too small to tap;
- menu/dropdown interactions that fail on touch devices.

INTERACTIONS
- Implement accessible desktop dropdowns and a mobile navigation drawer/menu.
- Implement subtle hover/focus states on cards, buttons, and links.
- Implement gentle scroll-reveal only where it improves reading flow; use IntersectionObserver and clean up observers correctly.
- Respect prefers-reduced-motion and disable non-essential reveal/slider movement when enabled.
- Use a user-controlled testimonial slider if a slider is used. Do not force rapid autoplay.
- Ensure every visible link has a valid local page route or verified source URL. No dead buttons. Label prototype-only links where a page is not implemented.
- Keep the concept switcher clearly outside the simulated website header and mark it as prototype-only.

MOTION QUALITY
Use restrained transitions, usually 180–350ms. Avoid excessive bounce, parallax, continuous animation, large blur effects, or animation on every element. Transitions must not cause layout shift.

ACCESSIBILITY
Check semantic HTML, heading order, keyboard access, visible focus, contrast, accessible menu states, meaningful image alt text, and reduced-motion support. Ensure controls are usable without a mouse.

PERFORMANCE
Optimise and locally store source images, use lazy loading below the fold, set image dimensions/aspect ratios, avoid unnecessary packages, and resolve console warnings/errors. Do not use autoplay video.

WORDPRESS/FINIX PORTABILITY
Maintain simple semantic sections and repeatable cards that can be reconstructed in Elementor/Finix. Do not depend on a React-only layout trick, global CSS reset, or app-only logic for visual layout. Preserve Tailwind prefix `tw-`, disable Preflight, scope styles under `.ls-mock-root`, and avoid global selectors. Do not introduce jQuery.

Log each audit pass, issue, fix, and validation result in dailylog.md.
```

### Prompt 5 — Final review, Finix handoff, and delivery checklist

```text
Perform the final quality review of the Langton Smith Clinic React homepage mock and prepare it for client presentation and later WordPress/Finix rebuild.

DO NOT rewrite or invent any website content. Keep the final site copy exact to the clinic website, training website, and SOW. Do not fabricate form content or the mandatory Professional Medical Disclaimer.

FINAL REVIEW
1. Run the project using the documented commands and verify both Concept A and Concept B render correctly.
2. Verify every homepage section required by the SOW is represented in both concepts: clinic introduction, Biofeedback/Bioresonance explanation, clinic services, practitioner training, Julie introduction, devices/handbook teaser, testimonials, contact route, and footer/legal links.
3. Verify the SOW amounts are displayed exactly: Part 1 £1,250; Part 2 £1,500; Combined £2,650; Annual Refresher £350/hr; Full Clinical Health Testing £300.
4. Verify the updated hypnotherapy title is exactly “Fully qualified Senior Clinical Hypnotherapist” wherever it appears.
5. Verify the standard inquiry destination is `langtonsmithclinic@hotmail.co.uk` in the content/configuration where relevant. Do not claim a real email delivery test unless a live mailer is configured and tested.
6. Verify that the registration form and health form have not been fabricated. If the source Google Docs remain inaccessible, leave field mapping marked pending and list the required client dependency.
7. Verify that the Professional Medical Disclaimer is not invented or paraphrased. If its exact approved wording has not been sourced, list it as a blocker.
8. Confirm that Shop is inquiry/outbound-link based only: no checkout, cart, payment gateway, or merchant processor flow.
9. Check all links, mobile menu, switcher, any slider controls, browser console, responsive layouts, accessibility basics, and image loading.
10. Verify Tailwind prefix `tw-`, disabled Preflight, `.ls-mock-root` scoping, JavaScript-only source, and no custom core.css.
11. Confirm dailylog.md is locally present but ignored by Git. Run `git check-ignore -v dailylog.md`; if it has ever been tracked, remove it from the index with `git rm --cached dailylog.md` without deleting the local file. Do not commit or publish dailylog.md.

FINIX HANDOFF
Prepare a concise README/handoff note explaining:
- how to run the React mock;
- how to switch between Concept A and Concept B;
- which content and images came from which source;
- the design tokens for each concept;
- how each homepage section maps to Elementor containers/widgets and Finix header/footer settings;
- what must be checked against the exact installed Finix theme version;
- all blocked content dependencies (both form documents and exact approved medical disclaimer, if still unavailable).

Do not say the React prototype is directly deployable as a WordPress theme. Describe it as the visual/interaction reference for a later Elementor/Finix implementation.

Finally, provide a brief completion report with the concept routes, files changed, test results, and open blockers. Ensure every action and result has been recorded in dailylog.md, which remains excluded from GitHub.
```

---

## 10. Build phases and acceptance criteria

| Phase | Work | Acceptance criteria |
|---|---|---|
| 0. Source audit | Inspect both websites, logo, imagery, copy, form attachments, and Finix package/version. | Content/media register has source links; all inaccessible items are listed as blockers; no content is invented. |
| 1. Project foundation | Vite + React JS + Tailwind, directory structure, content data, media manifest, ignore rule, README. | App starts cleanly; no TypeScript; no global CSS collisions; dailylog ignored. |
| 2. Concept A | Build full warm editorial homepage. | All required homepage content groups appear; responsive layout works; source copy is exact. |
| 3. Concept B | Build full structured technology-led homepage. | Clearly distinct layout and palette; equivalent content and destinations to Concept A. |
| 4. Shared interactions | Navigation, mobile menu, hover/focus, reveals, reduced motion, testimonial controls. | All visible controls work; keyboard/touch usable; no unnecessary motion. |
| 5. QA and handoff | Responsive, accessibility, performance, copy, price, links, Finix-portability review. | No critical console errors or overflow; checklist passed; unresolved content dependencies disclosed. |

### Definition of done for the mock homepage

- Both concepts can be switched and reviewed by the client.
- They are visually and compositionally different, not just colour variations.
- All homepage requirements from SOW item 1 are present.
- All other SOW modules are represented in the navigation/footer or teaser routes so the overall site structure is understood.
- The exact source copy and SOW prices are used; no invented content is present.
- Desktop, tablet, and mobile views are polished.
- Animations are smooth, restrained, and accessible.
- Code is componentised and easy to extend into the 14-page WordPress site.
- The design can be rebuilt with Finix/Elementor structures and tokens without depending on a React-only implementation.
- `dailylog.md` is current in the local workspace and excluded from GitHub.

---

## 11. Daily change tracking — mandatory local-only rule

`dailylog.md` is the project's chronological activity register. Every meaningful action must be recorded on the day it happens, including:

- source/content inspection and decisions;
- Antigravity prompts submitted;
- files/components created, edited, renamed, or removed;
- assets downloaded, replaced, or rejected;
- design/layout/token changes for each concept;
- packages/configuration changed;
- bugs found, fixes applied, and unresolved issues;
- responsive/accessibility/performance tests and their results;
- Git actions and final delivery checks.

**Logging rule:** add an entry immediately after each meaningful action or grouped implementation step. Each entry should say what changed, why it changed, which files were affected, and how it was verified. Do not write vague entries such as “worked on design”. Do not log passwords, API keys, hosting credentials, personal medical information, or other secrets.

**GitHub exclusion rule:**

1. Add this exact ignore rule to the repository `.gitignore`:
   ```gitignore
   # Local project activity log — never publish
   /dailylog.md
   ```
2. Keep `.gitignore` committed so the exclusion rule is shared with collaborators.
3. Keep `dailylog.md` in the local project folder only. Never add, commit, push, upload, or include it in a release archive.
4. Before each commit/push, run:
   ```bash
   git check-ignore -v dailylog.md
   git status --short
   ```
5. If the log was previously tracked, run `git rm --cached dailylog.md` and verify it remains on disk and is ignored. Do not delete the local log.
6. Do not copy the contents of `dailylog.md` into README, GitHub issues, release notes, or public project documentation.

---

## 12. Open dependencies and decisions to confirm before final WordPress build

1. Obtain readable exports/access for the Practitioner Registration Form and Bioresonance Health Form Google Docs. Map every field exactly; do not infer missing fields.
2. Obtain the exact client-approved **Professional Medical Disclaimer** wording required on the Clinical Health Testing page.
3. Confirm the exact Finix theme package/version and whether the live WordPress environment uses Elementor, the bundled theme widgets, and any required child theme.
4. Confirm which existing logo file is the approved final logo and whether the client expects a refinement before it is used in the header.
5. Confirm final destinations for Shop/outbound product links and all footer legal/privacy links; use only verified client-approved URLs.
6. Confirm whether existing source-site prices not explicitly overridden by the SOW remain current before placing them in the final production site.

Do not block the visual homepage mock on the form documents or medical disclaimer: keep those items out of the homepage copy unless the original approved text is available. Do block the actual form-page implementation and legal disclaimer publication until the approved source text is available.
