import React from 'react'
import logoAsset from '../../assets/logos/logo.webp'

/**
 * BrandLogo — Official Julie Langton Smith (JLS) monogram & brand identity.
 * Faithfully reproduces the authentic monogram from the official clinic documents:
 * Intertwined 'J' and 'S' serif monogram with crossbar/L flourish.
 * Works seamlessly across light and dark surfaces.
 */
export default function BrandLogo({
  variant = 'light', // 'light' | 'dark'
  concept = 'a',
  size = 'default', // 'small' | 'default' | 'large'
  showTagline = true,
  className = '',
}) {
  const isDarkSurface = variant === 'dark' || (concept === 'b' && variant !== 'light-forced')

  const primaryColor = isDarkSurface ? '#FAFAF7' : (concept === 'a' ? '#2F5147' : '#14545A')
  const monogramColor = isDarkSurface ? '#A8CDC4' : (concept === 'a' ? '#2F5147' : '#14545A')
  const accentColor = isDarkSurface ? '#B99A62' : (concept === 'a' ? '#C58F75' : '#B99A62')

  const fontStyle = concept === 'a' ? "'Cormorant Garamond', Georgia, serif" : "'Manrope', Inter, sans-serif"

  const iconSizes = {
    small: 32,
    default: 42,
    large: 52,
  }

  const titleSizes = {
    small: '16px',
    default: '20px',
    large: '26px',
  }

  const s = iconSizes[size] || iconSizes.default

  return (
    <div
      className={`tw-inline-flex tw-items-center tw-gap-3.5 ${className}`}
      style={{ userSelect: 'none' }}
    >
      {/* Client-provided JLS monogram asset */}
      <img
        src={logoAsset}
        alt="Julie Langton Smith monogram"
        width={s}
        height={s}
        style={{ flexShrink: 0, objectFit: 'contain', display: 'block', filter: isDarkSurface ? 'brightness(0) invert(1)' : 'none' }}
      />

      {/* Typography Mark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: fontStyle,
            fontWeight: concept === 'a' ? 600 : 800,
            fontSize: titleSizes[size] || titleSizes.default,
            color: primaryColor,
            letterSpacing: concept === 'a' ? '0.01em' : '-0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Langton Smith Clinic
        </span>
        {showTagline && (
          <span
            style={{
              fontSize: '10px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: accentColor,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginTop: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            For better health naturally
          </span>
        )}
      </div>
    </div>
  )
}
