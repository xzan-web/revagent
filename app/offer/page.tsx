import type { Metadata } from 'next'
import { Offer } from '@/features/offer/components/Offer'

export const metadata: Metadata = {
  title: 'Публичная оферта — SaleBrain',
  description: 'Публичное предложение ООО «НОУКОД» о заключении договора оказания услуг SaleBrain.',
}

export default function OfferPage() {
  return <Offer />
}
