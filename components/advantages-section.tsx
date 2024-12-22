'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Battery, Wifi, Gauge, Zap, Shield } from 'lucide-react'

type advantages = {
  title: string;
  icon: React.ElementType;
  image: string;
  description: string;
  buttonText: string;
};

const advantages = [
  { 
    title: 'SMART CONNECTIVITY', 
    icon: Wifi,
    image: '/placeholder.svg?height=400&width=600',
    description: 'Stay connected with advanced infotainment systems and real-time updates.',
    buttonText: 'Explore Features'
  },
  { 
    title: 'ZERO EMISSIONS', 
    icon: Battery,
    image: '/placeholder.svg?height=400&width=600',
    description: 'Drive with a clear conscience, knowing you\'re contributing to a cleaner environment.',
    buttonText: 'Learn More'
  },
  { 
    title: 'IMPRESSIVE RANGE', 
    icon: Gauge,
    image: '/placeholder.svg?height=400&width=600',
    description: 'Go further on a single charge with our advanced battery technology.',
    buttonText: 'Check Range'
  },
  { 
    title: 'EFFICIENT CHARGING', 
    icon: Zap,
    image: '/placeholder.svg?height=400&width=600',
    description: 'Charge faster and smarter with our innovative charging solutions.',
    buttonText: 'Find Chargers'
  },
  { 
    title: 'SAFETY FIRST', 
    icon: Shield,
    image: '/placeholder.svg?height=400&width=600',
    description: 'Experience peace of mind with our advanced safety features and robust design.',
    buttonText: 'Safety Details'
  },
] as const;

export function AdvantagesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-24 relative">
      <div className="diagonal-lines  inset-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            ADVANTAGES OF<br />
            ELECTRIC VEHICLES <span className="text-[--neon]">+</span>
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-3 sm:space-y-4">
              {advantages.map((advantage, index) => (
                <motion.button
                  key={advantage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(index)}
                  className={`w-full group ${activeTab === index ? 'bg-[#1a1a1a]' : 'bg-[#111]'} rounded-full py-3 sm:py-4 px-6 sm:px-8 flex items-center space-x-4 transition-all duration-300 hover:bg-[#1a1a1a]`}
                >
                  <advantage.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === index ? 'text-[--neon]' : 'text-gray-400'} group-hover:text-[--neon] transition-colors`} />
                  <h3 className={`text-lg sm:text-xl font-bold truncate ${activeTab === index ? 'text-[--neon]' : 'text-white'} group-hover:text-[--neon] transition-colors`}>{advantage.title}</h3>
                </motion.button>
              ))}
            </div>

            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#111] rounded-3xl p-6 sm:p-8 space-y-6"
                >
                  <div className="aspect-video relative rounded-2xl overflow-hidden">
                    <Image
                      src={advantages[activeTab].image}
                      alt={advantages[activeTab].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold">{advantages[activeTab].title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{advantages[activeTab].description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[--neon] text-background px-6 py-2 rounded-full font-medium text-sm sm:text-base hover:glow transition-all duration-200"
                  >
                    {advantages[activeTab].buttonText}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

