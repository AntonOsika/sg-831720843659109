import { useEffect } from 'react'

export function useKeyboardNav(navItems) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey) {
        const index = parseInt(e.key, 10)
        if (!isNaN(index) && index > 0 && index <= navItems.length) {
          e.preventDefault()
          const item = navItems[index - 1]
          document.querySelector(item.href).focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navItems])
}