import HeroB from '@/components/variant-b/HeroB'
import FeaturesB from '@/components/variant-b/FeaturesB'
import PricingB from '@/components/variant-b/PricingB'
import HowItWorksB from '@/components/variant-b/HowItWorksB'
import FAQB from '@/components/variant-b/FAQB'
import DocumentsB from '@/components/variant-b/DocumentsB'
import ContactB from '@/components/variant-b/ContactB'

export default function VariantB() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroB />
      <FeaturesB />
      <PricingB />
      <HowItWorksB />
      <FAQB />
      <DocumentsB />
      <ContactB />
    </main>
  )
}
