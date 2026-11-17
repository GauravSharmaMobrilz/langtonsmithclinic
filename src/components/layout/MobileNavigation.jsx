import React, { useState } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { NAV_ITEMS, CONTACT } from '../../utils/navigation.js'

export default function MobileNavigation({ concept = 'a', isOpen, onClose }) {
  const isConceptA = concept === 'a'
  const { currentPath, navigate, openModal } = useRouter()
  const [openSection, setOpenSection] = useState(null)

  const bg = isConceptA ? '#F6F3ED' : '#1F303A'
  const linkColor = isConceptA ? '#303832' : '#EEF3F2'
  const accentColor = isConceptA ? '#2F5147' : '#A8CDC4'
  const borderColor = isConceptA ? '#A9BBA9' : '#14545A'

  return (
    <div
      id="mobile-nav"
      role="navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: bg,
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
        padding: '16px 0 24px',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'auto',
        zIndex: 2000,
      }}
    >
      {NAV_ITEMS.map((item) => (
        <div key={item.label} style={{ borderBottom: `1px solid ${borderColor}25` }}>
          {item.dropdown ? (
            <>
              <button
                type="button"
                onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                aria-expanded={openSection === item.label}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '14px 24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: linkColor,
                  textAlign: 'left',
                }}
              >
                <span>{item.label}</span>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 10 6"
                  fill="none"
                  style={{
                    transform: openSection === item.label ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: accentColor,
                  }}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openSection === item.label && (
                <div style={{ paddingBottom: '8px', background: isConceptA ? '#FAF8F5' : '#182730' }}>
                  {item.dropdown.map((sub) => {
                    const subActive = sub.href ? currentPath === sub.href : false

                    return (
                      <div
                        key={sub.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 24px 10px 36px',
                          background: subActive ? (isConceptA ? '#EFEBE4' : '#1F303A') : 'transparent',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (sub.modal) {
                              openModal(sub.modal)
                            } else if (sub.href) {
                              navigate(sub.href)
                            }
                            onClose()
                          }}
                          style={{
                            flex: 1,
                            textAlign: 'left',
                            fontSize: '14px',
                            color: subActive ? accentColor : (isConceptA ? '#2F5147' : '#A8CDC4'),
                            fontWeight: subActive ? 700 : 500,
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                          }}
                        >
                          <div>{sub.label}</div>
                          {sub.desc && (
                            <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '2px' }}>{sub.desc}</div>
                          )}
                        </button>

                        {sub.formModal && (
                          <button
                            type="button"
                            onClick={() => {
                              openModal(sub.formModal)
                              onClose()
                            }}
                            style={{
                              padding: '3px 8px',
                              fontSize: '11px',
                              fontWeight: 700,
                              borderRadius: '4px',
                              border: `1px solid ${accentColor}`,
                              background: 'transparent',
                              color: accentColor,
                              cursor: 'pointer',
                              marginLeft: '8px',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {sub.formLabel} ↗
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </>
          ) : (
            <button
              type="button"
              onClick={() => {
                navigate(item.href)
                onClose()
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'block',
                padding: '14px 24px',
                fontSize: '15px',
                fontWeight: currentPath === item.href ? 700 : 500,
                color: currentPath === item.href ? accentColor : linkColor,
                background: currentPath === item.href ? (isConceptA ? '#EFEBE4' : '#14232C') : 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          )}
        </div>
      ))}

      {/* Modal Triggers in Mobile Drawer */}
      <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          type="button"
          onClick={() => {
            openModal('client-consultation')
            onClose()
          }}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            background: 'transparent',
            border: `1.5px solid ${accentColor}`,
            color: accentColor,
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Client Form (Counselling & Hypnotherapy)
        </button>

        <button
          type="button"
          onClick={() => {
            openModal('health-form')
            onClose()
          }}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            background: 'transparent',
            border: `1.5px solid ${accentColor}`,
            color: accentColor,
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Bioresonance Health Form (Health Test)
        </button>

        <button
          type="button"
          onClick={() => {
            openModal('registration')
            onClose()
          }}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            background: 'transparent',
            border: `1.5px solid ${accentColor}`,
            color: accentColor,
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Practitioner Registration Form (Training)
        </button>

        <button
          type="button"
          onClick={() => {
            navigate('/contact')
            onClose()
          }}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            background: isConceptA ? '#2F5147' : '#14545A',
            color: '#FFFFFF',
            border: 'none',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Contact Julie Langton Smith
        </button>
      </div>
    </div>
  )
}
