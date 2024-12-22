'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Palette, Zap, Gauge } from 'lucide-react'

const customizationOptions = [
  { 
    name: 'Exterior Color', 
    icon: Palette,
    description: 'Choose from a range of stunning colors, from classic neutrals to bold statement hues. Our advanced paint technology ensures a durable, high-gloss finish that enhances your vehicle\'s sleek design.'
  },
  { 
    name: 'Interior Trim', 
    icon: Palette,
    description: 'Personalize your cabin with premium materials and finishes. Select from luxurious leather, sustainable fabrics, or high-tech composites to create an interior that reflects your style and comfort preferences.'
  },
  { 
    name: 'Performance Upgrade', 
    icon: Zap,
    description: 'Boost your vehicle\'s performance with our cutting-edge upgrades. Enhance acceleration, top speed, and handling characteristics to take your driving experience to the next level.'
  },
  { 
    name: 'Range Extender', 
    icon: Gauge,
    description: 'Maximize your journey with our advanced range extender options. Choose from battery upgrades or efficient auxiliary power units to increase your vehicle\'s range and reduce charging stops on long trips.'
  },
]

export function CustomizationStudio() {
  const [activeOption, setActiveOption] = useState<number | null>(null)

  const toggleOption = (index: number) => {
    setActiveOption(activeOption === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24  from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Customization Studio
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Customizable electric car"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold mb-2">Your Dream Car</h3>
              <p className="text-gray-300">Tailored to your exact specifications</p>
            </div>
          </motion.div>
          <div className="space-y-4">
            {customizationOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleOption(index)}
                  className={`w-full text-left px-6 py-4 rounded-xl flex items-center justify-between transition-all ${
                    activeOption === index ? 'bg-[--neon] text-black' : 'bg-gray-800 text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <option.icon className="w-6 h-6" />
                    <span className="font-medium">{option.name}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeOption === index ? 'rotate-90' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {activeOption === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 mt-2 px-6 py-4 bg-gray-800/50 rounded-xl">
                        {option.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

