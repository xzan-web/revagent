import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { TERMS_BLOCKS, TERMS_TITLE, TERMS_UPDATED } from '@/features/terms/content'

export function Terms() {
  return <LegalDocument title={TERMS_TITLE} blocks={TERMS_BLOCKS} updated={TERMS_UPDATED} />
}
