'use client'

import { useState } from 'react'

function formatGain(leads: string, check: string) {
  const l = parseFloat(leads)
  const c = parseFloat(check)
  return l > 0 && c > 0 ? `${Math.round(l * c * 0.01).toLocaleString('ru-RU')} ₽/мес` : '— ₽/мес'
}

export function Calculator() {
  const [leads, setLeads] = useState('500')
  const [check, setCheck] = useState('100000')
  const result = formatGain(leads, check)

  return (
    <div className="mx-auto mt-6 max-w-lg rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-900/10 sm:p-10 lg:max-w-4xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <svg aria-hidden="true" className="size-8 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" /> </svg>
          <p className="mt-3 text-xl font-bold tracking-tight text-gray-900">Сравните не с ценой расшифровки, а с тем, что есть сейчас</p>
          <p className="mt-3 text-sm/6 text-gray-600">Время РОПа на прослушку, зарплата сотрудника контроля качества и выручка от +1 п. п. конверсии.</p>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-leads" className="block text-sm/6 font-semibold text-gray-900">Заявок в месяц</label>
              <input id="calc-leads" type="number" min="0" inputMode="numeric" value={leads} onChange={(e) => setLeads(e.target.value)} className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 tabular-nums outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600" />
            </div>
            <div>
              <label htmlFor="calc-check" className="block text-sm/6 font-semibold text-gray-900">Средний чек, ₽</label>
              <input id="calc-check" type="number" min="0" inputMode="numeric" value={check} onChange={(e) => setCheck(e.target.value)} className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 tabular-nums outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600" />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-gray-900/10 pt-5">
            <span className="text-sm/6 font-semibold text-gray-900">+1 п. п. конверсии =</span>
            <span id="calc-out" aria-live="polite" className="text-3xl font-bold tracking-tight text-gray-900 tabular-nums">{result}</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Пример — подставьте свои цифры.</p>
        </div>
      </div>
    </div>
  )
}
