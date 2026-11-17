# MASTER PROMPT — Premium Website Merger, Redesign & Full Implementation

Act as a senior UI/UX designer, premium website architect, and full-stack developer. Your task is to completely redesign and implement the two website options based on the existing project, client requirements, and reference websites.

**Current preview:** https://cool-florentine-02fd17.netlify.app/

**Reference websites:**
- https://bioresonancetraining.com/
- https://langtonsmithclinic.com/

## 1. Analyze and Improve the Existing Implementation

First, inspect the current project, implementation plan, source code, assets, and both reference websites.

The current Netlify preview is not acceptable as the final design because it lacks the premium visual quality and complete page structure required.

Do not simply modify the existing homepage or apply minor styling changes. Rebuild and improve the design wherever necessary while preserving useful existing functionality and project architecture.

## 2. Create Separate Pages for Every Navigation Menu

Every primary navigation menu item must have its own dedicated, fully designed page.

Requirements:
- Create a separate page/route for every navigation item.
- Do not place all website content on a single long homepage.
- Build appropriate page-specific sections and content based on the original websites and project requirements.
- Implement working navigation links, buttons, breadcrumbs where appropriate, and active menu states.
- Ensure direct URL access, page refreshes, and browser navigation work correctly.
- Create dedicated Registration and Health Form pages or accessible entry points, with the actual forms opening in modal windows.
- Do not leave empty pages, placeholder routes, or nonfunctional navigation items.

The homepage should provide a premium overview and direct visitors to the relevant pages.

## 3. Create Two Visually Distinct Premium Website Options

Both existing websites have similar design characteristics. The two proposed website options must therefore have clearly different visual identities, layouts, and design approaches.

### Option A — Premium Clinical & Wellness Experience
Create a sophisticated, calming, high-end clinical wellness website.

Design direction:
- Elegant, minimal, clean, and trustworthy.
- Light theme with warm ivory, soft white, muted sage, deep forest green, and refined neutral tones.
- Premium typography with elegant headings and highly readable body text.
- Spacious layouts, refined imagery, subtle borders, and tasteful animations.
- Strong emphasis on practitioner credibility, client trust, training, and wellness.
- Professional clinical presentation without looking generic or overly medical.

### Option B — Premium Modern Editorial Experience
Create a visually different, contemporary, high-end editorial website.

Design direction:
- More expressive, bold, and visually engaging than Option A.
- Dark theme with charcoal, deep navy, muted gold, warm cream, or another professionally balanced premium palette.
- Distinctive typography, editorial layouts, asymmetric compositions, refined image treatments, and sophisticated visual hierarchy.
- Use dark sections balanced with light content areas where appropriate.
- Emphasize expertise, transformation, education, and premium service.
- Avoid simply changing Option A's colors while retaining the same layout.

Both options must contain the same required functionality and core content, but their visual design, page layouts, section compositions, and user experience should feel independently designed.

## 4. Premium Section Design & Viewport Requirements

Every section must be professionally composed and properly visible within the Test wherever practical.

- Design sections with viewport-aware heights using appropriate combinations of `min-height: 100svh`, `min-height: calc(100svh - header-height)`, and content-based sizing.
- Hero sections should fit the visible Test without unnecessary scrolling, including the header and primary call-to-action.
- Ensure important section content, headings, images, and buttons are visible without awkward clipping or excessive whitespace.
- Use balanced layouts with clear visual hierarchy and proper alignment.
- Avoid oversized sections that make users scroll excessively to understand the content.
- Do not force content-heavy sections into a fixed viewport height if doing so would clip content.
- Use responsive spacing and typography with `clamp()` where appropriate.
- Ensure each section has a clear purpose and visual distinction.
- Use subtle transitions, hover states, and restrained animations.
- Avoid generic template layouts, repetitive card grids, excessive rounded boxes, unnecessary gradients, and excessive empty space.

The result should feel like a professionally designed premium website, not an AI-generated template.

## 5. Images and Visual Assets

Use suitable images from both existing websites:

- https://bioresonancetraining.com/
- https://langtonsmithclinic.com/

Inspect the available imagery and reuse appropriate assets where legally and technically accessible.

Where a suitable image is unavailable, use professional placeholder images that match the intended content and visual style.

Requirements:
- Use high-quality, relevant images for hero sections, practitioners, training, wellness, and supporting content.
- Maintain consistent image ratios and professional cropping.
- Avoid broken images, empty image containers, or unrelated stock imagery.
- Use placeholder images until final approved assets are provided.
- Include meaningful alt text.
- Ensure images do not distort or negatively affect section layouts.

## 6. Registration Form — Modal Implementation

The Registration Form is not currently implemented.

I will attach the client-provided Registration Form document and the website logo separately.

Use the attached document as the authoritative source for the complete form.

Requirements:
- Reproduce all fields, labels, instructions, checkboxes, dropdowns, and consent sections from the document.
- Preserve the original meaning and order of the form questions.
- Do not omit fields or invent unnecessary questions.
- Create a professionally styled, accessible modal form.
- Open the modal when users click the Registration / Practitioner Registration CTA.
- Include a clear close button and appropriate modal dismissal behavior.
- Use a scrollable modal body for long forms while keeping the modal within the viewport.
- Ensure the form works properly on desktop, tablet, and mobile.
- Include required-field validation, clear error messages, and a professional submission success state.
- Use a clean, organized form layout with logical grouping and appropriate spacing.

## 7. Health Form — Modal Implementation

The Health Form is also not currently implemented.

I will attach the client-provided Health Form document separately.

Use the attached document as the authoritative source for the complete health intake form.

Requirements:
- Reproduce all health questions, personal information fields, medical history fields, checkboxes, declarations, and consent sections from the attachment.
- Preserve the original structure and meaning.
- Do not omit any required questions or invent medical questions.
- Open the form in a professional modal when users click the Health Form CTA.
- Include accessible controls, validation, clear error messages, and a submission confirmation state.
- Support long forms with internal modal scrolling.
- Ensure the form is fully responsive and easy to complete on mobile devices.
- Treat submitted health information as sensitive and do not expose it in public pages, URLs, logs, or client-side storage.

Both forms must be implemented as functional interfaces, not static mockups.

If backend submission is not currently available, implement a clearly defined submission integration point and explain what is required to connect it. Do not falsely display a successful submission if the data has not actually been submitted.

## 8. Logo and Branding

I will provide the website logo as an attachment.

- Use the supplied logo in both website options.
- Preserve its proportions and visual quality.
- Ensure the logo works against both light and dark backgrounds.
- Use appropriate logo variants or backgrounds where necessary.
- Maintain consistent brand identity while giving each option its own premium visual direction.

## 9. Responsive Design

Implement and test all pages across:

- Desktop: 1440px and larger
- Laptop: 1024px–1366px
- Tablet: 768px–1023px
- Mobile: 320px–767px

Requirements:
- No horizontal overflow.
- Responsive navigation and mobile menu.
- Properly stacked content and form fields on smaller Tests.
- Correct image scaling and cropping.
- Viewport-aware section heights without content clipping.
- Modals must fit within the available Test and remain usable on mobile.
- Maintain premium design quality across all Test sizes.

## 10. Functional Requirements

Implement and verify:

- All navigation links and dedicated page routes.
- All primary and secondary CTA buttons.
- Registration Form modal.
- Health Form modal.
- Form validation and submission states.
- Modal open/close behavior and internal scrolling.
- Responsive navigation.
- Working links between relevant pages.
- Correct logo and image loading.
- No broken routes, console errors, or nonfunctional UI elements.

## 11. Implementation Rules

- Work directly within the existing project.
- Inspect the current framework, components, dependencies, and routing before making changes.
- Follow the established implementation plan and project scope.
- Reuse and improve existing components where appropriate.
- Maintain clean, reusable, production-quality code.
- Do not create unnecessary dependencies.
- Do not stop after creating a visual mockup or homepage.
- Do not use fake buttons or nonfunctional form submissions.
- Do not remove required content or functionality to simplify the design.
- Keep both website options independently accessible for review.

## 12. Final Execution & Quality Assurance

Complete the implementation rather than providing only recommendations or a design proposal.

Before finishing:

1. Verify that every navigation item opens its own page.
2. Confirm both website options have distinctly different premium designs.
3. Check all sections for viewport fit, spacing, and content visibility.
4. Test the Registration and Health Form modals using the supplied attachments.
5. Verify responsive behavior across desktop, tablet, and mobile.
6. Check for broken images, missing content, console errors, and routing issues.
7. Ensure the supplied logo is correctly integrated.
8. Confirm the project builds and runs successfully.

**Final deliverable:** Two complete, premium, responsive website options with separate pages for every navigation menu, fully implemented modal-based Registration and Health Forms, professional placeholder imagery, distinct light and dark design systems, and working functionality throughout.

Begin by inspecting the existing project and reference websites, then execute the complete implementation. Do not ask me to approve each individual step. Make professional design decisions independently and deliver the finished result.

## CRITICAL EXECUTION REQUIREMENT — COMPLETE IN ONE PASS

**This entire prompt must be executed in one complete implementation pass.**

- Implement all requirements in this prompt together, including both website options, every individual navigation page, premium redesigns, responsive layouts, all sections, image placeholders, branding, Registration Form modal, and Health Form modal.
- Do not split the work into multiple phases, stages, or separate prompts.
- Do not stop after analysis, planning, creating the homepage, or completing only one website option.
- Do not ask me to approve intermediate steps or wait for further instructions.
- Make all necessary design, architecture, and implementation decisions independently.
- Inspect the existing project and reference websites, then immediately proceed with the complete implementation.
- Use the attached logo and both form documents when available. If an attachment is unavailable, continue implementing the rest and clearly identify the missing asset without blocking the project.
- Complete the functionality, responsive styling, routing, forms, and quality checks within the same execution.
- Do not leave TODOs, unfinished sections, placeholder routes, or nonfunctional buttons for later implementation.
- If any external integration cannot be completed due to missing credentials or backend access, implement the frontend and integration-ready structure, and clearly document the exact limitation.

**Expected outcome:** Both fully implemented, visually distinct, premium website options must be ready for review in one execution, with all requested pages and functionality completed. Do not merely provide a plan or partial result.