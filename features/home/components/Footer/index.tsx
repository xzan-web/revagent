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
          <p className="text-sm/6 text-gray-600">© 2026 Adaptive Sales. Речевая аналитика и ИИ‑агенты для отделов продаж.</p>
          <div className="flex gap-x-6 text-sm/6">
            <a href="/privacy" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">Политика конфиденциальности</a>
            <a href="/terms" className="text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
