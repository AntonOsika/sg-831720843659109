import { motion } from 'framer-motion'
import { Code, Cpu, Zap } from 'lucide-react'

export default function AIEngineer() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            It starts with an AI software engineer
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Harness the power of artificial intelligence to revolutionize your software development process.
          </p>
        </motion.div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: 'Intelligent Coding',
                description: 'Our AI understands context and generates high-quality code tailored to your needs.',
                icon: Code,
              },
              {
                name: 'Rapid Prototyping',
                description: 'Quickly bring your ideas to life with AI-assisted prototyping and iteration.',
                icon: Zap,
              },
              {
                name: 'Continuous Learning',
                description: 'The AI engineer evolves and improves with each project, becoming more efficient over time.',
                icon: Cpu,
              },
            ].map((feature) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}