import type { PeriodId } from '@/shared/components/dashboard/types'
import { PERIODS } from '@/shared/components/dashboard/data'
import { IconCalendar } from './icons'

export function Card({
  title,
  description,
  children,
  className = '',
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-2xl border border-gray-200 bg-white p-5 ${className}`}>
      <header className="mb-4">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        {description ? <p className="mt-1 text-sm text-gray-500">{description}</p> : null}
      </header>
      {children}
    </section>
  )
}

export function PeriodBar({
  period,
  onChange,
  customFrom,
  customTo,
  onCustomChange,
  interactive = true,
}: {
  period: PeriodId
  onChange: (id: PeriodId) => void
  customFrom: string
  customTo: string
  onCustomChange: (from: string, to: string) => void
  interactive?: boolean
}) {
  return (
    <div className={`flex items-center gap-2 ${interactive ? 'flex-wrap' : 'flex-nowrap overflow-hidden'}`}>
      {PERIODS.filter((item) => interactive || item.id !== 'custom').map((item) => {
        const active = period === item.id
        const className = `inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm ${
          active ? 'bg-brand-50 font-medium text-brand-800' : 'text-gray-500'
        } ${interactive ? 'transition-colors hover:bg-gray-50 hover:text-gray-800' : 'cursor-default'}`
        if (!interactive) {
          return (
            <span key={item.id} className={className} aria-current={active ? true : undefined}>
              {item.id === 'custom' ? <IconCalendar className="h-3.5 w-3.5" /> : null}
              {item.label}
            </span>
          )
        }
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={className}
          >
            {item.id === 'custom' ? <IconCalendar className="h-3.5 w-3.5" /> : null}
            {item.label}
          </button>
        )
      })}
      {interactive && period === 'custom' ? (
        <div className="flex items-center gap-2 pl-1">
          <input
            type="date"
            value={customFrom}
            onChange={(e) => onCustomChange(e.target.value, customTo)}
            className="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-700"
          />
          <span className="text-sm text-gray-400">—</span>
          <input
            type="date"
            value={customTo}
            onChange={(e) => onCustomChange(customFrom, e.target.value)}
            className="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-700"
          />
        </div>
      ) : null}
    </div>
  )
}

const TAG_TONES: Record<string, string> = {
  встроенная: 'bg-gray-100 text-gray-700',
  считается: 'bg-brand-50 text-brand-800',
  метрика: 'bg-sky-50 text-sky-700',
  характеристика: 'bg-white text-gray-600 ring-1 ring-gray-200',
  LLM: 'bg-amber-50 text-amber-700',
  'на реплику': 'bg-red-50 text-red-600',
}

export function Tag({ children }: { children: React.ReactNode }) {
  const key = typeof children === 'string' ? children : ''
  const tone = TAG_TONES[key] ?? 'bg-gray-100 text-gray-500'
  return (
    <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${tone}`}>
      {children}
    </span>
  )
}
