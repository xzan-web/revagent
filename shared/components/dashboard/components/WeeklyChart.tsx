import type { WeekPoint } from '@/shared/components/dashboard/types'

const SERIES = [
  { key: 'calls' as const, label: 'Звонков', color: '#1EBCA4', dot: 'bg-brand-500' },
  { key: 'script' as const, label: 'Соблюдение скрипта', color: '#183A34', dot: 'bg-gray-700' },
  { key: 'nextStep' as const, label: 'Следующий шаг', color: '#FBBF24', dot: 'bg-amber-400' },
]

export function WeeklyChart({ weeks }: { weeks: WeekPoint[] }) {
  const width = 560
  const height = 220
  const pad = { top: 16, right: 24, bottom: 32, left: 36 }
  const innerW = width - pad.left - pad.right
  const innerH = height - pad.top - pad.bottom
  const maxY = 100

  const x = (i: number) =>
    pad.left + (weeks.length === 1 ? innerW / 2 : (i * innerW) / (weeks.length - 1))
  const y = (v: number) => pad.top + innerH - (v / maxY) * innerH

  const path = (key: (typeof SERIES)[number]['key']) =>
    weeks
      .map((point, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(point[key]).toFixed(1)}`)
      .join(' ')

  return (
    <div>
      <div className="mb-3 flex flex-nowrap items-center gap-3 overflow-hidden text-xs text-gray-500">
        {SERIES.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${s.dot}`} />
            {s.label}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-56 w-full" role="img" aria-label="Динамика по неделям">
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick}>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="#f3f4f6"
            />
            <text x={pad.left - 8} y={y(tick) + 4} textAnchor="end" className="fill-gray-400" fontSize="10">
              {tick}
            </text>
          </g>
        ))}
        {SERIES.map((s) => (
          <g key={s.key}>
            <path d={path(s.key)} fill="none" stroke={s.color} strokeWidth="2.2" />
            {weeks.map((point, i) => (
              <circle key={`${s.key}-${point.label}`} cx={x(i)} cy={y(point[s.key])} r="3.2" fill={s.color} />
            ))}
          </g>
        ))}
        {weeks.map((point, i) => (
          <text
            key={point.label}
            x={x(i)}
            y={height - 8}
            textAnchor="middle"
            className="fill-gray-400"
            fontSize="10"
          >
            {point.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
