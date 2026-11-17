import React, { useState, useEffect } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import BrandLogo from '../common/BrandLogo.jsx'
import { SOW_PRICES, CONTACT } from '../../data/siteContent.js'

export default function RegistrationModal({ concept = 'a' }) {
  const { activeModal, closeModal } = useRouter()
  const isConceptA = concept === 'a'

  const [step, setStep] = useState(1) // 1: Form, 2: Confirmation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    provinceRegion: '',
    postZipCode: '',
    country: 'United Kingdom',
    englishWritten: 'Fluent / Native',
    englishSpoken: 'Fluent / Native',
    educationBackground: '',
    specialNeeds: '',
    previousExperience: '',
    specificCourse: 'Part 1 — Foundational (£1,250)',
    personalInfoWhyCourse: '',
    signed: '',
    dated: new Date().toISOString().split('T')[0],
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [bookingRef, setBookingRef] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal === 'registration') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModal, closeModal])

  useEffect(() => {
    if (activeModal === 'registration') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setStep(1)
      setErrors({})
      setSubmissionMessage('')
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeModal])

  if (activeModal !== 'registration') return null

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email Address is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required'
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.postZipCode.trim()) newErrors.postZipCode = 'Post / Zip Code is required'
    if (!formData.signed.trim()) newErrors.signed = 'Please type your name as digital signature'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // No backend endpoint is configured in this static project. Never claim receipt.
    setIsSubmitting(false)
    setSubmissionMessage('Your form is validated, but online submission is not connected yet. Please contact the clinic directly to submit your registration securely.')
  }

  const modalBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const textColor = isConceptA ? '#303832' : '#FAFAF7'
  const subtextColor = isConceptA ? '#666666' : '#A8CDC4'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const inputBg = isConceptA ? '#F6F3ED' : '#14232C'
  const accentColor = isConceptA ? '#2F5147' : '#14545A'
  const highlightColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-booking-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 28, 0.78)',
        backdropFilter: 'blur(6px)',
        padding: '16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90dvh',
          background: modalBg,
          borderRadius: isConceptA ? '18px' : '12px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
          border: `1px solid ${borderColor}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalFadeIn 0.25s ease-out',
        }}
      >
        {/* Sticky Header */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isConceptA ? '#FAF8F5' : '#182730',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <BrandLogo concept={concept} variant={isConceptA ? 'light' : 'dark'} size="small" showTagline={false} />
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: highlightColor }}>
                Julie Langton Smith · Bioresonance Practitioner Training UK
              </div>
              <h2
                id="course-booking-title"
                style={{
                  margin: '2px 0 0',
                  fontSize: '1.4rem',
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontWeight: isConceptA ? 600 : 800,
                  color: textColor,
                }}
              >
                Course Booking Form
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close booking modal"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              lineHeight: 1,
              color: textColor,
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              opacity: 0.7,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Body — Verbatim from Bioresonance Practitioner Training UK.pdf */}
        <div style={{ padding: '28px', overflowY: 'auto', overflowX: 'hidden', flex: 1, minHeight: 0, color: textColor }}>
          {step === 1 ? (
            <form onSubmit={handleSubmit} noValidate>
              {submissionMessage && <div role="status" aria-live="polite" style={{ marginBottom: 18, padding: 14, borderRadius: 8, border: `1px solid ${highlightColor}`, background: isConceptA ? '#FFF8F1' : '#14232C', color: textColor, fontSize: 13.5, lineHeight: 1.55 }}>{submissionMessage}</div>}
              <div
                style={{
                  background: isConceptA ? '#F6F3ED' : '#14232C',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  color: subtextColor,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                Please complete what you can clearly. Authoritative SOW Investment Rates: Part 1: {SOW_PRICES.trainingPart1} | Part 2: {SOW_PRICES.trainingPart2} | Combined: {SOW_PRICES.trainingCombined} | Annual Refresher: {SOW_PRICES.annualRefresher}. Return destination: {CONTACT.email}.
              </div>

              {/* Page 1 Fields */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '0 0 16px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>
                Your Full Name & Date of Birth
              </h3>
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    First Name <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.firstName ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.firstName && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.firstName}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Last Name <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.lastName ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.lastName && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.lastName}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Date of Birth (Day / Month / Year)</label>
                  <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="DD"
                      maxLength={2}
                      value={formData.dobDay}
                      onChange={(e) => setFormData({ ...formData, dobDay: e.target.value })}
                      style={{ padding: '10px 8px', textAlign: 'center', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                    />
                    <input
                      type="text"
                      placeholder="MM"
                      maxLength={2}
                      value={formData.dobMonth}
                      onChange={(e) => setFormData({ ...formData, dobMonth: e.target.value })}
                      style={{ padding: '10px 8px', textAlign: 'center', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                    />
                    <input
                      type="text"
                      placeholder="YYYY"
                      maxLength={4}
                      value={formData.dobYear}
                      onChange={(e) => setFormData({ ...formData, dobYear: e.target.value })}
                      style={{ padding: '10px 8px', textAlign: 'center', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Contact & Address */}
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Email Address <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.email ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.email && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Phone Number <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.phone ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.phone && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Street Address <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.streetAddress ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.streetAddress && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.streetAddress}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    City <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.city ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.city && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.city}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Province / Region</label>
                  <input
                    type="text"
                    value={formData.provinceRegion}
                    onChange={(e) => setFormData({ ...formData, provinceRegion: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Post / Zip Code <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postZipCode}
                    onChange={(e) => setFormData({ ...formData, postZipCode: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.postZipCode ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.postZipCode && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.postZipCode}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              {/* Page 2 Fields */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '24px 0 16px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>
                Language, Education & Health Background
              </h3>

              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Level of English Language Proficiency (Written)</label>
                  <input
                    type="text"
                    placeholder="e.g. Fluent / Native"
                    value={formData.englishWritten}
                    onChange={(e) => setFormData({ ...formData, englishWritten: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Level of English Language Proficiency (Spoken)</label>
                  <input
                    type="text"
                    placeholder="e.g. Fluent / Native"
                    value={formData.englishSpoken}
                    onChange={(e) => setFormData({ ...formData, englishSpoken: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Education Background Listing previous schools and qualifications including dates
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. BSc Nursing (2014-2017), Dip. Naturopathy (2019)..."
                  value={formData.educationBackground}
                  onChange={(e) => setFormData({ ...formData, educationBackground: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px', lineHeight: 1.5 }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Special Needs:</label>
                <input
                  type="text"
                  placeholder="State any physical access, hearing/vision, or learning requirements (or 'None')"
                  value={formData.specialNeeds}
                  onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Previous Experience, if any with Complementary health
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Clinical practice in acupuncture, reflexology, nutrition, homeopathy..."
                  value={formData.previousExperience}
                  onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  State Specific Course being booked
                </label>
                <select
                  value={formData.specificCourse}
                  onChange={(e) => setFormData({ ...formData, specificCourse: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                >
                  <option>Part 1 — Foundational ({SOW_PRICES.trainingPart1})</option>
                  <option>Part 2 — Advanced Masterclass ({SOW_PRICES.trainingPart2})</option>
                  <option>Combined — Complete Certification ({SOW_PRICES.trainingCombined})</option>
                  <option>Annual Refresher ({SOW_PRICES.annualRefresher})</option>
                </select>
              </div>

              {/* Page 3 Fields */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '24px 0 16px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>
                Personal Information & Declaration
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Personal Information, including details about why you want to do this course
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your therapeutic vision, current clinic goals, and what you hope to achieve with bioresonance certification..."
                  value={formData.personalInfoWhyCourse}
                  onChange={(e) => setFormData({ ...formData, personalInfoWhyCourse: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px', lineHeight: 1.5 }}
                />
              </div>

              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Signed (Digital Signature) <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Type full legal name"
                    value={formData.signed}
                    onChange={(e) => setFormData({ ...formData, signed: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.signed ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.signed && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.signed}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Dated</label>
                  <input
                    type="date"
                    value={formData.dated}
                    onChange={(e) => setFormData({ ...formData, dated: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ fontSize: '12px', color: subtextColor, marginBottom: '24px' }}>
                Return this form to <strong>{CONTACT.email}</strong> · Copyright Julie Langton Smith 2025
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: `1px solid ${borderColor}`, paddingTop: '20px' }}>
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: `1px solid ${borderColor}`,
                    background: 'transparent',
                    color: textColor,
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: accentColor,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                  }}
                >
                  {isSubmitting ? 'Submitting Form...' : 'Submit Course Booking Form'}
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: isConceptA ? '#E7EFE9' : '#14545A',
                  color: isConceptA ? '#2F5147' : '#A8CDC4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  margin: '0 auto 20px',
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: '1.6rem', fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif", color: textColor, margin: '0 0 10px' }}>
                Course Booking Form Submitted
              </h3>
              <p style={{ fontSize: '14.5px', color: subtextColor, maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Thank you, <strong>{formData.firstName} {formData.lastName}</strong>. Your official booking form for <strong>{formData.specificCourse}</strong> has been received by Julie Langton Smith.
              </p>

              <div
                style={{
                  background: isConceptA ? '#F6F3ED' : '#14232C',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '10px',
                  padding: '16px 20px',
                  maxWidth: '440px',
                  margin: '0 auto 28px',
                  textAlign: 'left',
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
              >
                <div><strong>Booking Reference:</strong> <span style={{ color: highlightColor }}>{bookingRef}</span></div>
                <div><strong>Course Booked:</strong> {formData.specificCourse}</div>
                <div><strong>Applicant:</strong> {formData.firstName} {formData.lastName}</div>
                <div><strong>Contact Email:</strong> {formData.email}</div>
                <div><strong>Contact Phone:</strong> {formData.phone}</div>
                <div><strong>Clinic Mailer:</strong> {CONTACT.email}</div>
              </div>

              <p style={{ fontSize: '12.5px', color: subtextColor, margin: '0 0 24px' }}>
                Julie will review your educational background and contact you with date availability and formal invoice settlement instructions.
              </p>

              <button
                type="button"
                onClick={closeModal}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: accentColor,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
