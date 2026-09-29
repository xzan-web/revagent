import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { OFFER_BLOCKS, OFFER_TITLE } from '@/features/offer/content'

export function Offer() {
  return <LegalDocument title={OFFER_TITLE} blocks={OFFER_BLOCKS} />
}
