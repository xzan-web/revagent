import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { POLICY_BLOCKS, POLICY_TITLE } from '@/features/privacy/content'

export function PrivacyPolicy() {
  return <LegalDocument breadcrumb={{ label: 'Политика конфиденциальности', path: '/privacy' }} title={POLICY_TITLE} blocks={POLICY_BLOCKS} pdf={{ href: '/docs/salebrain-privacy.pdf', fileName: 'salebrain-privacy.pdf' }} />
}
