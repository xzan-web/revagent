import Link from 'next/link'
import { Logo } from '@/shared/components/ui/Logo'

const linkStyles = 'font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800'

// Email, ссылки и /privacy превращаем в ссылки, [заглушки] подсвечиваем
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]|\S+@\S+\.[a-z]{2,}|https?:\/\/\S+|\/privacy\b)/gi)
  return (
    <>
      {parts.map((part, i) => {
        if (/^\[.*\]$/.test(part)) return <mark key={i} className="rounded bg-amber-100 px-1 text-gray-900">{part}</mark>
        if (part === '/privacy') return <a key={i} href="/privacy" className={linkStyles}>политике обработки персональных данных</a>
        if (/@/.test(part)) return <a key={i} href={`mailto:${part}`} className={linkStyles}>{part}</a>
        if (/^https?:\/\//i.test(part)) {
          const clean = part.replace(/[.,;)]+$/, '')
          const tail = part.slice(clean.length)
          const external = !/salebrain\.ru/i.test(clean)
          return (
            <span key={i}>
              <a href={clean.replace(/^http:/, 'https:')} className={linkStyles} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{clean}</a>
              {tail}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

// **жирный** текст поверх остальной разметки
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        /^\*\*[^*]+\*\*$/.test(part)
          ? <strong key={i} className="font-semibold text-gray-900"><Inline text={part.slice(2, -2)} /></strong>
          : <Inline key={i} text={part} />,
      )}
    </>
  )
}

// Подряд идущие пункты списков собираем в один <ul>
type Group = { kind: 'list'; marker: 'dash' | 'bullet'; items: string[] } | { kind: 'block'; block: LegalBlock }

function group(blocks: LegalBlock[]): Group[] {
  const out: Group[] = []
  for (const block of blocks) {
    if (block.type === 'dash' || block.type === 'bullet') {
      const last = out[out.length - 1]
      if (last?.kind === 'list' && last.marker === block.type) last.items.push(block.text)
      else out.push({ kind: 'list', marker: block.type, items: [block.text] })
    } else {
      out.push({ kind: 'block', block })
    }
  }
  return out
}

// Ячейка таблицы — список абзацев; несколько абзацев выводятся списком
type LegalCell = string[]

export type LegalBlock =
  | { type: 'h2' | 'h3' | 'p' | 'dash' | 'bullet' | 'label'; text: string }
  | { type: 'table'; head?: string[]; rows: LegalCell[][] }

function Cell({ cell }: { cell: LegalCell }) {
  if (cell.length === 0) return <span className="text-gray-400">—</span>
  if (cell.length === 1) return <Rich text={cell[0]} />
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-brand-600">
      {cell.map((item, k) => <li key={k}><Rich text={item} /></li>)}
    </ul>
  )
}

// Таблица без шапки — пары «название — значение» (первая колонка как заголовок строки)
function LegalTable({ head, rows }: { head?: string[]; rows: LegalCell[][] }) {
  return (
    <div className="!mt-6 overflow-x-auto rounded-xl ring-1 ring-gray-200 print:overflow-visible">
      <table className="w-full text-left text-sm/6">
        {head ? (
          <thead className="bg-gray-50 text-gray-900">
            <tr>{head.map((h, k) => <th key={k} scope="col" className="min-w-40 px-4 py-3 align-bottom font-semibold">{h}</th>)}</tr>
          </thead>
        ) : null}
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, r) => (
            <tr key={r} className={!head && r === 0 ? 'bg-gray-50' : undefined}>
              {row.map((cell, c) =>
                !head && c === 0
                  ? <th key={c} scope="row" className="w-1/3 px-4 py-3 align-top font-semibold text-gray-900"><Cell cell={cell} /></th>
                  : <td key={c} className={`px-4 py-3 align-top ${head ? 'min-w-40' : ''} ${!head && r === 0 ? 'font-semibold text-gray-900' : ''}`}><Cell cell={cell} /></td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface LegalDocumentProps {
  title: string
  blocks: LegalBlock[]
  updated?: string
  // Готовый PDF документа в public/docs (собирается скриптом npm run pdf:legal)
  pdf?: { href: string; fileName: string }
  // Короткое название для хлебных крошек и путь страницы
  breadcrumb?: { label: string; path: string }
}

const SITE_URL = 'https://salebrain.ru'

function Breadcrumbs({ label, path }: { label: string; path: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  }
  return (
    <nav aria-label="Хлебные крошки" className="mb-8 print:hidden">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
        <li><Link href="/" className="hover:text-gray-900">Главная</Link></li>
        <li aria-hidden="true" className="text-gray-300">/</li>
        <li aria-current="page" className="font-medium text-gray-900">{label}</li>
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  )
}

function DownloadPdf({ href, fileName }: { href: string; fileName: string }) {
  return (
    <a
      href={href}
      download={fileName}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 print:hidden"
    >
      <svg aria-hidden="true" className="size-4 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Скачать PDF
    </a>
  )
}

export function LegalDocument({ title, blocks, updated, pdf, breadcrumb }: LegalDocumentProps) {
  return (
    <div className="bg-white">
      <header className="border-b border-gray-100 print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="SaleBrain — на главную"><Logo /></Link>
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900">← На главную</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 text-base/7 text-gray-700 sm:py-20 print:max-w-none print:p-0">
        {breadcrumb ? <Breadcrumbs {...breadcrumb} /> : null}
        <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">{title}</h1>
        {updated || pdf ? (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {pdf ? <DownloadPdf {...pdf} /> : null}
            {updated ? <p className="text-sm text-gray-500">Редакция от {updated}</p> : null}
          </div>
        ) : null}

        <div className="mt-10 space-y-4">
          {group(blocks).map((g, i) => {
            if (g.kind === 'list') {
              return (
                <ul key={i} className={`space-y-2 pl-6 ${g.marker === 'dash' ? "list-['—__']" : 'list-disc marker:text-brand-600'}`}>
                  {g.items.map((item, k) => <li key={k}><Rich text={item} /></li>)}
                </ul>
              )
            }
            if (g.block.type === 'table') return <LegalTable key={i} head={g.block.head} rows={g.block.rows} />
            const { type, text } = g.block
            if (type === 'h2') return <h2 key={i} className="!mt-12 text-xl font-bold tracking-tight text-gray-900">{text}</h2>
            if (type === 'h3') return <h3 key={i} className="!mt-8 text-lg font-semibold tracking-tight text-gray-900">{text}</h3>
            if (type === 'label') return <p key={i} className="!mt-6 text-sm font-semibold text-gray-900">{text}</p>
            return <p key={i}><Rich text={text} /></p>
          })}
        </div>
      </main>

      <footer className="border-t border-gray-100 print:hidden">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-gray-500">© 2026 SaleBrain</div>
      </footer>
    </div>
  )
}
