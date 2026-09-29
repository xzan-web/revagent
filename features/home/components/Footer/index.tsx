import { Logo } from '@/shared/components/ui/Logo'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 lg:px-8">
        <div className="mb-10 flex justify-center"><Logo className="h-7 w-auto" /></div>
        <nav aria-label="Навигация по странице" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          <a href="#how" className="text-gray-600 hover:text-gray-900">Как работает</a>
          <a href="#diff" className="text-gray-600 hover:text-gray-900">Отличия</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Цены</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">Вопросы</a>
          <a href="#audit" className="text-gray-600 hover:text-gray-900">Разбор продаж</a>
        </nav>
        <div className="mt-12 flex flex-col items-center gap-y-3 border-t border-gray-900/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm/6 text-gray-600">© 2026 SaleBrain. Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm/6">
            <a href="/privacy" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">Политика конфиденциальности</a>
            <a href="/terms" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">Условия использования</a>
            <a href="/offer" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">Публичная оферта</a>
          </div>
        </div>
        <p className="mt-6 text-xs/5 text-gray-500">
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «НОУКОД». ИНН 9714009485. ОКВЭД 62.01 Разработка компьютерного программного обеспечения. Код вида деятельности в области ИТ согласно Приказу Минцифры от 11 мая 2023 г. № 449 — 2.01. Юридический адрес: 127083, г. Москва, вн.тер.г. муниципальный округ Савеловский, ул. 8 Марта, д. 6А, стр. 1.{' '}
          <a href="tel:+74951343066" className="whitespace-nowrap text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">+7 (495) 134-30-66</a>
          {' | '}
          <a href="tel:88003339907" className="whitespace-nowrap text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">8-800-333-99-07</a>
          {' | '}
          <a href="mailto:info@nodul.ru" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">info@nodul.ru</a>
        </p>
      </div>
    </footer>
  )
}
