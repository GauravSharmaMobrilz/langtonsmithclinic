import React, { useState } from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import Breadcrumbs from '../components/common/Breadcrumbs.jsx'
import Button from '../components/common/Button.jsx'
import { CONTACT } from '../data/siteContent.js'
import SleepHypnosisVideo from '../components/common/SleepHypnosisVideo.jsx'
import AppointmentEnquiryModal from '../components/modals/AppointmentEnquiryModal.jsx'

export default function HypnotherapyPage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const bg = isConceptA ? '#F6F3ED' : '#FAFAF7'
  const heroBg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#FFFFFF' : '#EEF3F2'
  const borderColor = isConceptA ? '#E0DCD3' : '#14545A'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  const applications = [
    { title: 'Stress & Chronic Anxiety', desc: 'Recalibrating the autonomic nervous system to release deep subconscious tension, fear triggers, and emotional exhaustion.' },
    { title: 'Weight Management & Craving Control', desc: 'Restructuring subconscious food relationships, eliminating emotional bingeing, and instilling natural appetite satiation.' },
    { title: 'Irritable Bowel Syndrome (IBS)', desc: 'Gut-directed clinical hypnotherapy proven to reduce hypersensitivity, gastrointestinal cramping, and spasm triggers.' },
    { title: 'Fears & Specific Phobias', desc: 'Overcoming fear of flying, dental phobias, agoraphobia, claustrophobia, and medical procedure anxieties.' },
    { title: 'Smoking & Habit Cessation', desc: 'Breaking deeply conditioned nicotine, nail-biting, and repetitive behavioral impulses at subconscious levels.' },
    { title: 'Menopausal & Sleep Optimization', desc: 'Regulating hot flashes, emotional equilibrium, insomnia, and deep restorative sleep patterns.' },
  ]

  const applicationsLists = [
    { title: 'Anxiety' },
    { title: 'Panic Disorders' },
    { title: 'Child and Teenage Anxiety' },
    { title: 'PTSD' },
    { title: 'Post Viral Anxiety' },
    { title: 'Obsessive Compulsive Behaviours' },
    { title: 'Loss and Bereavement' },
    { title: 'Pet Bereavement' },
    { title: 'Relationship Therapy' },
    { title: 'Fear of Flying' },
    { title: 'Smoking Cessation' },
    { title: 'Weight Loss Issues' },
    { title: 'Unknown sources of Fear and Anxiety' }
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
          justifyContent: 'center',
          alignItems: 'center'
        }}

      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Breadcrumbs
            concept={concept}
            items={[
              { label: 'Clinic Services', href: '/services/health-testing' },
              { label: 'Clinical Hypnotherapy' },
            ]}
          />

          <div style={{ maxWidth: '840px' }}>
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
              {/* Authoritative exact title */}
              Fully qualified Senior Clinical Hypnotherapist
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
              Clinical & Health Hypnotherapy
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: isConceptA ? '#303832' : '#EEF3F2', margin: '0 0 28px' }}>
              A safe, non-invasive, solution-focused complementary therapy using positive subconscious suggestion to eliminate negative thought patterns, destructive habits, and physical stress burdens.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button
                onClick={() => openModal('client-consultation')}
                variant="primary"
                concept={concept}
              >
                Client Questionnaire
              </Button>
              <Button onClick={() => navigate('/contact')} variant="outline" concept={concept}>
                Book an Initial Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="tw-w-full tw-min-w-0">
          <SleepHypnosisVideo />
        </div>

      </section>
      {/* Main Content */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        {/* Core Principles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
          className="tw-grid-cols-1 lg:tw-grid-cols-2"
        >
          <div>
            <h2
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2.2rem',
                fontWeight: 700,
                color: headingColor,
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              What is Clinical Hypnotherapy?
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '16px' }}>
              Hypnotherapy does not involve making someone go to sleep or lose conscious control. Instead, it guides you into a deeply relaxed, focused state of mind where positive suggestions can be absorbed directly by the subconscious, allowing long-standing negative patterns of thinking, feeling, and behavior to dissolve naturally.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '24px' }}>
              Julie Langton Smith practices both <strong>Hypno-psychotherapy</strong> (combining analytical transpersonal counseling with hypnotic states) and <strong>Traditional clinical Hypnotherapy</strong>.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '24px' }}>
              A hypno-pscyhotherapist differs from a hypnotherapist in that they will have undertaken training in psychotherapy theory and practice. This integrative approach utilises both techniques to help with deeper problems that may not be able to be addressed with hypnotherapy alone (for example trauma or abuse), allowing the therapist to use their training and skills in psychotherapy to provide a supportive and empathic therapeutic relationship.
            </p>


            {/* Session Format Card */}
            <div
              style={{
                background: isConceptA ? '#FFFFFF' : '#1F303A',
                color: isConceptA ? '#303832' : '#EEF3F2',
                borderRadius: isConceptA ? '16px' : '10px',
                padding: '28px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: isConceptA ? '#2F5147' : '#A8CDC4', margin: '0 0 12px' }}>
                therapy session and booking by appointment only
              </h3>
              <div style={{ margin: '14px 0 18px' }}>
                <Button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  variant="primary"
                  concept={concept}
                  className="tw-w-full sm:tw-w-auto"
                >
                  Book an Appointment
                </Button>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li>📅 <strong>Minimum Course:</strong> Sessions are typically booked in blocks of a minimum of 4 weekly sessions to ensure continuity and best results.</li>
                <li>📍 <strong>In-Person Location:</strong> 37 Surrey Street, Littlehampton, West Sussex, BN17 5BH.</li>
                <li>🎧 <strong>Downloadable Audio Guides:</strong> Specialized audio sessions for home reinforcement (including Weight Loss and Stress Reduction). All Hypnotherapy downloads are £4.95 (all prices are quoted in British pounds sterling).</li>
              </ul>
            </div>
          </div>

       

          {/* Testimonial CQ, USA */}
          <div>
            <div
              style={{
                background: cardBg,
                borderRadius: isConceptA ? '18px' : '12px',
                padding: '36px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '48px', color: accentColor, lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: '8px' }}>“</div>
              <blockquote style={{ fontSize: '15px', lineHeight: 1.8, fontStyle: isConceptA ? 'italic' : 'normal', margin: '0 0 20px', color: bodyColor }}>
                I am writing to thank you for creating the hypnotherapy for weight loss. I purchased the download at a point when I was feeling pretty desperate for help. I just couldn't drop any weight and had begun to feel that I never would. However, with much prayer and daily listening to your hypnotherapy, I have managed to drop about thirty pounds over the last few months. I have a few more pounds to go, but I am joyful about my progress so far!
              </blockquote>
              <cite style={{ fontStyle: 'normal', fontSize: '13.5px', fontWeight: 700, color: headingColor, display: 'block' }}>
                — CQ, USA
              </cite>
              <span style={{ fontSize: '12px', color: '#777777' }}>Weight Loss Clinical Hypnotherapy</span>
            </div>
          </div>

          
        </div>


   {/* Past Life Regression */}
          <div
          style={{
                background: cardBg,
                borderRadius: isConceptA ? '18px' : '12px',
                padding: '36px',
                marginBottom:'50px',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}>
<h2
              style={{
                fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                fontSize: '2.2rem',
                fontWeight: 700,
                color: headingColor,
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              Past Life Regression
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, marginBottom: '24px' }}>
             Some fears, phobias or behaviours are thought to be linked to a past life, this is a specialised area of working with an individual to discover if there are any significant past life events that are affecting a behaviour such as addiction, fear/phobia, sense
of depression/anxiety and self defeating actions. Past life does not necessarily mean that a person will go back into another life but it sometimes helps the individual to understand why they are doing something that they want to stop, it can be a very interesting
form of working to find out about a deeper sense of self.
            </p>
          </div>
          
        {/* Applications Grid */}
        <div style={{ marginBottom: '56px' }}>
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: headingColor,
              margin: '0 0 28px',
              textAlign: 'center',
            }}
          >
            Clinical Applications & Conditions Treated
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {applicationsLists.map((a) => (
              <div
                key={a.title}
                style={{
                  background: cardBg,
                  borderRadius: isConceptA ? '14px' : '8px',
                  padding: '24px',
                  border: `1px solid ${borderColor}`,
                }}
              >
                <h4 style={{ margin: '0 0 0px', fontSize: '1.15rem', color: headingColor }}>{a.title}</h4>
                {/* <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: bodyColor }}>{a.desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Appointment Enquiry Modal */}
      <AppointmentEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        concept={concept}
      />
    </div>
  )
}

