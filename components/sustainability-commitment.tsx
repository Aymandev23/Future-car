'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Sun } from 'lucide-react'

const commitments = [
  {
    icon: Leaf,
    title: 'Zero Emissions',
    description: 'Our vehicles produce no tailpipe emissions, contributing to cleaner air in our cities.'
  },
  {
    icon: Recycle,
    title: 'Sustainable Materials',
    description: 'We use recycled and eco-friendly materials in our manufacturing process.'
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Our factories are powered by 100% renewable energy sources.'
  }
]

export function SustainabilityCommitment() {
  return (
    <section className="py-16 md:py-24 from-green-900 to-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Commitment to Sustainability
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
            >
              <commitment.icon className="w-12 h-12 mx-auto mb-4 text-[--neon]" />
              <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
              <p className="text-gray-300">{commitment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

