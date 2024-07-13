import { useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'
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

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const DynamicFAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class">
        <div className="min-h-screen bg-background">
          <Head>
            <title>Lovable - Software that builds software</title>
            <meta name="description" content="Unlock human creativity with AI-powered software engineering" />
            <meta property="og:title" content="Lovable - Software that builds software" />
            <meta property="og:description" content="Unlock human creativity with AI-powered software engineering" />
            <meta property="og:image" content="/api/placeholder/1200/630" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <ScrollProgressBar />
          <Header />

          <main>
            <Hero />
            <AIEngineer />
            <Features />
            <DynamicTestimonials />
            <DynamicFAQ />
            <CallToAction onContactClick={() => setIsContactModalOpen(true)} />
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

          <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ContactForm />
          </Modal>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}