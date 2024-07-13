import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building software that builds software
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our vision is to unlock human creativity — by enabling anyone to create software.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">Learn more</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}