import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { AUDIENCE_PATHS } from '../../data/siteContent.js'
import Button from '../common/Button.jsx'

export default function AudiencePathways({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate } = useRouter()

  const bg = isConceptA ? '#2F5147' : '#14545A'

  return (
    <section style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{ textAlign: 'center', marginBottom: '48px' }}
          className="reveal-on-scroll"
        >
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: isConceptA ? '#A9BBA9' : '#A8CDC4',
            }}
          >
            Two Clear Pathways
          </span>
          <h2
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: isConceptA ? '2.4rem' : '2rem',
              fontWeight: isConceptA ? 600 : 800,
              color: '#FFFFFF',
              margin: '12px 0 0',
            }}
          >
            Where would you like to begin?
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Patient path */}
          <div
            className="reveal-on-scroll"
            style={{
              background: isConceptA ? '#F6F3ED' : '#1F303A',
              color: isConceptA ? '#303832' : '#EEF3F2',
              borderRadius: isConceptA ? '20px' : '12px',
              padding: '44px 36px',
              border: isConceptA ? '1px solid rgba(169,187,169,0.3)' : '1px solid #A8CDC4',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isConceptA ? '#C58F75' : '#B99A62',
                marginBottom: '14px',
              }}
            >
              {AUDIENCE_PATHS.patient.label}
            </div>
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? '1.75rem' : '1.35rem',
                fontWeight: isConceptA ? 600 : 700,
                color: isConceptA ? '#2F5147' : '#FAFAF7',
                margin: '0 0 16px',
                lineHeight: 1.25,
              }}
            >
              {AUDIENCE_PATHS.patient.heading}
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: isConceptA ? '#303832' : '#EEF3F2',
                margin: '0 0 28px',
                flex: 1,
              }}
            >
              {AUDIENCE_PATHS.patient.body}
            </p>
            <div>
              <Button onClick={() => navigate('/services/health-testing')} variant="primary" concept={concept}>
                {AUDIENCE_PATHS.patient.cta}
              </Button>
            </div>
          </div>

          {/* Practitioner path */}
          <div
            className="reveal-on-scroll"
            style={{
              background: isConceptA ? '#4d6553' : '#EEF3F2',
              borderRadius: isConceptA ? '20px' : '12px',
              padding: '44px 36px',
              border: isConceptA ? '1px solid rgba(169,187,169,0.2)' : '1px solid #14545A',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isConceptA ? '#A9BBA9' : '#14545A',
                marginBottom: '14px',
              }}
            >
              {AUDIENCE_PATHS.practitioner.label}
            </div>
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? '1.75rem' : '1.35rem',
                fontWeight: isConceptA ? 600 : 700,
                color: isConceptA ? '#F6F3ED' : '#1F303A',
                margin: '0 0 16px',
                lineHeight: 1.25,
              }}
            >
              {AUDIENCE_PATHS.practitioner.heading}
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: isConceptA ? '#A9BBA9' : '#EEF3F2',
                margin: '0 0 28px',
                flex: 1,
              }}
            >
              {AUDIENCE_PATHS.practitioner.body}
            </p>
            <div>
              <Button
                onClick={() => navigate('/training')}
                variant={isConceptA ? 'outline' : 'primary'}
                concept={concept}
                className={isConceptA ? '!tw-border-a-sage !tw-text-a-ivory hover:!tw-bg-a-sage hover:!tw-text-a-charcoal' : ''}
              >
                {AUDIENCE_PATHS.practitioner.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
