const faqs = [
  {
    question: 'Чем вы отличаетесь от речевой аналитики, которая у нас уже есть?',
    answer: 'Обычная речевая аналитика проверяет, соблюдает ли менеджер скрипт. Мы связываем каждый звонок и переписку с итогом сделки в CRM и находим, что делали менеджеры в сделках, которые закрылись. Результат — не баллы, а приёмы, которые повышают конверсию.',
  },
  {
    question: 'В Битрикс24 уже есть CoPilot. Зачем нам вы?',
    answer: 'CoPilot оценивает звонки по скрипту. Мы анализируем ещё и переписки в Telegram, MAX, WhatsApp, email и чате на сайте и сравниваем выигранные сделки с проигранными. Работаем вместе с вашей CRM, а не вместо неё.',
  },
  {
    question: 'С какими CRM и телефонией вы работаете?',
    answer: 'amoCRM, Битрикс24, телефония, Telegram, MAX и email. Если вашей системы нет в списке — подключим через API.',
  },
  {
    question: 'Сколько стоит внедрение?',
    answer: 'Нисколько. Подключение каналов и CRM входит в тариф. Можно начать с одного канала.',
  },
  {
    question: 'Как вы защищаете данные клиентов?',
    answer: 'Обработка по 152-ФЗ, серверы в России, NDA до передачи данных.',
  },
  {
    question: 'ИИ‑агенты заменят моих менеджеров?',
    answer: 'Только если вы так решите. Сначала система учит менеджеров на опыте лучших. Агенту передаём только процессы, которые уже доказали результат, и увеличиваем его долю постепенно. Вы видите конверсию агента и решаете, что передавать дальше.',
  },
  {
    question: 'Менеджеры будут против «слежки». Что делать?',
    answer: 'Каждый менеджер получает рекомендации на примерах коллег, которые закрывают больше сделок. Это инструмент роста дохода, а не наказания.',
  },
  {
    question: 'Почему 150 000 ₽, если есть сервисы дешевле?',
    answer: 'Сервисы дешевле проверяют звонки по чек-листу. Мы подключаем переписки в мессенджерах, связываем диалоги с итогами сделок и готовим передачу процессов ИИ‑агентам. В пакете 30 000 диалогов или минут — это 5 ₽ за единицу.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Частые вопросы</h2>
          <div className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq, i) => (
              <details key={faq.question} open={i === 0} className="group py-6 first:pt-0 last:pb-0">
                <summary className="flex w-full cursor-pointer list-none items-start justify-between text-left text-gray-900 [&::-webkit-details-marker]:hidden">
                  <span className="text-base/7 font-semibold">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 group-open:hidden"><path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 not-group-open:hidden"><path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </summary>
                <p className="mt-2 pr-12 text-base/7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
