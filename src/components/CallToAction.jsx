import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start building the future of software today
          </motion.h2>
          <motion.p 
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the revolution in AI-powered software development. Unleash your creativity and bring your ideas to life.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary">Get started for free</Button>
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
              <Button type="submit">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}