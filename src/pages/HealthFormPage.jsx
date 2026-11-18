import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { CONTACT } from '../data/siteContent.js'

export default function HealthFormPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { openModal } = useRouter()

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
              { label: 'Clinic Services', href: '/services/health-testing' },
              { label: 'Bioresonance Health Form' },
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              Confidential Intake Procedure
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
              Bioresonance Health Form & Intake Procedure
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
              Complete your pre-consultation health history, symptom inventory, and hair sample protocol. All health information is handled under strict practitioner confidentiality.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button onClick={() => openModal('health-form')} variant="primary" concept={concept}>
                ⚡ Open Bioresonance Health Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Guidance Body */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Card 1: What to Expect */}
          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>📋</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              1. Intake Assessment
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              Before commencing therapy or remote health Testing, we review your current symptoms, medical diagnoses, medications, and lifestyle stresses to ensure safe, targeted care.
            </p>
          </div>

          {/* Card 2: Hair Sample Protocol */}
          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>✂️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              2. Hair Sample Submission
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              A small sample of hair (postage stamp size, minimum 10 hairs) is required. Hair can be dyed or colored; no root is needed. Post in clean tissue to the Littlehampton clinic.
            </p>
          </div>

          {/* Card 3: Confidentiality */}
          <div style={{ background: cardBg, borderRadius: isConceptA ? '16px' : '10px', padding: '36px', border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔒</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
              3. Privacy & Discretion
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: bodyColor }}>
              Your data is accessed strictly by Julie Langton Smith MSc in accordance with UK Data Protection and NCPS/BPS ethical standards. No data is stored in unencrypted public databases.
            </p>
          </div>
        </div>

        {/* Central Action Banner */}
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
            Ready to Submit Your Health Record?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 28px', opacity: 0.9 }}>
            Click below to open the digital modal form. Once submitted, you will receive an instant Intake Reference number to include with your hair sample.
          </p>

          <Button
            onClick={() => openModal('health-form')}
            variant="secondary"
            concept={concept}
            className="!tw-bg-white !tw-text-b-ink hover:!tw-opacity-90"
          >
            Launch Health Intake Form Modal
          </Button>
        </div>
      </section>
    </div>
  )
}

