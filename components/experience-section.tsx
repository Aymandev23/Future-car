'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ExperienceSection() {
  const features = [
    { 
      image: '/image_fx_5.jpg', 
      alt: 'Interior dashboard',
      title: 'Smart Interior'
    },
    { 
      image: '/image_fx_12.jpg', 
      alt: 'Charging port',
      title: 'Fast Charging'
    },
    { 
      image: '/image_fx_13.jpg', 
      alt: 'Connected features',
      title: 'Connected'
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative">
      <div className="diagonal-lines absolute inset-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              EXPERIENCE<br />
              THE FUTURE OF<br />
              DRIVING <span className="text-[--neon]">+</span>
            </motion.h2>
            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-white/10 transition-all duration-300 group-hover:ring-[--neon]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm text-gray-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {feature.title}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-12 max-w-md text-sm sm:text-base"
            >
              Were committed to leading the way in sustainable transportation.
            </motion.p>
          </div>
          
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[20px] sm:rounded-[40px] overflow-hidden relative group"
            >
              <Image
                src="/image_fx_4.jpg"
                alt="Electric car charging"
                width={600}
                height={400}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8 leading-tight"
            >
              LEARN ABOUT<br />
              OUR CHARGING<br />
              OPTIONS <span className="text-[--neon]">+</span>
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

