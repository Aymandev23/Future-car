import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Future Auto - Experience the Future of Driving',
  description: 'Leading the way in sustainable transportation with innovative electric vehicles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

