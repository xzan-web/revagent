import { PERIOD_STATS } from './data'
import type {
  CallRecord,
  PeriodId,
  PeriodStats,
} from './types'

const WEEK_MS = 7 * 24 * 60 * 60 * 1000

export function startOfWeek(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

export function periodRange(
  period: PeriodId,
  customFrom: string,
  customTo: string,
  now = new Date('2026-09-18T16:00:00'),
): { from: Date; to: Date } | null {
  const to = new Date(now)
  to.setHours(23, 59, 59, 999)

  if (period === 'all') return null

  if (period === 'custom') {
    if (!customFrom || !customTo) return null
    const from = new Date(`${customFrom}T00:00:00`)
    const end = new Date(`${customTo}T23:59:59`)
    return { from, to: end }
  }

  if (period === 'this-week') {
    return { from: startOfWeek(now), to }
  }

  if (period === 'last-week') {
    const thisWeek = startOfWeek(now)
    const from = new Date(thisWeek.getTime() - WEEK_MS)
    const end = new Date(thisWeek.getTime() - 1)
    return { from, to: end }
  }

  if (period === 'this-month') {
    const from = new Date(now.getFullYear(), now.getMonth(), 1)
    return { from, to }
  }

  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  from.setHours(0, 0, 0, 0)
  return { from, to }
}

export function filterCallsByPeriod(
  calls: CallRecord[],
  period: PeriodId,
  customFrom: string,
  customTo: string,
): CallRecord[] {
  const range = periodRange(period, customFrom, customTo)
  if (!range) return calls
  return calls.filter((call) => {
    const t = new Date(call.date).getTime()
    return t >= range.from.getTime() && t <= range.to.getTime()
  })
}

export function getPeriodStats(
  period: PeriodId,
  customFrom: string,
  customTo: string,
): PeriodStats {
  if (period === 'custom') {
    if (!customFrom || !customTo) return PERIOD_STATS['this-week']
    const days =
      (new Date(customTo).getTime() - new Date(customFrom).getTime()) /
      (24 * 60 * 60 * 1000)
    if (days <= 7) return PERIOD_STATS['this-week']
    if (days <= 14) return PERIOD_STATS['last-week']
    if (days <= 31) return PERIOD_STATS['this-month']
    return PERIOD_STATS['30d']
  }
  return PERIOD_STATS[period]
}
