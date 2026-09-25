import { AuditForm } from '@/features/home/components/AuditForm'

export function Audit() {
  return (
    <section id="audit" className="relative isolate bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-16 sm:pt-32 lg:static lg:px-8 lg:py-40">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-brand-400">Бесплатный разбор</h2>
            <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl">Покажем, где ваш отдел продаж теряет сделки, — до подписания договора</p>
            <p className="mt-6 text-lg/8 text-on-dark/80">Берём ваши звонки и переписки вместе с итогами сделок из CRM и показываем:</p>
            <ul role="list" className="mt-8 space-y-4 text-base/7 text-on-dark/80">
              <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>На каких этапах воронки теряются клиенты</li>
              <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Самые частые возражения и как на них отвечают менеджеры, которые закрывают сделки</li>
              <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Чем разговоры в выигранных сделках отличаются от проигранных</li>
              <li className="flex gap-x-3"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-5 flex-none text-brand-400"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" /></svg>Какой процесс можно первым передать ИИ-агенту</li>
            </ul>
          </div>
        </div>
        <AuditForm />
      </div>
    </section>
  )
}
