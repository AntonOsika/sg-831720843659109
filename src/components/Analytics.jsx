import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Analytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Here you would typically send analytics data to your backend or a third-party service
      console.log(`Page view: ${url}`)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null // This component doesn't render anything
}