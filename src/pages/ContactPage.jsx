import React, { useState } from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { CONTACT } from '../data/siteContent.js'

export default function ContactPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { openModal } = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Bioresonance Health Testing (£300)',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please provide your name'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required'
    if (!formData.message.trim()) newErrors.message = 'Please include a brief message'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const subject = `Website enquiry: ${formData.interest}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Interest: ${formData.interest}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'
  const inputBg = isConceptA ? '#F6F3ED' : '#FAFAF7'

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
            items={[{ label: 'Contact Us' }]}
          />

          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
              Appointments, Consultations & Training Enquiries
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
              Contact Langton Smith Clinic
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: 0 }}>
              Speak directly with Julie Langton Smith MSc regarding therapy sessions, remote health testing, or accredited bioresonance training.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Cards & Form */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
            gap: '56px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
          className="tw-grid-cols-1 lg:tw-grid-cols-2"
        >
          {/* Left Column: Clinic Contact Details */}
          <div>
            <h2
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: headingColor,
                margin: '0 0 20px',
              }}
            >
              Get in Touch Directly
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
              <div style={{ background: cardBg, borderRadius: '12px', padding: '24px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '4px' }}>
                  Electronic Inquiries
                </div>
                <a href={`mailto:${CONTACT.email}`} style={{ fontSize: '16px', fontWeight: 700, color: headingColor, textDecoration: 'none' }}>
                  {CONTACT.email}
                </a>
                {/* <p style={{ fontSize: '12.5px', color: '#666666', margin: '6px 0 0' }}>
                  Initial enquiries and consultation requests by email.
                </p> */}
              </div>

              <div style={{ background: cardBg, borderRadius: '12px', padding: '24px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '4px' }}>
                  Telephone
                </div>
                <a href={`tel:${CONTACT.phone}`} style={{ fontSize: '16px', fontWeight: 700, color: headingColor, textDecoration: 'none' }}>
                  {CONTACT.phone}
                </a>
                {/* <p style={{ fontSize: '12.5px', color: '#666666', margin: '6px 0 0' }}>
                  Calls and initial enquiries by telephone or email.
                </p> */}
              </div>

              <div style={{ background: cardBg, borderRadius: '12px', padding: '24px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '4px' }}>
                  Clinic Address & Hair Sample Submissions
                </div>
                <address style={{ fontStyle: 'normal', fontSize: '15px', color: bodyColor, lineHeight: 1.5 }}>
                  {CONTACT.address}<br />
                  United Kingdom
                </address>
                {/* <p style={{ fontSize: '12.5px', color: '#666666', margin: '6px 0 0' }}>
                  Hair samples for testing should be addressed here.
                </p> */}
              </div>

              {/* <div style={{ background: cardBg, borderRadius: '12px', padding: '24px', border: `1px solid ${borderColor}` }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '4px' }}>
                  Consultation Availability
                </div>
                <div style={{ fontSize: '14px', color: bodyColor }}>{CONTACT.hours}</div>
                <div style={{ fontSize: '12.5px', color: '#666666', marginTop: '4px' }}>{CONTACT.remoteAvailable}</div>
              </div> */}
            </div>

            {/* Quick Modal Triggers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* <Button onClick={() => openModal('health-form')} variant="outline" concept={concept}>
                Bioresonance Health Form
              </Button> */}
              <Button onClick={() => openModal('client-consultation')} variant="outline" concept={concept}>
                Client Questionnaire
              </Button>
              <Button onClick={() => openModal('registration')} variant="ghost" concept={concept}>
                Practitioner Course Registration
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div>
            <div
              style={{
                background: isConceptA ? '#FFFFFF' : '#1F303A',
                color: isConceptA ? '#303832' : '#EEF3F2',
                borderRadius: isConceptA ? '20px' : '12px',
                padding: '40px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              }}
            >
              <h3
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: isConceptA ? '#2F5147' : '#FAFAF7',
                  margin: '0 0 8px',
                }}
              >
                Send an Online Message
              </h3>
              <p style={{ fontSize: '13.5px', color: isConceptA ? '#666666' : '#A8CDC4', margin: '0 0 24px' }}>
                Fill out your details below and Julie will get back to you within 24–48 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', color: isConceptA ? '#303832' : '#FAFAF7' }}>
                      Your Full Name <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', background: inputBg, border: `1px solid ${errors.name ? '#E53E3E' : borderColor}`, borderRadius: '8px', color: bodyColor, fontSize: '14px' }}
                    />
                    {errors.name && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', color: isConceptA ? '#303832' : '#FAFAF7' }}>
                        Email Address <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', background: inputBg, border: `1px solid ${errors.email ? '#E53E3E' : borderColor}`, borderRadius: '8px', color: bodyColor, fontSize: '14px' }}
                      />
                      {errors.email && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', color: isConceptA ? '#303832' : '#FAFAF7' }}>
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="07..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '8px', color: bodyColor, fontSize: '14px' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', color: isConceptA ? '#303832' : '#FAFAF7' }}>
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '8px', color: bodyColor, fontSize: '14px' }}
                    >
                      <option>Bioresonance Health Testing (£300)</option>
                      <option>Counselling & Transpersonal Psychotherapy</option>
                      <option>Senior Clinical Hypnotherapy</option>
                      <option>Practitioner Training Courses</option>
                      <option>Bioresonance Device Sourcing</option>
                      <option>Handbook / Publication Order</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', color: isConceptA ? '#303832' : '#FAFAF7' }}>
                      Your Message <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please let us know how we can support you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', background: inputBg, border: `1px solid ${errors.message ? '#E53E3E' : borderColor}`, borderRadius: '8px', color: bodyColor, fontSize: '14px', lineHeight: 1.5 }}
                    />
                    {errors.message && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <Button type="submit" variant="primary" concept={concept} className="tw-w-full">
                    Send Message to Julie Langton Smith
                  </Button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ fontSize: '40px', color: accentColor, marginBottom: '16px' }}>✓</div>
                  <h4 style={{ fontSize: '1.4rem', color: headingColor, margin: '0 0 8px' }}>
                    Thank You, {formData.name}
                  </h4>
                  <p style={{ fontSize: '14px', color: bodyColor, lineHeight: 1.6, margin: '0 0 20px' }}>
                    Your email application should open with your enquiry addressed to the clinic. Please send the message from your email app to complete the submission.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', interest: 'Bioresonance Health Testing (£300)', message: '' })
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: accentColor,
                      textDecoration: 'underline',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

