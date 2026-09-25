import { Calculator } from '@/features/home/components/Calculator'

export function Pricing() {
  return (
    <section id="pricing" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div className="[clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)] mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#70D5C6] to-[#D9F2EE] opacity-30"></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-brand-700">Цены</h2>
        <p className="mt-5 text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">Начните с анализа. ИИ-агентов добавляйте постепенно</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Платите только за нужные каналы и объём. Внедрение без доплаты.</p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
          <h3 id="tier-analysis" className="text-base/7 font-semibold text-brand-700">Мониторинг и анализ</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900 tabular-nums">150 000 ₽</span>
            <span className="text-base text-gray-500">/мес</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-600">Все каналы, связь с итогами сделок, база знаний продаж и рекомендации менеджерам.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-600"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>30 000 диалогов или минут включено — 5 ₽ за единицу</li>
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-600"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Сверх пакета — от 5 ₽ за диалог или минуту</li>
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-600"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Внедрение без доплаты</li>
          </ul>
          <a href="#audit" aria-describedby="tier-analysis" className="mt-8 block rounded-full bg-gray-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-700 sm:mt-10">Начать с разбора</a>
        </div>
        <div className="relative rounded-3xl bg-gray-700 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
          <h3 id="tier-agent" className="text-base/7 font-semibold text-brand-400">ИИ-агент и оптимизация</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-white tabular-nums">+100 000 ₽</span>
            <span className="text-base text-gray-400">/мес за агента</span>
          </p>
          <p className="mt-6 text-base/7 text-on-dark/80">Агент работает по сценариям, которые доказали результат в ваших сделках.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm/6 text-on-dark/80 sm:mt-10">
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>5 000 диалогов или минут включено</li>
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Сверх пакета — от 5 ₽</li>
            <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Долю агента в продажах наращиваем постепенно</li>
          </ul>
          <a href="#final" aria-describedby="tier-agent" className="mt-8 block rounded-full bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-950 shadow-xs hover:bg-gray-100 sm:mt-10">Обсудить внедрение</a>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-4 lg:max-w-4xl lg:grid-cols-2">
        <div className="flex items-center justify-between gap-6 rounded-2xl p-6 ring-1 ring-gray-900/10">
          <div className="flex items-start gap-x-3"><svg aria-hidden="true" className="size-6 flex-none text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /> </svg><div><p className="text-sm/6 font-semibold text-gray-900">Единое рабочее место операторов чатов</p><p className="text-sm/6 text-gray-500">30 рабочих мест включено</p></div></div>
          <p className="text-lg font-bold whitespace-nowrap text-gray-900 tabular-nums">50 000 ₽/мес</p>
        </div>
        <div className="flex items-center justify-between gap-6 rounded-2xl p-6 ring-1 ring-gray-900/10">
          <div className="flex items-start gap-x-3"><svg aria-hidden="true" className="size-6 flex-none text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /> </svg><p className="text-sm/6 font-semibold text-gray-900">Подключение личного аккаунта менеджера в мессенджере</p></div>
          <p className="text-lg font-bold whitespace-nowrap text-gray-900 tabular-nums">2 000 ₽/мес</p>
        </div>
      </div>

      <Calculator />
      <p className="mt-8 text-center text-sm text-gray-600">Можно начать с одного канала и расширяться постепенно.</p>
    </section>
  )
}
