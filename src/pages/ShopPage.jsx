import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { HANDBOOK, _PRICES, CONTACT } from '../data/siteContent.js'

export default function ShopPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const catalogItems = [
    {
      title: 'Bioresonance Full Clinical Health Test',
      category: 'Remote Clinical Testing',
      author: 'Langton Smith Clinic',
      desc: 'Complete 6-part biofeedback test via hair sample, written report within 7–10 working days, and 1-on-1 telephone consultation.',
      price: _PRICES.fullHealthTesting,
      actionText: 'Book / Health Form',
      onAction: () => openModal('health-form'),
    },
    {
      title: 'Psychotherapy and Counselling',
      // category: 'Authoritative Literature',
      author: 'Julie Langton Smith MSc',
      // desc: 'Comprehensive practical manual on bioresonance, CAM evolution, hair test analysis, and food elimination protocols.',
      price: '£95/session',
      actionText: 'Enquire / Order Book',
      actionHref: `mailto:${CONTACT.email}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`,
    },
    {
      title: 'Clinical Hypnotherapy',
      // category: 'Authoritative Literature',
      author: 'Julie Langton Smith MSc',
      // desc: 'Comprehensive practical manual on bioresonance, CAM evolution, hair test analysis, and food elimination protocols.',
      price: ' £95/session',
      actionText: 'Enquire / Order Book',
      actionHref: `mailto:${CONTACT.email}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`,
    },
    {
      title: 'Food Sensitivity Testing Handbook',
      category: 'Authoritative Literature',
      author: 'Julie Langton Smith MSc',
      desc: 'Comprehensive practical manual on bioresonance, CAM evolution, hair test analysis, and food elimination protocols.',
      price: `${HANDBOOK.priceUK} (UK) / ${HANDBOOK.priceInternational} (Intl)`,
      actionText: 'Enquire / Order Book',
      actionHref: `mailto:${CONTACT.email}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`,
    },
    
    {
      title: 'Weight Loss Clinical Hypnotherapy Audio',
      category: 'Therapeutic Audio Download',
      author: 'Julie Langton Smith MSc',
      desc: 'Professional audio session using subconscious suggestion to eliminate food cravings and support steady, joyful weight reduction.',
      price: _PRICES.hypnotherapyDownload,
      actionText: 'Enquire via Email',
      actionHref: `mailto:${CONTACT.email}?subject=Hypnotherapy%20Audio%20Enquiry`,
    },
    {
      title: 'Bioresonance Practitioner Training — Part 1',
      category: 'Accredited Training Course',
      author: 'Bioresonance International',
      desc: '2-Day foundational intensive covering biophysics, SCOPE device operation, and food intolerance scanning.',
      price: _PRICES.trainingPart1,
      actionText: 'Register Application',
      onAction: () => openModal('registration'),
    },
    {
      title: 'Bioresonance Practitioner Training — Part 2',
      category: 'Accredited Training Course',
      author: 'Bioresonance International',
      desc: 'Advanced 2-day masterclass covering pathogen profiling, remedy copying, remote broadcasting, and practice setup.',
      price: _PRICES.trainingPart2,
      actionText: 'Register Application',
      onAction: () => openModal('registration'),
    },
    {
      title: 'Practitioner Certification — Combined Bundle',
      category: 'Complete Certification  Pathway',
      author: 'Bioresonance International',
      desc: 'Full Part 1 + Part 2 curriculum with personal mentorship from Julie Langton Smith and supervised clinical case studies.',
      price: _PRICES.trainingCombined,
      actionText: 'Register Application',
      onAction: () => openModal('registration'),
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
          minHeight: '45vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Breadcrumbs
            concept={concept}
            items={[{ label: 'Shop & Inquiry Catalog' }]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              Inquiry-Based Product Catalog 
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
              Publications, Testing Services & Training Catalog
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 24px' }}>
              Order authoritative publications, schedule remote health testing kits, and apply for accredited practitioner training.
            </p>

            {/* <div
              style={{
                background: isConceptA ? 'rgba(47,81,71,0.06)' : 'rgba(20,84,90,0.2)',
                border: `1px solid ${borderColor}`,
                borderRadius: '8px',
                padding: '12px 18px',
                fontSize: '13px',
                color: isConceptA ? '#2F5147' : '#A8CDC4',
                display: 'inline-block',
              }}
            >
              ℹ️ Direct merchant checkout is not offered. Orders are confirmed personally by Julie via email: <strong>{CONTACT.email}</strong>.
            </div> */}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {catalogItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '18px' : '10px',
                padding: '32px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
                {item.category}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: headingColor, margin: '0 0 8px', minHeight: '46px' }}>
                {item.title}
              </h3>
              <div style={{ fontSize: '12.5px', color: '#777777', marginBottom: '14px' }}>
                By {item.author}
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: bodyColor, margin: '0 0 20px', flex: 1 }}>
                {item.desc}
              </p>

              <div
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: isConceptA ? '#2F5147' : '#14545A',
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', sans-serif",
                  marginBottom: '16px',
                }}
              >
                {item.price}
              </div>

              {item.onAction ? (
                <Button onClick={item.onAction} variant="primary" concept={concept}>
                  {item.actionText}
                </Button>
              ) : (
                <Button href={item.actionHref} variant="outline" concept={concept}>
                  {item.actionText}
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

