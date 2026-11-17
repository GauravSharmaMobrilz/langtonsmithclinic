import React, { useState } from 'react'
import { RouterProvider, useRouter } from './context/RouterContext.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import RegistrationModal from './components/modals/RegistrationModal.jsx'
import HealthModal from './components/modals/HealthModal.jsx'

// Dedicated Pages for Every Navigation Item
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HealthTestingPage from './pages/HealthTestingPage.jsx'
import CounsellingPage from './pages/CounsellingPage.jsx'
import HypnotherapyPage from './pages/HypnotherapyPage.jsx'
import HealthFormPage from './pages/HealthFormPage.jsx'
import TrainingCoursesPage from './pages/TrainingCoursesPage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import DevicesPage from './pages/DevicesPage.jsx'
import HandbookPage from './pages/HandbookPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import TermsPoliciesPage from './pages/TermsPoliciesPage.jsx'
import DesignDirectionBar from './components/layout/DesignDirectionBar.jsx'
import BioresonancePractitionerTrainingPart1 from './pages/BioresonancePractitionerTrainingPart1.jsx'
import BioresonancePractitionerTrainingPart2 from './pages/BioresonancePractitionerTrainingPart2.jsx'

function MainApp() {
  const [activeConcept, setActiveConcept] = useState('a') // 'a' (Clinical Wellness Light) | 'b' (Modern Editorial Dark)
  const { currentPath } = useRouter()

  // Route mapping — every primary & sub-navigation item has its own dedicated page
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage concept={activeConcept} />
      case '/services/health-testing':
        return <HealthTestingPage concept={activeConcept} />
      case '/services/counselling':
        return <CounsellingPage concept={activeConcept} />
      case '/services/hypnotherapy':
        return <HypnotherapyPage concept={activeConcept} />
      case '/services/health-form':
        return <HealthFormPage concept={activeConcept} />
      case '/training':
        return <TrainingCoursesPage concept={activeConcept} />
      case '/training/registration':
        return <RegistrationPage concept={activeConcept} />
      case '/training/devices':
        return <DevicesPage concept={activeConcept} />
      case '/training/handbook':
        return <HandbookPage concept={activeConcept} />
      case '/shop':
        return <ShopPage concept={activeConcept} />
      case '/contact':
        return <ContactPage concept={activeConcept} />
      case '/terms-policies':
        return <TermsPoliciesPage concept={activeConcept} />
      case '/training/BioresonancePractitionerTrainingPart1':
        return <BioresonancePractitionerTrainingPart1 concept={activeConcept} />
      case '/training/BioresonancePractitionerTrainingPart2':
        return <BioresonancePractitionerTrainingPart2 concept={activeConcept} />
      case '/':
      default:
        return <HomePage concept={activeConcept} />
    }
  }
  return (
    <>
      {/* ─── PROTOTYPE-ONLY CONCEPT SWITCHER ──────────────────────────────────────
          This switcher is NOT part of the website design. Remove before client handover. */}
      {/* <aside
        className="ls-prototype-switcher"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99990,
          background: '#141F25',
          borderRadius: '14px',
          padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          border: '1px solid rgba(168,205,196,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          minWidth: '220px',
          color: '#FAFAF7',
          fontFamily: "'Inter', sans-serif",
        }}
        role="region"
        aria-label="Prototype design option switcher"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#B99A62', fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ⚡ Prototype Review
          </span>
          <span style={{ fontSize: '10px', color: '#A8CDC4', opacity: 0.8 }}>
            Route: {currentPath}
          </span>
        </div>

        <div style={{ fontSize: '12px', fontWeight: 600, color: '#EEF3F2' }}>
          Switch Visual Option:
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setActiveConcept('a')}
            aria-pressed={activeConcept === 'a'}
            style={{
              flex: 1,
              padding: '9px 12px',
              borderRadius: '8px',
              border: activeConcept === 'a' ? '1.5px solid #A9BBA9' : '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '12.5px',
              background: activeConcept === 'a' ? '#2F5147' : 'rgba(255,255,255,0.08)',
              color: activeConcept === 'a' ? '#F6F3ED' : '#A8CDC4',
              transition: 'all 0.2s',
            }}
          >
            Option A
          </button>
          <button
            type="button"
            onClick={() => setActiveConcept('b')}
            aria-pressed={activeConcept === 'b'}
            style={{
              flex: 1,
              padding: '9px 12px',
              borderRadius: '8px',
              border: activeConcept === 'b' ? '1.5px solid #A8CDC4' : '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '12.5px',
              background: activeConcept === 'b' ? '#14545A' : 'rgba(255,255,255,0.08)',
              color: activeConcept === 'b' ? '#FAFAF7' : '#A8CDC4',
              transition: 'all 0.2s',
            }}
          >
            Option B
          </button>
        </div>

        <div style={{ fontSize: '11px', color: '#A8CDC4', lineHeight: 1.4, marginTop: '2px' }}>
          {activeConcept === 'a' ? (
            <span>🌿 <strong>Option A:</strong> Premium Clinical Wellness (Light)</span>
          ) : (
            <span>✨ <strong>Option B:</strong> Modern Editorial Experience (Dark)</span>
          )}
        </div>
      </aside> */}
<DesignDirectionBar
  activeConcept={activeConcept}
  setActiveConcept={setActiveConcept}
/>
      {/* ─── SITE CONTAINER (Scoped under .ls-mock-root) ────────────────────────── */}
      <div
        className="ls-mock-root"
        style={{
          background: activeConcept === 'a' ? '#F6F3ED' : '#FAFAF7',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SiteHeader concept={activeConcept} />
        <main id="main-content" className='tw-mt-16 sm:tw-mt-12 lg:tw-mt-[76px]' style={{ flex: 1}}>
          {renderCurrentPage()}
        </main>
        <SiteFooter concept={activeConcept} />
      </div>

      {/* ─── MODAL DIALOGS (Accessible from anywhere) ─────────────────────────── */}
      <RegistrationModal concept={activeConcept} />
      <HealthModal concept={activeConcept} />
    </>
  )
}

// import { useEffect } from 'react';
// import { disableInspect } from './utils/disableInspect';
export default function App() {
  //    useEffect(() => {
  //   const cleanup = disableInspect({
  //     detectDevTools: true,
  //     showWarning: true,

  //     // Optional redirect:
  //     // redirectUrl: "/"
  //   });

  //   return cleanup;
  // }, []);
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  )
}
