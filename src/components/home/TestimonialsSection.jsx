import React, { useState } from 'react'
import { TESTIMONIALS } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { useReducedMotion } from '../../hooks/useReducedMotion.js'

export default function TestimonialsSection({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const [active, setActive] = useState(0)
  const prefersReduced = useReducedMotion()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const cardBorder = isConceptA ? '#A9BBA9' : '#A8CDC4'
  const quoteColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#2F5147' : '#14545A'
  const quoteMarkColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <SectionContainer
      id="testimonials"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <SectionHeading
        label="Client Experiences"
        heading="Client Testimonials"
        subheading="Testimonials reproduced verbatim from the original langtonsmithclinic.com website."
        concept={concept}
        className="tw-mb-12 reveal-on-scroll"
      />

      <div className="reveal-on-scroll">
        {/* Active testimonial card */}
        <div
          style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '48px 40px',
            marginBottom: '32px',
            boxShadow: isConceptA ? '0 8px 30px rgba(0,0,0,0.06)' : '0 6px 20px rgba(0,0,0,0.08)',
            maxWidth: '820px',
            margin: '0 auto 32px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              color: quoteMarkColor,
              lineHeight: 1,
              marginBottom: '8px',
              fontFamily: 'Georgia, serif',
              userSelect: 'none',
            }}
          >
            “
          </div>
          <blockquote
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: isConceptA ? '1.25rem' : '1.05rem',
              fontStyle: isConceptA ? 'italic' : 'normal',
              lineHeight: 1.8,
              color: quoteColor,
              margin: '0 0 28px',
            }}
          >
            {/* [CLINIC] verbatim testimonial — langtonsmithclinic.com */}
            {TESTIMONIALS[active].quote}
            {TESTIMONIALS[active].quoteExtended && (
              <> {TESTIMONIALS[active].quoteExtended}</>
            )}
          </blockquote>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              borderTop: `1px solid ${cardBorder}60`,
              paddingTop: '20px',
            }}
          >
            <div>
              <cite
                style={{
                  fontStyle: 'normal',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: accentColor,
                  display: 'block',
                }}
              >
                — {TESTIMONIALS[active].attribution}
              </cite>
              <span style={{ fontSize: '12.5px', color: '#666666' }}>
                {TESTIMONIALS[active].service}
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#888888', fontStyle: 'italic' }}>
              Verified source testimonial
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div
          role="group"
          aria-label="Testimonial navigation"
          style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1} from ${t.attribution}`}
              aria-pressed={active === i}
              style={{
                width: active === i ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: `2px solid ${accentColor}`,
                background: active === i ? accentColor : 'transparent',
                cursor: 'pointer',
                transition: prefersReduced ? 'none' : 'all 0.25s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
          <button
            onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label="Previous testimonial"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              color: accentColor,
              fontSize: '13.5px',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
          >
            ← Previous
          </button>
          <button
            onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
            aria-label="Next testimonial"
            style={{
              background: accentColor,
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '13.5px',
              fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </SectionContainer>
  )
}

