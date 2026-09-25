export function HowItWorks() {
  return (
    <section id="how" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-brand-700">Как это работает</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">4 шага от первых данных до роста конверсии</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col">
            <p className="flex items-center text-sm/6 font-semibold text-brand-700">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none"><circle r="2" cx="2" cy="2" fill="currentColor" /></svg>
              Шаг 1
              <span aria-hidden="true" className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></span>
            </p>
            <div className="mt-6 flex size-10 items-center justify-center rounded-lg bg-brand-500"><svg aria-hidden="true" className="size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /> </svg></div>
            <p className="mt-4 text-lg/8 font-semibold tracking-tight text-gray-900">Подключаем каналы и CRM</p>
            <p className="mt-1 flex-auto text-base/7 text-gray-600">Звонки, Telegram, MAX, WhatsApp, email, чат на сайте и данные о сделках. Видим 100% диалогов, а не выборку.</p>
            <p className="mt-4 text-sm/6 font-semibold text-gray-900"><span aria-hidden="true" className="text-brand-500">→</span> Все разговоры и переписки в одном месте</p>
          </div>
          <div className="flex flex-col">
            <p className="flex items-center text-sm/6 font-semibold text-brand-700">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none"><circle r="2" cx="2" cy="2" fill="currentColor" /></svg>
              Шаг 2
              <span aria-hidden="true" className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></span>
            </p>
            <div className="mt-6 flex size-10 items-center justify-center rounded-lg bg-brand-500"><svg aria-hidden="true" className="size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /> </svg></div>
            <p className="mt-4 text-lg/8 font-semibold tracking-tight text-gray-900">Связываем диалоги с итогом сделки</p>
            <p className="mt-1 flex-auto text-base/7 text-gray-600">Для каждого диалога знаем, чем закончилась сделка: продажа, отказ, потеря или следующий этап.</p>
            <p className="mt-4 text-sm/6 font-semibold text-gray-900"><span aria-hidden="true" className="text-brand-500">→</span> Понятно, какие разговоры вели к оплате, а какие — нет</p>
          </div>
          <div className="flex flex-col">
            <p className="flex items-center text-sm/6 font-semibold text-brand-700">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none"><circle r="2" cx="2" cy="2" fill="currentColor" /></svg>
              Шаг 3
              <span aria-hidden="true" className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></span>
            </p>
            <div className="mt-6 flex size-10 items-center justify-center rounded-lg bg-brand-500"><svg aria-hidden="true" className="size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /> </svg></div>
            <p className="mt-4 text-lg/8 font-semibold tracking-tight text-gray-900">Находим приёмы, которые работают</p>
            <p className="mt-1 flex-auto text-base/7 text-gray-600">Сравниваем выигранные и проигранные сделки, ищем закономерности и собираем базу знаний продаж на реальных данных.</p>
            <p className="mt-4 text-sm/6 font-semibold text-gray-900"><span aria-hidden="true" className="text-brand-500">→</span> Список приёмов, которые повышают конверсию, и мест, где теряются клиенты</p>
          </div>
          <div className="flex flex-col">
            <p className="flex items-center text-sm/6 font-semibold text-brand-700">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none"><circle r="2" cx="2" cy="2" fill="currentColor" /></svg>
              Шаг 4
              <span aria-hidden="true" className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></span>
            </p>
            <div className="mt-6 flex size-10 items-center justify-center rounded-lg bg-brand-500"><svg aria-hidden="true" className="size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /> </svg></div>
            <p className="mt-4 text-lg/8 font-semibold tracking-tight text-gray-900">Внедряем и перепроверяем</p>
            <p className="mt-1 flex-auto text-base/7 text-gray-600">Даём менеджерам конкретные рекомендации или передаём проверенные процессы ИИ‑агентам. Затем снова сравниваем работу с результатом.</p>
            <p className="mt-4 text-sm/6 font-semibold text-gray-900"><span aria-hidden="true" className="text-brand-500">→</span> Каждый цикл опирается на фактическую конверсию</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start gap-y-3">
          <a href="#audit" className="inline-block rounded-full bg-gray-950 px-5 py-3 text-base font-semibold text-white shadow-xs hover:bg-gray-700">Получить разбор продаж</a>
          <p className="text-sm text-gray-500">30 минут на созвоне · Без оплаты</p>
        </div>
      </div>
    </section>
  )
}
