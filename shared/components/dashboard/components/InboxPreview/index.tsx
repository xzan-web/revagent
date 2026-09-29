// Витрина общего инбокса по всем каналам на демо-данных: только внешний вид, клики отключены (inert)

const paths = {
  chat: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z',
  search: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  pencil: 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Z',
  send: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',
  phone: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
  mail: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
  globe: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  code: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
  tag: 'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z M6 6h.008v.008H6V6Z',
  users: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  chart: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  megaphone: 'M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46',
  gear: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  lock: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z',
  reply: 'M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3',
  smile: 'M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z',
  clip: 'm18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13',
  mic: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z',
  sparkles: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z',
  chevron: 'm19.5 8.25-7.5 7.5-7.5-7.5',
}

type IconName = keyof typeof paths

function Icon({ name, className = 'size-4' }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name]} />
    </svg>
  )
}

const labels = [
  { label: 'горячий лид', dot: 'bg-brand-500' },
  { label: 'возражение: цена', dot: 'bg-amber-400' },
  { label: 'sla_просрочен', dot: 'bg-red-500' },
  { label: 'повторная продажа', dot: 'bg-sky-400' },
]

const sidebarChannels: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: 'code', label: 'Avito' },
  { icon: 'code', label: 'MAX' },
  { icon: 'send', label: 'Telegram', active: true },
  { icon: 'phone', label: 'WhatsApp' },
  { icon: 'globe', label: 'Чат на сайте' },
  { icon: 'mail', label: 'Email' },
]

const channels = {
  telegram: { icon: 'send', label: 'Telegram', count: 12 },
  whatsapp: { icon: 'phone', label: 'WhatsApp', count: 9 },
  max: { icon: 'chat', label: 'MAX', count: 7 },
  avito: { icon: 'tag', label: 'Avito', count: 6 },
  email: { icon: 'mail', label: 'Email', count: 4 },
  site: { icon: 'globe', label: 'Чат на сайте', count: 4 },
} satisfies Record<string, { icon: IconName; label: string; count: number }>

type ChannelId = keyof typeof channels
const TOTAL = Object.values(channels).reduce((sum, c) => sum + c.count, 0)


const conversations: { initials: string; name: string; text: string; time: string; channel: ChannelId; label: (typeof labels)[number]; avatar: string; active?: boolean; note?: boolean }[] = [
  { initials: 'ЕС', name: 'Евгений Соколов', text: 'Сколько стоит подключить WhatsApp?', time: '2 мин', channel: 'telegram', label: labels[0], avatar: 'bg-gray-100 text-gray-600', active: true },
  { initials: 'РА', name: 'Руслан Ахметов', text: 'Дорого, у конкурентов дешевле', time: '14 мин', channel: 'whatsapp', label: labels[1], avatar: 'bg-amber-50 text-amber-700' },
  { initials: 'АБ', name: 'Анна Белова', text: 'Товар ещё в наличии? Жду с утра…', time: '1 ч', channel: 'avito', label: labels[2], avatar: 'bg-red-50 text-red-600' },
  { initials: 'АО', name: 'Артур Оганесян', text: 'Спасибо, договор получил', time: '3 ч', channel: 'max', label: labels[3], avatar: 'bg-sky-50 text-sky-700' },
  { initials: 'ОМ', name: 'Ольга Миронова', text: 'Пришлите КП на почту', time: 'вчера', channel: 'email', label: labels[0], avatar: 'bg-brand-50 text-brand-800', note: true },
  { initials: 'ТВ', name: 'Татьяна Власова', text: 'Можно демо на следующей неделе?', time: 'вчера', channel: 'site', label: labels[0], avatar: 'bg-violet-50 text-violet-700' },
]

export function InboxPreview() {
  return (
    <div inert className="flex h-[584px] bg-white text-left text-gray-900 select-none">
      {/* Каналы и метки */}
      <aside className="hidden w-52 shrink-0 flex-col border-r border-gray-100 bg-gray-50/60 lg:flex">
        <div className="flex items-center gap-2 px-4 pt-4 pb-3">
          <span className="flex size-6 items-center justify-center rounded-md bg-gray-900 text-white"><Icon name="chat" className="size-3.5" /></span>
          <p className="text-sm font-semibold">Чаты</p>
        </div>
        <div className="mx-3 flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 text-xs text-gray-400 ring-1 ring-gray-900/10">
          <Icon name="search" className="size-3.5" />
          Поиск…
        </div>
        <p className="mt-4 px-4 text-xs font-medium text-gray-500">Каналы</p>
        <ul className="mt-1 space-y-0.5 px-2 text-xs">
          {sidebarChannels.map((c) => (
            <li key={c.label} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${c.active ? 'bg-white font-medium text-gray-900 ring-1 ring-gray-900/5' : 'text-gray-600'}`}>
              <Icon name={c.icon} className="size-3.5 text-gray-400" />
              {c.label}
            </li>
          ))}
        </ul>
        <p className="mt-4 px-4 text-xs font-medium text-gray-500">Метки</p>
        <ul className="mt-1 space-y-0.5 px-2 text-xs text-gray-600">
          {labels.map((l) => (
            <li key={l.label} className="flex items-center gap-2 px-2 py-1.5">
              <span className={`size-2 rounded-sm ${l.dot}`} />
              {l.label}
            </li>
          ))}
        </ul>
        <ul className="mt-auto space-y-0.5 border-t border-gray-100 px-2 py-2 text-xs text-gray-600">
          {([['users', 'Контакты'], ['chart', 'Отчёты'], ['megaphone', 'Рассылки'], ['gear', 'Настройки']] as const).map(([icon, label]) => (
            <li key={label} className="flex items-center gap-2 px-2 py-1.5"><Icon name={icon} className="size-3.5 text-gray-400" />{label}</li>
          ))}
        </ul>
      </aside>

      {/* Список диалогов */}
      <section className="hidden w-72 shrink-0 flex-col border-r border-gray-100 sm:flex">
        <div className="flex items-center gap-2 px-4 pt-4">
          <p className="text-base font-semibold">Все каналы</p>
          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">Открытые</span>
        </div>
        <div className="mt-3 flex gap-4 border-b border-gray-100 px-4 text-xs whitespace-nowrap">
          <span className="pb-2 text-gray-500">Мои <span className="ml-0.5 rounded-full bg-gray-100 px-1.5">3</span></span>
          <span className="pb-2 text-gray-500">Новые <span className="ml-0.5 rounded-full bg-gray-100 px-1.5">8</span></span>
          <span className="-mb-px border-b-2 border-brand-600 pb-2 font-medium text-brand-700">Все <span className="ml-0.5 rounded-full bg-brand-50 px-1.5">{TOTAL}</span></span>
        </div>
        <ul className="divide-y divide-gray-100 overflow-hidden">
          {conversations.map((c) => (
            <li key={c.name} className={`flex gap-3 px-4 py-2.5 ${c.active ? 'bg-gray-50' : ''}`}>
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${c.avatar}`}>{c.initials}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="truncate text-sm font-medium">{c.name}</p>
                  <span className="shrink-0 text-[11px] text-gray-400">{c.time}</span>
                </div>
                <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-gray-500">
                  <Icon name={c.note ? 'lock' : 'reply'} className="size-3 shrink-0" />
                  <span className="truncate">{c.text}</span>
                </p>
                <div className="mt-1.5 flex items-center gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <Icon name={channels[c.channel].icon} className="size-3" />
                    {channels[c.channel].label}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded border border-gray-200 px-1.5 py-0.5 text-gray-600">
                    <span className={`size-1.5 rounded-sm ${c.label.dot}`} />
                    {c.label.label}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Диалог */}
      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gray-100 text-[11px] font-semibold text-gray-600">ЕС</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Евгений Соколов</p>
            <p className="flex items-center gap-1 text-xs text-gray-500">#156 · <Icon name="send" className="size-3" /> Telegram</p>
          </div>
          <span className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium ring-1 ring-gray-900/10">Решить <Icon name="chevron" className="size-3" /></span>
        </header>
        <div className="mx-4 mt-3 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">
          <span className="relative h-4 w-7 rounded-full bg-gray-200"><span className="absolute top-0.5 left-0.5 size-3 rounded-full bg-white shadow-sm" /></span>
          Перевод в реальном времени
        </div>

        <div className="flex flex-1 flex-col justify-end gap-3 overflow-hidden px-4 py-4 text-xs leading-5 sm:text-[13px]">
          <div className="flex items-end justify-end gap-2">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-50 px-3.5 py-2.5">
              Здравствуйте! Подскажу по тарифам и подключению. Какие каналы хотите подключить?
              <p className="mt-1 text-right text-[11px] text-gray-500">10:09 ✓</p>
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">AI</span>
          </div>
          <div className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-gray-100 px-3.5 py-2.5">
            Сколько стоит подключить WhatsApp и Telegram?
            <p className="mt-1 text-[11px] text-gray-500">10:10</p>
          </div>
          <div className="flex items-end justify-end gap-2">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-50 px-3.5 py-2.5">
              Оба канала входят в тариф «Мониторинг и анализ», внедрение без доплаты. Первый канал подключим за день. Удобно созвониться завтра в 11:00?
              <p className="mt-1 text-right text-[11px] text-gray-500">10:11 ✓</p>
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">AI</span>
          </div>
          <div className="flex items-end justify-end gap-2">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-amber-50 px-3.5 py-2.5 ring-1 ring-amber-200/60">
              <span className="flex items-center gap-1 font-medium text-amber-800"><Icon name="lock" className="size-3" /> Заметка</span>
              Горячий лид: 25 менеджеров, amoCRM. Передаю Марине на звонок.
              <p className="mt-1 text-right text-[11px] text-gray-500">10:12</p>
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-[9px] font-bold text-gray-600">МК</span>
          </div>
        </div>

        <div className="mx-4 mb-4 rounded-xl p-3 ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex gap-1 rounded-lg bg-gray-50 p-0.5 text-xs">
              <span className="rounded-md bg-white px-2.5 py-1 font-medium shadow-sm">Ответ</span>
              <span className="px-2.5 py-1 text-gray-500">Заметка</span>
            </div>
            <Icon name="sparkles" className="size-4 text-brand-600" />
          </div>
          <p className="mt-3 truncate text-xs text-gray-400">Shift + Enter — новая строка. «/» — быстрые ответы.</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1.5 text-gray-500">
              {(['smile', 'clip', 'mic'] as const).map((icon) => (
                <span key={icon} className="flex size-7 items-center justify-center rounded-md ring-1 ring-gray-900/10"><Icon name={icon} className="size-3.5" /></span>
              ))}
            </div>
            <span className="rounded-lg bg-brand-600/60 px-3 py-1.5 text-xs font-medium text-white">Отправить</span>
          </div>
        </div>
      </section>
    </div>
  )
}
