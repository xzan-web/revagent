// Собирает PDF юридических документов из страниц сайта через headless Chrome.
// Нужен запущенный dev-сервер (npm run dev). Запуск: npm run pdf:legal
// Можно указать другой адрес: BASE_URL=http://localhost:3001 npm run pdf:legal
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT_DIR = resolve('public/docs')

const DOCS = [
  { path: '/privacy/', file: 'salebrain-privacy.pdf' },
  { path: '/terms/', file: 'salebrain-terms.pdf' },
  { path: '/offer/', file: 'salebrain-offer.pdf' },
]

if (!existsSync(CHROME)) {
  console.error(`Chrome не найден: ${CHROME}. Укажите путь в CHROME_PATH.`)
  process.exit(1)
}
mkdirSync(OUT_DIR, { recursive: true })

for (const doc of DOCS) {
  const out = resolve(OUT_DIR, doc.file)
  execFileSync(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000',
    `--print-to-pdf=${out}`,
    `${BASE_URL}${doc.path}`,
  ], { stdio: 'ignore' })
  console.log(`✓ ${doc.path} → public/docs/${doc.file}`)
}
