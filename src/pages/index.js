import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AIEngineer from '@/components/AIEngineer'
import CallToAction from '@/components/CallToAction'
import { ThemeProvider } from 'next-themes'

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
          <CallToAction />
        </main>

        <footer className="py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lovable. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  )
}