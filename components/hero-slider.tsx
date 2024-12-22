'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/placeholder.svg?height=800&width=1600',
    alt: 'Electric sports car with neon accents',
    title: 'FUTURE OF MOBILITY',
    description: 'Experience the next generation of electric vehicles'
  },
  {
    id: 2,
    image: '/placeholder.svg?height=800&width=1600',
    alt: 'Interior dashboard with advanced displays',
    title: 'SMART TECHNOLOGY',
    description: 'Connected features that adapt to your lifestyle'
  },
  {
    id: 3,
    image: '/placeholder.svg?height=800&width=1600',
    alt: 'Charging port with illuminated elements',
    title: 'RAPID CHARGING',
    description: 'Power up quickly and get back on the road'
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative aspect-[16/12] sm:aspect-[2/1] w-full overflow-hidden rounded-[20px] sm:rounded-[40px] bg-[#111]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute left-4 sm:left-12 bottom-8 sm:bottom-12 max-w-[90%] sm:max-w-lg"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{slides[currentSlide].title}</h2>
            <p className="text-sm sm:text-base text-gray-300">{slides[currentSlide].description}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex items-center space-x-2 sm:space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>
        
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[--neon] rounded-full flex items-center justify-center glow">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-background"
          >
            <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentSlide(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[--neon] w-6 sm:w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

