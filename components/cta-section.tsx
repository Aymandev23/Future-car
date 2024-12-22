'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] rounded-[20px] sm:rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 diagonal-lines opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
            >
              TEST DRIVE NOW
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-[--neon] rounded-full flex items-center justify-center justify-self-center glow"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

