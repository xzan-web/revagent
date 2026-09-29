export type TabId =
  | 'dashboard'
  | 'calls'
  | 'chats'
  | 'views'
  | 'characteristics'
  | 'settings'

export type EmbeddedSlideId = 'overview' | 'team' | 'characteristics'

export type PeriodId =
  | 'this-week'
  | 'last-week'
  | '30d'
  | 'this-month'
  | 'all'
  | 'custom'

export type CallStatus = 'analyzed' | 'queued' | 'error'

export type CallType =
  | 'Контрольный звонок'
  | 'Закрытие'
  | 'Онбординг'
  | 'Работа с возражениями'
  | 'Первый контакт'

export interface CallRecord {
  id: string
  date: string
  employee: string | null
  client: string
  company: string
  durationSec: number | null
  replies: number | null
  score: number | null
  type: CallType | null
  status: CallStatus
  talkShare: number | null
  nextStep: boolean | null
  scriptCompliance: number | null
  fileName: string
  summary: string
}

export interface ManagerRow {
  employee: string
  conversations: number
  score: number
  script: number
  talkShare: number
  nextStep: number
}

export interface WeekPoint {
  label: string
  calls: number
  script: number
  nextStep: number
}

export interface PeriodStats {
  conversations: number
  score: number
  script: number
  talkShare: number
  managers: ManagerRow[]
  weeks: WeekPoint[]
}

export type WidgetId = 'overview' | 'weekly' | 'managers' | 'calls'

export interface Characteristic {
  id: string
  name: string
  key: string
  description: string
  folder: 'default' | 'mine' | 'pipeline'
  tags: string[]
  norm: string
  weight: number | null
  enabled: boolean
  builtin: boolean
}
