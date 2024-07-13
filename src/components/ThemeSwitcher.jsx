import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Paintbrush } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const themes = [
  { name: 'light', color: '#ffffff' },
  { name: 'dark', color: '#1f2937' },
  { name: 'blue', color: '#3b82f6' },
  { name: 'green', color: '#10b981' },
  { name: 'purple', color: '#8b5cf6' },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        <Paintbrush className="h-4 w-4" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name)
                    setIsOpen(false)
                  }}
                  className={`${
                    theme === t.name ? 'bg-accent text-accent-foreground' : ''
                  } flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                  role="menuitem"
                >
                  <span className="w-4 h-4 mr-2 rounded-full" style={{ backgroundColor: t.color }}></span>
                  {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}