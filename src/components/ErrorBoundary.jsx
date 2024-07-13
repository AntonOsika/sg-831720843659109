import React from 'react'
import { Button } from '@/components/ui/button'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo })
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    // Here you could send the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center p-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-primary mb-4">Oops! Something went wrong.</h1>
            <p className="text-xl text-foreground mb-8">We're sorry for the inconvenience. Our team has been notified and we're working on a fix.</p>
            {this.state.error && (
              <div className="bg-secondary p-4 rounded-md mb-8 text-left">
                <p className="font-bold mb-2">Error details:</p>
                <p className="text-sm">{this.state.error.toString()}</p>
              </div>
            )}
            <Button
              onClick={() => window.location.reload()}
              className="mr-4"
            >
              Reload Page
            </Button>
            <Button
              variant="outline"
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            >
              Try Again
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}