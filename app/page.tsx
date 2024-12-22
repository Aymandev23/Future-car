import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { AdvantagesSection } from '@/components/advantages-section'
import { CustomizationStudio } from '@/components/customization-studio'
import { SustainabilityCommitment } from '@/components/sustainability-commitment'
import { CTASection } from '@/components/cta-section'
import { ContactUs } from '@/components/contact-us'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <AdvantagesSection />
      <CustomizationStudio />
      <SustainabilityCommitment />
      <CTASection />
      <ContactUs />
      <Footer />
    </main>
  )
}

