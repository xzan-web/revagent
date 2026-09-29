import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { OFFER_BLOCKS, OFFER_TITLE } from '@/features/offer/content'

export function Offer() {
  return <LegalDocument breadcrumb={{ label: 'Публичная оферта', path: '/offer' }} title={OFFER_TITLE} blocks={OFFER_BLOCKS} pdf={{ href: '/docs/salebrain-offer.pdf', fileName: 'salebrain-offer.pdf' }} />
}
