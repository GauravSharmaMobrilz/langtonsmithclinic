import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'
import { DEVICES, HANDBOOK } from '../../data/siteContent.js'
import SectionContainer from '../common/SectionContainer.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import ImageFrame from '../common/ImageFrame.jsx'
import Button from '../common/Button.jsx'

export default function DeviceHandbookHighlight({ concept = 'a' }) {
  const isConceptA = concept === 'a'
  const { navigate } = useRouter()

  const bg = isConceptA ? '#FFFFFF' : '#1F303A'
  const cardBg = isConceptA ? '#F6F3ED' : '#EEF3F2'
  const cardBorder = isConceptA ? '#A9BBA9' : '#A8CDC4'
  const headingColor = isConceptA ? '#2F5147' : '#1F303A'
  const bodyColor = isConceptA ? '#303832' : '#303B40'
  const accentColor = isConceptA ? '#C58F75' : '#B99A62'

  return (
    <SectionContainer
      id="devices"
      style={{ background: bg, paddingTop: '80px', paddingBottom: '80px' }}
    >
      <SectionHeading
        label="Devices & Publications"
        heading="Technology & Training Resources"
        subheading="Professional bioresonance devices and educational reference publications."
        concept={concept}
        className="tw-mb-12 reveal-on-scroll"
      />

      {/* Devices Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginBottom: '56px',
        }}
      >
        {DEVICES.map((device) => (
          <div
            key={device.id}
            className="reveal-on-scroll"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: isConceptA ? '18px' : '10px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: isConceptA ? '0 4px 16px rgba(0,0,0,0.04)' : '0 4px 16px rgba(0,0,0,0.12)',
            }}
          >
            <ImageFrame
              src={device.imageSrc}
              alt={device.imageAlt}
              mediaKey={device.id === 'mars3' ? 'mars3Device' : 'scopeDevice'}
              aspectRatio="16/10"
              rounded={isConceptA ? '12px' : '6px'}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: accentColor,
                  marginBottom: '6px',
                }}
              >
                {device.type}
              </div>
              <h3
                style={{
                  fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: isConceptA ? 600 : 700,
                  color: headingColor,
                  margin: '0 0 10px',
                }}
              >
                {/* [TRAINING] */}
                {device.name}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: bodyColor, margin: '0 0 12px', flex: 1 }}>
                {/* [TRAINING] verbatim */}
                {device.description}
              </p>
              {device.note && (
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: isConceptA ? '#2F5147' : '#14545A',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: isConceptA ? 'rgba(47,81,71,0.08)' : 'rgba(20,84,90,0.12)',
                    marginBottom: '16px',
                  }}
                >
                  {device.note}
                </div>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigate('/training/devices')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: isConceptA ? '#2F5147' : '#14545A',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                View device specifications & comparison →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Handbook Card */}
      <div
        className="reveal-on-scroll"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,3fr)',
          gap: '40px',
          alignItems: 'center',
          background: isConceptA ? '#F6F3ED' : '#EEF3F2',
          borderRadius: isConceptA ? '20px' : '10px',
          padding: '44px',
          border: `1px solid ${cardBorder}`,
          boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
        }}
        id="handbook"
      >
        <div style={{ maxWidth: '200px', margin: '0 auto', width: '100%' }}>
          <ImageFrame
            src={HANDBOOK.coverImageSrc}
            alt={HANDBOOK.coverImageAlt}
            mediaKey="bookCover"
            aspectRatio="2/3"
            rounded={isConceptA ? '12px' : '6px'}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: accentColor,
              marginBottom: '8px',
            }}
          >
            Authoritative Training Handbook
          </div>
          <h3
            style={{
              fontFamily: isConceptA ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif",
              fontSize: '1.45rem',
              fontWeight: isConceptA ? 600 : 700,
              color: headingColor,
              margin: '0 0 8px',
              lineHeight: 1.3,
            }}
          >
            {/* [CLINIC/TRAINING] */}
            {HANDBOOK.title}
          </h3>
          <p style={{ fontSize: '13.5px', color: bodyColor, margin: '0 0 12px', fontWeight: 500 }}>
            By {HANDBOOK.author}
          </p>
          <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: bodyColor, margin: '0 0 20px' }}>
            {/* [CLINIC] verbatim */}
            {HANDBOOK.description}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '16px',
              flexWrap: 'wrap',
              background: isConceptA ? '#FFFFFF' : '#FAFAF7',
              padding: '12px 18px',
              borderRadius: '8px',
              border: `1px solid ${cardBorder}60`,
              width: 'fit-content',
            }}
          >
            <span style={{ fontSize: '14px', color: bodyColor }}>
              UK delivery (inc. postage): <strong style={{ color: headingColor }}>{HANDBOOK.priceUK}</strong>
            </span>
            <span style={{ fontSize: '14px', color: bodyColor }}>
              International (inc. postage): <strong style={{ color: headingColor }}>{HANDBOOK.priceInternational}</strong>
            </span>
          </div>
          <p style={{ fontSize: '12.5px', color: '#666666', margin: '0 0 20px', fontStyle: 'italic' }}>
            {HANDBOOK.orderNote}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate('/training/handbook')} variant="primary" concept={concept}>
              Read Handbook Overview
            </Button>
            <Button href={`mailto:${HANDBOOK.orderEmail}?subject=Book%20Order:%20Food%20Sensitivity%20Testing`} variant="outline" concept={concept}>
              Enquire via Email
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
