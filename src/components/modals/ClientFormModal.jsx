
import React, { useState, useEffect } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import BrandLogo from '../common/BrandLogo.jsx'

const initialFormData = {
  title: 'Ms',
  name: '',
  address: '',
  postcode: '',
  phone: '',
  mobile: '',
  email: '',
  dob: '',
  placeOfBirth: '',
  gender: '',
  occupation: '',
  gpNameAddress: '',
  medicalHistory: '',
  reasonForConsultation: '',
  previousTherapy: '',
  previousTherapySuccessful: '',
  relationshipHistory: '',
  otherInformation: '',
  therapyGoals: '',
  firstSessionDate: '',
  clientSigned: '',
  clientDated: '',
  practitionerSigned: '',
  practitionerDated: '',
}

export default function ClientFormModal({ concept = 'a' }) {
  const { activeModal, closeModal } = useRouter()

  const isConceptA = concept === 'a'
  const modalOpen = activeModal === 'client-consultation' || activeModal === 'client-form'

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submissionMessage, setSubmissionMessage] = useState('')

  // Escape key handling - only for this modal
  useEffect(() => {
    if (!modalOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalOpen, closeModal])

  // Lock body scroll only while this modal is active.
  // Preserve the previous value instead of resetting it unconditionally.
  useEffect(() => {
    if (!modalOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [modalOpen])

  // Reset form when this modal closes
  useEffect(() => {
    if (!modalOpen) {
      setFormData({ ...initialFormData })
      setErrors({})
      setSubmissionMessage('')
    }
  }, [modalOpen])

  const handleClose = () => {
    closeModal()
  }

  if (!modalOpen) return null

  // Theme
  const modalBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const textColor = isConceptA ? '#303832' : '#FAFAF7'
  const subtextColor = isConceptA ? '#666666' : '#A8CDC4'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const inputBg = isConceptA ? '#F6F3ED' : '#14232C'
  const accentColor = isConceptA ? '#2F5147' : '#14545A'
  const highlightColor = isConceptA ? '#C58F75' : '#B99A62'

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [field]: '',
    }))

    setSubmissionMessage('')
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Client name is required'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.clientSigned.trim()) {
      newErrors.clientSigned = 'Client signature is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmissionMessage('')

    if (!validate()) {
      const firstError = document.querySelector('[aria-invalid="true"]')
      firstError?.focus()
      return
    }

    setSubmissionMessage(
      'Your form has passed validation. However, secure online submission is not connected yet. No information has been sent or stored. Please contact the clinic for a secure submission method.'
    )
  }

  // Shared styles
  const inputStyle = (field) => ({
    width: '100%',
    minWidth: 0,
    padding: '11px 12px',
    background: inputBg,
    border: `1px solid ${errors[field] ? '#E53E3E' : borderColor}`,
    borderRadius: '7px',
    color: textColor,
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    colorScheme: isConceptA ? 'light' : 'dark',
  })

  const labelStyle = {
    display: 'block',
    fontSize: '12.5px',
    fontWeight: 650,
    marginBottom: '7px',
    color: textColor,
  }

  const sectionStyle = {
    fontSize: '1.08rem',
    fontWeight: 700,
    color: textColor,
    margin: '28px 0 17px',
    paddingBottom: '9px',
    borderBottom: `1px solid ${borderColor}`,
  }

  const errorStyle = {
    display: 'block',
    color: '#E53E3E',
    fontSize: '11px',
    marginTop: '5px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
    gap: '16px',
    marginBottom: '19px',
  }

  const renderInput = (field, label, options = {}) => {
    const inputId = `client-form-${field}`
    const errorId = `${inputId}-error`

    return (
      <div>
        <label htmlFor={inputId} style={labelStyle}>
          {label}
          {options.required && (
            <span style={{ color: '#E53E3E' }}> *</span>
          )}
        </label>

        <input
          id={inputId}
          name={field}
          type={options.type || 'text'}
          placeholder={options.placeholder || ''}
          value={formData[field]}
          onChange={(event) => updateField(field, event.target.value)}
          required={Boolean(options.required)}
          autoComplete={options.autoComplete || 'off'}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={errors[field] ? errorId : undefined}
          style={inputStyle(field)}
        />

        {errors[field] && (
          <span id={errorId} role="alert" style={errorStyle}>
            {errors[field]}
          </span>
        )}
      </div>
    )
  }

  const renderTextarea = (field, label, rows = 4, placeholder = '') => {
    const inputId = `client-form-${field}`

    return (
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor={inputId} style={labelStyle}>
          {label}
        </label>

        <textarea
          id={inputId}
          name={field}
          rows={rows}
          placeholder={placeholder}
          value={formData[field]}
          onChange={(event) => updateField(field, event.target.value)}
          style={{
            ...inputStyle(field),
            resize: 'vertical',
            lineHeight: 1.6,
            minHeight: `${rows * 25}px`,
          }}
        />
      </div>
    )
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="client-form-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose()
        }
      }}
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
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90dvh',
          background: modalBg,
          borderRadius: isConceptA ? '18px' : '12px',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.4)',
          border: `1px solid ${borderColor}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalFadeIn 0.25s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px',
            background: isConceptA ? '#FAF8F5' : '#182730',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              minWidth: 0,
            }}
          >
            <BrandLogo
              concept={concept}
              variant={isConceptA ? 'light' : 'dark'}
              size="small"
              showTagline={false}
            />

            <div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: highlightColor,
                }}
              >
                Confidential Client Record
              </div>

              <h2
                id="client-form-title"
                style={{
                  margin: '3px 0 0',
                  fontSize: 'clamp(17px, 3vw, 23px)',
                  fontFamily: isConceptA
                    ? "'Cormorant Garamond', Georgia, serif"
                    : "'Manrope', Inter, sans-serif",
                  fontWeight: isConceptA ? 600 : 800,
                  color: textColor,
                }}
              >
                {/* Psychological and Clinical Hypnotherapy Client/Patient Questionnaire */}
                Julie Langton Smith - Client Form
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close client form"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '25px',
              color: textColor,
              cursor: 'pointer',
              padding: '7px',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form */}
        <div
          style={{
            padding: 'clamp(18px, 4vw, 30px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            flex: 1,
            minHeight: 0,
            color: textColor,
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {submissionMessage && (
              <div
                role="status"
                aria-live="polite"
                style={{
                  marginBottom: '22px',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: `1px solid ${highlightColor}`,
                  background: isConceptA ? '#FFF8F1' : '#14232C',
                  color: textColor,
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
              >
                {submissionMessage}
              </div>
            )}

            <p
              style={{
                fontSize: '13px',
                color: subtextColor,
                lineHeight: 1.6,
                margin: '0 0 25px',
              }}
            >
              Please complete the following confidential client consultation
              form as accurately as possible.
            </p>

            {/* Personal Information */}
            <h3 style={{ ...sectionStyle, marginTop: 0 }}>
              Personal Information
            </h3>

            <div style={gridStyle}>
              <div>
                <label htmlFor="client-form-title-select" style={labelStyle}>
                  Title
                </label>

                <select
                  id="client-form-title-select"
                  name="title"
                  value={formData.title}
                  onChange={(event) => updateField('title', event.target.value)}
                  style={inputStyle('title')}
                >
                  {['Ms', 'Mr', 'Mrs', 'Miss', 'Master', 'Dr', 'Other'].map(
                    (item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              {renderInput('name', 'Full Name', {
                required: true,
                autoComplete: 'name',
              })}
            </div>

            <div style={gridStyle}>
              {renderInput('address', 'Address', {
                required: true,
                autoComplete: 'street-address',
              })}

              {renderInput('postcode', 'Postcode', {
                required: true,
                autoComplete: 'postal-code',
              })}
            </div>

            <div style={gridStyle}>
              {renderInput('phone', 'Phone', {
                type: 'tel',
                autoComplete: 'tel',
              })}

              {renderInput('mobile', 'Mobile', {
                type: 'tel',
                autoComplete: 'tel-national',
              })}

              {renderInput('email', 'Email Address', {
                type: 'email',
                required: true,
                autoComplete: 'email',
              })}
            </div>

            <div style={gridStyle}>
              {renderInput('dob', 'Date of Birth', {
                type: 'date',
              })}

              {renderInput('placeOfBirth', 'Place of Birth')}
            </div>

            <div style={gridStyle}>
              <div>
                <label htmlFor="client-form-gender" style={labelStyle}>
                  Male / Female
                </label>

                <select
                  id="client-form-gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(event) => updateField('gender', event.target.value)}
                  style={inputStyle('gender')}
                >
                  <option value="">Please select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              {renderInput('occupation', 'Occupation')}

              {renderInput('gpNameAddress', 'GP Name / Address')}
            </div>

            {/* Medical History */}
            <h3 style={sectionStyle}>
              Medical History incl. Medication
            </h3>

            {renderTextarea(
              'medicalHistory',
              'Please provide details of your medical history and any current medication.',
              5,
              'Enter medical history, medication, relevant diagnoses or other information...'
            )}

            {/* Consultation */}
            <h3 style={sectionStyle}>Reason for Consultation</h3>

            {renderTextarea(
              'reasonForConsultation',
              'Please explain the reason for your consultation.',
              5,
              'Tell us what has brought you to the clinic...'
            )}

            {/* Previous Therapy */}
            <h3 style={sectionStyle}>Previous Therapy Sessions</h3>

            {renderTextarea(
              'previousTherapy',
              'Have you had previous therapy sessions for counselling, psychotherapy or hypnotherapy? Explain please.',
              4,
              'Please describe any previous therapy sessions...'
            )}

            {renderTextarea(
              'previousTherapySuccessful',
              'Was it successful? Please explain.',
              4,
              'Please explain your experience and outcomes...'
            )}

            {/* Relationship History */}
            <h3 style={sectionStyle}>Relationship History</h3>

            {renderTextarea(
              'relationshipHistory',
              'Please provide any relevant relationship history.',
              4
            )}

            {/* Other Information */}
            <h3 style={sectionStyle}>Other Information</h3>

            {renderTextarea(
              'otherInformation',
              'Is there anything else you would like the practitioner to know?',
              4
            )}

            {/* Therapy Goals */}
            <h3 style={sectionStyle}>
              What do you want to achieve from therapy sessions?
            </h3>

            {renderTextarea(
              'therapyGoals',
              'Please describe your goals, expectations and what you hope to achieve.',
              6,
              'What would you like to change, improve or work towards?'
            )}

            {/* Session and Signatures */}
            <h3 style={sectionStyle}>Session Details & Signatures</h3>

            <div style={gridStyle}>
              {renderInput('firstSessionDate', 'Date of First Session', {
                type: 'date',
              })}
            </div>

            <div style={gridStyle}>
              {renderInput('clientSigned', 'Signed - Client', {
                required: true,
                placeholder: 'Client full legal name',
              })}

              {renderInput('clientDated', 'Dated - Client', {
                type: 'date',
              })}
            </div>

            <div style={gridStyle}>
              {renderInput('practitionerSigned', 'Signed - Practitioner', {
                placeholder: 'Practitioner full name',
              })}

              {renderInput('practitionerDated', 'Dated - Practitioner', {
                type: 'date',
              })}
            </div>

            {/* Disclaimer */}
            <div
              style={{
                marginTop: '30px',
                padding: '22px',
                background: isConceptA ? '#F6F3ED' : '#14232C',
                border: `1px solid ${borderColor}`,
                borderRadius: '10px',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: highlightColor,
                  margin: '0 0 15px',
                }}
              >
                DISCLAIMER AND GUIDELINES FOR THE CLIENT/PATIENT
              </h3>

              <div
                style={{
                  fontSize: '12.5px',
                  color: textColor,
                  lineHeight: 1.8,
                }}
              >
                <p>
                  Therapeutic approaches such as hypnotherapy,
                  psychotherapy and Naturopathy are not intended to replace
                  conventional medical treatment and care. Complementary
                  therapies are intended to work side by side with
                  conventional treatment if required. Clinical hypnotherapy
                  is not a magic wand but is a wonderful technique to work
                  in harmony with the patient/clients wishes and needs. It
                  is not a substitute for medical advice. There is no
                  guarantee for success as much of this is dependent on the
                  overall motivation and commitment of you the client/patient.
                  Hypnosis cannot make you do what you do not want to do.
                </p>

                <p>
                  No practitioner can guarantee specific results.
                  Information or guidance may be given to the client/patient
                  to consider. This may bring about positive results where
                  the client is motivated to change. Although the practitioner
                  will be as supportive and helpful in all decision making
                  and change processes, any decisions and changes made by
                  the client/patient remain the personal and legal
                  responsibility of the client/patient.
                </p>

                <p style={{ marginBottom: 0 }}>
                  In order to affect a change, CBT, counselling,
                  hypnotherapy, coaching and mindfulness require commitment
                  and honesty from the client. Regular attendance is
                  essential, as is a commitment to any personal assignments
                  that are agreed.
                </p>
              </div>
            </div>

            {/* Form Actions */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                flexWrap: 'wrap',
                borderTop: `1px solid ${borderColor}`,
                paddingTop: '22px',
                marginTop: '28px',
              }}
            >
              <button
                type="button"
                onClick={handleClose}
                style={{
                  padding: '11px 22px',
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
                style={{
                  padding: '11px 25px',
                  borderRadius: '8px',
                  border: 'none',
                  background: accentColor,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                }}
              >
                Submit Psychotherapy/Hypnotherapy Client Form
              </button>
            </div>

            {/* <p
              style={{
                fontSize: '11px',
                color: subtextColor,
                marginTop: '16px',
                lineHeight: 1.6,
              }}
            >
              Fields marked with * are required. Please contact the clinic
              for a secure submission method.
            </p> */}
          </form>
        </div>
      </div>
    </div>
  )
}
