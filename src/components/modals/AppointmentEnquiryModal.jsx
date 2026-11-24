import React, { useState, useEffect } from 'react'
import BrandLogo from '../common/BrandLogo.jsx'

export default function AppointmentEnquiryModal({
  isOpen,
  onClose,
  concept = 'a',
}) {
  const isConceptA = concept === 'a'

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Reset form when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', mobile: '', email: '' })
      setErrors({})
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[0-9+\s\-().]{7,20}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid mobile phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 400)
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  // Visual tokens
  const modalBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const headerBg = isConceptA ? '#FAF8F5' : '#182730'
  const textColor = isConceptA ? '#303832' : '#FAFAF7'
  const subtextColor = isConceptA ? '#666666' : '#A8CDC4'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const inputBg = isConceptA ? '#F8F6F1' : '#14232C'
  const accentColor = isConceptA ? '#2F5147' : '#14545A'
  const highlightColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-enquiry-title"
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
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '92vh',
          background: modalBg,
          borderRadius: isConceptA ? '18px' : '12px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.45)',
          border: `1px solid ${borderColor}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: headerBg,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <BrandLogo
              concept={concept}
              variant={isConceptA ? 'light' : 'dark'}
              size="small"
              showTagline={false}
            />
            <div>
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: highlightColor,
                  display: 'block',
                }}
              >
                Clinical Hypnotherapy
              </span>
              <h2
                id="appointment-enquiry-title"
                style={{
                  margin: '2px 0 0',
                  fontSize: '1.25rem',
                  fontFamily: isConceptA
                    ? "'Cormorant Garamond', Georgia, serif"
                    : "'Manrope', Inter, sans-serif",
                  fontWeight: isConceptA ? 600 : 800,
                  color: textColor,
                  lineHeight: 1.2,
                }}
              >
                Appointment Enquiry
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'transparent',
              border: `1px solid ${borderColor}`,
              color: textColor,
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px', overflowY: 'auto', color: textColor }}>
          {isSubmitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '24px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: isConceptA ? '#E8F2EC' : '#1E3B37',
                  color: isConceptA ? '#2F5147' : '#A8CDC4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  margin: 0,
                  color: textColor,
                }}
              >
                Thank You, {formData.name}!
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.6,
                  color: subtextColor,
                  maxWidth: '380px',
                  margin: 0,
                }}
              >
                Your appointment enquiry has been received. Julie Langton Smith or our clinic team will contact you shortly at{' '}
                <strong style={{ color: textColor }}>{formData.mobile}</strong> or{' '}
                <strong style={{ color: textColor }}>{formData.email}</strong> to confirm your consultation schedule.
              </p>

              <button
                type="button"
                onClick={onClose}
                style={{
                  marginTop: '12px',
                  background: accentColor,
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '11px 26px',
                  borderRadius: isConceptA ? '12px' : '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.6,
                  color: subtextColor,
                  margin: '0 0 20px',
                }}
              >
                Please provide your contact details below to enquire about booking your hypnotherapy appointment.
              </p>

              {/* Name Field */}
              <div style={{ marginBottom: '18px' }}>
                <label
                  htmlFor="enquiry-name"
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: textColor,
                  }}
                >
                  Full Name <span style={{ color: '#d9534f' }}>*</span>
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: inputBg,
                    border: `1px solid ${errors.name ? '#d9534f' : borderColor}`,
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: textColor,
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                />
                {errors.name && (
                  <span
                    style={{
                      display: 'block',
                      color: '#d9534f',
                      fontSize: '12px',
                      marginTop: '4px',
                    }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Mobile Number Field */}
              <div style={{ marginBottom: '18px' }}>
                <label
                  htmlFor="enquiry-mobile"
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: textColor,
                  }}
                >
                  Mobile Number <span style={{ color: '#d9534f' }}>*</span>
                </label>
                <input
                  id="enquiry-mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  placeholder="e.g. +44 7123 456789"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: inputBg,
                    border: `1px solid ${errors.mobile ? '#d9534f' : borderColor}`,
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: textColor,
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                />
                {errors.mobile && (
                  <span
                    style={{
                      display: 'block',
                      color: '#d9534f',
                      fontSize: '12px',
                      marginTop: '4px',
                    }}
                  >
                    {errors.mobile}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  htmlFor="enquiry-email"
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: textColor,
                  }}
                >
                  Email Address <span style={{ color: '#d9534f' }}>*</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="e.g. sarah@example.com"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: inputBg,
                    border: `1px solid ${errors.email ? '#d9534f' : borderColor}`,
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: textColor,
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                />
                {errors.email && (
                  <span
                    style={{
                      display: 'block',
                      color: '#d9534f',
                      fontSize: '12px',
                      marginTop: '4px',
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Submit Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  paddingTop: '8px',
                }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '10px 18px',
                    borderRadius: isConceptA ? '12px' : '8px',
                    border: `1px solid ${borderColor}`,
                    background: 'transparent',
                    color: textColor,
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '10px 22px',
                    borderRadius: isConceptA ? '12px' : '8px',
                    border: 'none',
                    background: accentColor,
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.75 : 1,
                    transition: 'all 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
