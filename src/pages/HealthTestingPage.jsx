import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { _PRICES, CONTACT } from '../data/siteContent.js'
import FullHealthTestSection from '../components/common/FullHealthTestSection.jsx'

export default function HealthTestingPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const sixTests = [
    {
      num: '01',
      title: 'Intake Clearance & Vitality',
      desc: 'Tests general energy levels for emotional, mental, and physical health, broken down into percentage levels to identify energetic blockages.',
    },
    {
      num: '02',
      title: 'Body Systems Assessment',
      desc: 'Evaluates general functioning across 11 key anatomical areas: structural, muscular, heart & circulation, lymph, digestive, neurological, reproductive, liver, endocrine, kidneys/bladder, and teeth/sensory organs.',
    },
    {
      num: '03',
      title: 'EPT Stressor Test',
      desc: 'Environmental, Pathogen & Toxin Stressor Test identifying electro-smog, radiation, radio frequencies, geopathic stress, fungal burdens, parasites, bacteria, viruses, chemicals, and heavy metals.',
    },
    {
      num: '04',
      title: 'Food Intolerance & Sensitivity',
      desc: 'Comprehensive Testing across hundreds of food, drink, herb, and spice items to isolate reactive triggers causing digestive distress, fatigue, and inflammation.',
    },
    {
      num: '05',
      title: 'Vitamin & Mineral Status',
      desc: 'Evaluates nutritional deficiencies, trace mineral absorption, and cellular assimilation profiles.',
    },
    {
      num: '06',
      title: 'Remedy Test & Balancing Advice',
      desc: 'Determines compatible homeopathic formulations, nutritional supplementation, and personalized food elimination strategies.',
    },
  ]

  return (
    <div style={{ background: bg, minHeight: '100vh', color: bodyColor }}>
      {/* Viewport-aware Hero Header */}
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
              { label: 'Clinic Services', href: '/services/health-testing' },
              { label: 'Full Health Testing' },
            ]}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
              gap: '40px',
              alignItems: 'center',
            }}
            className="tw-grid-cols-1 lg:tw-grid-cols-2"
          >
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
                Remote Biophysical Assessment · 6-Point Comprehensive Test
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
                Bioresonance / Biofeedback Clinical Health Testing
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
                A non-invasive, remote hair sample health Test that evaluates your body's energetic status, food intolerances, toxin stressors, and organ system burdens — delivered with a comprehensive telephone consultation.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button onClick={() => openModal('health-form')} variant="primary" concept={concept}>
                  Complete Bioresonance Health Form
                </Button>
                <Button onClick={() => navigate('/contact')} variant="outline" concept={concept}>
                  Enquire with Julie
                </Button>
              </div>
            </div>

            {/* Authoritative Price & Key Facts Card */}
            <div>
              <div
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '18px' : '12px',
                  padding: '36px',
                  border: `1px solid ${borderColor}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor, marginBottom: '8px' }}>
                  Bioresonance Health Testing Fee
                </div>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: isConceptA ? '#2F5147' : '#14545A',
                    fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', sans-serif",
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}
                >
                  {_PRICES.fullHealthTesting}
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: bodyColor, margin: '0 0 20px' }}>
                  Includes the complete 6-part biofeedback test, written diagnostic report emailed within 7–10 working days, and a personal telephone consultation with Julie Langton Smith MSc.
                </p>

                <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  <div>📍 <strong>Testing Format:</strong> 100% Remote (No clinic visit needed)</div>
                  <div>🔬 <strong>Method:</strong> Bioresonance/Biofeedback Testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <FullHealthTestSection/>
      {/* 6 Tests Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor }}>
            What is Analyzed?
          </span>
          <h2
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2.4rem',
              fontWeight: isConceptA ? 600 : 800,
              color: headingColor,
              margin: '8px 0 16px',
            }}
          >
            The Six Distinct Test Categories
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: bodyColor }}>
            Using advanced quantum resonance scanning, your hair sample is Tested against tens of thousands of digital frequency parameters:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {sixTests.map((t) => (
            <div
              key={t.num}
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '16px' : '10px',
                padding: '32px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: accentColor,
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', sans-serif",
                  marginBottom: '12px',
                }}
              >
                {t.num}
              </div>
              <h3
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: '0 0 10px',
                }}
              >
                {t.title}
              </h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: bodyColor }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Hair Sample Instructions */}
        <div
          style={{
            background: isConceptA ? '#FFFFFF' : '#1F303A',
            color: isConceptA ? '#303832' : '#EEF3F2',
            borderRadius: isConceptA ? '20px' : '12px',
            padding: '44px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
            marginBottom: '48px',
          }}
        >
          <div style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: accentColor }}>
              Submission Instructions
            </span>
            <h3
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: isConceptA ? '#2F5147' : '#FAFAF7',
                margin: '8px 0 16px',
              }}
            >
              How to Prepare Your Hair Sample
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', margin: '24px 0' }}>
              <div style={{ background: isConceptA ? '#F6F3ED' : '#14232C', color: isConceptA ? '#303832' : '#EEF3F2', padding: '16px', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: isConceptA ? '#2F5147' : '#A8CDC4', marginBottom: '4px' }}>Sample Quantity</div>
                <div style={{ fontSize: '13px' }}>Minimum of 10 hairs, no larger than a postage stamp.</div>
              </div>
              <div style={{ background: isConceptA ? '#F6F3ED' : '#14232C', color: isConceptA ? '#303832' : '#EEF3F2', padding: '16px', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: isConceptA ? '#2F5147' : '#A8CDC4', marginBottom: '4px' }}>Treated / Colored Hair</div>
                <div style={{ fontSize: '13px' }}>Hair can be colored or treated. Root is NOT required.</div>
              </div>
              <div style={{ background: isConceptA ? '#F6F3ED' : '#14232C', color: isConceptA ? '#303832' : '#EEF3F2', padding: '16px', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: isConceptA ? '#2F5147' : '#A8CDC4', marginBottom: '4px' }}>Packaging & Post</div>
                <div style={{ fontSize: '13px' }}>Fold in clean tissue or labeled envelope; mail to clinic.</div>
              </div>
            </div>

            <Button onClick={() => openModal('health-form')} variant="primary" concept={concept}>
              Submit Health Intake & Begin Testing
            </Button>
          </div>
        </div>

        {/* Medical Disclaimer Dependency Notice */}
        <div
          style={{
            background: isConceptA ? 'rgba(197,143,117,0.1)' : 'rgba(185,154,98,0.1)',
            border: `1px solid ${accentColor}`,
            borderRadius: '12px',
            padding: '24px 28px',
            fontSize: '13px',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: headingColor }}>Professional Disclaimer: </strong> 
          Please Note that this is complementary medicine and does not form part of any conventional medical process. <mark style={{ background: '#FEF08A', color: '#1F303A', padding: '2px 4px', borderRadius: '4px' }}>Julie Langton-Smith has been practicing since 1997</mark> as a nutritional healthcare practitioner specialising in BioResonance/BioFeedback Therapy that is based on a bioresonance scanning device that Julie is fully qualified and trained in using. Many patients like this therapy as they have found it helpful, non invasive and allows them to feel that they have some control over looking after their own health naturally. However, if you are unsure of your health in any way or suffering any serious health condition it is always recommended that you seek medical advice from your GP.
        </div>
      </section>
    </div>
  )
}

