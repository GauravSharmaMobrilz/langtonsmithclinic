import React from 'react'

/**
 * Consistent section wrapper with max-width constraint and responsive padding.
 */
export default function SectionContainer({
  children,
  id,
  className = '',
  innerClassName = '',
  as: Tag = 'section',
  style,
}) {
  return (
    <Tag
      id={id}
      className={`tw-w-full ${className}`}
      style={style}
    >
      <div className={`tw-max-w-content tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  )
}
