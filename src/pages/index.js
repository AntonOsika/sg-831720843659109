import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AIEngineer from '@/components/AIEngineer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'
import FloatingActionButton from '@/components/FloatingActionButton'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-background">
        <Head>
          <title>Lovable - Software that builds software</title>
          <meta name="description" content="Unlock human creativity with AI-powered software engineering" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main>
          <Hero />
          <AIEngineer />
          <Features />
          <Testimonials />
          <FAQ />
          <CallToAction />
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
      </div>
    </ThemeProvider>
  )
}