import { Code, Lightbulb, Zap, Users, Rocket, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    name: 'AI-Powered Engineering',
    description: 'Harness the power of AI to automate and enhance the software development process.',
    icon: Code,
  },
  {
    name: 'Unlock Creativity',
    description: 'Enable anyone to bring their software ideas to life, regardless of technical background.',
    icon: Lightbulb,
  },
  {
    name: 'Rapid Development',
    description: 'Accelerate your software projects with intelligent code generation and optimization.',
    icon: Zap,
  },
  {
    name: 'Collaboration Tools',
    description: 'Foster teamwork with built-in collaboration features for seamless project management.',
    icon: Users,
  },
  {
    name: 'Scalable Solutions',
    description: 'Build software that grows with your business, from startups to enterprises.',
    icon: Rocket,
  },
  {
    name: 'Security First',
    description: 'Ensure your software is secure by design with AI-driven security checks and best practices.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Innovate Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to create amazing software
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Lovable provides cutting-edge tools and AI-powered assistance to revolutionize the way you build software.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle className="mt-4">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}