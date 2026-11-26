/**
 * siteContent.js — Verified source copy for Langton Smith Clinic homepage prototype.
 *
 * COPY RULES (from implementation-plan.md § 2.2):
 * - All copy is reproduced verbatim from source websites or supplied verbatim by the.
 * - Source is noted in comments on every item: [CLINIC], [TRAINING], or .
 * -  values override older source-site wording where explicitly specified.
 * - No marketing copy, paraphrase, invented claims, or lorem ipsum.
 * - Prices labelled are authoritative; do not recalculate or reformat.
 */

// ─────────────────────────────────────────────────────────────────────────────
// BRAND & SITE IDENTITY
// ─────────────────────────────────────────────────────────────────────────────

import InvestigatesfoodIMG from '../assets/images/Home/Authoritative Training Handbook.png';
export const BRAND = {
  // [CLINIC] https://www.langtonsmithclinic.com/
  clinicName: 'Langton Smith Clinic',
  tagline: 'For better health naturally',
  incorporates: 'incorporating Bioresonance Training',

  // [TRAINING] https://bioresonancetraining.com/
  trainingName: 'Bioresonance International Accredited Training',
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT DETAILS
// ─────────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  // Authoritative inquiry destination
  email: 'langtonsmithclinic@hotmail.co.uk',

  // [CLINIC] https://www.langtonsmithclinic.com/terms-policies
  phone: '07900 218954',
  address: '37 Surrey Street, Littlehampton, West Sussex, BN17 5BH',
  country: 'United Kingdom',
}

// ─────────────────────────────────────────────────────────────────────────────
//  AUTHORITATIVE PRICES
// ─────────────────────────────────────────────────────────────────────────────

export const _PRICES = {
  //  — Use exactly as stated; do not add tax, payment, or currency-conversion wording
  trainingPart1: '£1,250',
  trainingPart2: '£1,500',
  trainingCombined: '£2,650',
  annualRefresher: '£350/hr',
  fullHealthTesting: '£300',

  // Hypnotherapy downloads fixed price (client requirement: £4.95 GBP)
  hypnotherapyDownload: '£4.95',

  // [CLINIC] https://www.langtonsmithclinic.com/ — book prices, retain from source, verify before production
  bookUK: '£25',
  bookInternational: '£30',
  bookNote: 'Price includes postage. Order by emailing langtonsmithclinic@hotmail.co.uk',
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────

export const HERO = {
  // [CLINIC] https://www.langtonsmithclinic.com/
  headline: 'Langton Smith Clinic',
  subheadline: 'incorporating Bioresonance Training',
  tagline: 'For better health naturally',
  intro: 'A complementary health practice offering counselling, hypnotherapy, and full bioresonance health Testing — alongside accredited practitioner training.',

  ctaClinic: 'Contact Us',
  ctaClinicHref: '#contact',
  ctaTraining: 'Visit Bioresonance Training',
  ctaTrainingHref: '#practitioner-training',
}

// ─────────────────────────────────────────────────────────────────────────────
// CLINIC SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'counselling',
    // [CLINIC] https://www.langtonsmithclinic.com/counselling-and-transpersonal-psychotherapy
    title: 'Counselling & Transpersonal Psychotherapy',
    excerpt: 'Transpersonal psychotherapy integrates traditional psychological methods with a more mindful, spiritual, and human-centric perspective.',
    specialisms: [
      'Anxiety and Panic Disorders',
      'Child and Teenage Anxiety',
      'PTSD and Post-Viral Anxiety',
      'Obsessive Compulsive Behaviours (OCD)',
      'Loss, Bereavement, and Pet Bereavement',
      'Relationship Therapy',
    ],
    sessionInfo: 'A free initial consultation is available before committing to a block of sessions. Standard sessions last 50–60 minutes.',
    href: '#counselling',
    sourceUrl: 'https://www.langtonsmithclinic.com/counselling-and-transpersonal-psychotherapy',
  },
  {
    id: 'hypnotherapy',
    // [CLINIC] https://www.langtonsmithclinic.com/hypnotherapy
    // Updated title: "Fully qualified Senior Clinical Hypnotherapist"
    title: 'Clinical Hypnotherapy',
    titleQualification: 'Fully qualified Senior Clinical Hypnotherapist',
    excerpt: 'Hypnotherapy aims to help clients overcome negative patterns of thought and behaviour by utilising positive suggestions to create subconscious changes.',
    conditions: [
      'Stress and Anxiety',
      'Fears and Phobias',
      'Smoking Cessation',
      'Weight Loss',
      'IBS',
      'Habit Breaking',
    ],
    sessionInfo: 'Sessions are typically booked in blocks of a minimum of 4 weekly sessions to ensure continuity and best results.',
    href: '#hypnotherapy',
    sourceUrl: 'https://www.langtonsmithclinic.com/hypnotherapy',
  },
  {
    id: 'health-Testing',
    // [CLINIC] https://www.langtonsmithclinic.com/full-health-Testing
    //  Price: £300
    title: 'Bioresonance/Biofeedback Clinical Health Testing',
    excerpt: 'A remote, non-invasive health Testing service using a hair sample and medical scanning device to assess energy levels, body systems, food sensitivities, and environmental stressors.',
    price: '£300', // 
    method: 'Remote — no clinic visit required. Results emailed within 7–10 working days, followed by a personal telephone consultation.',
    sampleRequirements: 'A small sample of hair no larger than the size of a postage stamp, minimum of 10 hairs. Hair can be coloured and does not need to be pulled from the root.',
    sixTests: [
      { name: 'Intake Clearance', desc: 'Tests general energy levels for emotional, mental, and physical health.' },
      { name: 'Body Systems', desc: 'Overview of general bodily functioning across structural, muscular, heart and circulation, lymph, digestive, neurological, reproductive, liver, endocrine, kidneys and bladder, teeth and sensory organs.' },
      { name: 'Environmental, Pathogen & Toxin Stressor Test (EPT)', desc: 'Identifies environmental stressors including electro-smog, pathogens, and toxins.' },
      { name: 'Food Intolerance & Sensitivity Testing', desc: 'Tests for reactions across foods, drinks, herbs and spices.' },
      { name: 'Vitamin & Mineral Assessment', desc: 'Evaluates nutritional levels and deficiencies.' },
      { name: 'Remedy Test & Balancing Recommendations', desc: 'Personalised remedy and supplementation guidance.' },
    ],
    href: '#health-testing',
    sourceUrl: 'https://www.langtonsmithclinic.com/full-health-Testing',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// BIOFEEDBACK / BIORESONANCE INTRODUCTION
// ─────────────────────────────────────────────────────────────────────────────

export const BIORESONANCE_INTRO = {
  // [TRAINING] https://bioresonancetraining.com/
  sectionHeading: 'What is Biofeedback and Bioresonance therapy?',
  foundationalStatement: 'All matter, animate or inanimate, radiates energy. Everything absorbs energy by unique wave fields.',
  explanation: 'Because all matter radiates energy differently depending on what it relates to, every element possesses a unique identity or vibrational "fingerprint". Bioresonance and biofeedback scanning devices are designed to measure these radiation or energy levels so that practitioners can interpret them.',
  applicationNote: 'Within natural healthcare, these therapies are used to help assess various health patterns — such as food intolerances, sensitivities, vitamin and mineral deficiencies, hormonal imbalances, and specific organ patterns.',
  energyTraditions: 'Bioresonance is linked to long-standing traditions of vibrational or energy healing such as acupuncture, kinesiology, sound therapy, and reflexology, which seek to restore balance and harmony to the body\'s vital energy.',
  learnMoreLabel: 'About Bioresonance',
  learnMoreHref: '#about',
  sourceUrl: 'https://bioresonancetraining.com/',
}

// ─────────────────────────────────────────────────────────────────────────────
// AUDIENCE PATHWAYS
// ─────────────────────────────────────────────────────────────────────────────

export const AUDIENCE_PATHS = {
  // [CLINIC] + [TRAINING]
  patient: {
    label: 'Clinic Patients & Clients',
    heading: 'Seeking therapy or health Testing?',
    body: 'The Langton Smith Clinic offers counselling, hypnotherapy, and bioresonance health testing to support your health and wellbeing.',
    cta: 'Explore Clinic Services',
    href: '#clinic-services',
  },
  practitioner: {
    label: 'Healthcare Practitioners',
    heading: 'Looking to train as a Bioresonance practitioner?',
    body: 'Bioresonance International Accredited Training provides certified practitioner courses, device guidance, and professional resources.',
    cta: 'View Training Courses',
    href: '#practitioner-training',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// PRACTITIONER TRAINING
// ─────────────────────────────────────────────────────────────────────────────

export const TRAINING = {
  // [TRAINING] https://bioresonancetraining.com/bioresonance-business-practitioner-training/
  heading: 'Bioresonance Business Practitioner Training',
  subheading: 'Bioresonance International Accredited Training',
  intro: 'A specialist programme designed for health and complementary practitioners looking to incorporate bioresonance scanning and therapy into a professional practice.',
  prerequisites: 'Applicants generally need a minimum foundational qualification in Anatomy, Physiology, and Nutrition.',
  format: 'Structured as a comprehensive training course, typically delivered as an intensive hands-on or Zoom-based programme with guided support, delivered by Julie Langton Smith.',
  courseModules: [
    'How to operate bioresonance medical scanning / quantum response devices',
    'Reading energy fields and electromagnetic frequencies',
    'Mapping bodily data — vitamin/mineral deficiencies, food sensitivities, hormone imbalances, organ patterns',
    'Using scan results to personalise therapy',
    'Creating custom homeopathic remedies and electronic encoding cards',
    'Remote broadcasting techniques',
    'Setting up and tailoring a bioresonance practice',
    'Analysing and interpreting client reports',
    'Collaborating with other health professionals',
  ],

  // Authoritative prices
  prices: [
    { label: 'Practitioner Training — Part 1', amount: '£1,250' },
    { label: 'Practitioner Training — Part 2', amount: '£1,500' },
    { label: 'Combined (Part 1 + Part 2)', amount: '£2,650' },
    { label: 'Annual Refresher', amount: '£350/hr' },
  ],

  registrationCta: 'Practitioner Registration',
  registrationHref: '#registration',
  registrationNote: 'Registration form fields are pending verified access to the client-supplied Google Doc (implementation-plan.md § 2.4). No form fields are fabricated.',

  viewCoursesCta: 'View Training Courses',
  viewCoursesHref: 'https://bioresonancetraining.com/training-courses/',
  sourceUrl: 'https://bioresonancetraining.com/bioresonance-business-practitioner-training/',
}

// ─────────────────────────────────────────────────────────────────────────────
// JULIE LANGTON SMITH — FOUNDER PROFILE
// ─────────────────────────────────────────────────────────────────────────────

export const FOUNDER = {
  // [CLINIC] https://www.langtonsmithclinic.com/about-1
  name: 'Julie Langton Smith',
  credentials: 'MSc',
  fullTitle: 'Julie Langton Smith MSc',
  role: 'Founder & Principal Practitioner',
  established: '1997',

  biographyExcerpt: 'Julie Langton Smith MSc has run the clinic since 1997. Originally established in Horsham, West Sussex, where she ran the base for nearly 20 years and spent time practising on Harley Street in London, the clinic has transitioned to Littlehampton alongside offering remote and online consultations via Zoom and telephone.',

  qualifications: [
    'MSc Transpersonal Psychology and Consciousness Studies (TPACCS) — University of Northampton',
    'Certification  in Psychotherapeutic Counselling',
    'Diploma in Psychotherapeutic Counselling Supervision (BPS)',
    // Updated title used wherever new title appears
    'Fully qualified Senior Clinical Hypnotherapist',
    'Qualified Naturopath',
  ],

  associations: [
    'National Counselling and Psychotherapy Society (NCPS)',
    'British Psychological Society (BPS)',
  ],

  portraitAlt: 'Portrait of Julie Langton Smith MSc, founder of Langton Smith Clinic',
  // Portrait must use original source image — see mediaManifest.js for asset status
  portraitSrc: 'https://images.squarespace-cdn.com/content/v1/5b3a31df5cfd791aa4a84756/1536064942369-J6TUM0NTR62OY4YKGKIC/Langton%2B093.jpg',

  sourceUrl: 'https://www.langtonsmithclinic.com/about-1',
}

// ─────────────────────────────────────────────────────────────────────────────
// DEVICES & HARDWARE SPECIFICATIONS
// [TRAINING] https://bioresonancetraining.com/bioresonance-devices/
// ─────────────────────────────────────────────────────────────────────────────
import scopeImage from '../assets/images/Home/SCOPE.jpg';
import marsImage from '../assets/images/Home/MAKS-1.jpg';

export const DEVICES = [
  {
    // [TRAINING] https://bioresonancetraining.com/bioresonance-devices/
    id: 'scope',
    name: 'SCOPE Food Sensitivity Testing Device',
    shortName: 'SCOPE FSTD',
    type: 'Targeted Food Sensitivity & Nutritional Assessment',
    description: 'A highly developed, cost-effective biofeedback/bioresonance device engineered specifically for non-invasive food sensitivity testing and nutritional profiling. Operates effectively with hair samples for both remote mail-in testing and direct in-clinic practitioner assessments.',
    features: [
      'Comprehensive testing for food intolerances, sensitivities, and nutritional imbalances',
      'Extensive built-in database covering grains, dairy, meats, fish, vegetables, raw & cooked fruits, herbs, spices, alcoholic and non-alcoholic drinks',
      'Vitamin and mineral deficiency profile evaluation',
      'Customizable database: practitioners can add specialized dietary items and regional foods',
      '100% remote testing capability via hair sample (no clinic attendance required)',
      'Cost-effective entry into quantum resonance medicine for nutritionists and naturopaths',
    ],
    sampleType: 'Hair sample or direct testing',
    databaseDetails: 'Categorized food database (grains, dairy, meat, fish, vegetables, raw/cooked fruits, herbs, spices, drinks) and vitamin/mineral spectrum; customizable for regional or cultural foods.',
    imageSrc: scopeImage,
    imageAlt: 'SCOPE Food Sensitivity Testing Device for bioresonance health testing',
  },
  {
    // [TRAINING] https://bioresonancetraining.com/bioresonance-devices/
    id: 'mars3',
    name: 'MARS III',
    fullName: 'Multiple Analytical Resonance System',
    type: 'Comprehensive Differential Health Assessment & Therapy Station',
    description: 'The top-of-the-range, fully comprehensive overall health testing and therapy system. Operates as a master clinical station for deep differential health assessments, energetic rebalancing, and frequency transmission.',
    features: [
      'Over 60,000 energetic test parameters across English, German, and Spanish databases',
      'Differential scanning for pathogens (bacteria, viruses, parasites, fungi), chemical toxins, heavy metals, and electro-smog',
      'Therapeutic rebalancing: whole-body balancing, colour therapy, chakra alignment, and meridian balancing',
      'Automated biofield analysis using VIBA algorithms',
      'Physical remedy scanning and copying (exclusive to MARS III): scan, digitize, and imprint frequencies onto carrier media (globules, chip cards)',
      'Multi-disciplinary applications: human medicine, veterinary practice, psychology, coaching, and environmental balancing',
    ],
    sampleType: 'Hair sample, biological substrate, or direct in-clinic contact',
    databaseDetails: 'Over 60,000 digital frequency rates across 3 languages; open architecture for custom practitioner remedies and frequency additions.',
    note: 'MARS III is the only device in the lineup with full hardware and software capability to scan and copy physical remedies.',
    imageSrc: marsImage,
    imageAlt: 'MARS III Multiple Analytical Resonance System comprehensive bioresonance device',
  },
  {
    // [TRAINING] https://bioresonancetraining.com/bioresonance-devices/
    id: 'scopeQ',
    name: 'Scope Q',
    fullName: 'Compact Portable Bioresonance System',
    type: 'Portable Digital Scanning Device for Mobile Practitioners',
    description: 'A compact, lightweight portable digital bioresonance scanning device engineered for everyday clinical practice, mobile visits, and home consultations by human and veterinary healthcare practitioners.',
    features: [
      'Portable, lightweight design optimized for mobile practice and home visits',
      'Shares the identical MARS III core database with 60,000+ test parameters across 3 languages (English, German, Spanish)',
      'Broad testing spectrum: food intolerances, pathogens (bacteria, viruses, fungi, parasites), toxins, electro-smog, and symptoms',
      'Recommends tailored homeopathic balancing frequency programs based on test results',
      'Database can be personalized with additional clinic-specific items',
      'Supports remote hair-sample testing with no clinic attendance required',
    ],
    limitations: 'Cannot scan physical remedies. Unlike the MARS III, Scope Q cannot scan or copy external remedies; physical remedy encoding requires the MARS III system.',
    note: 'Shares the full 60,000+ MARS III database, but cannot scan or copy physical remedies.',
    sampleType: 'Hair sample or on-site client contact',
    databaseDetails: 'Identical 60,000+ rate database to MARS III; open for user additions.',
    imageSrc: scopeImage,
    imageAlt: 'Scope Q portable bioresonance and biofeedback digital scanning device',
  },
]

// [TRAINING] Computer Requirements from source
export const DEVICE_SYSTEM_REQUIREMENTS = {
  heading: 'Computer & System Technical Specifications',
  intro: 'The bioresonance analysis and therapy software connects directly to a standard notebook or desktop PC meeting the following operational parameters:',
  specs: [
    { label: 'Processor', value: 'DualCore processor from 1.8 GHz' },
    { label: 'RAM / Memory', value: 'Minimum 2048 MB (2 GB) RAM' },
    { label: 'Graphics & Display', value: 'Fast graphics card with minimum screen resolution of 1024 × 768 pixels' },
    { label: 'Interface / Ports', value: 'Serial USB interface or Network interface card with standard RJ45 connector' },
    { label: 'Operating System (Source Spec)', value: 'Microsoft Windows (Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10)' },
    { label: 'Apple / Mac Compatibility', value: 'Can run on Apple Mac hardware using BootCamp mode with a compatible Windows OS environment' },
  ],
  verificationNotice: 'Important Notice for Modern Systems: The technical specifications above reflect the original manufacturer requirements (Windows XP through 10, BootCamp). Practitioners intending to run software on modern operating systems (such as Windows 11) or modern Apple Silicon (M-series processors via virtualization) should seek verified compatibility confirmation prior to equipment acquisition.',
}

// [TRAINING] Finance Information from source
export const DEVICE_FINANCE_INFO = {
  heading: 'Finance & Purchasing (UK Only)',
  subheading: 'Structured commercial equipment financing for UK healthcare practitioners',
  body: 'Financing options for acquiring bioresonance hardware (SCOPE, Scope Q, and MARS III) are available exclusively to UK-based customers and practitioners, subject to status, credit approval, and commercial terms.',
  partnerName: 'Leasetech Limited',
  partnerContact: 'gavin@weareleasetech.com',
  termsNote: 'Finance is arranged through specialist UK partner Leasetech Limited (subject to terms and conditions). Contact Leasetech directly or enquire through the clinic for introductory financing guidance.',
}

// [TRAINING] Customs & International Shipping Information from source
export const DEVICE_CUSTOMS_INFO = {
  heading: 'International Shipping, Import & Customs Guidance',
  warningNotice: 'INTERNATIONAL IMPORT/CUSTOMS COSTS MAY APPLY AND IT IS IMPORTANT TO CHECK THESE BEFORE PURCHASE.',
  description: 'Bioresonance devices are precision instruments manufactured in Europe. Practitioners purchasing equipment outside the country of manufacture or importing into the post-Brexit UK must account for local import tariffs, customs clearance processing, and import VAT charges. Julie Langton Smith provides independent guidance to enrolled practitioner trainees regarding legitimate procurement channels, manufacturer direct-shipping procedures, and handling customs documentation.',
}

// Regulatory & Medical Notice
export const DEVICE_MEDICAL_DISCLAIMER = {
  heading: 'Professional Medical & Regulatory Disclaimer',
  text: 'SCOPE, Scope Q, and MARS III bioresonance and biofeedback scanning systems are complementary assessment and vibrational balancing devices. They measure energetic wave fields, biophysical resistance, and subtle frequency resonance. They are not intended, certified, or sold to provide clinical medical diagnosis, identify physiological pathology, or replace standard medical treatments conducted by qualified medical doctors. Clients and practitioners must evaluate results strictly within a complementary healthcare framework.',
}

// ─────────────────────────────────────────────────────────────────────────────
// HANDBOOK / BOOK
// ─────────────────────────────────────────────────────────────────────────────

export const HANDBOOK = {
  // [CLINIC] https://www.langtonsmithclinic.com/ + [TRAINING] https://bioresonancetraining.com/bioresonance-training-handbook/
  title: 'Food Sensitivity Testing: The Principles of Bioresonance and Biofeedback Therapy',
  author: 'Julie Langton Smith MSc',
  description: 'Investigates food intolerances, sensitivities, and allergies through the lens of bioresonance and biofeedback therapy, emphasising biophysics and the application of energy in health assessments. Serves as both an informational guide for patients and a practical manual for practitioners.',
  coverImageSrc: InvestigatesfoodIMG,
  coverImageAlt: 'Cover of Food Sensitivity Testing: The Principles of Bioresonance and Biofeedback Therapy by Julie Langton Smith MSc',
  priceUK: '£25', // [CLINIC] includes postage
  priceInternational: '£30', // [CLINIC] includes postage
  // orderNote: 'Order by emailing langtonsmithclinic@hotmail.co.uk',
  orderEmail: 'langtonsmithclinic@hotmail.co.uk',
  href: 'https://bioresonancetraining.com/bioresonance-training-handbook/',
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    // [CLINIC] https://www.langtonsmithclinic.com/ — verbatim from source
    id: 'weight-loss',
    attribution: 'CQ, USA',
    service: 'Weight Loss Clinical Hypnotherapy',
    quote: 'I am writing to thank you for creating the hypnotherapy for weight loss. I purchased the download at a point when I was feeling pretty desperate for help. I just couldn\'t drop any weight and had begun to feel that I never would. However, with much prayer and daily listening to your hypnotherapy, I have managed to drop about thirty pounds over the last few months. I have a few more pounds to go, but I am joyful about my progress so far!',
    sourceUrl: 'https://www.langtonsmithclinic.com/',
  },
  {
    // [CLINIC] https://www.langtonsmithclinic.com/ — verbatim from source
    id: 'counselling-son',
    attribution: 'UK',
    service: 'Counselling & Mental Health Support',
    quote: 'In late 2015 my son was diagnosed with anxiety disorder, adjustment disorder and depression. He then spent over a year under the NHS being treated with various therapies which produced no discernible results or improvements.',
    quoteExtended: 'After being recommended to Julie in 2017, she quickly got to the root of the issues. Family members saw a marked improvement in mood and behaviour after just the first session, and he eventually returned to his thoughtful, hardworking, and fully engaged self.',
    sourceUrl: 'https://www.langtonsmithclinic.com/',
  },
  {
    // [CLINIC] https://www.langtonsmithclinic.com/ — verbatim from source
    id: 'bioresonance-sweden',
    attribution: 'AB, Sweden',
    service: 'Bioresonance Treatment & Food Sensitivity Testing',
    quote: 'After following Julie\'s advice on food elimination, supplements, and homeopathic remedies, within three months the skin itching stopped, nosebleeds reduced and eventually stopped, anxiety significantly decreased, and energy levels rebalanced.',
    sourceUrl: 'https://www.langtonsmithclinic.com/',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER LINKS & LEGAL
// ─────────────────────────────────────────────────────────────────────────────

export const FOOTER = {
  // [CLINIC] https://www.langtonsmithclinic.com/terms-policies
  legalLinks: [
    { label: 'Terms & Policies', href: 'https://www.langtonsmithclinic.com/terms-policies' },
    { label: 'Privacy', href: 'https://www.langtonsmithclinic.com/terms-policies' },
  ],
  // [CLINIC] Source navigation links
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Clinic Services', href: '#clinic-services' },
    { label: 'Practitioner Training', href: '#practitioner-training' },
    { label: 'Shop', href: '#shop' },
    { label: 'Contact Us', href: '#contact' },
  ],
  clinicLinks: [
    { label: 'Counselling & Psychotherapy', href: '#counselling' },
    { label: 'Clinical Hypnotherapy', href: '#hypnotherapy' },
    { label: 'Health Testing', href: '#health-testing' },
    { label: 'Health Form', href: '#health-form' },
  ],
  trainingLinks: [
    { label: 'Practitioner Training', href: '#training' },
    { label: 'Registration Form', href: '#registration' },
    { label: 'Bioresonance Devices', href: '#devices' },
    { label: 'Training Handbook', href: '#handbook' },
  ],
  copyrightNote: '© 2026 Mobrilz. Website Under Development. All Rights Reserved.',
  disclaimer: 'This website is a prototype design mock. Content from langtonsmithclinic.com and bioresonancetraining.com is reproduced for design review only.',
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT DEPENDENCIES — PENDING ITEMS (do not invent these)
// ─────────────────────────────────────────────────────────────────────────────

// export const PENDING_CONTENT = {
//   registrationFormFields: {
//     status: 'BLOCKED',
//     reason: 'Google Doc inaccessible in prototype environment. No fields invented.',
//     docUrl: 'https://docs.google.com/document/d/1KERq5c1zafcyy_P1Wgc5PzmbjK_UQt9R/edit?usp=share_link',
//     action: 'Request DOCX/PDF export from project owner before implementing form.',
//   },
//   healthFormFields: {
//     status: 'BLOCKED',
//     reason: 'Google Doc inaccessible in prototype environment. No fields invented.',
//     docUrl: 'https://docs.google.com/document/d/11b1fMjNjnVViDw4tdREZOMVIMjoDYwXG/edit?usp=share_link',
//     action: 'Request DOCX/PDF export from project owner before implementing form.',
//   },
//   medicalDisclaimer: {
//     status: 'BLOCKED',
//     reason: 'Exact approved verbatim Professional Medical Disclaimer wording not present in body or accessible source pages.',
//     action: 'Locate the approved disclaimer text or obtain client confirmation before publishing the Clinical Health Testing page.',
//   },
// }
