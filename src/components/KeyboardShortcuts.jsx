import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Keyboard } from 'lucide-react'

const shortcuts = [
  { key: 'Ctrl + K', action: 'Open search' },
  { key: 'Ctrl + B', action: 'Toggle sidebar' },
  { key: 'Ctrl + S', action: 'Save changes' },
  { key: 'Ctrl + P', action: 'Print page' },
  { key: 'Ctrl + F', action: 'Find in page' },
]

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Keyboard shortcuts"
      >
        <Keyboard className="h-4 w-4" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <ul className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-mono bg-muted px-2 py-1 rounded">{shortcut.key}</span>
                  <span>{shortcut.action}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}