import type { Metadata } from 'next'
import { PrivacyPolicy } from '@/features/privacy/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных — SaleBrain',
  description: 'Как SaleBrain собирает, использует и защищает персональные данные посетителей сайта salebrain.ru.',
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
}
