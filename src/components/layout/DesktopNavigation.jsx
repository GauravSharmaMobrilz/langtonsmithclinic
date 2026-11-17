import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { NAV_ITEMS } from '../../utils/navigation.js'

export default function DesktopNavigation({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { currentPath, navigate, isActive, openModal } = useRouter()
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkColor = isConceptA ? '#303832' : '#EEF3F2'
  const activeColor = isConceptA ? 'white' : '#A8CDC4'
  const activeBg = isConceptA ? '#2F5147' : 'rgba(168,205,196,0.12)'
  const hoverBg = isConceptA ? '#00000021' : 'rgba(20,84,90,0.3)'
  const dropdownBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const dropdownBorder = isConceptA ? '#E0DCD3' : '#14545A'

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className="tw-hidden lg:tw-flex tw-items-center tw-gap-1"
    >
      {NAV_ITEMS.map((item) => {
        const itemActive = isActive(item.href)

        return (
          <div key={item.label} style={{ position: 'relative' }}>
            {item.dropdown ? (
              <>
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  style={{
                    background: itemActive ? activeBg : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: itemActive ? 700 : 500,
                    color: itemActive ? activeColor : linkColor,
                    transition: 'all 0.2s',
                    fontFamily: isConceptA ? "'Inter', sans-serif" : "'Manrope', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!itemActive) e.currentTarget.style.background = hoverBg
                  }}
                  onMouseLeave={(e) => {
                    if (!itemActive) e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span>{item.label}</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transition: 'transform 0.2s',
                      transform: openDropdown === item.label ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {openDropdown === item.label && (
                  <div
                    role="menu"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: '0',
                      background: dropdownBg,
                      border: `1px solid ${dropdownBorder}`,
                      borderRadius: isConceptA ? '14px' : '10px',
                      boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
                      minWidth: '320px',
                      padding: '8px',
                      zIndex: 2000,
                    }}
                  >
                    {item.dropdown.map((sub) => {
                      const subActive = sub.href ? currentPath === sub.href : false

                      return (
                        <div
                          key={sub.label}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: '8px',
                            background: subActive ? activeBg : 'transparent',
                            transition: 'background 0.15s',
                            padding: '4px',
                            marginBottom: '2px',
                          }}
                          onMouseEnter={(e) => {
                            if (!subActive) e.currentTarget.style.background = isConceptA ? '#F6F3ED' : '#14545A'
                          }}
                          onMouseLeave={(e) => {
                            if (!subActive) e.currentTarget.style.background = 'transparent'
                          }}
                        >
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              if (sub.modal) {
                                openModal(sub.modal)
                              } else if (sub.href) {
                                navigate(sub.href)
                              }
                              setOpenDropdown(null)
                            }}
                            style={{
                              flex: 1,
                              textAlign: 'left',
                              padding: '8px 10px',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                fontSize: '13.5px',
                                fontWeight: subActive ? 700 : 600,
                                color: subActive ? activeColor : (isConceptA ? '#2F5147' : '#FAFAF7'),
                                marginBottom: '2px',
                              }}
                            >
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <div style={{ fontSize: '11px', color: isConceptA ? '#666666' : '#A8CDC4', opacity: 0.85 }}>
                                {sub.desc}
                              </div>
                            )}
                          </button>

                          {sub.formModal && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                openModal(sub.formModal)
                                setOpenDropdown(null)
                              }}
                              title={`Open ${sub.formLabel}`}
                              style={{
                                padding: '4px 8px',
                                fontSize: '11px',
                                fontWeight: 700,
                                borderRadius: '6px',
                                border: `1px solid ${isConceptA ? '#2F5147' : '#A8CDC4'}`,
                                background: isConceptA ? '#FFFFFF' : 'rgba(20,84,90,0.6)',
                                color: isConceptA ? '#2F5147' : '#A8CDC4',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                marginLeft: '8px',
                                marginRight: '4px',
                                transition: 'all 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = isConceptA ? '#2F5147' : '#A8CDC4'
                                e.currentTarget.style.color = isConceptA ? '#FFFFFF' : '#1F303A'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = isConceptA ? '#FFFFFF' : 'rgba(20,84,90,0.6)'
                                e.currentTarget.style.color = isConceptA ? '#2F5147' : '#A8CDC4'
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
                onClick={() => navigate(item.href)}
                style={{
                  background: itemActive ? activeBg : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-block',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: itemActive ? 700 : 500,
                  color: itemActive ? activeColor : linkColor,
                  transition: 'all 0.2s',
                  fontFamily: isConceptA ? "'Inter', sans-serif" : "'Manrope', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!itemActive) e.currentTarget.style.background = hoverBg
                }}
                onMouseLeave={(e) => {
                  if (!itemActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                {item.label}
              </button>
            )}
          </div>
        )
      })}
    </nav>
  )
}
