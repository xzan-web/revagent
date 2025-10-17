import type { CTASimpleProps } from '@/shared/types/marketing.types'

export function CTASimple({ headline, description, buttons, trustIndicator, stats, theme = 'blue' }: CTASimpleProps) {
  const themes = {
    blue: 'bg-blue-600 text-white',
    purple: 'bg-purple-600 text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    dark: 'bg-gray-900 text-white',
    light: 'bg-gray-50 text-gray-900',
  }

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-4xl mx-auto text-center">
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {headline}
        </h2>
        {description && (
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          {buttons.map((button, idx) => (
            <a
              key={idx}
              href={button.href}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                button.variant === 'secondary'
                  ? theme === 'light' 
                    ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    : 'bg-white/10 hover:bg-white/20'
                  : theme === 'light'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>
        {trustIndicator && (
          <p className="text-sm opacity-75">
            {trustIndicator}
          </p>
        )}
      </div>
    </section>
  )
}

