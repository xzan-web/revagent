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

export type LegalBlock = { type: 'h2' | 'h3' | 'p' | 'dash' | 'bullet' | 'label'; text: string }

interface LegalDocumentProps {
  title: string
  blocks: LegalBlock[]
  updated?: string
}

export function LegalDocument({ title, blocks, updated }: LegalDocumentProps) {
  return (
    <div className="bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="SaleBrain — на главную"><Logo /></Link>
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900">← На главную</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 text-base/7 text-gray-700 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">{title}</h1>
        {updated ? <p className="mt-4 text-sm text-gray-500">Редакция от {updated}</p> : null}

        <div className="mt-10 space-y-4">
          {group(blocks).map((g, i) => {
            if (g.kind === 'list') {
              return (
                <ul key={i} className={`space-y-2 pl-6 ${g.marker === 'dash' ? "list-['—__']" : 'list-disc marker:text-brand-600'}`}>
                  {g.items.map((item, k) => <li key={k}><Rich text={item} /></li>)}
                </ul>
              )
            }
            const { type, text } = g.block
            if (type === 'h2') return <h2 key={i} className="!mt-12 text-xl font-bold tracking-tight text-gray-900">{text}</h2>
            if (type === 'h3') return <h3 key={i} className="!mt-8 text-lg font-semibold tracking-tight text-gray-900">{text}</h3>
            if (type === 'label') return <p key={i} className="!mt-6 text-sm font-semibold text-gray-900">{text}</p>
            return <p key={i}><Rich text={text} /></p>
          })}
        </div>
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-gray-500">© 2026 SaleBrain</div>
      </footer>
    </div>
  )
}
