import type { Metadata } from 'next'
import { Header } from '@/shared/components/layout/Header'
import { Footer } from '@/shared/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lalexi Next.js App',
  description: 'A modern Next.js application built with TypeScript and feature-based architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
