import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lovable</span>
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <DarkModeToggle />
          <Button>Get Started</Button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex items-center justify-between px-3">
                <DarkModeToggle />
                <Button>Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}