import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import ImageFrame from '../components/common/ImageFrame.jsx'
import Button from '../components/common/Button.jsx'
import { HANDBOOK, CONTACT } from '../data/siteContent.js'

export default function HandbookPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const topics = [
    'The evolution and scientific principles of Complementary and Alternative Medicine (CAM)',
    'Investigating hidden underlying causes for chronic fatigue, migraines, IBS, and weight resistance',
    'Practical protocols for conducting non-invasive food sensitivity testing',
    'Interpreting biophysical scan reports, energetic waveforms, and resonance patterns',
    'Constructing realistic, clinically sound food elimination and reintroduction plans',
    'Real-world case studies, sample practitioner letters, and client guidance templates',
    'Nutritional reference breakdowns of common food families, drinks, additives, and hidden allergens',
  ]

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* Viewport-aware Hero */}
      <section
        style={{
          background: heroBg,
          borderBottom: `1px solid ${borderColor}`,
          padding: '48px 24px 64px',
          minHeight: '48vh',
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
              { label: 'Training Handbook' },
            ]}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
              gap: '40px',
              alignItems: 'center',
            }}
            className="tw-grid-cols-1 lg:tw-grid-cols-2"
          >
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
                Authoritative Literature & Training Manual
              </span>
              <h1
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: isConceptA ? 'clamp(2.3rem, 5vw, 3.5rem)' : 'clamp(2rem, 4.5vw, 3.1rem)',
                  fontWeight: isConceptA ? 600 : 800,
                  color: isConceptA ? '#2F5147' : '#FAFAF7',
                  lineHeight: 1.15,
                  margin: '8px 0 20px',
                }}
              >
                Food Sensitivity Testing: The Principles of Bioresonance and Biofeedback Therapy
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
                By Julie Langton Smith MSc. A definitive guide for patients seeking relief from food intolerances and a comprehensive practical manual for healthcare practitioners.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button
                  href={`mailto:${HANDBOOK.orderEmail}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`}
                  variant="primary"
                  concept={concept}
                >
                  Order Copy via Email
                </Button>
                <Button onClick={() => navigate('/training')} variant="outline" concept={concept}>
                  Explore Training Courses
                </Button>
              </div>
            </div>

            {/* Price & Book Cover Frame */}
            <div>
              <div
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '18px' : '12px',
                  padding: '36px',
                  border: `1px solid ${borderColor}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                <div style={{ width: '130px', flexShrink: 0 }}>
                  <ImageFrame
                    src={HANDBOOK.coverImageSrc}
                    alt={HANDBOOK.coverImageAlt}
                    mediaKey="bookCover"
                    aspectRatio="2/3"
                    rounded="8px"
                  />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
                    Authoritative Book Pricing
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: headingColor, marginBottom: '4px' }}>
                    UK: {HANDBOOK.priceUK}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: accentColor, marginBottom: '12px' }}>
                    International: {HANDBOOK.priceInternational}
                  </div>
                  <p style={{ fontSize: '12px', color: '#666666', lineHeight: 1.5, margin: 0 }}>
                    Prices include postage & packaging. Orders are fulfilled directly by the clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters & Topics */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto 48px', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor }}>
            What the Book Covers
          </span>
          <h2
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2.3rem',
              fontWeight: 700,
              color: headingColor,
              margin: '8px 0 16px',
            }}
          >
            A Comprehensive Clinical & Educational Manual
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: bodyColor }}>
            Drawing on nearly 30 years of clinical experience, this manual equips readers to understand how biophysics bridges the gap between chronic symptoms and holistic recovery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {topics.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '14px' : '8px',
                padding: '24px',
                border: `1px solid ${borderColor}`,
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: accentColor }}>{idx + 1}.</span>
              <span style={{ fontSize: '14px', lineHeight: 1.6, color: bodyColor }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Order Callout */}
        <div
          style={{
            background: isConceptA ? '#FFFFFF' : '#1F303A',
            color: isConceptA ? '#303832' : '#EEF3F2',
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '44px',
            border: `1px solid ${borderColor}`,
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: isConceptA ? '#2F5147' : '#FAFAF7',
              margin: '0 0 12px',
            }}
          >
            Order Your Copy Today
          </h3>
          <p style={{ fontSize: '15px', color: isConceptA ? '#303832' : '#EEF3F2', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Email your delivery address to <strong style={{ color: accentColor }}>{HANDBOOK.orderEmail}</strong>. We will reply with secure BACS payment instructions and dispatch your signed handbook promptly.
          </p>
          <Button
            href={`mailto:${HANDBOOK.orderEmail}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`}
            variant="primary"
            concept={concept}
          >
            Send Order Request ({HANDBOOK.priceUK} UK / {HANDBOOK.priceInternational} Intl)
          </Button>
        </div>
      </section>
    </div>
  )
}

