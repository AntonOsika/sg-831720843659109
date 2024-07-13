import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'
import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AIEngineer from '@/components/AIEngineer'
import CallToAction from '@/components/CallToAction'
import FloatingActionButton from '@/components/FloatingActionButton'
import ContactForm from '@/components/ContactForm'
import CookieConsent from '@/components/CookieConsent'
import Modal from '@/components/Modal'
import ErrorBoundary from '@/components/ErrorBoundary'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import Newsletter from '@/components/Newsletter'
import ChatBot from '@/components/ChatBot'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import AnimatedSection from '@/components/AnimatedSection'
import Analytics from '@/components/Analytics'

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const DynamicFAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#ai-engineer', label: 'AI Engineer' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  useKeyboardNav(navItems)

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class">
        <SEO 
          title="Home"
          description="Unlock human creativity with AI-powered software engineering"
        />
        <div className="min-h-screen bg-background">
          <ScrollProgressBar />
          <Header navItems={navItems} />

          <main>
            <AnimatedSection>
              <Hero />
            </AnimatedSection>
            <AnimatedSection>
              <AIEngineer />
            </AnimatedSection>
            <AnimatedSection>
              <Features />
            </AnimatedSection>
            <AnimatedSection>
              <DynamicTestimonials />
            </AnimatedSection>
            <AnimatedSection>
              <DynamicFAQ />
            </AnimatedSection>
            <AnimatedSection>
              <CallToAction onContactClick={() => setIsContactModalOpen(true)} />
            </AnimatedSection>
            <AnimatedSection>
              <section className="py-12 bg-secondary">
                <div className="container mx-auto px-4">
                  <Newsletter />
                </div>
              </section>
            </AnimatedSection>
          </main>

          <footer className="py-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">GitHub</a>
            </div>
            © {new Date().getFullYear()} Lovable. All rights reserved.
          </footer>

          <FloatingActionButton />
          <CookieConsent />
          <ChatBot />
          <ThemeSwitcher />

          <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ContactForm />
          </Modal>
        </div>
        <Analytics />
      </ThemeProvider>
    </ErrorBoundary>
  )
}