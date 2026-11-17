import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { BIORESONANCE_INTRO } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Button from '../common/Button.jsx'

export default function BioresonanceIntro({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentBg = isConceptA ? '#2F5147' : '#1F303A'

  return (
    <SectionContainer
      id="about"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: '64px',
          alignItems: 'center',
        }}
        className="tw-grid-cols-1 lg:tw-grid-cols-2"
      >
        {/* Left — blockquote / visual accent */}
        <div className="reveal-on-scroll">
          <div
            style={{
              background: accentBg,
              borderRadius: isConceptA ? '20px' : '12px',
              padding: '48px 40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isConceptA ? '0 10px 30px rgba(47,81,71,0.12)' : '0 10px 30px rgba(31,48,58,0.15)',
            }}
          >
            {/* Decorative element */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                borderRadius: '0 0 0 120px',
                background: isConceptA ? 'rgba(197,143,117,0.15)' : 'rgba(20,84,90,0.4)',
              }}
              aria-hidden="true"
            />

            <blockquote
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? '1.6rem' : '1.3rem',
                fontStyle: isConceptA ? 'italic' : 'normal',
                fontWeight: isConceptA ? 400 : 700,
                color: isConceptA ? '#F6F3ED' : '#A8CDC4',
                lineHeight: 1.4,
                margin: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* [TRAINING] verbatim — bioresonancetraining.com */}
              "{BIORESONANCE_INTRO.foundationalStatement}"
            </blockquote>

            <cite
              style={{
                display: 'block',
                marginTop: '24px',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isConceptA ? '#A9BBA9' : '#B99A62',
                fontStyle: 'normal',
              }}
            >
              — Bioresonance Training
            </cite>
          </div>

          {/* Waveform decoration — decorative only, not real medical data (implementation-plan.md § 5) */}
          {!isConceptA && (
            <div
              style={{
                marginTop: '16px',
                padding: '16px',
                background: '#EEF3F2',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                border: '1px solid #A8CDC4',
              }}
              aria-hidden="true"
            >
              {[4, 8, 14, 22, 28, 22, 14, 8, 4, 10, 18, 26, 32, 26, 18, 10, 4, 8, 14, 22, 14, 8, 4].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    height: `${h}px`,
                    borderRadius: '2px',
                    background: '#14545A',
                    opacity: 0.65,
                  }}
                />
              ))}
              <span style={{ fontSize: '10px', color: '#303B40', opacity: 0.8, marginLeft: '12px', fontWeight: 600 }}>
                Frequency Waveform (Decorative)
              </span>
            </div>
          )}
        </div>

        {/* Right — copy */}
        <div className="reveal-on-scroll">
          <SectionHeading
            label="What is Bioresonance?"
            heading={BIORESONANCE_INTRO.sectionHeading}
            concept={concept}
            align="left"
            className="tw-mb-6"
          />

          <p style={{ fontSize: '15px', lineHeight: 1.8, color: bodyColor, margin: '0 0 16px' }}>
            {/* [TRAINING] verbatim — bioresonancetraining.com */}
            {BIORESONANCE_INTRO.explanation}
          </p>

          <p style={{ fontSize: '15px', lineHeight: 1.8, color: bodyColor, margin: '0 0 16px' }}>
            {/* [TRAINING] verbatim — bioresonancetraining.com */}
            {BIORESONANCE_INTRO.applicationNote}
          </p>

          <p style={{ fontSize: '15px', lineHeight: 1.8, color: bodyColor, margin: '0 0 28px' }}>
            {/* [TRAINING] verbatim — bioresonancetraining.com */}
            {BIORESONANCE_INTRO.energyTraditions}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate('/about')} variant="outline" concept={concept}>
              Learn About Julie & The Clinic
            </Button>
            <Button onClick={() => navigate('/services/health-testing')} variant="ghost" concept={concept}>
              Full Health Testing (£300) →
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
