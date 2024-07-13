import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}