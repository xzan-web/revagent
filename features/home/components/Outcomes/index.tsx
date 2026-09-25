export function Outcomes() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-brand-700">Результат</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">Что появится у РОПа после подключения</p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900"><svg aria-hidden="true" className="absolute top-0.5 left-0 size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> </svg>Все точки потерь.</dt>
            <dd className="inline">На каких этапах и почему уходят клиенты — по всем каналам.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900"><svg aria-hidden="true" className="absolute top-0.5 left-0 size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /> </svg>Работающие ответы.</dt>
            <dd className="inline">Как лучшие менеджеры отвечают на частые возражения.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900"><svg aria-hidden="true" className="absolute top-0.5 left-0 size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /> </svg>База знаний продаж.</dt>
            <dd className="inline">Приёмы, доказанные закрытыми сделками, — для всего отдела.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900"><svg aria-hidden="true" className="absolute top-0.5 left-0 size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /> </svg>Рекомендации каждому.</dt>
            <dd className="inline">Что конкретно улучшить каждому менеджеру.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900"><svg aria-hidden="true" className="absolute top-0.5 left-0 size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /> </svg>ИИ-агенты по готовности.</dt>
            <dd className="inline">Агенту передаём только то, что уже доказало результат.</dd>
          </div>
          <div className="relative rounded-xl bg-gray-950 p-6 text-white sm:col-span-2 lg:col-span-1">
            <dt className="flex items-start gap-x-2 text-lg/6 font-semibold"><svg aria-hidden="true" className="size-6 flex-none text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> </svg>Главный KPI — конверсия отдела продаж.</dt>
            <dd className="mt-2 text-sm/5 text-on-dark/80">Замеряем её до старта и после каждого цикла.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
