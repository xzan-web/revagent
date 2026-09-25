export function FinalCta() {
  return (
    <section id="final" className="bg-gray-950">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">Узнайте, что уже работает в вашем отделе продаж</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-on-dark/80">Разберём ваши диалоги вместе с итогами сделок и покажем, где теряются клиенты и какие приёмы стоит передать всей команде.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#audit" className="rounded-full bg-white px-5 py-3 text-base font-semibold text-gray-950 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Получить разбор продаж</a>
            <a href="#pricing" className="rounded-full px-5 py-3 text-base/6 font-semibold text-white ring-1 ring-white/70 hover:ring-white hover:bg-white/10">Обсудить внедрение <span aria-hidden="true">→</span></a>
          </div>
          <p className="mt-5 text-center text-sm text-on-dark/70">NDA по запросу</p>
        </div>
      </div>
    </section>
  )
}
