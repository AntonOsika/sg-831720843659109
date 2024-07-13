import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">GPT</span>
      </div>
      <span className="text-xl font-bold text-foreground">Engineer</span>
    </motion.div>
  )
}