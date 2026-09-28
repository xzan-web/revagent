import { discussLinkProps } from '@/features/home/links'

export function FinalCta() {
  return (
    <section id="final" className="relative isolate overflow-hidden bg-gray-950">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[56rem] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(30_188_164/0.35),rgb(30_188_164/0.08)_60%,transparent)] blur-2xl" />
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">Узнайте, что уже работает в вашем отделе продаж</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-on-dark/80">Разберём ваши диалоги вместе с итогами сделок и покажем, где теряются клиенты и какие приёмы стоит передать всей команде.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#audit" className="rounded-full bg-white px-5 py-3 text-base font-semibold text-gray-950 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Получить разбор продаж</a>
            <a {...discussLinkProps} className="rounded-full px-5 py-3 text-base/6 font-semibold text-white ring-1 ring-white/70 hover:ring-white hover:bg-white/10">Обсудить внедрение <span aria-hidden="true">→</span></a>
          </div>
          <p className="mt-5 text-center text-sm text-on-dark/70">NDA по запросу</p>
        </div>
      </div>
    </section>
  )
}
