import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" passHref>
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  )
}