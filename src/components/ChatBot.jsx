import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const chatbotResponses = {
  hello: "Hello! How can I assist you today?",
  features: "Lovable offers AI-powered software development, rapid prototyping, and collaborative tools. Check out our Features section for more details!",
  pricing: "We offer flexible pricing plans tailored to your needs. Please contact our sales team for a custom quote.",
  support: "Our support team is available 24/7. You can reach us at support@lovable.ai or through the contact form on our website.",
  default: "I'm sorry, I don't have information about that. Would you like to speak with a human representative?"
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { text: input, sender: 'user' }
    setMessages([...messages, userMessage])

    const lowercaseInput = input.toLowerCase()
    let botResponse
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
      botResponse = chatbotResponses.hello
    } else if (lowercaseInput.includes('features')) {
      botResponse = chatbotResponses.features
    } else if (lowercaseInput.includes('pricing')) {
      botResponse = chatbotResponses.pricing
    } else if (lowercaseInput.includes('support')) {
      botResponse = chatbotResponses.support
    } else {
      botResponse = chatbotResponses.default
    }

    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: botResponse, sender: 'bot' }])
    }, 500)

    setInput('')
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-background border border-border rounded-lg shadow-lg"
          >
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  aria-label="Chat message"
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}