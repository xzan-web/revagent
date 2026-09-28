'use client'

import { useState } from 'react'

// Цена тарифа «Мониторинг и анализ», с которой сравниваем выгоду
const PLAN_PRICE = 150000

const rub = (n: number) => `${Math.round(n).toLocaleString('ru-RU')} ₽`
const deals = (n: number) => n.toLocaleString('ru-RU', { maximumFractionDigits: 1 })

export function Calculator() {
  const [leads, setLeads] = useState('500')
  const [check, setCheck] = useState('100000')

  const l = parseFloat(leads)
  const c = parseFloat(check)
  const valid = l > 0 && c > 0
  const extraDeals = valid ? l * 0.01 : 0
  const extraRevenue = extraDeals * (valid ? c : 0)
  const benefit = extraRevenue - PLAN_PRICE
  const payback = extraRevenue / PLAN_PRICE

  const inputStyles = 'mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 tabular-nums outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600'
  const rowStyles = 'flex items-baseline justify-between gap-4 py-2.5 text-sm/6'

  return (
    <div className="mx-auto mt-6 max-w-lg rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-900/10 sm:p-10 lg:max-w-4xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <svg aria-hidden="true" className="size-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" /> </svg>
          <p className="mt-3 text-xl font-bold tracking-tight text-gray-900">Посчитайте свою выгоду</p>
          <p className="mt-3 text-sm/6 text-gray-600">Сколько принесёт даже небольшой рост продаж и окупит ли он тариф.</p>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-leads" className="block text-sm/6 font-semibold text-gray-900">Заявок в месяц</label>
              <input id="calc-leads" type="number" min="0" inputMode="numeric" value={leads} onChange={(e) => setLeads(e.target.value)} className={inputStyles} />
            </div>
            <div>
              <label htmlFor="calc-check" className="block text-sm/6 font-semibold text-gray-900">Средний чек, ₽</label>
              <input id="calc-check" type="number" min="0" inputMode="numeric" value={check} onChange={(e) => setCheck(e.target.value)} className={inputStyles} />
            </div>
          </div>

          <dl aria-live="polite" className="mt-6 divide-y divide-gray-900/10 border-t border-gray-900/10">
            <div className={rowStyles}>
              <dt className="text-gray-600">Дополнительные продажи <span className="text-gray-500">(1% от заявок)</span></dt>
              <dd className="font-semibold text-gray-900 tabular-nums">{valid ? `+${deals(extraDeals)} в мес` : '—'}</dd>
            </div>
            <div className={rowStyles}>
              <dt className="text-gray-600">Дополнительная выручка</dt>
              <dd className="font-semibold text-gray-900 tabular-nums">{valid ? `${rub(extraRevenue)}/мес` : '—'}</dd>
            </div>
            <div className={rowStyles}>
              <dt className="text-gray-600">Тариф «Мониторинг и анализ»</dt>
              <dd className="font-semibold text-gray-900 tabular-nums">−{rub(PLAN_PRICE)}/мес</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-4">
              <dt className="text-xl font-bold tracking-tight text-gray-900">Ваша выгода</dt>
              <dd id="calc-out" className={`text-3xl font-bold tracking-tight tabular-nums ${valid && benefit < 0 ? 'text-gray-500' : 'text-gray-900'}`}>{valid ? `${benefit < 0 ? '−' : ''}${rub(Math.abs(benefit))}/мес` : `— ₽/мес`}</dd>
            </div>
          </dl>
          <p className="mt-2 min-h-6 text-sm/6 font-semibold text-brand-700">
            {!valid ? '' : payback >= 1 ? `Тариф окупается в ${payback.toLocaleString('ru-RU', { maximumFractionDigits: 1 })} раза` : 'При таких цифрах этого мало, чтобы окупить тариф'}
          </p>
        </div>
      </div>
    </div>
  )
}
