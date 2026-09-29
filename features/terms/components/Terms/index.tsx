import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { TERMS_BLOCKS, TERMS_TITLE, TERMS_UPDATED } from '@/features/terms/content'

export function Terms() {
  return <LegalDocument breadcrumb={{ label: 'Пользовательское соглашение', path: '/terms' }} title={TERMS_TITLE} blocks={TERMS_BLOCKS} pdf={{ href: '/docs/salebrain-terms.pdf', fileName: 'salebrain-terms.pdf' }} updated={TERMS_UPDATED} />
}
