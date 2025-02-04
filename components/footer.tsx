'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Zap } from 'lucide-react'

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Our Solutions', href: '#solutions' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Sustainability', href: '#sustainability' },
      
      
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' },
    ],
  }

  return (
    <footer className="bg-[#111] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand and Description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[--neon]" />
              <span className="text-lg sm:text-xl font-bold">FUTURE AUTO</span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Leading the way in sustainable transportation with innovative electric vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[--neon] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Electric Avenue</li>
              <li>Future City, FC 12345</li>
              <li className="pt-2">Phone: (555) 123-4567</li>
              <li>Email: info@futurecar.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-white/5 border border-white/10 focus:border-[--neon] focus:outline-none focus:ring-1 focus:ring-[--neon] transition-colors text-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[--neon] text-black px-6 py-2 rounded-full font-medium text-sm hover:glow transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm text-gray-400"
            >
              <p>&copy; {new Date().getFullYear()} Future Auto. All rights reserved.</p>
            </motion.div>

            <div className="flex space-x-4 sm:space-x-6">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[--neon] transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </div>

      
        </div>
      </div>
    </footer>
  )
}

