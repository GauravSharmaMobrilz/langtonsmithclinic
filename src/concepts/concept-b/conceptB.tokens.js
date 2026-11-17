/**
 * Concept B — Contemporary Clinical and Technology-Led Platform
 * Design tokens for Tailwind + inline style reference.
 * Source: implementation-plan.md § 5 Concept B
 */
export const CONCEPT_B_TOKENS = {
  name: 'Concept B — Contemporary Clinical Platform',

  palette: {
    ink:     '#1F303A', // hero/feature panels and strong contrast
    teal:    '#14545A', // primary buttons and key headings
    glass:   '#A8CDC4', // small accents and selected cards
    mist:    '#EEF3F2', // large light sections
    warm:    '#FAFAF7', // primary page background
    graphite:'#303B40', // body copy
    brass:   '#B99A62', // very limited highlight accent
  },

  typography: {
    headingFamily: "'Manrope', Inter, system-ui, sans-serif",
    bodyFamily:    "'Inter', system-ui, sans-serif",
    headingWeight: 800,
    bodyWeight:    400,
    baseSize:      '16px',
    scaleRatio:    1.25,
  },

  spacing: {
    sectionVertical: '80px',
    sectionHorizontal: '24px',
    contentMaxWidth: '1280px',
    cardPadding: '28px',
    cardRadius: '10px',
    buttonRadius: '8px',
  },

  shadows: {
    card: '0 2px 8px rgba(0,0,0,0.06)',
    cardHover: '0 8px 24px rgba(0,0,0,0.12)',
    header: '0 2px 12px rgba(0,0,0,0.1)',
  },
}

export default CONCEPT_B_TOKENS

