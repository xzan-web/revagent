import type { Metadata } from 'next'
import { Mission } from '@/features/about/components/Mission'

export const metadata: Metadata = {
  title: 'About - Lalexi Next.js App',
  description: 'Learn about our mission and values in creating exceptional web experiences.',
}

export default function AboutPage() {
  return (
    <main>
      <Mission />
    </main>
  )
}
