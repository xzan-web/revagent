export function Security() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-brand-700">Безопасность и интеграции</h2>
          <p className="mt-5 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Данные под защитой. Работаем с вашей CRM</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-14">
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-50"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-brand-800"><path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                152-ФЗ
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">Обработка персональных данных по 152-ФЗ, серверы в России.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-50"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-brand-800"><path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                Доступы по ролям
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">Менеджер видит свои диалоги, РОП — свой отдел, собственник — всю компанию.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-50"><svg aria-hidden="true" className="size-6 text-brand-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /> </svg></div>
                NDA и договор
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">Подписываем до передачи данных.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-50"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-brand-800"><path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                Интеграции
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">amoCRM, Битрикс24, телефония, Telegram, MAX, email. Нет вашей системы — подключим через API.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
