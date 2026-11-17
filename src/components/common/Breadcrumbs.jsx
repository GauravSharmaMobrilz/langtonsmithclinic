import React from 'react'
import { useRouter } from '../../context/RouterContext.jsx'

export default function Breadcrumbs({ items = [], concept = 'a' }) {
  const { navigate } = useRouter()
  const isConceptA = concept === 'a'

  const textColor = isConceptA ? '#303832' : '#EEF3F2'
  const activeColor = isConceptA ? '#2F5147' : '#A8CDC4'
  const dividerColor = isConceptA ? '#A9BBA9' : '#14545A'

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        padding: '12px 0 20px',
        fontSize: '12.5px',
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
      }}
    >
      <button
        type="button"
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: activeColor,
          fontWeight: 600,
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit',
        }}
      >
        Home
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <React.Fragment key={item.label || index}>
            <span style={{ color: dividerColor, userSelect: 'none' }}>/</span>
            {isLast || !item.href ? (
              <span
                style={{
                  color: isLast ? (isConceptA ? '#303832' : '#FAFAF7') : textColor,
                  fontWeight: isLast ? 600 : 400,
                }}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => navigate(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  color: activeColor,
                  fontWeight: 500,
                  textDecoration: 'underline',
                  fontSize: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

