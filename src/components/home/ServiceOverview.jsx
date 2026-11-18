import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { SERVICES } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Button from '../common/Button.jsx'

export default function ServiceOverview({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const cardBg = isConceptA ? '#F6F3ED' : '#FFFFFF'
  const cardBorder = isConceptA ? '1px solid #A9BBA9' : '1px solid #A8CDC4'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const serviceRoutes = {
    counselling: '/services/counselling',
    hypnotherapy: '/services/hypnotherapy',
    'health-Testing': '/services/health-testing',
  }

  const icons = {
    counselling: '🌿',
    hypnotherapy: '💫',
    'health-Testing': '🔬',
  }

  return (
    <SectionContainer
      id="clinic-services"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <SectionHeading
        label="Clinic Services"
        heading="Complementary Health Therapies"
        subheading="Established in 1997, Langton Smith Clinic offers a range of solution-focused complementary therapies."
        concept={concept}
        className="tw-mb-12 reveal-on-scroll"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}
      >
        {SERVICES.map((service) => {
          const targetRoute = serviceRoutes[service.id] || '/services/health-testing'

          return (
            <div
              key={service.id}
              className="reveal-on-scroll"
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: isConceptA ? '18px' : '10px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isConceptA ? '0 4px 16px rgba(0,0,0,0.04)' : '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = isConceptA ? '0 4px 16px rgba(0,0,0,0.04)' : '0 2px 10px rgba(0,0,0,0.06)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{icons[service.id]}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: isConceptA ? '1.5rem' : '1.25rem',
                  fontWeight: isConceptA ? 600 : 700,
                  color: headingColor,
                  margin: '0 0 10px',
                  lineHeight: 1.25,
                }}
              >
                {service.title}
              </h3>

              {/* updated title */}
              {service.id === 'hypnotherapy' && (
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    color: accentColor,
                    fontWeight: 700,
                    marginBottom: '12px',
                    borderLeft: `2.5px solid ${accentColor}`,
                    paddingLeft: '8px',
                  }}
                >
                  {service.titleQualification}
                </span>
              )}

              {/* Excerpt */}
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.7,
                  color: bodyColor,
                  margin: '0 0 20px',
                  flex: 1,
                }}
              >
                {service.excerpt}
              </p>

              {/* Price for health Testing */}
              {/* {service.price && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: isConceptA ? '#2F5147' : '#14545A',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 800,
                    marginBottom: '16px',
                    alignSelf: 'flex-start',
                  }}
                >
                  {service.price} · Remote Testing
                </div>
              )} */}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${cardBorder}`, paddingTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => navigate(targetRoute)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: isConceptA ? '#2F5147' : '#14545A',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  View more →
                </button>

                {service.id === 'health-Testing' && (
                  <button
                    type="button"
                    onClick={() => openModal('health-form')}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: accentColor,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Bioresonance Health Form ↗
                  </button>
                )}

                {(service.id === 'counselling' || service.id === 'hypnotherapy') && (
                  <button
                    type="button"
                    onClick={() => openModal('client-consultation')}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: accentColor,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Client Form ↗
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
