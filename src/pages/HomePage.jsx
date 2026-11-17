import React from 'react'
import { useRouter } from '../context/RouterContext.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import ServiceOverview from '../components/home/ServiceOverview.jsx'
import BioresonanceIntro from '../components/home/BioresonanceIntro.jsx'
import AudiencePathways from '../components/home/AudiencePathways.jsx'
import TrainingHighlight from '../components/home/TrainingHighlight.jsx'
import FounderIntroduction from '../components/home/FounderIntroduction.jsx'
import DeviceHandbookHighlight from '../components/home/DeviceHandbookHighlight.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import ContactCallout from '../components/home/ContactCallout.jsx'
import Button from '../components/common/Button.jsx'

export default function HomePage({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate, openModal } = useRouter()

  return (
    <div>
      {/* 1. Hero Section — Viewport Aware */}
      <HeroSection concept={concept} />

      {/* Concept B elevates pathways right after Hero */}
      {!isConceptA && <AudiencePathways concept={concept} />}

      {/* 2. Clinic Service Overview */}
      <ServiceOverview concept={concept} />

      {/* 3. Bioresonance Introduction */}
      <BioresonanceIntro concept={concept} />

      {/* Concept A keeps pathways here */}
      {isConceptA && <AudiencePathways concept={concept} />}

      {/* 4. Practitioner Training Highlight */}
      <TrainingHighlight concept={concept} />

      {/* 5. Founder Introduction */}
      <FounderIntroduction concept={concept} />

      {/* 6. Devices & Handbook Showcase */}
      <DeviceHandbookHighlight concept={concept} />

      {/* 7. Client Testimonials */}
      <TestimonialsSection concept={concept} />

      {/* 8. Contact Callout */}
      <ContactCallout concept={concept} />
    </div>
  )
}

