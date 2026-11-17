/**
 * Concept A — Warm, Human-Centred Editorial Clinic
 * Design tokens for Tailwind + inline style reference.
 * Source: implementation-plan.md § 5 Concept A
 */
export const CONCEPT_A_TOKENS = {
  name: 'Concept A — Warm Editorial Clinic',

  palette: {
    ivory:    '#F6F3ED', // primary page background
    green:    '#2F5147', // primary headings, nav, primary buttons
    sage:     '#A9BBA9', // secondary surfaces and small accents
    clay:     '#C58F75', // restrained accent for links, labels
    charcoal: '#415546', // body copy
    white:    '#FFFFFF', // cards and content panels
  },

  typography: {
    headingFamily: "'Cormorant Garamond', Georgia, serif",
    bodyFamily:    "'Inter', system-ui, sans-serif",
    headingWeight: 600,
    bodyWeight:    400,
    baseSize:      '16px',
    scaleRatio:    1.25,
  },

  spacing: {
    sectionVertical: '80px',
    sectionHorizontal: '24px',
    contentMaxWidth: '1280px',
    cardPadding: '32px',
    cardRadius: '16px',
    buttonRadius: '12px',
  },

  shadows: {
    card: '0 2px 12px rgba(0,0,0,0.04)',
    cardHover: '0 8px 32px rgba(0,0,0,0.1)',
    header: '0 2px 16px rgba(0,0,0,0.08)',
  },
}

export default CONCEPT_A_TOKENS

