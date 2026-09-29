'use client'

import { useState } from 'react'
import { DashboardPreview } from '@/shared/components/dashboard/components/DashboardPreview'
import { InboxPreview } from '@/shared/components/dashboard/components/InboxPreview'
import type { EmbeddedSlideId, WidgetId } from '@/shared/components/dashboard/types'

const SLIDES: Array<{
  id: EmbeddedSlideId | 'inbox'
  ids: WidgetId[]
  label: string
  caption: string
}> = [
  {
    id: 'overview',
    ids: ['overview', 'weekly'],
    label: 'Обзор отдела',
    caption: 'Ключевые числа и то, как скрипт со следующим шагом меняются от недели к неделе.',
  },
  {
    id: 'team',
    ids: ['managers', 'calls'],
    label: 'Команда и звонки',
    caption: 'Кто тянет отдел и какие разговоры уже разобраны.',
  },
  {
    id: 'inbox',
    ids: [],
    label: 'Чаты',
    caption: 'Все мессенджеры в одном окне: AI‑агент отвечает, менеджер подключается, когда нужно.',
  },
  {
    id: 'characteristics',
    ids: [],
    label: 'Характеристики',
    caption: 'Какие метрики считаются и что отдел учитывает в оценке разговора.',
  },
]

function Arrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const prev = direction === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? 'Предыдущий экран дашборда' : 'Следующий экран дашборда'}
      className="hidden shrink-0 text-gray-400 transition-colors hover:text-gray-900 sm:block"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points={prev ? '14.5 5 7.5 12 14.5 19' : '9.5 5 16.5 12 9.5 19'} />
      </svg>
    </button>
  )
}

export function HeroDashboard() {
  const [active, setActive] = useState(0)
  const step = (delta: number) => setActive((i) => (i + delta + SLIDES.length) % SLIDES.length)
  const slide = SLIDES[active]

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full items-center justify-center gap-2 sm:gap-5">
        <Arrow direction="prev" onClick={() => step(-1)} />

        <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-white text-left shadow-2xl ring-1 ring-gray-900/5">
          {slide.id === 'inbox' ? (
            <InboxPreview />
          ) : (
            <DashboardPreview slide={slide.id} widgets={slide.ids} />
          )}
          {slide.id !== 'inbox' ? (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-3 right-1.5 w-1.5 rounded-full bg-gray-50"
              >
                <div className="h-[30%] w-full rounded-full bg-gray-200" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
              />
            </>
          ) : null}
        </div>

        <Arrow direction="next" onClick={() => step(1)} />
      </div>

      <div className="flex items-center gap-3">
        {SLIDES.map((item, idx) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={item.label}
            aria-current={active === idx ? true : undefined}
            className={`h-2.5 rounded-full transition-all ${
              active === idx ? 'w-7 bg-brand-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <p className="text-center text-sm text-gray-500">
        <span className="font-semibold text-gray-700">{slide.label}.</span> {slide.caption}
      </p>
    </div>
  )
}
