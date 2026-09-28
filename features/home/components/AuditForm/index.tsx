// Форма заявки на разбор продаж — Fillout-форма из Latenode, встроенная через iframe.
// Поля и отправка настраиваются в Latenode, не здесь.
const AUDIT_FORM_URL = 'https://form.latenode.com/t/5SXTbhsGxkus'

export function AuditForm() {
  return (
    <div id="audit-form" className="px-6 pt-4 pb-24 sm:pb-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white lg:mr-0 lg:max-w-lg">
        <iframe
          src={AUDIT_FORM_URL}
          title="Получить разбор продаж"
          loading="lazy"
          className="block h-[600px] w-full border-0"
        />
      </div>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-on-dark/70 lg:mr-0 lg:max-w-lg">Бесплатно · NDA по запросу</p>
    </div>
  )
}
