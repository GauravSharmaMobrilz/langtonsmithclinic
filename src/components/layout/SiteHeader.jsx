import React, { useState, useEffect } from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import BrandLogo from '../common/BrandLogo.jsx'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

export default function SiteHeader({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const headerBg = isConceptA
    ? (scrolled ? 'rgba(246,243,237,0.98)' : '#F6F3ED')
    : (scrolled ? 'rgba(31,48,58,0.98)' : '#1F303A')

  const borderBottom = isConceptA
    ? (scrolled ? '1px solid rgba(169,187,169,0.5)' : '1px solid rgba(169,187,169,0.3)')
    : (scrolled ? '1px solid #14545A' : '1px solid rgba(20,84,90,0.5)')

  return (
    <header
      id="site-header"
      role="banner"
      className='sm:tw-top-[49]'
      style={{
        position: 'fixed',
        zIndex: 1000,
        background: headerBg,
        borderBottom,
        transition: 'all 0.25s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        width:'100vw'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Brand Logo with click to Home */}
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="Langton Smith Clinic — Home"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <BrandLogo
            concept={concept}
            variant={isConceptA ? 'light' : 'dark'}
            size="default"
          />
        </button>

        {/* Desktop Navigation */}
        <DesktopNavigation concept={concept} />

        {/* Action CTAs (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* <button
            type="button"
            onClick={() => openModal('registration')}
            className="tw-hidden xl:tw-inline-flex tw-items-center tw-text-xs tw-font-semibold tw-px-3.5 tw-py-2 tw-rounded-lg tw-transition-all tw-duration-200"
            style={{
              background: 'transparent',
              color: isConceptA ? '#2F5147' : '#A8CDC4',
              border: `1.5px solid ${isConceptA ? '#2F5147' : '#A8CDC4'}`,
              cursor: 'pointer',
            }}
          >
            Practitioner Registration
          </button> */}

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="tw-hidden sm:tw-inline-flex tw-items-center tw-text-xs tw-font-semibold tw-px-4 tw-py-2.5 tw-rounded-lg tw-transition-all tw-duration-200"
            style={{
              background: isConceptA ? '#2F5147' : '#14545A',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              boxShadow: isConceptA ? '0 2px 8px rgba(47,81,71,0.2)' : '0 2px 8px rgba(20,84,90,0.3)',
            }}
          >
            Book / Enquire
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="tw-flex lg:tw-hidden tw-flex-col tw-justify-center tw-gap-1.5 tw-p-2 tw-rounded-md"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: isConceptA ? '#2F5147' : '#A8CDC4',
                transition: 'transform 0.25s',
                transform: mobileOpen ? 'rotate(45deg) translate(3px, 4px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: isConceptA ? '#2F5147' : '#A8CDC4',
                transition: 'opacity 0.25s',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: isConceptA ? '#2F5147' : '#A8CDC4',
                transition: 'transform 0.25s',
                transform: mobileOpen ? 'rotate(-45deg) translate(3px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation
        concept={concept}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  )
}
