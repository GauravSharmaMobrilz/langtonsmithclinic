import React from 'react'

/**
 * Reusable section heading block.
 * concept: 'a' | 'b'
 * align: 'left' | 'center'
 */
export default function SectionHeading({
  label,
  heading,
  subheading,
  concept = 'a',
  align = 'center',
  className = '',
}) {
  const isConceptA = concept === 'a'
  const alignClass = align === 'center' ? 'tw-text-center' : 'tw-text-left'

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <span
          className={`tw-block tw-text-xs tw-font-semibold tw-tracking-[0.2em] tw-uppercase tw-mb-3 ${
            isConceptA ? 'tw-text-a-clay' : 'tw-text-b-brass'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`tw-m-0 tw-leading-tight tw-mb-4 ${
          isConceptA
            ? 'tw-font-serif tw-text-a-green tw-text-3xl lg:tw-text-4xl'
            : 'tw-font-manrope tw-text-b-ink tw-text-3xl lg:tw-text-4xl tw-font-bold'
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`tw-max-w-2xl tw-mx-auto tw-leading-relaxed ${
            align === 'center' ? 'tw-text-center' : ''
          } ${isConceptA ? 'tw-text-a-charcoal/80 tw-text-base' : 'tw-text-b-graphite/80 tw-text-base'}`}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
