'use client'

import { useSyncExternalStore } from 'react'

// Уведомление о cookie (Яндекс Метрика, виджет Битрикс24). Закрытие уведомления — согласие по п. 11.9 политики.
const STORAGE_KEY = 'sb-cookie-notice'
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function isAccepted() {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY))
  } catch {
    return false
  }
}

function accept() {
  try {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString())
  } catch {}
  listeners.forEach((listener) => listener())
}

export function CookieNotice() {
  // На сервере уведомление не рендерим — показываем после гидратации, если согласия ещё нет
  const visible = !useSyncExternalStore(subscribe, isAccepted, () => true)

  if (!visible) return null

  return (
    <div role="region" aria-label="Уведомление о cookie" className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-gray-950 px-5 py-4 text-sm/6 text-on-dark shadow-xl ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1">
          Мы используем cookie-файлы и Яндекс Метрику, чтобы анализировать посещаемость и улучшать сайт. Продолжая пользоваться сайтом, вы соглашаетесь с их обработкой на условиях{' '}
          <a href="/privacy/" className="font-semibold text-brand-400 underline underline-offset-4 hover:text-brand-100">политики обработки персональных данных</a>.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-gray-950 hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
        >
          Понятно
        </button>
      </div>
    </div>
  )
}
