const icons = {
  chat: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',
  check: 'M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12',
  book: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  trend: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
  loop: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
}

type IconName = keyof typeof icons

function Icon({ name, className }: { name: IconName; className: string }) {
  return (
    <svg aria-hidden="true" className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d={icons[name]} />
    </svg>
  )
}

const cycle: { icon: IconName; title: string; text: string }[] = [
  { icon: 'chat', title: 'Новые диалоги', text: 'Каждый день менеджеры и агент ведут разговоры во всех каналах.' },
  { icon: 'check', title: 'Итоги сделок', text: 'Каждый диалог связываем с результатом: продажа, отказ или потеря.' },
  { icon: 'book', title: 'База знаний растёт', text: 'Новые работающие приёмы попадают в Базу знаний продаж.' },
  { icon: 'trend', title: 'Продают лучше', text: 'Менеджеры получают свежие рекомендации, AI‑агент отвечает точнее.' },
]

const months = [
  { label: 'Месяц 1', text: 'Первые работающие приёмы из ваших текущих диалогов', knowledge: 'w-1/4', agent: 'w-1/6' },
  { label: 'Месяц 3', text: 'База знаний покрывает основные возражения и этапы воронки', knowledge: 'w-3/5', agent: 'w-1/2' },
  { label: 'Месяц 6 и дальше', text: 'Агент берёт типовые диалоги, база знаний продолжает пополняться', knowledge: 'w-11/12', agent: 'w-5/6' },
]

export function ContinuousImprovement() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-[32rem] w-[64rem] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(30_188_164/0.22),transparent)] blur-2xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-brand-400">Постоянное улучшение</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">Каждый месяц система продаёт лучше, чем в прошлом</p>
          <p className="mt-6 text-lg/8 text-on-dark/80">Каждый новый диалог — это новые данные. Чем дольше работает SaleBrain, тем больше база знаний и тем точнее рекомендации и AI‑агент.</p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 lg:max-w-none lg:grid-cols-4">
          {cycle.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-500">
                <Icon name={step.icon} className="size-6 text-gray-950" />
              </div>
              <p className="mt-4 text-lg/6 font-semibold tracking-tight text-white">{step.title}</p>
              <p className="mt-2 text-sm/6 text-on-dark/70">{step.text}</p>
              {i < cycle.length - 1 && (
                <span aria-hidden="true" className="absolute -bottom-3.5 left-1/2 z-10 flex size-7 -translate-x-1/2 rotate-90 items-center justify-center rounded-full bg-gray-950 text-brand-400 ring-1 ring-white/10 lg:top-1/2 lg:-right-3.5 lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0">→</span>
              )}
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-4 flex max-w-2xl items-center gap-x-3 rounded-2xl border border-dashed border-brand-400/40 px-6 py-4 text-sm/6 font-semibold text-brand-400 lg:max-w-none lg:justify-center">
          <Icon name="loop" className="size-5 flex-none" />
          <span>…и снова: новые диалоги пополняют базу знаний. Цикл повторяется каждый месяц</span>
        </div>

        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-xl font-bold tracking-tight text-white">Что меняется со временем</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {months.map((m) => (
              <div key={m.label} className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-sm/6 font-semibold text-brand-400">{m.label}</p>
                <p className="mt-2 flex-auto text-base/7 text-white">{m.text}</p>
                <div aria-hidden="true" className="mt-6 space-y-3 text-xs text-on-dark/60">
                  <div>
                    <p>База знаний продаж</p>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/10"><div className={`h-full rounded-full bg-brand-500 ${m.knowledge}`} /></div>
                  </div>
                  <div>
                    <p>Качество ответов AI‑агента</p>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/10"><div className={`h-full rounded-full bg-brand-100 ${m.agent}`} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
