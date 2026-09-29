import { Card } from '@/shared/components/dashboard/components/ui'
import { WeeklyChart } from '@/shared/components/dashboard/components/WeeklyChart'
import { formatDateTime, formatPct, SCORE_NORM, SCRIPT_NORM, TALK_SHARE_NORM, yesNo } from '@/shared/components/dashboard/data'
import type { CallRecord, PeriodStats, WidgetId } from '@/shared/components/dashboard/types'

function Overview({ stats }: { stats: PeriodStats }) {
  const items = [
    {
      label: 'Звонки',
      value: String(stats.conversations),
      note: null,
      ok: true,
    },
    {
      label: 'Средний балл',
      value: stats.score.toFixed(1),
      note: `норма от ${SCORE_NORM}`,
      ok: stats.score >= SCORE_NORM,
    },
    {
      label: 'Соблюдение скрипта',
      value: formatPct(stats.script),
      note: `норма от ${SCRIPT_NORM}%`,
      ok: stats.script >= SCRIPT_NORM,
    },
    {
      label: 'Доля речи оператора',
      value: formatPct(stats.talkShare),
      note: `норма до ${TALK_SHARE_NORM}%`,
      ok: stats.talkShare <= TALK_SHARE_NORM,
    },
  ]

  return (
    <Card
      title="Обзор отдела"
      description="Ключевые числа отдела за период: сколько разобрано, средний балл, соблюдение скрипта и доля речи."
    >
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-xl border border-gray-100 bg-white px-3 py-3 sm:px-5 sm:py-5 ${
              item.ok ? '' : 'border-l-2 border-l-red-500'
            }`}
          >
            <p className="text-xs text-gray-500 sm:text-sm">{item.label}</p>
            <p
              className={`mt-1 text-2xl font-semibold tracking-tight sm:mt-2 sm:text-3xl ${
                item.ok ? 'text-gray-900' : 'text-red-500'
              }`}
            >
              {item.value}
            </p>
            {item.note ? <p className="mt-1 text-xs text-gray-500 sm:text-sm">{item.note}</p> : null}
          </div>
        ))}
      </div>
    </Card>
  )
}

function Managers({
  stats,
  onSelectEmployee,
}: {
  stats: PeriodStats
  onSelectEmployee: (employee: string) => void
}) {
  return (
    <Card
      title="Сравнение менеджеров"
      description="Строка на сотрудника: сколько звонков, как соблюдает скрипт, сколько говорит и как часто фиксирует следующий шаг."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500">
              <th className="py-2 pr-3 font-medium">Исполнитель</th>
              <th className="py-2 pr-3 font-medium">Звонки</th>
              <th className="py-2 pr-3 font-medium">Балл</th>
              <th className="py-2 pr-3 font-medium">Скрипт</th>
              <th className="py-2 pr-3 font-medium">Доля речи</th>
              <th className="py-2 font-medium">След. шаг</th>
            </tr>
          </thead>
          <tbody>
            {stats.managers.map((row) => (
              <tr
                key={row.employee}
                className="cursor-pointer border-b border-gray-50 last:border-0 hover:bg-gray-50"
                onClick={() => onSelectEmployee(row.employee)}
              >
                <td className="py-2.5 pr-3 font-medium text-gray-900">{row.employee}</td>
                <td className="py-2.5 pr-3 text-gray-700">{row.conversations}</td>
                <td className={`py-2.5 pr-3 ${row.score < SCORE_NORM ? 'text-red-500' : 'text-gray-700'}`}>
                  {row.score.toFixed(1)}
                </td>
                <td className={`py-2.5 pr-3 ${row.script < SCRIPT_NORM ? 'text-red-500' : 'text-gray-700'}`}>
                  {formatPct(row.script)}
                </td>
                <td className={`py-2.5 pr-3 ${row.talkShare > TALK_SHARE_NORM ? 'text-red-500' : 'text-gray-700'}`}>
                  {formatPct(row.talkShare)}
                </td>
                <td className="py-2.5 text-gray-700">{formatPct(row.nextStep)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function RecentCalls({
  calls,
  onOpen,
}: {
  calls: CallRecord[]
  onOpen: (id: string) => void
}) {
  const rows = calls.filter((c) => c.status === 'analyzed').slice(0, 6)
  return (
    <Card title="Звонки" description="Список разговоров: кто, когда, тип звонка, балл и доля речи.">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500">
              <th className="py-2 pr-3 font-medium">Исполнитель</th>
              <th className="py-2 pr-3 font-medium">Дата</th>
              <th className="py-2 pr-3 font-medium">Клиент</th>
              <th className="py-2 pr-3 font-medium">Тип звонка</th>
              <th className="py-2 pr-3 font-medium">Балл</th>
              <th className="py-2 pr-3 font-medium">Доля речи</th>
              <th className="py-2 font-medium">След. шаг</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((call) => {
              const { date, time } = formatDateTime(call.date)
              return (
                <tr
                  key={call.id}
                  className="cursor-pointer border-b border-gray-50 last:border-0 hover:bg-gray-50"
                  onClick={() => onOpen(call.id)}
                >
                  <td className="py-2.5 pr-3 text-gray-900">{call.employee ?? '—'}</td>
                  <td className="py-2.5 pr-3 whitespace-nowrap text-gray-600">
                    {date} {time}
                  </td>
                  <td className="py-2.5 pr-3 text-gray-900">{call.client}</td>
                  <td className="py-2.5 pr-3 text-gray-600">{call.type ?? '—'}</td>
                  <td className={`py-2.5 pr-3 ${(call.score ?? 0) < SCORE_NORM ? 'text-red-500' : 'text-gray-700'}`}>
                    {call.score ?? '—'}
                  </td>
                  <td className="py-2.5 pr-3 text-gray-700">
                    {call.talkShare != null ? formatPct(call.talkShare) : '—'}
                  </td>
                  <td className="py-2.5 text-gray-700">{yesNo(call.nextStep)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export function DashboardTab({
  widgets,
  stats,
  calls,
  onSelectEmployee,
  onOpenCall,
}: {
  widgets: WidgetId[]
  stats: PeriodStats
  calls: CallRecord[]
  onSelectEmployee: (employee: string) => void
  onOpenCall: (id: string) => void
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 [&>section>header>p]:hidden sm:[&>section>header>p]:block ${widgets.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {widgets.map((id) => {
        if (id === 'overview') return <Overview key={id} stats={stats} />
        if (id === 'weekly') {
          return (
            <Card
              key={id}
              title="Динамика по неделям"
              description="Как меняются соблюдение скрипта и назначение следующего шага от недели к неделе."
            >
              <WeeklyChart weeks={stats.weeks} />
            </Card>
          )
        }
        if (id === 'managers') {
          return <Managers key={id} stats={stats} onSelectEmployee={onSelectEmployee} />
        }
        return <RecentCalls key={id} calls={calls} onOpen={onOpenCall} />
      })}
      {widgets.length === 0 ? (
        <p className="col-span-full rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center text-sm text-gray-500">
          На дашборде нет представлений. Нажмите «Добавить представление».
        </p>
      ) : null}
    </div>
  )
}
