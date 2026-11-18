import { React, Link } from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { TRAINING, _PRICES, CONTACT } from '../data/siteContent.js'
//  import {useNavigate} from "react-router-dom";

export default function TrainingCoursesPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()
  

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const syllabusParts = [
    {
      part: 'Part 1',
      title: 'Foundational Bioresonance & Food Testing',
      price: _PRICES.trainingPart1,
      duration: '2-Day Intensive Hands-on or Zoom Cohort',
      topics: [
        'Physics & biophysical principles of electromagnetic radiation and wave fields',
        'Operating bioresonance scanning devices (SCOPE & ScopeQ hardware introduction)',
        'Food intolerance, sensitivity, and allergy Testing techniques',
        'Reading and interpreting hair sample frequency data',
        'Constructing personalized food elimination and reintroduction protocols',
      ],
      pageRoute: '/BioresonancePractitionerTrainingPart1'
    },
    {
      part: 'Part 2',
      title: 'Advanced Resonance, Pathogens & Practice Setup',
      price: _PRICES.trainingPart2,
      duration: '2-Day Advanced Masterclass & Practicum',
      topics: [
        'Advanced differential health assessments and organ system balancing',
        'Environmental stressor detection (electro-smog, geopathic stress, heavy metals)',
        'Pathogen profiling: fungal burdens, viral frequencies, and bacterial imbalances',
        'Electronic remedy copying, card encoding, and remote broadcasting',
        'Commercial practice management, client reports, and professional ethics',
      ],
      pageRoute: '/BioresonancePractitionerTrainingPart2'
    },
    {
      part: 'Combined',
      title: 'Complete Practitioner Certification Programme',
      price: _PRICES.trainingCombined,
      duration: 'Full Part 1 + Part 2 Bundle with Guided Case Studies',
      topics: [
        'Comprehensive curriculum encompassing all Part 1 and Part 2 modules',
        'Direct personal mentorship with Julie Langton Smith MSc',
        'Evaluation of supervised clinical case studies for certification',
        'Practitioner directory inclusion and ongoing professional support',
      ],

    },
    {
      part: 'Refresher',
      title: 'Annual Professional Refresher & Masterclass',
      price: _PRICES.annualRefresher,
      duration: 'Flexible 1-on-1 Consultation & Technical Update',
      topics: [
        'Updating device databases and software parameters',
        'Reviewing complex client case studies and differential anomalies',
        'Advanced energetic protocols and new research updates',
      ],

    },
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
              { label: 'Courses & Syllabus' },
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
                Bioresonance International Accredited Training
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
                Bioresonance Business Practitioner Training
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
                A professional accredited programme taught directly by Julie Langton Smith MSc, empowering healthcare professionals and natural therapists to establish a successful bioresonance practice.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button onClick={() => openModal('registration')} variant="primary" concept={concept}>
                  Register for Practitioner Training
                </Button>
                <Button onClick={() => navigate('/training/devices')} variant="outline" concept={concept}>
                  View Bioresonance Devices
                </Button>
              </div>
            </div>

            {/* Prerequisites Card */}
            <div>
              <div
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '18px' : '12px',
                  padding: '36px',
                  border: `1px solid ${borderColor}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '8px' }}>
                  Entry Prerequisites
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: headingColor, margin: '0 0 12px' }}>
                  Required Foundational Knowledge
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: bodyColor, margin: '0 0 16px' }}>
                  {TRAINING.prerequisites} (Prerequisite courses in Anatomy, Physiology, and Nutrition can be arranged if required).
                </p>
                <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  <div>🎓 <strong>Certification:</strong> Accredited Diploma upon case study completion</div>
                  <div>👥 <strong>Format:</strong> Small cohort intensive (Online or Clinic Practical)</div>
                  <div>👩‍⚕️ <strong>Instructor:</strong> Julie Langton Smith MSc</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Course Options & Tuition Table */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor }}>
            Curriculum & Investment
          </span>
          <h2
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2.4rem',
              fontWeight: isConceptA ? 600 : 800,
              color: headingColor,
              margin: '8px 0 16px',
            }}
          >
            Authoritative Course Structure & Fees
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: bodyColor }}>
            Tuition rates supplied directly by the Statement of Work. Direct online payment gateways are out of scope; registration is secured via inquiry and bank transfer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          {syllabusParts.map((item) => (
            <div
              key={item.part}
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '18px' : '10px',
                padding: '32px',
                border: `1px solid ${borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
                {item.part}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: headingColor, margin: '0 0 12px', minHeight: '48px' }}>
                {item.title}
              </h3>

              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: isConceptA ? '#2F5147' : '#14545A',
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', sans-serif",
                  marginBottom: '8px',
                }}
              >
                {item.price}
              </div>
              <div style={{ fontSize: '12px', color: accentColor, fontWeight: 600, marginBottom: '20px' }}>
                {item.duration}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {item.topics.map((t, idx) => (
                  <li key={idx} style={{ fontSize: '13px', color: bodyColor, display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
             

              <Button
                onClick={() => {
                  const part = String(item.part ?? '').toLowerCase();
                  if (part.includes('part 1') || part.includes('part1')) {
                    navigate('/training/BioresonancePractitionerTrainingPart1');
                  } else if (part.includes('part 2') || part.includes('part2')) {
                    navigate('/training/BioresonancePractitionerTrainingPart2');
                  }
                }}
                className={
                  /part\s*[12]/i.test(String(item.part ?? ''))
                    ? ''
                    : 'tw-hidden'
                }
                variant="secondary"
                concept={concept}
              >
                View more {item.part}
              </Button>
              <Button onClick={() => openModal('registration')} className='tw-mt-3' variant="primary" concept={concept}>
                Apply for {item.part}
              </Button>
            </div>
          ))}
        </div>

        {/* Detailed Syllabus List */}
        <div
          style={{
            background: isConceptA ? '#FFFFFF' : '#1F303A',
            color: isConceptA ? '#303832' : '#EEF3F2',
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '48px 40px',
            border: `1px solid ${borderColor}`,
          }}
        >
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: isConceptA ? '#2F5147' : '#FAFAF7',
              margin: '0 0 24px',
            }}
          >
            Comprehensive Course Learning Objectives
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {TRAINING.courseModules.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: accentColor, fontWeight: 700, fontSize: '16px', marginTop: '1px' }}>✓</span>
                <span style={{ fontSize: '14px', lineHeight: 1.6, color: isConceptA ? '#303832' : '#EEF3F2' }}>{m}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: `1px solid ${borderColor}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ fontSize: '13.5px', color: isConceptA ? '#666666' : '#A8CDC4' }}>
              Questions about course prerequisites or device compatibility? Email <strong style={{ color: isConceptA ? '#2F5147' : '#FAFAF7' }}>{CONTACT.email}</strong>
            </div>
            <Button onClick={() => navigate('/training/registration')} variant="outline" concept={concept}>
              Read Registration Guidelines →
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

