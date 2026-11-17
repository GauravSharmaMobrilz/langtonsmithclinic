import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { SOW_PRICES, CONTACT } from '../data/siteContent.js'

export default function RegistrationPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { openModal, navigate } = useRouter()

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
          minHeight: '45vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Breadcrumbs
            concept={concept}
            items={[
              { label: 'Practitioner Training', href: '/training' },
              { label: 'Practitioner Registration' },
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              Accredited Enrollment · SOW Item 4
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
              Practitioner Course Registration
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
              Apply for Part 1, Part 2, Combined Certification, or Annual Refresher training with Julie Langton Smith MSc. Complete your practitioner intake via our secure modal.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button onClick={() => openModal('registration')} variant="primary" concept={concept}>
                ⚡ Open Practitioner Registration Modal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Guidelines */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>📜</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              Prerequisites Verification
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              A foundational diploma in Anatomy, Physiology, and Nutrition is required. If you do not yet hold these certificates, Julie can recommend accredited prerequisite modules.
            </p>
          </div>

          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>💳</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              Investment Rates
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              Part 1: <strong>{SOW_PRICES.trainingPart1}</strong> · Part 2: <strong>{SOW_PRICES.trainingPart2}</strong> · Combined: <strong>{SOW_PRICES.trainingCombined}</strong> · Refresher: <strong>{SOW_PRICES.annualRefresher}</strong>. Invoices are settled via direct bank transfer (BACS).
            </p>
          </div>

          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🛡️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              Certification Pathway
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              Following intensive tuition, practitioners complete supervised client case studies to receive the accredited Bioresonance Practitioner Diploma.
            </p>
          </div>
        </div>

        {/* Modal Launch Banner */}
        <div
          style={{
            background: isConceptA ? '#2F5147' : '#14545A',
            color: '#FFFFFF',
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '48px 36px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          }}
        >
          <h2 style={{ fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif", fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
            Ready to Begin Your Practitioner Training?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 28px', opacity: 0.9 }}>
            Launch the interactive registration modal to submit your application details, preferred training format, and device intentions directly to Julie Langton Smith MSc.
          </p>

          <Button
            onClick={() => openModal('registration')}
            variant="secondary"
            concept={concept}
            className="!tw-bg-white !tw-text-b-ink hover:!tw-opacity-90"
          >
            Launch Practitioner Registration Modal
          </Button>
        </div>
      </section>
    </div>
  )
}

