'use client'

import { useState, type FormEvent } from 'react'

// Адрес обработчика заявок (вебхук CRM, Telegram-бот или свой API).
// Пока пусто, форма ничего не отправляет и только показывает подтверждение.
const AUDIT_ENDPOINT = process.env.NEXT_PUBLIC_AUDIT_ENDPOINT ?? ''

export function AuditForm() {
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setSending(true)
    try {
      if (AUDIT_ENDPOINT) {
        const res = await fetch(AUDIT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
      }
      setDone(true)
      form.reset()
    } catch {
      alert('Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form id="audit-form" onSubmit={handleSubmit} className="px-6 pt-4 pb-24 sm:pb-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 sm:p-10 lg:mr-0 lg:max-w-lg">
        <p className="text-xl font-bold text-gray-900">Получить разбор продаж</p>
        <div className="mt-6 grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">Имя</label>
            <div className="mt-2.5"><input id="name" type="text" name="name" autoComplete="given-name" required placeholder="Как к вам обращаться" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600" /></div>
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm/6 font-semibold text-gray-900">Телефон или Telegram</label>
            <div className="mt-2.5"><input id="contact" type="text" name="contact" required placeholder="+7 … или @username" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600" /></div>
          </div>
          <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900">Сколько менеджеров в отделе?</legend>
            <div className="mt-2.5 grid grid-cols-4 gap-2">
              <label className="flex cursor-pointer items-center justify-center rounded-full px-2 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 has-checked:bg-gray-950 has-checked:text-white has-checked:ring-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-brand-600"><input type="radio" name="team" value="до 10" className="sr-only" />до 10</label>
              <label className="flex cursor-pointer items-center justify-center rounded-full px-2 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 has-checked:bg-gray-950 has-checked:text-white has-checked:ring-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-brand-600"><input type="radio" name="team" value="10–30" className="sr-only" defaultChecked />10–30</label>
              <label className="flex cursor-pointer items-center justify-center rounded-full px-2 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 has-checked:bg-gray-950 has-checked:text-white has-checked:ring-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-brand-600"><input type="radio" name="team" value="30–100" className="sr-only" />30–100</label>
              <label className="flex cursor-pointer items-center justify-center rounded-full px-2 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 has-checked:bg-gray-950 has-checked:text-white has-checked:ring-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-brand-600"><input type="radio" name="team" value="100+" className="sr-only" />100+</label>
            </div>
          </fieldset>
          <div>
            <label htmlFor="crm" className="block text-sm/6 font-semibold text-gray-900">Где ведёте сделки?</label>
            <div className="mt-2.5 grid grid-cols-1">
              <select id="crm" name="crm" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600">
                <option>amoCRM</option>
                <option>Битрикс24</option>
                <option>Другая CRM</option>
                <option>Нет CRM</option>
              </select>
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-3 size-4 self-center justify-self-end text-gray-500"><path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" /></svg>
            </div>
          </div>
        </div>
        <button type="submit" disabled={sending} className="mt-8 w-full rounded-full bg-gray-950 disabled:opacity-60 px-3.5 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950">Получить разбор продаж</button>
        <p className="mt-3 text-center text-sm text-gray-500">Бесплатно · NDA по запросу</p>
        {done && (<p role="status" className="mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">Заявка принята. Свяжемся с вами, чтобы договориться о разборе.</p>)}
      </div>
    </form>
  )
}
