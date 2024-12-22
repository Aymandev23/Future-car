'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ImageGallery() {
  const images = [
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Electric vehicle front view with distinctive LED headlights',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Interior cockpit showing advanced digital dashboard',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Charging port detail with illuminated connection',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Rear view highlighting aerodynamic design',
    },
  ]

  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

