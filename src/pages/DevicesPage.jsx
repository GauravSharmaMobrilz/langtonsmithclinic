import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import ImageFrame from '../components/common/ImageFrame.jsx'
import Button from '../components/common/Button.jsx'
import {
  DEVICES,
  DEVICE_SYSTEM_REQUIREMENTS,
  DEVICE_FINANCE_INFO,
  DEVICE_CUSTOMS_INFO,
  DEVICE_MEDICAL_DISCLAIMER,
  CONTACT,
} from '../data/siteContent.js'

export default function DevicesPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const innerBg = isConceptA ? '#F6F3ED' : '#14232C'
  const innerCardText = isConceptA ? '#303832' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const scopeDevice = DEVICES.find((d) => d.id === 'scope') || DEVICES[0]
  const marsDevice = DEVICES.find((d) => d.id === 'mars3') || DEVICES[1]
  const scopeQDevice = DEVICES.find((d) => d.id === 'scopeQ') || DEVICES[2]

  const comparisonRows = [
    {
      feature: 'Primary Clinical Focus',
      scope: 'Targeted Food Sensitivity & Nutritional Deficiency Testing',
      scopeQ: 'Compact Portable Scanning & General Pathogen/Toxin Screening',
      mars3: 'Master Differential Assessment, Therapy & Frequency Broadcasting',
    },
    {
      feature: 'Database Size & Languages',
      scope: 'Extensive Food & Vitamin spectrum (Customizable)',
      scopeQ: 'Over 60,000 rates across English, German, and Spanish',
      mars3: 'Over 60,000 rates across English, German, and Spanish',
    },
    {
      feature: 'Biological Sample Method',
      scope: 'Hair sample or direct testing',
      scopeQ: 'Hair sample or direct on-site testing',
      mars3: 'Hair sample, biological substrate, or in-clinic contact',
    },
    {
      feature: 'Remote / Mail-In Testing',
      scope: '✓ 100% Remote compatible',
      scopeQ: '✓ 100% Remote compatible',
      mars3: '✓ 100% Remote compatible',
    },
    {
      feature: 'Food Intolerance & Sensitivity',
      scope: '✓ Core primary capability (grains, dairy, meats, drinks, etc.)',
      scopeQ: '✓ Included in 60,000+ database',
      mars3: '✓ Comprehensive differential analysis',
    },
    {
      feature: 'Pathogens, Toxins & Electro-Smog',
      scope: 'Focused nutritional & environmental indicators',
      scopeQ: '✓ Bacteria, viruses, parasites, fungi, heavy metals, EMF',
      mars3: '✓ Full microbiological & environmental profiling',
    },
    {
      feature: 'Energy Balancing & Colour Therapy',
      scope: 'Nutritional rebalancing recommendations',
      scopeQ: 'Tailored homeopathic frequency recommendations',
      mars3: '✓ Whole-body balancing, colour therapy, chakra & meridians',
    },
    {
      feature: 'Physical Remedy Scanning & Copying',
      scope: '✗ No',
      scopeQ: '✗ No (Cannot scan remedies)',
      mars3: '⭐ YES — Exclusive capability to scan & imprint remedies onto media',
    },
    {
      feature: 'Automated Biofield Analysis (VIBA)',
      scope: 'Manual / template-assisted scanning',
      scopeQ: 'Algorithmic rate evaluation',
      mars3: '✓ Automated VIBA biofield analysis algorithm',
    },
    {
      feature: 'Portability & Mobility',
      scope: 'Standard desktop unit',
      scopeQ: '⭐ Lightweight portable chassis for mobile & home visits',
      mars3: 'Stationary master clinical console',
    },
    {
      feature: 'Best Suited Practitioner Profile',
      scope: 'Nutritional therapists, naturopaths, food testing clinics',
      scopeQ: 'Mobile human & veterinary practitioners, visiting consultants',
      mars3: 'Full-time bioresonance clinics, multi-disciplinary therapists',
    },
  ]

  const foodCategories = [
    'Grains & Cereals (Wheat, Gluten, Rye, Oats, Barley, Rice)',
    'Dairy & Lactose (Cow, Goat, Sheep, Cheeses, Whey)',
    'Meats, Poultry & Eggs (Beef, Pork, Chicken, Lamb, Turkey)',
    'Fish, Shellfish & Seafoods',
    'Vegetables & Legumes (Nightshades, Alliums, Pulses)',
    'Raw & Cooked Fruits (Citrus, Berries, Stone fruits, Tropical)',
    'Herbs, Spices, Seasonings & Food Additives',
    'Beverages (Tea, Coffee, Alcohol, Carbonated & Fermented drinks)',
    'Comprehensive Vitamin & Mineral Deficiency Spectrum',
  ]

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* ─── 1. VIEWPORT-AWARE HERO HEADER ──────────────────────────────────── */}
      <section
        style={{
          background: heroBg,
          borderBottom: `1px solid ${borderColor}`,
          padding: '48px 24px 64px',
          minHeight: '48vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Breadcrumbs
            concept={concept}
            items={[
              { label: 'Practitioner Training', href: '/training' },
              { label: 'Bioresonance Devices' },
            ]}
          />

          <div style={{ maxWidth: '880px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: accentColor,
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Hardware & Clinical Technology
            </span>
            <h1
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: isConceptA ? 'clamp(2.4rem, 5vw, 3.8rem)' : 'clamp(2.1rem, 4.5vw, 3.4rem)',
                fontWeight: isConceptA ? 600 : 800,
                color: isConceptA ? '#2F5147' : '#FAFAF7',
                lineHeight: 1.15,
                margin: '8px 0 20px',
              }}
            >
              SCOPE, MARS III & Scope Q Bioresonance Devices
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
              Specialised biofeedback and quantum resonance hardware designed to measure electromagnetic wave fields, map biological imbalances, and broadcast restorative frequencies. Discover comprehensive technical specifications, database capabilities, and independent procurement guidance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button
                onClick={() => {
                  window.location.href = `mailto:${CONTACT.email}?subject=Bioresonance%20Device%20Sourcing%20Enquiry`
                }}
                variant="primary"
                concept={concept}
              >
                Request Device Sourcing Advice
              </Button>
              <Button onClick={() => navigate('/training')} variant="outline" concept={concept}>
                Explore Practitioner Training
              </Button>
            </div>

            {/* Feature Pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '32px' }}>
              {[
                '🔬 Non-Invasive Hair Sample Analysis',
                '📊 60,000+ Test Parameter Database',
                '🌐 Remote & In-Clinic Operation',
              
              ].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    background: isConceptA ? 'rgba(47,81,71,0.06)' : 'rgba(20,84,90,0.2)',
                    border: `1px solid ${borderColor}`,
                    color: isConceptA ? '#2F5147' : '#A8CDC4',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: '20px',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT CONTAINER ─────────────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>

        {/* ─── 2. DEVICE 1: SCOPE FOOD SENSITIVITY TESTING DEVICE ───────────── */}
        <div
          id="scope-device"
          style={{
            background: cardBg,
            borderRadius: isConceptA ? '20px' : '14px',
            padding: '40px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
              gap: '40px',
              alignItems: 'start',
            }}
            className="tw-grid-cols-1 lg:tw-grid-cols-[1.2fr_1.8fr]"
          >
            <div>
              <ImageFrame
                src={scopeDevice.imageSrc}
                alt={scopeDevice.imageAlt}
                mediaKey="scopeDevice"
                aspectRatio="16/11"
                rounded={isConceptA ? '14px' : '10px'}
                style={{ marginBottom: '20px' }}
              />

              <div
                style={{
                  background: innerBg,
                  color: innerCardText,
                  borderRadius: '10px',
                  padding: '20px',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div style={{ fontWeight: 700, color:'white', marginBottom: '6px' }}>
                  🎯 Primary Operational Role
                </div>
                <div>
                  Specialized non-invasive bioresonance testing device developed as a cost-effective introduction to quantum medicine, focusing primarily on food sensitivities, intolerances, and nutritional deficiency profiling.
                </div>
              </div>
            </div>

            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: accentColor,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Targeted Food Sensitivity & Mobile Testing
              </span>
              <h2
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: '0 0 14px',
                  lineHeight: 1.2,
                }}
              >
                SCOPE Food Sensitivity Testing Device (FSTD)
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                {scopeDevice.description}
              </p>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: headingColor, margin: '20px 0 10px' }}>
                Testing Capabilities & Methodology
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                {scopeDevice.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Database Categories Highlight */}
              <div
                style={{
                  background: isConceptA ? 'rgba(47,81,71,0.04)' : 'rgba(20,84,90,0.12)',
                  borderRadius: '10px',
                  padding: '20px',
                  border: `1px solid ${borderColor}`,
                  marginBottom: '24px',
                }}
              >
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: headingColor, margin: '0 0 10px' }}>
                  Built-In Database Categories Covered:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px', fontSize: '12.5px' }}>
                  {foodCategories.map((cat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: accentColor, fontSize: '10px' }}>●</span>
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '12px', color: '#777777', margin: '12px 0 0', lineHeight: 1.5 }}>
                  * Practitioners can expand and customize the SCOPE database with local ingredients, specialized supplements, and cultural food items.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${CONTACT.email}?subject=SCOPE%20Device%20Sourcing%20Enquiry`
                  }}
                  variant="primary"
                  concept={concept}
                >
                  Enquire on SCOPE Procurement
                </Button>
                <Button onClick={() => navigate('/training/handbook')} variant="outline" concept={concept}>
                  Read Food Sensitivity Handbook
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. DEVICE 2: MARS III MASTER CLINICAL STATION ────────────────── */}
        <div
          id="mars-device"
          style={{
            background: cardBg,
            borderRadius: isConceptA ? '20px' : '14px',
            padding: '40px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
              gap: '40px',
              alignItems: 'start',
            }}
            className="tw-grid-cols-1 lg:tw-grid-cols-[1.8fr_1.2fr]"
          >
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: accentColor,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Flagship Comprehensive Differential System
              </span>
              <h2
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: '0 0 14px',
                  lineHeight: 1.2,
                }}
              >
                MARS III (Multiple Analytical Resonance System)
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                {marsDevice.description}
              </p>

              {/* Exclusive Feature Callout Box */}
              <div
                style={{
                  background: isConceptA ? '#2F5147' : '#14545A',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>⭐</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D7B39E' }}>
                    Exclusive Hardware Capability: Remedy Scanning & Copying
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px', color: '#FFFFFF' }}>
                  Physical Remedy Scanning & Imprinting Station
                </h4>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, margin: 0, color: '#E8F1EE' }}>
                  <strong>MARS III is the only device in the entire series capable of scanning and copying physical remedies.</strong> It enables the practitioner to place a physical homeopathic remedy, botanical tincture, or energetic substrate onto the test plate, digitize its unique frequency signature, and copy or electronically imprint that frequency onto carrier globules, alcohol-water solutions, or magnetic chip cards.
                </p>
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: headingColor, margin: '20px 0 10px' }}>
                Key Technical & Therapy Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                {marsDevice.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${CONTACT.email}?subject=MARS%20III%20Device%20Sourcing%20Enquiry`
                  }}
                  variant="primary"
                  concept={concept}
                >
                  Enquire on MARS III Sourcing
                </Button>
                <Button onClick={() => openModal('registration')} variant="outline" concept={concept}>
                  Register for Practitioner Training
                </Button>
              </div>
            </div>

            <div>
              <ImageFrame
                src={marsDevice.imageSrc}
                alt={marsDevice.imageAlt}
                mediaKey="mars3Device"
                aspectRatio="16/11"
                rounded={isConceptA ? '14px' : '10px'}
                style={{ marginBottom: '20px' }}
              />

              <div
                style={{
                  background: innerBg,
                  color: innerCardText,
                  borderRadius: '10px',
                  padding: '22px',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div style={{ fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                  🌐 Cross-Disciplinary Applications
                </div>
                <p style={{ margin: '0 0 10px' }}>
                  Beyond human clinical practice, the MARS III system's open 60,000-rate architecture is actively deployed worldwide in:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px' }}>
                  <li>🐾 <strong>Veterinary Medicine:</strong> Canine, equine, feline, and livestock health profiling.</li>
                  <li>🧠 <strong>Psychology & Coaching:</strong> Psychosomatic stress mapping and emotional resonance balancing.</li>
                  <li>🌱 <strong>Agriculture & Soil:</strong> Seed vitality evaluation and crop frequency balance.</li>
                  <li>💧 <strong>Environmental Science:</strong> Water quality testing and electro-smog remediation analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. DEVICE 3: SCOPE Q PORTABLE SYSTEM ─────────────────────────── */}
        <div
          id="scopeq-device"
          style={{
            background: cardBg,
            borderRadius: isConceptA ? '20px' : '14px',
            padding: '40px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            marginBottom: '64px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
              gap: '40px',
              alignItems: 'start',
            }}
            className="tw-grid-cols-1 lg:tw-grid-cols-[1.2fr_1.8fr]"
          >
            <div>
              <ImageFrame
                src={scopeQDevice.imageSrc}
                alt={scopeQDevice.imageAlt}
                mediaKey="scopeDevice"
                aspectRatio="16/11"
                rounded={isConceptA ? '14px' : '10px'}
                style={{ marginBottom: '20px' }}
              />

              <div
                style={{
                  background: innerBg,
                  color: innerCardText,
                  borderRadius: '10px',
                  padding: '20px',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div style={{ fontWeight: 700, color: 'white', marginBottom: '6px' }}>
                  💼 Portable Mobile Architecture
                </div>
                <div>
                  Housed in a compact, ruggedized enclosure, Scope Q delivers the full computing power of the MARS III database in a format designed for home visits, equine/veterinary stables, and mobile health consultants.
                </div>
              </div>
            </div>

            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: accentColor,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Portable Practitioner Biofeedback Device
              </span>
              <h2
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: '0 0 14px',
                  lineHeight: 1.2,
                }}
              >
                Scope Q (Compact Portable Bioresonance Device)
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                {scopeQDevice.description}
              </p>

              {/* Crucial Difference & Limitation Callout Box */}
              <div
                style={{
                  background: isConceptA ? 'rgba(197,143,117,0.1)' : 'rgba(185,154,98,0.15)',
                  border: `1.5px solid ${accentColor}`,
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '18px' }}>⚠️</span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color:'#2F5147' }}>
                    Hardware Distinction: Scope Q Cannot Scan Remedies
                  </h4>
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, margin: 0, color: bodyColor }}>
                  {scopeQDevice.limitations} <strong>Scope Q is equipped for rapid digital frequency testing and can suggest balancing remedies, but cannot copy physical substances.</strong> If physical remedy copying or direct electronic card imprinting is required, practitioners should select the <strong>MARS III</strong> system.
                </p>
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: headingColor, margin: '20px 0 10px' }}>
                Testing Features & Mobility Benefits
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                {scopeQDevice.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${CONTACT.email}?subject=Scope%20Q%20Device%20Sourcing%20Enquiry`
                  }}
                  variant="primary"
                  concept={concept}
                >
                  Enquire on Scope Q System
                </Button>
                <Button onClick={() => navigate('/contact')} variant="outline" concept={concept}>
                  Request Comparison Guidance
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. COMPREHENSIVE DEVICE COMPARISON TABLE ─────────────────────── */}
        <div
          style={{
            background: cardBg,
            borderRadius: isConceptA ? '20px' : '14px',
            padding: '40px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            marginBottom: '64px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
              }}
            >
              Side-by-Side Evaluation
            </span>
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: headingColor,
                margin: '8px 0 12px',
              }}
            >
              SCOPE vs. Scope Q vs. MARS III Comparison
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: bodyColor, margin: 0 }}>
              Review the core technical differences, testing scopes, and remedy capabilities across the three bioresonance systems.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13.5px',
                textAlign: 'left',
              }}
            >
              <thead>
                <tr style={{ borderBottom: `2px solid ${borderColor}` }}>
                  <th style={{ padding: '14px 16px', color: headingColor, fontWeight: 700, width: '22%' }}>
                    Specification / Feature
                  </th>
                  <th style={{ padding: '14px 16px', color: headingColor, fontWeight: 700, width: '26%' }}>
                    SCOPE (FSTD)
                  </th>
                  <th style={{ padding: '14px 16px', color: headingColor, fontWeight: 700, width: '26%' }}>
                    Scope Q (Portable)
                  </th>
                  <th style={{ padding: '14px 16px', color: headingColor, fontWeight: 700, width: '26%', background: isConceptA ? 'rgba(47,81,71,0.05)' : 'rgba(20,84,90,0.15)' }}>
                    MARS III (Master Station)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      background: idx % 2 === 0 ? 'transparent' : (isConceptA ? 'rgba(0,0,0,0.015)' : 'rgba(255,255,255,0.02)'),
                    }}
                  >
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: headingColor }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '14px 16px', color: bodyColor, lineHeight: 1.5 }}>
                      {row.scope}
                    </td>
                    <td style={{ padding: '14px 16px', color: bodyColor, lineHeight: 1.5 }}>
                      {row.scopeQ}
                    </td>
                    <td style={{ padding: '14px 16px', color: bodyColor, lineHeight: 1.5, background: isConceptA ? 'rgba(47,81,71,0.03)' : 'rgba(20,84,90,0.08)' }}>
                      <strong>{row.mars3}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─── 6. COMPUTER & TECHNICAL SYSTEM REQUIREMENTS ───────────────────── */}
        <div
          id="system-requirements"
          style={{
            background: cardBg,
            borderRadius: isConceptA ? '20px' : '14px',
            padding: '40px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            marginBottom: '56px',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: accentColor,
            }}
          >
            Hardware & Host PC Requirements
          </span>
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.9rem',
              fontWeight: 700,
              color: headingColor,
              margin: '8px 0 14px',
            }}
          >
            {DEVICE_SYSTEM_REQUIREMENTS.heading}
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
            {DEVICE_SYSTEM_REQUIREMENTS.intro}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            {DEVICE_SYSTEM_REQUIREMENTS.specs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: innerBg,
                  color: innerCardText,
                  borderRadius: '10px',
                  padding: '18px 20px',
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: accentColor, marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'white' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Verification & Outdated Spec Warning Flag */}
          <div
            style={{
              background: isConceptA ? '#FFF8E7' : 'rgba(185,154,98,0.15)',
              border: `1.5px solid ${accentColor}`,
              borderRadius: '10px',
              padding: '20px',
              fontSize: '13.5px',
              lineHeight: 1.6,
              color: '#6B5120',
            }}
          >
            <strong>⚠️ Client & Modern System Verification Note:</strong> {DEVICE_SYSTEM_REQUIREMENTS.verificationNotice}
          </div>
        </div>

        {/* ─── 7. FINANCE, CUSTOMS & PROCUREMENT GRID ────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '56px',
          }}
          className="tw-grid-cols-1 md:tw-grid-cols-2"
        >
          {/* UK Finance Box */}
          <div
            style={{
              background: cardBg,
              borderRadius: isConceptA ? '18px' : '12px',
              padding: '36px',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
              Purchasing & Equipment Finance
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: headingColor, margin: '0 0 14px' }}>
              {DEVICE_FINANCE_INFO.heading}
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
              {DEVICE_FINANCE_INFO.body}
            </p>

            <div
              style={{
                background: innerBg,
                color: innerCardText,
                borderRadius: '8px',
                padding: '16px',
                border: `1px solid ${borderColor}`,
                marginBottom: '20px',
                fontSize: '13px',
              }}
            >
              <div><strong>Finance Partner:</strong> {DEVICE_FINANCE_INFO.partnerName}</div>
              <div style={{ marginTop: '4px' }}>
                <strong>Direct Contact:</strong>{' '}
                <a
                  href={`mailto:${DEVICE_FINANCE_INFO.partnerContact}`}
                  style={{ color: accentColor, fontWeight: 700, textDecoration: 'none' }}
                >
                  {DEVICE_FINANCE_INFO.partnerContact}
                </a>
              </div>
              <div style={{ fontSize: '12px', color: '#777777', marginTop: '8px' }}>
                {DEVICE_FINANCE_INFO.termsNote}
              </div>
            </div>

            <Button
              onClick={() => {
                window.location.href = `mailto:${DEVICE_FINANCE_INFO.partnerContact}?subject=Bioresonance%20Equipment%20Finance%20Enquiry`
              }}
              variant="outline"
              concept={concept}
            >
              Enquire on UK Device Finance
            </Button>
          </div>

          {/* International Shipping & Customs Guidance */}
          <div
            style={{
              background: cardBg,
              borderRadius: isConceptA ? '18px' : '12px',
              padding: '36px',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
              Importation & Cross-Border Delivery
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: headingColor, margin: '0 0 14px' }}>
              {DEVICE_CUSTOMS_INFO.heading}
            </h3>

            {/* Warning Callout verbatim from old site */}
            <div
              style={{
                background: isConceptA ? '#FFF2F0' : 'rgba(235,87,87,0.12)',
                border: '1.5px solid #EB5757',
                borderRadius: '8px',
                padding: '14px 18px',
                marginBottom: '16px',
                fontSize: '12.5px',
                fontWeight: 700,
                color: isConceptA ? '#D9381E' : '#FF7675',
              }}
            >
              ⚠️ {DEVICE_CUSTOMS_INFO.warningNotice}
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
              {DEVICE_CUSTOMS_INFO.description}
            </p>

            <Button
              onClick={() => {
                window.location.href = `mailto:${CONTACT.email}?subject=Customs%20and%20Import%20Guidance%20Enquiry`
              }}
              variant="outline"
              concept={concept}
            >
              Ask Julie for Import Guidance
            </Button>
          </div>
        </div>

        {/* ─── 8. PROFESSIONAL MEDICAL & REGULATORY DISCLAIMER ───────────────── */}
        <div
          style={{
            background: innerBg,
            color: innerCardText,
            borderRadius: isConceptA ? '16px' : '10px',
            padding: '32px',
            border: `1px solid ${borderColor}`,
            marginBottom: '56px',
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '6px' }}>
            Compliance & Transparency
          </div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', margin: '0 0 12px' }}>
            {DEVICE_MEDICAL_DISCLAIMER.heading}
          </h4>
          <p style={{ fontSize: '13.5px', lineHeight: 1.7, margin: 0 }}>
            {DEVICE_MEDICAL_DISCLAIMER.text}
          </p>
        </div>

        {/* ─── 9. ENQUIRY & PROCUREMENT CONTACT CALLOUT ──────────────────────── */}
        <div
          style={{
            background: isConceptA ? '#2F5147' : '#14545A',
            color: '#FFFFFF',
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '48px 36px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D7B39E' }}>
            Independent Sourcing Guidance
          </span>
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '10px 0 16px',
            }}
          >
            Ready to Discuss Hardware for Your Clinic?
          </h3>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#E8F1EE', maxWidth: '720px', margin: '0 auto 28px' }}>
            Investing in bioresonance diagnostic equipment is a significant clinical decision. Julie Langton Smith provides impartial, experienced guidance on device selection, manufacturer sourcing, and training pathways.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Button
              onClick={() => {
                window.location.href = `mailto:${CONTACT.email}?subject=Bioresonance%20Device%20Procurement%20Enquiry`
              }}
              variant="outline"
              concept={concept}
              style={{ background: '#FFFFFF', color: '#2F5147', borderColor: '#FFFFFF' }}
            >
              Enquire via Email ({CONTACT.email})
            </Button>
            <Button onClick={() => openModal('registration')} variant="primary" concept={concept}>
              Apply for Practitioner Training
            </Button>
          </div>

          <div style={{ fontSize: '13px', color: '#C8DBD5' }}>
            Direct Telephone: <strong>{CONTACT.phone}</strong> · Consultation clinic in Littlehampton, West Sussex
          </div>
        </div>

      </section>
    </div>
  )
}
