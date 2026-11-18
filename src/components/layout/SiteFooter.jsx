import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import BrandLogo from '../common/BrandLogo.jsx'
import { FOOTER, CONTACT, BRAND } from '../../data/siteContent.js'

export default function SiteFooter({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#243D36' : '#141F25'
  const headingColor = isConceptA ? '#F6F3ED' : '#A8CDC4'
  const bodyColor = isConceptA ? '#A9BBA9' : '#A8CDC4'
  const linkColor = isConceptA ? '#F6F3ED' : '#EEF3F2'
  const mutedColor = isConceptA ? 'rgba(169,187,169,0.7)' : 'rgba(168,205,196,0.7)'
  const borderColor = isConceptA ? 'rgba(169,187,169,0.2)' : 'rgba(20,84,90,0.5)'

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      style={{
        background: bg,
        color: bodyColor,
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: isConceptA ? '1px solid rgba(169,187,169,0.3)' : '1px solid #14545A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand & Clinic Profile */}
          <div style={{ gridColumn: 'span 1' }}>
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', marginBottom: '16px' }}
            >
              <BrandLogo concept={concept} variant="dark" size="default" />
            </button>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: mutedColor, maxWidth: '280px', margin: '0 0 16px' }}>
              Complementary natural healthcare practice run by Julie Langton Smith MSc since 1997. Incorporating Bioresonance International Accredited Training.
            </p>

            <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <a href={`mailto:${CONTACT.email}`} style={{ color: linkColor, textDecoration: 'none', fontWeight: 600 }}>
                  ✉ {CONTACT.email}
                </a>
              </div>
              <div style={{ color: linkColor, fontWeight: 500 }}>
                📞 {CONTACT.phone}
              </div>
              <div style={{ color: mutedColor, lineHeight: 1.4 }}>
                📍 {CONTACT.address}
              </div>
            </div>
          </div>

          {/* Dedicated Navigation Pages */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, marginBottom: '16px', marginTop: 0 }}>
              Main Pages
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'Home Page', href: '/' },
                { label: 'About Julie & Clinic History', href: '/about' },
                { label: 'Shop & Literature Catalog', href: '/shop' },
                { label: 'Contact Us & Location', href: '/contact' },
                { label: 'Terms & Policies', href: '/terms-policies' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: linkColor,
                      fontSize: '13.5px',
                      textAlign: 'left',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Therapies */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, marginBottom: '16px', marginTop: 0 }}>
              Clinic Therapies
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'Full Health Testing (£300)', href: '/services/health-testing' },
                { label: 'Counselling & Psychotherapy', href: '/services/counselling' },
                { label: 'Senior Clinical Hypnotherapy', href: '/services/hypnotherapy' },
                { label: 'Client Health Form Page', href: '/services/health-form' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: linkColor,
                      fontSize: '13.5px',
                      textAlign: 'left',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => openModal('health-form')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: isConceptA ? '#C58F75' : '#B99A62',
                    fontSize: '13px',
                    fontWeight: 700,
                    textAlign: 'left',
                    textDecoration: 'underline',
                  }}
                >
                  ⚡ Open Bioresonance Health Form
                </button>
              </li>
              <li style={{ marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => openModal('client-consultation')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: isConceptA ? '#C58F75' : '#B99A62',
                    fontSize: '13px',
                    fontWeight: 700,
                    textAlign: 'left',
                    textDecoration: 'underline',
                  }}
                >
                  ⚡ Open Client Form (Mind Therapies)
                </button>
              </li>
            </ul>
          </div>

          {/* Practitioner Training */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, marginBottom: '16px', marginTop: 0 }}>
              Practitioner Training
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'Practitioner Courses & Prices', href: '/training' },
                { label: 'Registration Requirements', href: '/training/registration' },
                { label: 'Bioresonance Devices (SCOPE & MARS)', href: '/training/devices' },
                { label: 'Training Handbook (£19.99/£24.95)', href: '/training/handbook' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: linkColor,
                      fontSize: '13.5px',
                      textAlign: 'left',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => openModal('registration')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: isConceptA ? '#C58F75' : '#B99A62',
                    fontSize: '13px',
                    fontWeight: 700,
                    textAlign: 'left',
                    textDecoration: 'underline',
                  }}
                >
                  ⚡ Open Practitioner Registration Modal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '12px', color: mutedColor }}>
            © {new Date().getFullYear()} Mobrilz. Website Under Development. All Rights Reserved.
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              type="button"
              onClick={() => navigate('/terms-policies')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '12px',
                color: mutedColor,
                textDecoration: 'underline',
              }}
            >
              Terms & Policies
            </button>
            <button
              type="button"
              onClick={() => navigate('/terms-policies')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '12px',
                color: mutedColor,
                textDecoration: 'underline',
              }}
            >
              Privacy Notice
            </button>
          </div>

          {/* <p style={{ margin: 0, fontSize: '11px', color: mutedColor, fontStyle: 'italic' }}>
            Consolidation prototype of langtonsmithclinic.com & bioresonancetraining.com
          </p> */}
        </div>
      </div>
    </footer>
  )
}
