import { LegalDocument } from '@/shared/components/legal/LegalDocument'
import { POLICY_BLOCKS, POLICY_TITLE } from '@/features/privacy/content'

export function PrivacyPolicy() {
  return <LegalDocument title={POLICY_TITLE} blocks={POLICY_BLOCKS} />
}
