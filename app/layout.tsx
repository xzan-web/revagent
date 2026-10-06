import type { Metadata, Viewport } from 'next'
import { Onest } from 'next/font/google'
import '@/styles/globals.css'

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-onest',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salebrain.ru'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SaleBrain — речевая аналитика и ИИ-агенты для отделов продаж',
  description: 'Анализируем 100% звонков и переписок, связываем их с итогом сделки и постепенно передаём продажи ИИ-агентам.',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '48x48' },
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/favicon.png`, type: 'image/png' },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'SaleBrain — система продаж, которая обучается на каждом диалоге',
    description: 'Речевая аналитика и ИИ-агенты для отделов продаж. Звонки, Telegram, MAX, WhatsApp, Avito, email, чат на сайте и CRM.',
    images: [{ url: `${siteUrl}/og-salebrain.png`, width: 1200, height: 630, alt: 'SaleBrain — система продаж, которая обучается на каждом диалоге' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#168977',
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
