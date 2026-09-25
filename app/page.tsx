import { Header } from '@/features/home/components/Header'
import { Hero } from '@/features/home/components/Hero'
import { Problem } from '@/features/home/components/Problem'
import { Comparison } from '@/features/home/components/Comparison'
import { HowItWorks } from '@/features/home/components/HowItWorks'
import { Outcomes } from '@/features/home/components/Outcomes'
import { Configuration } from '@/features/home/components/Configuration'
import { Audit } from '@/features/home/components/Audit'
import { Pricing } from '@/features/home/components/Pricing'
import { Guarantee } from '@/features/home/components/Guarantee'
import { Security } from '@/features/home/components/Security'
import { Faq } from '@/features/home/components/Faq'
import { FinalCta } from '@/features/home/components/FinalCta'
import { Footer } from '@/features/home/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <HowItWorks />
        <Outcomes />
        <Configuration />
        <Audit />
        <Pricing />
        <Guarantee />
        <Security />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
