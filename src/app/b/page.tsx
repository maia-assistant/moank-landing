import NavbarB from '@/components/variant-b/NavbarB'
import HeroB from '@/components/variant-b/HeroB'
import FeaturesB from '@/components/variant-b/FeaturesB'
import PricingB from '@/components/variant-b/PricingB'
import HowItWorksB from '@/components/variant-b/HowItWorksB'
import FAQB from '@/components/variant-b/FAQB'
import DocumentsB from '@/components/variant-b/DocumentsB'
import ContactB from '@/components/variant-b/ContactB'
import FooterB from '@/components/variant-b/FooterB'

export default function VariantB() {
  return (
    <>
      {/* Override body styles for dark theme */}
      <style jsx global>{`
        body {
          background-color: #0a0a0a !important;
          color: white !important;
        }
      `}</style>
      
      <NavbarB />
      <main className="min-h-screen bg-[#0a0a0a]">
        <HeroB />
        <FeaturesB />
        <PricingB />
        <HowItWorksB />
        <FAQB />
        <DocumentsB />
        <ContactB />
      </main>
      <FooterB />
    </>
  )
}
