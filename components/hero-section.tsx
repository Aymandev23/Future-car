'use client'

import { motion } from 'framer-motion'
import { HeroSlider } from './hero-slider'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  )
}

