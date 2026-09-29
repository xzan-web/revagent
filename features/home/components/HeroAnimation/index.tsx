// Временная секция: анимированное демо интерфейса (Диалоги → Разбор → База знаний → Дашборд).
// Само демо — отдельная страница public/demo/hero-animation.html, встроенная через iframe.
export function HeroAnimation() {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-center text-base/7 font-semibold text-brand-700">Анимация — вариант вместо слайдера</p>
        <iframe
          src="/demo/hero-animation.html"
          title="Интерфейс SaleBrain: диалоги из всех каналов, разбор звонка, база знаний и рост конверсии"
          loading="lazy"
          className="block aspect-[1120/700] w-full border-0"
        />
      </div>
    </section>
  )
}
