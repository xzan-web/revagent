import Script from 'next/script'

// Счетчик Яндекс Метрики. Подключается только в production-сборке, чтобы dev-визиты не попадали в статистику.
// Используемые cookie (_ym_*) описаны в политике обработки ПДн, п. 11.5.
const COUNTER_ID = 113471272

export function YandexMetrika() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}', 'ym');
ym(${COUNTER_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://mc.yandex.ru/watch/${COUNTER_ID}`} className="absolute -left-[9999px]" alt="" />
        </div>
      </noscript>
    </>
  )
}
