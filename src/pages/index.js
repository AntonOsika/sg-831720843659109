import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Lovable - Software that builds software</title>
        <meta name="description" content="Unlock human creativity with AI-powered software engineering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lovable. All rights reserved.
      </footer>
    </div>
  )
}