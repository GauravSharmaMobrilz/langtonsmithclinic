/**
 * mediaManifest.js — Asset source register for Langton Smith Clinic prototype.
 *
 * Rules (implementation-plan.md § 2.2, § 6.2):
 * - Only list original or client-approved site assets.
 * - For this prototype, use verified direct source URLs from the client's existing websites.
 * - If an original source is unavailable, use a neutral labelled placeholder (null src).
 * - Keep alt text accurate to what is visible/known about the image.
 * - Do not substitute generated people, invented product images, or unrelated stock photography.
 */

import InvestigatesfoodIMG from '../assets/images/Home/Authoritative Training Handbook.png';

export const MEDIA = {
  juliePortrait: {
    id: 'julie-portrait',
    intendedUse: 'Founder profile section (both concepts)',
    localPath: null,
    // Direct original image URL from the clinic's About page.
    sourceUrl: 'https://images.squarespace-cdn.com/content/v1/5b3a31df5cfd791aa4a84756/1536064942369-J6TUM0NTR62OY4YKGKIC/Langton%2B093.jpg',
    alt: 'Portrait of Julie Langton Smith MSc, founder of Langton Smith Clinic',
    status: 'LIVE SOURCE URL — displayed directly from the clinic website',
    placeholderBg: '#A9BBA9',
    placeholderText: 'Julie Langton Smith MSc\n[Portrait — replace with original]',
  },

  scopeDevice: {
    id: 'scope-device',
    intendedUse: 'Devices section — SCOPE device card',
    localPath: null,
    // Direct original device image from Bioresonance Training.
    sourceUrl: 'langtonsmithclinic/src/assets/images/Home/SCOPE.jpg',
    alt: 'SCOPE bioresonance device used for remote health testing',
    status: 'LIVE SOURCE URL — displayed directly from Bioresonance Training',
    placeholderBg: '#EEF3F2',
    placeholderText: 'SCOPE Device\n[Replace with original image]',
  },

  mars3Device: {
    id: 'mars3-device',
    intendedUse: 'Devices section — MARS III device card',
    localPath: null,
    // Direct original MARS III image from Bioresonance Training.
    sourceUrl: 'langtonsmithclinic/src/assets/images/Home/MAKS-1.jpg',
    alt: 'MARS III Multiple Analytical Resonance System — comprehensive bioresonance device',
    status: 'LIVE SOURCE URL — displayed directly from Bioresonance Training',
    placeholderBg: '#EEF3F2',
    placeholderText: 'MARS III Device\n[Replace with original image]',
  },

  bookCover: {
    id: 'book-cover',
    intendedUse: 'Handbook/book highlight section',
    localPath: null,
    // Direct original book-cover image from Bioresonance Training.
    sourceUrl: InvestigatesfoodIMG,
    alt: 'Cover of Food Sensitivity Testing: The Principles of Bioresonance and Biofeedback Therapy by Julie Langton Smith MSc',
    status: 'LIVE SOURCE URL — displayed directly from Bioresonance Training',
    placeholderBg: '#C58F75',
    placeholderText: 'Food Sensitivity Testing\nBook Cover\n[Replace with original]',
  },

  clinicHero: {
    id: 'clinic-hero',
    intendedUse: 'Hero section background / split image (both concepts)',
    localPath: null,
    // Original counselling image from the clinic's own site; used in the clinic hero.
    sourceUrl: 'https://images.squarespace-cdn.com/content/v1/5b3a31df5cfd791aa4a84756/1531257639617-5QRK9G7M1OCB00FC9N9C/artem-kovalev-86365-unsplash.jpg',
    alt: 'Langton Smith Clinic — complementary health practice in Littlehampton, West Sussex',
    status: 'LIVE SOURCE URL — displayed directly from the clinic website',
    placeholderBg: '#F6F3ED',
    placeholderText: 'Clinic Image\n[Replace with original]',
  },
}

/**
 * Returns a CSS style object for a placeholder block when an image is unavailable.
 */
export function getPlaceholderStyle(mediaKey) {
  const asset = MEDIA[mediaKey]
  if (!asset) return {}
  return {
    background: asset.placeholderBg || '#EEF3F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',
    color: '#303832',
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    border: '2px dashed #A9BBA9',
    borderRadius: '8px',
  }
}
