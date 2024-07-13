import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AIEngineer from '@/components/AIEngineer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'
import FloatingActionButton from '@/components/FloatingActionButton'
import ContactForm from '@/components/ContactForm'
import CookieConsent from '@/components/CookieConsent'

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const DynamicFAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })

export default function Home() {
  return (
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

        <Header />

        <main>
          <Hero />
          <AIEngineer />
          <Features />
          <DynamicTestimonials />
          <DynamicFAQ />
          <CallToAction />
          <section id="contact" className="py-24 bg-secondary">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
              <ContactForm />
            </div>
          </section>
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
      </div>
    </ThemeProvider>
  )
}