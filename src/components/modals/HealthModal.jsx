import React, { useState, useEffect } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import BrandLogo from '../common/BrandLogo.jsx'
import { SOW_PRICES, CONTACT } from '../../data/siteContent.js'

export default function HealthModal({ concept = 'a' }) {
  const { activeModal, closeModal } = useRouter()
  const isConceptA = concept === 'a'

  const [step, setStep] = useState(1) // 1: Form, 2: Confirmation
  const [formData, setFormData] = useState({
    parentNameChild: '',
    title: 'Ms / Mr',
    firstName: '',
    lastName: '',
    fullAddress: '',
    postcode: '',
    phone: '',
    mobile: '',
    email: '',
    dob: '',
    placeOfBirth: '',
    gender: 'Female',
    height: '',
    weight: '',
    occupation: '',
    gpNameAddress: '',
    briefMedicalHistory: '',
    familyMedicalParents: '',
    familyMedicalGrandparents: '',
    currentMedications: '',
    listSymptoms: '',
    testPurchased: 'Full Health (£300)',
    consentScannerDatabase: false,
    signed: '',
    dated: new Date().toISOString().split('T')[0],
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [intakeRef, setIntakeRef] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal === 'health-form') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModal, closeModal])

  useEffect(() => {
    if (activeModal === 'health-form') {
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

  if (activeModal !== 'health-form') return null

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required'
    if (!formData.fullAddress.trim()) newErrors.fullAddress = 'Full Address is required'
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required'
    if (!formData.dob.trim()) newErrors.dob = 'Date of Birth is required'
    if (!formData.listSymptoms.trim()) newErrors.listSymptoms = 'Please list symptoms (e.g. Skin irritation, bloating)'
    if (!formData.consentScannerDatabase) newErrors.consentScannerDatabase = 'You must agree to details being stored on the scanner database'
    if (!formData.signed.trim()) newErrors.signed = 'Please type your digital signature'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // Health information must not be sent through an insecure or unconfigured channel.
    setIsSubmitting(false)
    setSubmissionMessage('Your form is validated, but secure online submission is not connected yet. Please contact the clinic for a secure submission method. Your health details have not been sent or stored.')
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
      aria-labelledby="clinic-health-form-title"
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
                Confidential Client Intake Record
              </div>
              <h2
                id="clinic-health-form-title"
                style={{
                  margin: '2px 0 0',
                  fontSize: '1.4rem',
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontWeight: isConceptA ? 600 : 800,
                  color: textColor,
                }}
              >
                Bioresonance Health Form
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close health intake modal"
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

        {/* Scrollable Form Body — Verbatim from Health Form.pdf */}
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
                In the case of a child being tested the parent needs to add their names as well as the patient please.
              </div>

              {/* Child / Parent info */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Parent / Guardian Name (if patient is a child)
                </label>
                <input
                  type="text"
                  placeholder="Parent or guardian full name"
                  value={formData.parentNameChild}
                  onChange={(e) => setFormData({ ...formData, parentNameChild: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              {/* Patient Name & Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '0 0 16px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>
                Patient Personal Information
              </h3>
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Title</label>
                  <select
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  >
                    <option>Ms</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Master</option>
                    <option>Dr</option>
                  </select>
                </div>

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
              </div>

              {/* Address & Postcode */}
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Full Address <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullAddress}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.fullAddress ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.fullAddress && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.fullAddress}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Postcode <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.postcode ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.postcode && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.postcode}</span>}
                </div>
              </div>

              {/* Phone, Mobile & Email */}
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Mobile</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Email <span style={{ color: '#E53E3E' }}>*</span>
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
              </div>

              {/* Date of Birth & Place of Birth */}
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Date of Birth <span style={{ color: '#E53E3E' }}>*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.dob ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                  {errors.dob && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.dob}</span>}
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                    Place of Birth including town and country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Littlehampton, United Kingdom"
                    value={formData.placeOfBirth}
                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              {/* Physical Profile */}
              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Male / Female</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  >
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Height</label>
                  <input
                    type="text"
                    placeholder="e.g. 5ft 7in / 170cm"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Weight</label>
                  <input
                    type="text"
                    placeholder="e.g. 68kg / 10st 10lb"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Occupation</label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              {/* GP Details */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  GP Name / Address If known
                </label>
                <input
                  type="text"
                  placeholder="Doctor's name and surgery address"
                  value={formData.gpNameAddress}
                  onChange={(e) => setFormData({ ...formData, gpNameAddress: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              {/* Medical History */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '24px 0 16px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>
                Brief Medical History including family medical history and any medication being taken at the moment
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Patient History & Current Medication:
                </label>
                <textarea
                  rows={2}
                  placeholder="Personal health history and current prescriptions..."
                  value={formData.briefMedicalHistory}
                  onChange={(e) => setFormData({ ...formData, briefMedicalHistory: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              <div className="ls-modal-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Parents:</label>
                  <input
                    type="text"
                    placeholder="Parental health conditions..."
                    value={formData.familyMedicalParents}
                    onChange={(e) => setFormData({ ...formData, familyMedicalParents: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Grandparents:</label>
                  <input
                    type="text"
                    placeholder="Grandparents health conditions..."
                    value={formData.familyMedicalGrandparents}
                    onChange={(e) => setFormData({ ...formData, familyMedicalGrandparents: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  List of Symptoms (eg: Skin irritation, bloating etc) <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Skin irritation, bloating, fatigue, headaches, joint stiffness..."
                  value={formData.listSymptoms}
                  onChange={(e) => setFormData({ ...formData, listSymptoms: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${errors.listSymptoms ? '#E53E3E' : borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px', lineHeight: 1.5 }}
                />
                {errors.listSymptoms && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.listSymptoms}</span>}
              </div>

              {/* Test Purchased */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                  Specify test purchased: ie: Wheat. Dairy. Standard Food. Full Health etc:
                </label>
                <input
                  type="text"
                  value={formData.testPurchased}
                  onChange={(e) => setFormData({ ...formData, testPurchased: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                />
              </div>

              {/* Scanner Database Consent */}
              <div style={{ marginBottom: '20px', padding: '16px', background: isConceptA ? '#F6F3ED' : '#14232C', borderRadius: '8px', border: `1px solid ${borderColor}` }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.consentScannerDatabase}
                    onChange={(e) => setFormData({ ...formData, consentScannerDatabase: e.target.checked })}
                    style={{ width: '16px', height: '16px', marginTop: '2px', accentColor }}
                  />
                  <span style={{ fontWeight: 600 }}>
                    I agree to my details being kept on the Bioresonance medical scanner database for future testing when necessary. <span style={{ color: '#E53E3E' }}>*</span>
                  </span>
                </label>
                {errors.consentScannerDatabase && <span style={{ fontSize: '11px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.consentScannerDatabase}</span>}
              </div>

              {/* Signature & Date */}
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
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>Date</label>
                  <input
                    type="date"
                    value={formData.dated}
                    onChange={(e) => setFormData({ ...formData, dated: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', background: inputBg, border: `1px solid ${borderColor}`, borderRadius: '6px', color: textColor, fontSize: '14px' }}
                  />
                </div>
              </div>

              {/* Hair Sample Reminder Footer from Health Form.pdf */}
              <div
                style={{
                  background: isConceptA ? 'rgba(197,143,117,0.1)' : 'rgba(185,154,98,0.1)',
                  border: `1px solid ${highlightColor}`,
                  borderRadius: '8px',
                  padding: '14px 18px',
                  fontSize: '12.5px',
                  lineHeight: 1.5,
                  color: textColor,
                  marginBottom: '24px',
                }}
              >
                <strong>REMEMBER TO ENCLOSE A SMALL SAMPLE OF HAIR OR FINGERNAILS</strong> (APPROX 10 HAIRS 1 CM OR ¼ INCH LENGTH MINIMUM)<br />
                <span style={{ fontSize: '12px', color: subtextColor }}>
                  Please send the completed form and hair sample to:<br />
                  <strong>Langton Smith Clinic, 37 Surrey Street, Littlehampton, West Sussex, BN17 5BH</strong>
                </span>
              </div>

              {/* Action Buttons */}
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
                  {isSubmitting ? 'Submitting Form...' : 'Submit Bioresonance Health Form'}
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
                Health Form Successfully Submitted
              </h3>
              <p style={{ fontSize: '14.5px', color: subtextColor, maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Thank you, <strong>{formData.firstName} {formData.lastName}</strong>. Your confidential health form for <strong>{formData.testPurchased}</strong> has been logged into the clinic records.
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
                <div><strong>Intake Reference:</strong> <span style={{ color: highlightColor }}>{intakeRef}</span></div>
                <div><strong>Patient:</strong> {formData.title} {formData.firstName} {formData.lastName}</div>
                <div><strong>Test Specified:</strong> {formData.testPurchased}</div>
                <div><strong>Postal Destination:</strong> {CONTACT.address}</div>
                <div><strong>Clinic Mailer:</strong> {CONTACT.email}</div>
              </div>

              <div
                style={{
                  background: isConceptA ? 'rgba(197,143,117,0.1)' : 'rgba(185,154,98,0.1)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  maxWidth: '520px',
                  margin: '0 auto 24px',
                  fontSize: '12.5px',
                  lineHeight: 1.6,
                  color: textColor,
                }}
              >
                <strong>Next Step:</strong> Enclose approx. 10 hairs in clean tissue, write reference <strong>{intakeRef}</strong> on the envelope, and post to Langton Smith Clinic, 37 Surrey Street, Littlehampton, West Sussex, BN17 5BH.
              </div>

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
