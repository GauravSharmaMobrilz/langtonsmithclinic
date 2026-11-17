import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  // Normalize hash route: #/about -> /about
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/'
    const hash = window.location.hash.replace(/^#/, '')
    return hash || '/'
  }

  const [currentPath, setCurrentPath] = useState(getInitialPath)
  const getInitialModal = () => {
    if (typeof window === 'undefined') return null
    const hash = window.location.hash.replace(/^#/, '')
    if (hash === 'modal-registration') return 'registration'
    if (hash === 'modal-health') return 'health-form'
    return null
  }
  const [activeModal, setActiveModal] = useState(getInitialModal)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '') || '/'
      // Check if hash is a modal trigger: #modal-registration or #modal-health
      if (hash === 'modal-registration') {
        setActiveModal('registration')
      } else if (hash === 'modal-health') {
        setActiveModal('health-form')
      } else {
        setCurrentPath(hash)
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = useCallback((path) => {
    if (path.startsWith('#modal-')) {
      setActiveModal(path.replace('#modal-', '') === 'registration' ? 'registration' : 'health-form')
      return
    }
    window.location.hash = path.startsWith('/') ? path : `/${path}`
    setCurrentPath(path.startsWith('/') ? path : `/${path}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const openModal = useCallback((modalName) => {
    setActiveModal(modalName)
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    const hash = window.location.hash.replace(/^#/, '')
    if (hash === 'modal-registration' || hash === 'modal-health') {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#/`)
      setCurrentPath('/')
    }
  }, [])

  const isActive = useCallback((path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '')) return true
    if (path !== '/' && currentPath.startsWith(path)) return true
    return false
  }, [currentPath])

  const value = {
    currentPath,
    navigate,
    isActive,
    activeModal,
    openModal,
    closeModal,
  }

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}

