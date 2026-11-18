import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { CONTACT } from '../../data/siteContent.js'
import Button from '../common/Button.jsx'

export default function ContactCallout({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#2F5147' : '#14545A'
  const headingColor = '#FFFFFF'
  const bodyColor = isConceptA ? '#A9BBA9' : '#EEF3F2'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <section
      id="contact"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        className="reveal-on-scroll"
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: accentColor,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Get in Touch
        </span>
        <h2
          style={{
            fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
            fontSize: isConceptA ? '2.6rem' : '2.1rem',
            fontWeight: isConceptA ? 600 : 800,
            color: headingColor,
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Connect with Langton Smith Clinic
        </h2>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: bodyColor,
            margin: '0 auto 36px',
            maxWidth: '580px',
          }}
        >
          For appointments, enquiries about complementary clinic therapies, or practitioner training programmes, please contact Julie Langton Smith directly.
        </p>

        {/* Contact details */}
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '36px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '10.5px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
                marginBottom: '8px',
                fontWeight: 700,
              }}
            >
              Email Enquiries
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ color: '#FFFFFF', fontSize: '15px', textDecoration: 'none', fontWeight: 600 }}
            >
              {CONTACT.email}
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '10.5px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
                marginBottom: '8px',
                fontWeight: 700,
              }}
            >
              Telephone
            </div>
            <a
              href={`tel:${CONTACT.phone}`}
              style={{ color: '#FFFFFF', fontSize: '15px', textDecoration: 'none', fontWeight: 600 }}
            >
              {CONTACT.phone}
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '10.5px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
                marginBottom: '8px',
                fontWeight: 700,
              }}
            >
              Clinic Address
            </div>
            <address style={{ color: '#FFFFFF', fontSize: '14.5px', fontStyle: 'normal', lineHeight: 1.5 }}>
              {CONTACT.address}
            </address>
          </div>
        </div> */}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Button onClick={() => navigate('/contact')} variant="outline" concept={concept}>
            Contact Us
          </Button>
          {/* <Button
            onClick={() => navigate('/services/health-testing')}
            variant="outline"
            concept={concept}
            className="!tw-border-white !tw-text-white hover:!tw-bg-white hover:!tw-text-b-ink"
          >
            Explore Services
          </Button> */}
          {/* <Button
            onClick={() => openModal('registration')}
            variant="secondary"
            concept={concept}
          >
            Practitioner Registration
          </Button> */}
        </div>
      </div>
    </section>
  )
}
