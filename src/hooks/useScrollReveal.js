import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Attaches IntersectionObserver to add 'is-visible' class to elements
 * matching selector within the referenced container.
 * Honours prefers-reduced-motion.
 */
export function useScrollReveal(selector = '.reveal-on-scroll', threshold = 0.15) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) {
      // Make all reveal elements immediately visible
      const all = document.querySelectorAll(selector)
      all.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const container = ref.current || document
    const elements = container.querySelectorAll(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, threshold, prefersReduced])

  return ref
}
