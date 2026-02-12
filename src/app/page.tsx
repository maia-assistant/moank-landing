import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Documents from '@/components/Documents'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Documents />
      <Contact />
    </main>
  )
}
