import React from 'react'
import { getPlaceholderStyle } from '../../data/mediaManifest.js'

/**
 * Renders an image or a clearly-labelled placeholder if src is null/pending.
 * Never substitutes stock imagery for original source assets.
 */
export default function ImageFrame({
  src,
  alt,
  mediaKey,
  className = '',
  style,
  aspectRatio = '4/3',
  rounded = '16px',
}) {
  const containerStyle = {
    borderRadius: rounded,
    overflow: 'hidden',
    aspectRatio,
    position: 'relative',
    ...style,
  }

  if (src) {
    return (
      <div className={`tw-w-full ${className}`} style={containerStyle}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }

  // Placeholder — clearly labelled, never mistaken for final content
  const placeholderStyle = mediaKey ? getPlaceholderStyle(mediaKey) : {}
  return (
    <div
      className={`tw-w-full ${className}`}
      style={{ ...containerStyle, ...placeholderStyle, minHeight: '200px' }}
      role="img"
      aria-label={`Image placeholder: ${alt}`}
    >
      <div style={{ fontSize: '32px', opacity: 0.3 }}>📷</div>
      <div style={{ fontSize: '11px', opacity: 0.7, padding: '0 8px' }}>
        [Image pending — original asset required]
      </div>
      <div style={{ fontSize: '10px', opacity: 0.5 }}>{alt}</div>
    </div>
  )
}
