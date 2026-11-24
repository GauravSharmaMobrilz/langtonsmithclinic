# Langton Smith Clinic — Premium Website Merger & Prototype

> **Project:** Consolidation of `bioresonancetraining.com` and `langtonsmithclinic.com`  
> **Destination domain:** `langtonsmithclinic.com`  
> **Prototype Stack:** React + JavaScript (no TypeScript) + Vite + Tailwind CSS (`tw-` prefix)  
> **Target Production CMS:** WordPress with Finix Theme (Power-Squall) & Elementor  

---

## 1. Overview & Objective

This repository contains the complete, premium client-facing website prototype consolidating two web properties:
1. **Langton Smith Clinic** (`https://www.langtonsmithclinic.com/`) — Complementary health therapies, Transpersonal Psychotherapy, Senior Clinical Hypnotherapy, and Remote Bioresonance Health Testing.
2. **Bioresonance International Accredited Training** (`https://bioresonancetraining.com/`) — Accredited practitioner training courses, device guides, training handbook, and certification resources.

### Key Milestones Delivered in This Release:
- **Dedicated Pages for Every Navigation Menu Item** (no single long homepage dependency).
- **Two Visually Distinct Premium Design Options** (Option A: Light Clinical Wellness vs Option B: Dark Modern Editorial) available on every single page.
- **Brand Identity:** Uses the supplied JLS monogram asset with a transparent-background derivative for cleaner placement across light and dark surfaces.
- **Verbatim Modal Forms:**
  - **Practitioner Course Booking Form:** Matches `Bioresonance Practitioner Training UK.pdf` verbatim across all 3 pages of questions.
  - **Client Health Intake Form:** Matches `Health Form.pdf` verbatim including the child notice, parents/grandparents medical history, and hair sample protocol.
- **Viewport-Aware Hero Sections:** Calibrated with `min-height: calc(100svh - 76px)` so primary headings, imagery, and CTAs fit within the visible Test without unnecessary scrolling.
- **Client-Side Router:** Custom hash router (`#/`, `#/about`, `#/services/health-testing`, etc.) supporting page routes, browser navigation, and modal hash entry points.

---

## 2. Quick Start & Run Commands

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

Open `http://localhost:5173/` in your browser.

---

## 3. Dedicated Page Routes

Every navigation menu item opens its own fully designed page:

| Page / Navigation Item | Route | Description |
|---|---|---|
| **Home** | `#/` | Comprehensive clinic overview, hero, service cards, founder story, and pathway teasers. |
| **About Us** | `#/about` | Julie Langton Smith MSc background, 1997 founding, Harley Street history, qualifications, and the two pillars. |
| **Bioresonance Health Testing** | `#/services/health-testing` | 6-point hair Test breakdown, SOW price (£300), sample protocol, and modal trigger. |
| **Counselling & Psychotherapy** | `#/services/counselling` | Transpersonal psychotherapy, anxiety/panic/PTSD specialisms, 50-60 min session structure. |
| **Clinical Hypnotherapy** | `#/services/hypnotherapy` | SOW updated title ("Fully qualified Senior Clinical Hypnotherapist"), IBS/weight applications. |
| **Bioresonance Health Form** | `#/services/health-form` | Dedicated page with intake guidelines, sample instructions, and modal launch button. |
| **Training Courses** | `#/training` | Comprehensive syllabus, SOW prices (Part 1 £1,250, Part 2 £1,500, Combined £2,650, Refresher £350/hr). |
| **Practitioner Registration** | `#/training/registration` | Dedicated registration page with prerequisites and modal launch button. |
| **Bioresonance Devices** | `#/training/devices` | SCOPE / ScopeQ and MARS III technical comparison and customs advice. |
| **Training Handbook** | `#/training/handbook` | *Food Sensitivity Testing* manual overview with UK (£25) & International (£30) prices. |
| **Shop** | `#/shop` | Inquiry-based product and literature catalog (strictly no payment gateway UI). |
| **Contact Us** | `#/contact` | Verified contact details, interactive contact form, hours, and Littlehampton address. |
| **Terms & Policies** | `#/terms-policies` | Booking terms, strict 48-hour cancellation policy, payment terms (BACS/cash), privacy notice. |

---

## 4. Two Distinct Visual Design Options

Use the floating toggle in the bottom right corner (`ls-prototype-switcher`) to switch visual options on any page:

### Option A — Premium Clinical & Wellness Experience (Light)
- **Palette:** Warm ivory (`#F6F3ED`), deep botanical green (`#2F5147`), muted sage (`#A9BBA9`), soft clay (`#C58F75`), charcoal (`#303832`).
- **Typography:** *Cormorant Garamond* serif headings with *Inter* body copy.
- **Styling:** Spacious layouts, generous whitespace, 14–20px corner radii, soft shadows, calm organic clinical elegance.

### Option B — Premium Modern Editorial Experience (Dark)
- **Palette:** Deep ink/navy (`#1F303A`), deep teal (`#14545A`), sea-glass (`#A8CDC4`), mist (`#EEF3F2`), warm white (`#FAFAF7`), graphite (`#303B40`), muted brass (`#B99A62`).
- **Typography:** *Manrope* modern sans-serif headings with *Inter* body copy.
- **Styling:** Structured 12-column grid, elevated audience pathways near the top, 8–12px corner radii, crisp borders, subtle decorative frequency waveforms (non-diagnostic).

---

## 5. Modal Forms (Authoritative Client PDF Matching)

### Practitioner Course Booking Modal (`RegistrationModal.jsx`)
Directly reproduces the 3-page `Bioresonance Practitioner Training UK.pdf` document:
- First Name, Last Name, Date of Birth (Day, Month, Year), Email, Phone.
- Street Address, City, Province/Region, Post/Zip Code, Country.
- English Language Proficiency (Written and Spoken).
- Education Background listing previous schools and qualifications with dates.
- Special Needs declaration.
- Previous Experience with Complementary health.
- State Specific Course being booked (with SOW fees: Part 1 £1,250, Part 2 £1,500, Combined £2,650, Refresher £350/hr).
- Personal Information including why you want to do this course.
- Digital signature (Signed) and Date.
- Frontend validation with an explicit notice that online submission is not connected. No fake reference numbers or receipt claims are generated.

### Client Health Intake Modal (`HealthModal.jsx`)
Directly reproduces the `Health Form.pdf` document:
- Child testing notice and parent/guardian name field.
- Title, First Name, Last Name, Full Address, Postcode, Phone, Mobile, Email.
- Date of Birth, Place of Birth including town and country, Gender, Height, Weight.
- Occupation, GP Name and Address if known.
- Brief medical history including family medical history (Parents, Grandparents) and current medication.
- List of Symptoms (eg: Skin irritation, bloating etc).
- Specify test purchased (Wheat, Dairy, Standard Food, Full Health £300 etc).
- Bioresonance scanner database consent declaration.
- Digital signature (Signed) and Date.
- Hair sample reminder instructions (approx. 10 hairs 1 cm / ¼ inch length minimum) and clinic postal dispatch address.

---

## 6. WordPress / Finix Theme & Elementor Rebuild Guide

- **CSS Scope:** All CSS utilities are prefixed with `tw-` and scoped under `.ls-mock-root`.
- **Preflight Disabled:** Prevents reset collisions with WordPress theme CSS.
- **1-to-1 Mapping:** Every section maps cleanly to Elementor containers, column widgets, and theme header/footer templates.

---

## 7. Quality Assurance Status

- Source-level relative import checks passed after the latest refinement.
- Static checks confirmed fail-open reveal styling, modal horizontal-overflow prevention, mobile modal grid overrides, and removal of simulated random form references.
- Production build and browser-level responsive testing must be run after dependencies are installed in a network-enabled environment.
- Registration and Health Form frontend validation is present; secure submission endpoints are not configured in this prototype.
- The contact form opens a prefilled email draft through the user's email application; it does not directly submit to a server.
