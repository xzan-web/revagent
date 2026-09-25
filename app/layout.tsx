import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/styles/globals.css'

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-onest',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Adaptive Sales — речевая аналитика и ИИ-агенты для отделов продаж',
  description: 'Анализируем 100% звонков и переписок, связываем их с итогом сделки и постепенно передаём продажи ИИ-агентам.',
  icons: { icon: `${basePath}/favicon.png` },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Adaptive Sales — продажи, которые учатся на каждом диалоге',
    description: 'Речевая аналитика и ИИ-агенты для отделов продаж. Звонки, Telegram, MAX, WhatsApp, email, чат на сайте и CRM.',
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={onest.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
