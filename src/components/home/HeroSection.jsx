import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { HERO, CONTACT } from '../../data/siteContent.js'
import ImageFrame from '../common/ImageFrame.jsx'
import Button from '../common/Button.jsx'

export default function HeroSection({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  return (
    <section
      id="home"
      style={{
        background: isConceptA ? '#F6F3ED' : '#1F303A',
        color: isConceptA ? '#303832' : '#EEF3F2',
        minHeight: 'calc(100svh - 76px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
          gap: '48px',
          alignItems: 'center',
        }}
        className="tw-grid-cols-1 lg:tw-grid-cols-2"
      >
        {/* Text Column */}
        <div className="reveal-on-scroll">
          {/* Label */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: isConceptA ? '#C58F75' : '#B99A62',
              marginBottom: '14px',
            }}
          >
            {/* [CLINIC] langtonsmithclinic.com */}
            incorporating Bioresonance Training
          </span>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: isConceptA ? 'clamp(2.5rem, 5vw, 4.2rem)' : 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: isConceptA ? 600 : 800,
              color: isConceptA ? '#2F5147' : '#FAFAF7',
              lineHeight: 1.08,
              margin: '0 0 16px',
            }}
          >
            Langton Smith<br />Clinic
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: isConceptA ? '1.55rem' : '1.25rem',
              fontStyle: isConceptA ? 'italic' : 'normal',
              fontWeight: isConceptA ? 400 : 600,
              color: isConceptA ? '#2F5147' : '#A8CDC4',
              margin: '0 0 20px',
            }}
          >
            {/* [CLINIC] langtonsmithclinic.com — exact source tagline */}
            For better health naturally
          </p>

          {/* Intro paragraph */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: isConceptA ? '#303832' : '#EEF3F2',
              margin: '0 0 32px',
              maxWidth: '520px',
            }}
          >
            Established in 1997 by Julie Langton Smith MSc. A premier complementary health practice offering Transpersonal Psychotherapy, Senior Clinical Hypnotherapy, and Remote Bioresonance Health Testing — alongside accredited practitioner training.
          </p>

          {/* Direct Route CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
            <Button onClick={() => navigate('/contact')} variant="primary" concept={concept}>
              Book / Contact Us
            </Button>
            <Button onClick={() => navigate('/training')} variant="outline" concept={concept}>
              Visit Bioresonance Training
            </Button>
            {/* <Button onClick={() => openModal('health-form')} variant="ghost" concept={concept}>
              Bioresonance Health Form →
            </Button> */}
            <Button onClick={() => openModal('client-consultation')} variant="ghost" concept={concept}>
              Client Form →
            </Button>
          </div>

          {/* Contact quick links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', paddingTop: '16px', borderTop: isConceptA ? '1px solid rgba(169,187,169,0.4)' : '1px solid rgba(20,84,90,0.5)' }}>
            <a
              href={`tel:${CONTACT.phone}`}
              style={{
                fontSize: '13.5px',
                color: isConceptA ? '#2F5147' : '#A8CDC4',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
              }}
            >
              <span>📞</span>
              <span>{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{
                fontSize: '13.5px',
                color: isConceptA ? '#2F5147' : '#A8CDC4',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
              }}
            >
              <span>✉</span>
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>

        {/* Visual Column */}
        <div className="reveal-on-scroll " style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '480px'}}>
            <ImageFrame
              src="https://images.squarespace-cdn.com/content/v1/5b3a31df5cfd791aa4a84756/1531257639617-5QRK9G7M1OCB00FC9N9C/artem-kovalev-86365-unsplash.jpg"
              className=''
              alt="A person sitting quietly by the water, representing the clinic's counselling and wellbeing services"
              mediaKey="clinicHero"
              aspectRatio={isConceptA ? '4/5' : '16/11'}
              rounded={isConceptA ? '22px' : '12px'}
              style={{
                boxShadow: isConceptA ? '0 16px 40px rgba(47,81,71,0.14)' : '0 16px 40px rgba(0,0,0,0.3)',
                border: isConceptA ? '3px solid #FFFFFF' : '2px solid #14545A', maxHeight:'350px'
              }}
            />

            {/* Concept A: Refined service pills */}
            {isConceptA && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px 18px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #A9BBA9',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { label: 'Full Health Testing (£300)', href: '/services/health-testing' },
                  { label: 'Counselling', href: '/services/counselling' },
                  { label: 'Hypnotherapy', href: '/services/hypnotherapy' },
                  { label: 'Practitioner Training', href: '/training' },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => navigate(s.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: '#2F5147',
                      fontWeight: 600,
                      textDecoration: 'underline',
                    }}
                  >
                    • {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* Concept B: Key Statistics Strip */}
            {!isConceptA && (
              <div
                style={{
                  marginTop: '16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1px',
                  background: '#14545A',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #14545A',
                }}
              >
                {[
                  { value: '1997', label: 'Est. Practice' },
                  { value: '£300', label: 'Health Test' },
                  { value: 'Worldwide', label: 'Remote Testing' },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: '#1F303A', padding: '14px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#A8CDC4', fontFamily: 'Manrope, sans-serif' }}>{stat.value}</div>
                    <div style={{ fontSize: '10px', color: '#EEF3F2', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
