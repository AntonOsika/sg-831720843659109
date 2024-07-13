import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lovable</span>
            <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Lovable logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold leading-6 text-foreground">Features</a>
          <a href="#" className="text-sm font-semibold leading-6 text-foreground">About</a>
          <a href="#" className="text-sm font-semibold leading-6 text-foreground">Contact</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  )
}