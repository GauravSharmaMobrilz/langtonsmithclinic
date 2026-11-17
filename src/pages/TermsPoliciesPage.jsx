import React from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import { CONTACT } from '../data/siteContent.js'

export default function TermsPoliciesPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* Viewport-aware Hero */}
      <section
        style={{
          background: heroBg,
          borderBottom: `1px solid ${borderColor}`,
          padding: '48px 24px 64px',
          minHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Breadcrumbs
            concept={concept}
            items={[{ label: 'Terms & Policies' }]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              Legal Framework & Client Policies · SOW Item 13
            </span>
            <h1
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? 'clamp(2.4rem, 5vw, 3.6rem)' : 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: isConceptA ? 600 : 800,
                color: isConceptA ? '#2F5147' : '#FAFAF7',
                lineHeight: 1.15,
                margin: '8px 0 20px',
              }}
            >
              Terms, Policies & Clinic Disclaimers
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: 0 }}>
              Information regarding appointment booking, 48-hour cancellation conditions, payment terms, data privacy, and complementary healthcare disclaimers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Policy 1: Bookings & Cancellation */}
          <div style={{ background: cardBg, borderRadius: '14px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: headingColor, margin: '0 0 16px' }}>
              1. Appointments & 48-Hour Cancellation Policy
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 12px' }}>
              Consultations for counselling, hypnotherapy, and bioresonance reviews are strictly scheduled by prior appointment.
            </p>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
              <strong>Cancellation terms:</strong> We require a minimum of <strong>48 hours notice</strong> for cancellations or rescheduling. Cancellations made with less than 48 hours notice or missed appointments without notification will be charged at the full session fee to respect practitioner preparation and reserved clinical time.
            </p>
          </div>

          {/* Policy 2: Payment Terms */}
          <div style={{ background: cardBg, borderRadius: '14px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: headingColor, margin: '0 0 16px' }}>
              2. Fees & Payment Methods
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 12px' }}>
              Therapy and health testing fees are communicated clearly prior to your appointment. In accordance with clinic guidelines, payment is accepted via direct bank transfer (BACS) or cash. Online merchant payment gateways or third-party card processors are intentionally not utilized on this web platform.
            </p>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
              For remote Bioresonance Clinical Health Testing (£300), payment must be cleared prior to dispatch of results and the personal telephone review.
            </p>
          </div>

          {/* Policy 3: Data Protection & Privacy */}
          <div style={{ background: cardBg, borderRadius: '14px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: headingColor, margin: '0 0 16px' }}>
              3. Privacy Notice & Data Protection (UK GDPR)
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 12px' }}>
              Langton Smith Clinic complies strictly with the Data Protection Act 2018 and UK GDPR regulations. Personal and health records collected via intake forms, telephone consultations, or hair sample submissions are held securely and accessed solely by Julie Langton Smith MSc.
            </p>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
              We do not share, sell, or disclose your clinical or contact data to third parties, advertising networks, or unauthorized external entities without your explicit written consent.
            </p>
          </div>

          {/* Policy 4: Complementary Medicine Disclaimer */}
          <div style={{ background: cardBg, borderRadius: '14px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: headingColor, margin: '0 0 16px' }}>
              4. Complementary Health & Bioresonance Disclaimer
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 12px' }}>
              Bioresonance, biofeedback Testing, counselling, and clinical hypnotherapy are practiced as complementary and natural therapies. They are designed to support and balance physiological well-being, energetic coherence, and emotional resilience.
            </p>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
              Complementary therapies do not substitute for emergency medical care, pharmacological prescriptions, or primary diagnosis by a registered General Practitioner (GP) or consultant physician. Clients are always encouraged to maintain open communication with their primary medical doctors.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

