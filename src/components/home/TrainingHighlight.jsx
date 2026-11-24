import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { TRAINING } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Button from '../common/Button.jsx'

export default function TrainingHighlight({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#FFFFFF' : '#FAFAF7'
  const priceBg = isConceptA ? '#F6F3ED' : '#EEF3F2'
  const priceBorder = isConceptA ? '#A9BBA9' : '#A8CDC4'
  const priceHeadingColor = isConceptA ? '#2F5147' : '#14545A'
  const moduleColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <SectionContainer
      id="practitioner-training"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <SectionHeading
        label="Practitioner Training"
        heading={TRAINING.heading}
        subheading={TRAINING.intro}
        concept={concept}
        className="tw-mb-12 reveal-on-scroll"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)',
          gap: '48px',
          alignItems: 'start',
        }}
        className="tw-grid-cols-1 lg:tw-grid-cols-2"
      >
        {/* Course details */}
        <div className="reveal-on-scroll">
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.25rem',
              fontWeight: isConceptA ? 600 : 700,
              color: priceHeadingColor,
              margin: '0 0 10px',
            }}
          >
            Prerequisites
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: moduleColor, margin: '0 0 24px' }}>
            {/* [TRAINING] verbatim — bioresonancetraining.com */}
            {TRAINING.prerequisites}
          </p>

          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.25rem',
              fontWeight: isConceptA ? 600 : 700,
              color: priceHeadingColor,
              margin: '0 0 14px',
            }}
          >
            Course Modules & Key Areas
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {TRAINING.courseModules.map((mod, i) => (
              <li
                key={i}
                style={{
                  fontSize: '14px',
                  color: moduleColor,
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: accentColor,
                    flexShrink: 0,
                    fontWeight: 700,
                    fontSize: '15px',
                    marginTop: '-1px',
                  }}
                >
                  ✓
                </span>
                {/* [TRAINING] verbatim course module descriptions */}
                <span>{mod}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate('/training')} variant="primary" concept={concept}>
              View Full Syllabus & Courses
            </Button>
            <Button onClick={() => openModal('registration')} variant="outline" concept={concept}>
              Open Registration Form 
            </Button>
          </div>
          {/* <p style={{ fontSize: '12px', color: '#737373', marginTop: '14px', fontStyle: 'italic', lineHeight: 1.5 }}>
            Online registration modal active. fee amounts are authoritative.
          </p> */}
        </div>

        {/* Pricing panel */}
        <div className="reveal-on-scroll">
          <div
            style={{
              background: priceBg,
              border: `1px solid ${priceBorder}`,
              borderRadius: isConceptA ? '18px' : '10px',
              padding: '36px',
              boxShadow: isConceptA ? '0 4px 20px rgba(0,0,0,0.04)' : '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            {/* <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
                marginBottom: '8px',
              }}
            >
              Authoritative Investment
            </div> */}
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '1.45rem',
                fontWeight: isConceptA ? 600 : 700,
                color: priceHeadingColor,
                margin: '0 0 20px',
              }}
            >
              Course Tuition & Fees
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {TRAINING.prices.map((price) => (
                <div
                  key={price.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: isConceptA ? '#FFFFFF' : '#FAFAF7',
                    borderRadius: '8px',
                    border: `1px solid ${priceBorder}60`,
                  }}
                >
                  <span style={{ fontSize: '13.5px', color: moduleColor, fontWeight: 500 }}>
                    {/* price labels */}
                    {price.label}
                  </span>
                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: priceHeadingColor,
                      fontFamily: isConceptA ? "'Inter', sans-serif" : "'Manrope', sans-serif",
                    }}
                  >
                    {/* authoritative price — do not modify */}
                    {price.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* <div
              style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: `1px solid ${priceBorder}40`,
                fontSize: '12px',
                color: '#666666',
                lineHeight: 1.5,
              }}
            >
              Standard inquiry email destination: <strong style={{ color: priceHeadingColor }}>langtonsmithclinic@hotmail.co.uk</strong>. Direct online payment gateway/checkout is out of scope.
            </div> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
