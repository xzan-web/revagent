import { CharacteristicsTab } from '@/shared/components/dashboard/components/CharacteristicsTab'
import { DashboardTab } from '@/shared/components/dashboard/components/DashboardTab'
import { PeriodBar } from '@/shared/components/dashboard/components/ui'
import {
  IconBars,
  IconGear,
  IconMenu,
  IconMic,
  IconMonitor,
  IconPhone,
  IconSend,
  IconWrench,
} from '@/shared/components/dashboard/components/icons'
import { INITIAL_CALLS, INITIAL_CHARACTERISTICS, TABS } from '@/shared/components/dashboard/data'
import { filterCallsByPeriod, getPeriodStats } from '@/shared/components/dashboard/lib'
import type { EmbeddedSlideId, TabId, WidgetId } from '@/shared/components/dashboard/types'

// Только внешний вид дашборда для hero: без состояния, клики внутри отключены (inert)

const RAIL = [IconMic, IconPhone, IconBars, IconMonitor, IconSend, IconWrench, IconGear]
const ACTIVE_RAIL = 2

const SLIDE_TAB: Record<EmbeddedSlideId, TabId> = {
  overview: 'dashboard',
  team: 'calls',
  characteristics: 'characteristics',
}

const PERIOD = 'this-week'
const stats = getPeriodStats(PERIOD, '', '')
const calls = filterCallsByPeriod(INITIAL_CALLS, PERIOD, '', '')
const noop = () => {}

interface DashboardPreviewProps {
  slide: EmbeddedSlideId
  widgets: WidgetId[]
}

export function DashboardPreview({ slide, widgets }: DashboardPreviewProps) {
  const isCharacteristics = slide === 'characteristics'

  return (
    <div inert className="relative flex bg-white text-gray-900 select-none">
      <nav aria-hidden="true" className="hidden w-14 shrink-0 flex-col items-center gap-1 self-stretch border-r border-gray-100 bg-gray-50/60 py-3 sm:flex">
        <span className="mb-2 text-gray-400">
          <IconMenu className="h-5 w-5" />
        </span>
        {RAIL.map((Icon, index) => (
          <span
            key={index}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              index === ACTIVE_RAIL ? 'bg-brand-600 text-white' : 'text-gray-400'
            }`}
          >
            <Icon className="h-5 w-5" />
          </span>
        ))}
      </nav>

      <div className="min-w-0 flex-1">
        <header className="px-3 pt-3 pb-1 sm:px-5 sm:pt-4">
          <p className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">Аналитика разговоров</p>
          <div className="mt-3 flex gap-3 overflow-x-auto border-b border-gray-100 sm:mt-4 sm:gap-5">
            {TABS.map((item) => (
              <span
                key={item.id}
                className={`-mb-px border-b-2 pb-2.5 text-xs whitespace-nowrap sm:text-sm ${
                  SLIDE_TAB[slide] === item.id
                    ? 'border-brand-600 font-medium text-brand-700'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
          {!isCharacteristics ? (
            <p className="hidden pt-3 text-sm text-gray-400 sm:block">
              Что показывают разобранные звонки отдела.
            </p>
          ) : null}
        </header>

        {!isCharacteristics ? (
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 sm:px-5">
            <PeriodBar period={PERIOD} onChange={noop} customFrom="" customTo="" onCustomChange={noop} interactive={false} />
          </div>
        ) : null}

        <main className="px-3 pb-4 sm:px-5 sm:pb-5">
          {isCharacteristics ? (
            <CharacteristicsTab
              items={INITIAL_CHARACTERISTICS}
              folder="default"
              onFolder={noop}
              onToggle={noop}
              onDelete={noop}
              onAdd={noop}
              compact
            />
          ) : (
            <DashboardTab widgets={widgets} stats={stats} calls={calls} onSelectEmployee={noop} onOpenCall={noop} />
          )}
        </main>
      </div>
    </div>
  )
}
