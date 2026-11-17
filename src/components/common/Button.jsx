import React from 'react'

/**
 * Reusable button / link-button component.
 * variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * concept: 'a' | 'b' (adjusts palette)
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  concept = 'a',
  className = '',
  external = false,
  disabled = false,
  type = 'button',
  ...props
}) {
  const isConceptA = concept === 'a'

  const base = 'tw-inline-flex tw-items-center tw-justify-center tw-font-semibold tw-transition-all tw-duration-200 tw-no-underline tw-cursor-pointer tw-border-0'

  const variants = {
    a: {
      primary:   'tw-bg-a-green tw-text-white tw-px-6 tw-py-3 tw-rounded-xl hover:tw-opacity-90 tw-text-sm',
      secondary: 'tw-bg-a-clay tw-text-white tw-px-6 tw-py-3 tw-rounded-xl hover:tw-opacity-90 tw-text-sm',
      outline:   'tw-bg-transparent tw-text-a-green tw-border-2 tw-border-a-green tw-px-6 tw-py-3 tw-rounded-xl hover:tw-bg-a-green hover:tw-text-white tw-text-sm',
      ghost:     'tw-bg-transparent tw-text-a-green tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-a-sage/20 tw-text-sm',
    },
    b: {
      primary:   'tw-bg-b-teal tw-text-white tw-px-6 tw-py-3 tw-rounded-lg hover:tw-opacity-90 tw-text-sm tw-font-semibold tw-tracking-wide',
      secondary: 'tw-bg-b-brass tw-text-b-ink tw-px-6 tw-py-3 tw-rounded-lg hover:tw-opacity-90 tw-text-sm',
      outline:   'tw-bg-transparent tw-text-b-teal tw-border-2 tw-border-b-teal tw-px-6 tw-py-3 tw-rounded-lg hover:tw-bg-b-teal hover:tw-text-white tw-text-sm',
      ghost:     'tw-bg-transparent tw-text-b-teal tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-b-mist tw-text-sm',
    },
  }

  const conceptKey = isConceptA ? 'a' : 'b'
  const variantClass = variants[conceptKey][variant] || variants[conceptKey].primary
  const finalClass = `${base} ${variantClass} ${disabled ? 'tw-opacity-50 tw-cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={finalClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
      {...props}
    >
      {children}
    </button>
  )
}
