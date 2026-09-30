'use client'

import { useEffect, useRef } from 'react'

// Форма заявки на разбор продаж — CRM-форма Битрикс24 (inline).
// Загрузчик Битрикса рисует форму рядом со своим <script>, поэтому тег создаём здесь, в карточке.
// data-skip-moving не даёт Битриксу переносить форму в другое место страницы.
const BITRIX_FORM_ID = 'inline/34/4g6mot'
const BITRIX_LOADER = 'https://cdn-ru.bitrix24.ru/b34820142/crm/form/loader_34.js'

export function AuditForm() {
  const slot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = slot.current
    if (!container || container.querySelector('script[data-b24-form]')) return

    const script = document.createElement('script')
    script.async = true
    script.dataset.b24Form = BITRIX_FORM_ID
    script.dataset.skipMoving = 'true'
    script.src = `${BITRIX_LOADER}?${Math.floor(Date.now() / 180000)}`
    container.appendChild(script)
  }, [])

  return (
    <div id="audit-form" className="px-6 pt-4 pb-24 sm:pb-32 lg:px-8 lg:py-40">
      <div ref={slot} className="mx-auto min-h-[520px] max-w-xl rounded-2xl bg-white p-2 lg:mr-0 lg:max-w-lg" />
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-on-dark/70 lg:mr-0 lg:max-w-lg">Бесплатно · NDA по запросу</p>
    </div>
  )
}
