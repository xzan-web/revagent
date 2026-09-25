export function Comparison() {
  return (
    <section id="diff" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-brand-700">Отличия</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Обычная речевая аналитика проверяет скрипт. Мы проверяем, что приводит к продаже</p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed border-separate border-spacing-0 text-left">
            <caption className="sr-only">Сравнение типичной речевой аналитики и Adaptive Sales</caption>
            <colgroup><col className="w-1/4" /><col className="w-3/8" /><col className="w-3/8" /></colgroup>
            <thead>
              <tr>
                <td className="p-0"></td>
                <th scope="col" className="px-6 pb-4 text-sm/6 font-semibold text-gray-500">Типичная речевая аналитика</th>
                <th scope="col" className="rounded-t-2xl bg-brand-50 px-6 pt-4 pb-4 text-sm/6 font-semibold text-brand-700 ring-1 ring-brand-50">Adaptive Sales</th>
              </tr>
            </thead>
            <tbody className="text-sm/6">
              <tr>
                <th scope="row" className="border-t border-gray-900/10 py-5 pr-4 font-semibold text-gray-900">Что анализирует</th>
                <td className="border-t border-gray-900/10 px-6 py-5 text-gray-600">В основном звонки</td>
                <td className="border-t border-brand-100/60 bg-brand-50 px-6 py-5 font-semibold text-gray-900"><div className="flex gap-x-3"><svg aria-hidden="true" className="mt-0.5 size-5 flex-none text-brand-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /> </svg><span>Звонки, Telegram, MAX, WhatsApp, email, чат на сайте</span></div></td>
              </tr>
              <tr>
                <th scope="row" className="border-t border-gray-900/10 py-5 pr-4 font-semibold text-gray-900">Главный вопрос</th>
                <td className="border-t border-gray-900/10 px-6 py-5 text-gray-600">Соблюдён ли скрипт?</td>
                <td className="border-t border-brand-100/60 bg-brand-50 px-6 py-5 font-semibold text-gray-900"><div className="flex gap-x-3"><svg aria-hidden="true" className="mt-0.5 size-5 flex-none text-brand-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /> </svg><span>Что делали менеджеры в сделках, которые закрылись?</span></div></td>
              </tr>
              <tr>
                <th scope="row" className="border-t border-gray-900/10 py-5 pr-4 font-semibold text-gray-900">Точка отсчёта</th>
                <td className="border-t border-gray-900/10 px-6 py-5 text-gray-600">Чек-лист, который вы написали</td>
                <td className="border-t border-brand-100/60 bg-brand-50 px-6 py-5 font-semibold text-gray-900"><div className="flex gap-x-3"><svg aria-hidden="true" className="mt-0.5 size-5 flex-none text-brand-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /> </svg><span>Итог сделки в CRM: продажа, отказ, потеря, следующий этап</span></div></td>
              </tr>
              <tr>
                <th scope="row" className="border-t border-gray-900/10 py-5 pr-4 font-semibold text-gray-900">Результат</th>
                <td className="border-t border-gray-900/10 px-6 py-5 text-gray-600">Оценка менеджера в баллах</td>
                <td className="border-t border-brand-100/60 bg-brand-50 px-6 py-5 font-semibold text-gray-900"><div className="flex gap-x-3"><svg aria-hidden="true" className="mt-0.5 size-5 flex-none text-brand-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /> </svg><span>База знаний продаж и рекомендации под каждую ситуацию</span></div></td>
              </tr>
              <tr>
                <th scope="row" className="border-t border-gray-900/10 py-5 pr-4 font-semibold text-gray-900">Что дальше</th>
                <td className="border-t border-gray-900/10 px-6 py-5 text-gray-600">Обучение по итогам проверки</td>
                <td className="rounded-b-2xl border-t border-brand-100/60 bg-brand-50 px-6 py-5 font-semibold text-gray-900"><div className="flex gap-x-3"><svg aria-hidden="true" className="mt-0.5 size-5 flex-none text-brand-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /> </svg><span>Передача проверенных сценариев ИИ‑агентам</span></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
