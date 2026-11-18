import React from 'react'
import { FOUNDER } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import ImageFrame from '../common/ImageFrame.jsx'

export default function FounderIntroduction({ concept = 'a' }) {
  const isConceptA = concept === 'a'

  const bg = isConceptA ? '#F6F3ED' : '#EEF3F2'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const tagColor = isConceptA ? '#C58F75' : '#14545A'
  const tagBg = isConceptA ? 'rgba(197,143,117,0.12)' : 'rgba(20,84,90,0.12)'

  return (
    <SectionContainer
      id="about-julie"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,2fr) minmax(0,3fr)',
          gap: '64px',
          alignItems: 'center',
        }}
        className="tw-grid-cols-1 lg:tw-grid-cols-2"
      >
        {/* Portrait */}
        <div className="reveal-on-scroll" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '380px' }}>
            <ImageFrame
              src={FOUNDER.portraitSrc}
              alt={FOUNDER.portraitAlt}
              mediaKey="juliePortrait"
              aspectRatio={isConceptA ? '3/4' : '1/1'}
              rounded={isConceptA ? '20px' : '50%'}
              style={{
                boxShadow: isConceptA ? '0 12px 36px rgba(47,81,71,0.15)' : '0 12px 36px rgba(31,48,58,0.18)',
                border: isConceptA ? '3px solid #FFFFFF' : '4px solid #A8CDC4',
              }}
            />
            {isConceptA && (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '16px',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: '#2F5147',
                }}
              >
                Julie Langton Smith MSc — Founder & Principal Practitioner
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="reveal-on-scroll">
          <SectionHeading
            label="Founder & Principal Practitioner"
            heading={FOUNDER.fullTitle}
            concept={concept}
            align="left"
            className="tw-mb-4"
          />

          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: tagColor,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
            }}
          >
            {FOUNDER.role} · Est. {FOUNDER.established}
          </p>

          {/* [CLINIC] verbatim biography excerpt */}
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: bodyColor, margin: '0 0 24px' }}>
            {FOUNDER.biographyExcerpt}
          </p>

          {/* Qualifications */}
          <div style={{ marginBottom: '24px' }}>
            <h4
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '1.15rem',
                fontWeight: 600,
                color: headingColor,
                margin: '0 0 12px',
              }}
            >
              Qualifications & Credentials
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {FOUNDER.qualifications.map((q) => (
                <li
                  key={q}
                  style={{
                    fontSize: '13.5px',
                    color: bodyColor,
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: tagColor, flexShrink: 0, marginTop: '2px', fontWeight: 700 }}>
                    —
                  </span>
                  {/* [CLINIC] verified qualification listing; includes updated hypnotherapy title */}
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional associations */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {FOUNDER.associations.map((a) => (
              <span
                key={a}
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: tagBg,
                  color: tagColor,
                  border: `1px solid ${tagColor}40`,
                }}
              >
                {/* [CLINIC] */}
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

