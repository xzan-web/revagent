export function Problem() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-brand-700">Проблема</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Лучшие приёмы продаж знают 2–3 менеджера. Остальные продают как умеют</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-white"><svg aria-hidden="true" className="size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /> </svg></div>
                Менеджер А
              </dt>
              <dd className="mt-1 text-base/7 text-gray-600">Хорошо отвечает на «дорого».</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-white"><svg aria-hidden="true" className="size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /> </svg></div>
                Менеджер Б
              </dt>
              <dd className="mt-1 text-base/7 text-gray-600">Умеет закрывать сделку.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-white"><svg aria-hidden="true" className="size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" /> </svg></div>
                Менеджер В
              </dt>
              <dd className="mt-1 text-base/7 text-gray-600">Точно квалифицирует клиента.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-white"><svg aria-hidden="true" className="size-6 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" /> </svg></div>
                Менеджер Г
              </dt>
              <dd className="mt-1 text-base/7 text-gray-600">Пишет follow-up, на который отвечают.</dd>
            </div>
          </dl>
        </div>
        <p className="mx-auto mt-20 max-w-2xl text-lg/8 text-gray-700 lg:text-center">РОП не может прослушать все звонки и прочитать все переписки. Поэтому не знает, какие действия приводят к оплате, и учит команду по ощущениям.</p>
        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg/7 font-semibold text-gray-900"><svg aria-hidden="true" className="size-6 flex-none text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /> </svg>Слушаете выборочно</dt>
            <dd className="mt-2 text-base/7 text-gray-600">Из сотен разговоров в неделю проверяется малая часть.</dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg/7 font-semibold text-gray-900"><svg aria-hidden="true" className="size-6 flex-none text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /> </svg>Чек-лист ≠ продажа</dt>
            <dd className="mt-2 text-base/7 text-gray-600">Менеджер проходит скрипт на 100 баллов и всё равно теряет клиента.</dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg/7 font-semibold text-gray-900"><svg aria-hidden="true" className="size-6 flex-none text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" /> </svg>Опыт уходит с людьми</dt>
            <dd className="mt-2 text-base/7 text-gray-600">Уходит сильный менеджер — уходят и его приёмы.</dd>
          </div>
        </dl>
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gray-950 px-8 py-10 sm:px-12">
          <p className="text-xl/8 font-semibold text-white sm:text-2xl/9"><span className="text-brand-500">Adaptive Sales</span> связывает каждый диалог с итогом сделки, находит приёмы, которые работают, и передаёт их всему отделу.</p>
        </div>
      </div>
    </section>
  )
}
