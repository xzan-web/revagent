import type { HeroSimpleProps } from '@/shared/types/marketing.types'

export function HeroSimple({ headline, subtitle, buttons = [], trustIndicator, theme = 'light' }: HeroSimpleProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900',
    blue: 'bg-blue-600 text-white',
    purple: 'bg-purple-600 text-white',
  }

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {buttons.map((button, idx) => (
              <a
                key={idx}
                href={button.href}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                  button.variant === 'secondary'
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    : button.variant === 'outline'
                    ? 'border-2 border-current hover:bg-white/10'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
        {trustIndicator && (
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {trustIndicator}
          </p>
        )}
      </div>
    </section>
  )
}

