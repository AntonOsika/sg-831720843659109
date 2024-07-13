import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-foreground mb-4 sm:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <Button onClick={handleAccept}>Accept</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}