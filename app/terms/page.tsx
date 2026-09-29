import type { Metadata } from 'next'
import { Terms } from '@/features/terms/components/Terms'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение — SaleBrain',
  description: 'Условия использования сайта salebrain.ru.',
}

export default function TermsPage() {
  return <Terms />
}
