'use client'

import { useEffect, useRef, useState } from 'react'

// Анимированное демо интерфейса в hero: отдельная страница public/demo/hero-demo.html во iframe.
// Демо само сообщает свою высоту (окно + точки + подпись), и рамка подстраивается под неё.
const DEMO_SRC = '/demo/hero-demo.html'

export function HeroDemo() {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== frameRef.current?.contentWindow) return
      const data = event.data as { type?: string; height?: number } | null
      if (data?.type === 'salebrain-hero-height' && typeof data.height === 'number') setHeight(data.height)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div className="@container">
      <iframe
        ref={frameRef}
        src={DEMO_SRC}
        title="Интерфейс SaleBrain: дашборд отдела, команда и звонки, чаты с AI‑агентом и характеристики оценки разговора"
        className={`block w-full border-0 ${height ? '' : 'h-[calc(62.5cqw+130px)]'}`}
        {...(height ? { height } : {})}
      />
    </div>
  )
}
