import { discussLinkProps } from '@/features/home/links'

export function FinalCta() {
  return (
    <section id="final" className="relative isolate overflow-hidden bg-gray-950">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[56rem] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(30_188_164/0.35),rgb(30_188_164/0.08)_60%,transparent)] blur-2xl" />
      <svg aria-hidden="true" viewBox="13 17.97 123.4 122.2" fill="currentColor" className="absolute inset-y-0 left-1/2 -z-10 h-full w-auto -translate-x-[35%] translate-y-[60%] text-white opacity-5">
        <path d="M31.1477 64.0923C31.1477 59.13 27.125 55.1074 22.1628 55.1074C17.2005 55.1074 13.1779 59.13 13.1779 64.0923V108.418C13.1779 113.38 17.2005 117.403 22.1628 117.403C27.125 117.403 31.1477 113.38 31.1477 108.418V64.0923Z" />
        <path d="M57.5034 40.1325C57.5034 35.1703 53.4807 31.1476 48.5185 31.1476C43.5562 31.1476 39.5336 35.1703 39.5336 40.1325V118.002C39.5336 122.964 43.5562 126.987 48.5185 126.987C53.4807 126.987 57.5034 122.964 57.5034 118.002V40.1325Z" />
        <path d="M83.8591 26.9547C83.8591 21.9925 79.8364 17.9698 74.8742 17.9698C69.912 17.9698 65.8893 21.9925 65.8893 26.9547V131.18C65.8893 136.142 69.912 140.164 74.8742 140.164C79.8364 140.164 83.8591 136.142 83.8591 131.18V26.9547Z" />
        <path d="M110.215 31.7466C110.215 26.7844 106.192 22.7617 101.23 22.7617C96.2676 22.7617 92.2449 26.7844 92.2449 31.7466V96.4379C92.2449 101.4 96.2676 105.423 101.23 105.423C106.192 105.423 110.215 101.4 110.215 96.4379V31.7466Z" />
        <path d="M136.57 50.9144C136.57 45.9522 132.548 41.9295 127.586 41.9295C122.623 41.9295 118.601 45.9522 118.601 50.9144V71.2802C118.601 76.2424 122.623 80.2651 127.586 80.2651C132.548 80.2651 136.57 76.2424 136.57 71.2802V50.9144Z" />
      </svg>
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
