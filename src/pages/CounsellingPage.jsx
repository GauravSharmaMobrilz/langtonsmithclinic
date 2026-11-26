import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { CONTACT } from '../data/siteContent.js'

export default function CounsellingPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const specialisms = [
    { title: 'Anxiety & Panic Disorders', desc: 'Overcoming acute panic, generalized anxiety states, and daily chronic stress patterns.' },
    { title: 'Child & Teenage Anxiety', desc: 'Supportive, non-judgmental guidance navigating school pressures, exam stress, and social anxieties.' },
    { title: 'PTSD & Post-Viral Anxiety', desc: 'Gentle somatic and mindful resolution of trauma, grief, and nervous system fatigue.' },
    { title: 'Obsessive Compulsive Behaviours', desc: 'Cognitive reframing and mindful restructuring of repetitive rituals and intrusive thinking.' },
    { title: 'Bereavement & Pet Bereavement', desc: 'Deep compassionate accompaniment through loss, life transitions, and profound grief.' },
    { title: 'Relationship & Family Dynamics', desc: 'Improving emotional connection, conflict resolution, boundaries, and communication.' },
  ]

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* Viewport-aware Hero Header */}
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
              { label: 'Clinic Services', href: '/services/health-testing' },
              { label: 'Counselling & Psychotherapy' },
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              MSc Transpersonal Psychology 
              {/* · NCPS & BPS Accredited */}
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
              Counselling & Transpersonal Psychotherapy
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
              Integrating traditional psychological methods with a mindful, spiritual, and human-centric perspective to treat root causes of emotional distress and psychosomatic physical symptoms.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button onClick={() => openModal('client-consultation')} variant="primary" concept={concept}>
                Client Questionnaire
              </Button>
              <Button onClick={() => navigate('/contact')} variant="outline" concept={concept}>
                Book a Free Initial Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        {/* The Transpersonal Approach */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
          className="tw-grid-cols-1 lg:tw-grid-cols-2"
        >
          <div>
            <h2
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2.2rem',
                fontWeight: 700,
                color: headingColor,
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              Beyond Symptom Reduction: Exploring the Mind-Body Connection
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '16px' }}>
              Transpersonal psychotherapy looks beyond superficial symptom suppression to explore deeper underlying factors — including mind-body connections — that can contribute to both psychological distress and physical somatic issues such as IBS, weight fluctuations, chronic headaches, insomnia, cravings, and back or joint pain.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '24px' }}>
              Julie Langton Smith holds a Master’s Degree in Transpersonal Psychology and Consciousness Studies (TPACCS) from the University of Northampton, a Certification  in Psychotherapeutic Counselling, and a diploma in Psychotherapeutic Counselling Supervision (BPS). Her sessions provide a secure, confidential sanctuary for profound healing.
            </p>

            {/* Session Structure Card */}
            <div
              style={{
                background: isConceptA ? '#FFFFFF' : '#1F303A',
                color: isConceptA ? '#303832' : '#EEF3F2',
                borderRadius: isConceptA ? '16px' : '10px',
                padding: '28px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: isConceptA ? '#2F5147' : '#A8CDC4', margin: '0 0 12px' }}>
                Consultation & Session Structure
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li>✨ <strong>Free Initial Consultation:</strong> An introductory conversation to explore your needs before committing to a block of sessions.</li>
                <li>⏱ <strong>Session Duration:</strong> Standard consultations last 50 to 60 minutes.</li>
                <li>📅 <strong>Course Structure:</strong> Typically scheduled as a course of 4 to 6 weekly or bi-weekly sessions for lasting change.</li>
                <li>🌐 <strong>Delivery Formats:</strong> In-person at the Littlehampton clinic, or remote worldwide via Zoom, or telephone.</li>
              </ul>
            </div>
          </div>

          {/* Testimonial Quote Box */}
          <div>
            <div
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '18px' : '12px',
                padding: '36px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '48px', color: accentColor, lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: '8px' }}>“</div>
              <blockquote style={{ fontSize: '15px', lineHeight: 1.8, fontStyle: isConceptA ? 'italic' : 'normal', margin: '0 0 20px', color: bodyColor }}>
                In late 2015 my son was diagnosed with anxiety disorder, adjustment disorder and depression. He then spent over a year under the NHS being treated with various therapies which produced no discernible results or improvements. After being recommended to Julie in 2017, she quickly got to the root of the issues. Family members saw a marked improvement in mood and behaviour after just the first session, and he eventually returned to his thoughtful, hardworking, and fully engaged self.
              </blockquote>
              <cite style={{ fontStyle: 'normal', fontSize: '13.5px', fontWeight: 700, color: headingColor, display: 'block' }}>
                — Client Parent (UK)
              </cite>
              <span style={{ fontSize: '12px', color: '#777777' }}>Verified source testimonial</span>
            </div>
          </div>
        </div>

        {/* Specialisms Grid */}
        <div style={{ marginBottom: '56px' }}>
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: headingColor,
              margin: '0 0 28px',
              textAlign: 'center',
            }}
          >
            Therapeutic Specialisms & Areas of Focus
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {specialisms.map((s) => (
              <div
                key={s.title}
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '14px' : '8px',
                  padding: '24px',
                  border: `1px solid ${borderColor}`,
                }}
              >
                <h4 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: headingColor }}>{s.title}</h4>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: bodyColor }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

