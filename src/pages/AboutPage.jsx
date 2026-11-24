import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import ImageFrame from '../components/common/ImageFrame.jsx'
import Button from '../components/common/Button.jsx'
import { FOUNDER, BRAND, CONTACT } from '../data/siteContent.js'

export default function AboutPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* Hero Header — Viewport-aware */}
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
            items={[{ label: 'About Us' }]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: accentColor,
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Established 1997 · Littlehampton & Harley Street Heritage
            </span>
            <h1
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? 'clamp(2.5rem, 5vw, 3.8rem)' : 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: isConceptA ? 600 : 800,
                color: isConceptA ? '#2F5147' : '#FAFAF7',
                lineHeight: 1.15,
                margin: '0 0 20px',
              }}
            >
              About Julie Langton Smith MSc & The Clinic
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: isConceptA ? '#303832' : '#EEF3F2',
                margin: 0,
              }}
            >
              Over 28 years of dedicated clinical practice uniting Transpersonal Psychotherapy, Clinical Hypnotherapy and Bioresonance Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
            gap: '56px',
            alignItems: 'start',
            marginBottom: '72px',
          }}
          className="tw-grid-cols-1 lg:tw-grid-cols-2"
        >
          {/* Left Column: Portrait & Credentials */}
          <div>
            <div style={{ maxWidth: '420px', margin: '0 auto' }}>
              <ImageFrame
                src={FOUNDER.portraitSrc}
                alt={FOUNDER.portraitAlt}
                mediaKey="juliePortrait"
                aspectRatio="3/4"
                rounded={isConceptA ? '20px' : '10px'}
                style={{
                  boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                  border: isConceptA ? '4px solid #FFFFFF' : '4px solid #A8CDC4',
                  marginBottom: '24px',
                }}
              />

              {/* Verified Credentials Box */}
              <div
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '16px' : '10px',
                  padding: '28px',
                  border: `1px solid ${borderColor}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: headingColor,
                    margin: '0 0 16px',
                  }}
                >
                  Verified Professional Credentials
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {FOUNDER.qualifications.map((q) => (
                    <li key={q} style={{ fontSize: '13.5px', color: bodyColor, display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                      <span style={{ color: accentColor, fontWeight: 700 }}>✓</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '12px', fontWeight: 600, color: accentColor, marginBottom: '8px' }}>
                  Professional Accreditations:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {FOUNDER.associations.map((a) => (
                    <span
                      key={a}
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '16px',
                        background: isConceptA ? 'rgba(47,81,71,0.08)' : 'rgba(20,84,90,0.15)',
                        color: isConceptA ? '#2F5147' : '#14545A',
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Clinical Background */}
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor }}>
              Founder Biography & Practice Evolution
            </span>
            <h2
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2.2rem',
                fontWeight: isConceptA ? 600 : 800,
                color: headingColor,
                margin: '8px 0 24px',
                lineHeight: 1.2,
              }}
            >
              A Pioneering Journey in Complementary & Vibrational Healthcare
            </h2>

            {/* Verbatim excerpt from source */}
            <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              {FOUNDER.biographyExcerpt}
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
              Julie Langton Smith MSc has earned international recognition for her pragmatic, empathic integration of psychological sciences and biophysical testing. Having spent nearly two decades in Horsham and consulting on prestigious Harley Street in London, her practice has expanded to accommodate clients and practitioner students across the United Kingdom, Europe, North America, and worldwide.
            </p>

            {/* Core Philosophy Banner */}
            <div
              style={{
                background: isConceptA ? '#FFFFFF' : '#1F303A',
                borderLeft: `4px solid ${accentColor}`,
                padding: '24px 28px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '36px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif", fontSize: '1.4rem', fontStyle: 'italic', color: isConceptA ? '#2F5147' : '#A8CDC4', marginBottom: '8px' }}>
                “For better health naturally”
              </div>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: isConceptA ? '#303832' : '#EEF3F2' }}>
                Our guiding clinic philosophy honors the body’s innate restorative capacity, investigating underlying emotional, energetic, and environmental root causes rather than merely suppressing surface symptoms.
              </p>
            </div>

            {/* Two Pillars: Therapy Science vs Technology */}
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: headingColor,
                margin: '0 0 16px',
              }}
            >
              The Two Pillars of Our Practice
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '36px' }}>
              <div style={{ background: cardBg, padding: '24px', borderRadius: '12px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🌿</div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: headingColor }}>Transpersonal Psychology</h4>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                  Mindful psychological therapy exploring mind-body interactions, anxiety states, subconscious patterns, and personal self-worth.
                </p>
              </div>

              <div style={{ background: cardBg, padding: '24px', borderRadius: '12px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔬</div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: headingColor }}>Bioresonance Science</h4>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                  Biophysical testing measuring electromagnetic frequency fingerprints of matter to identify food intolerances, stressors, and organ system burdens.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button onClick={() => navigate('/services/health-testing')} variant="primary" concept={concept}>
                Explore Clinic Services
              </Button>
              <Button onClick={() => navigate('/training')} variant="outline" concept={concept}>
                Practitioner Training Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

