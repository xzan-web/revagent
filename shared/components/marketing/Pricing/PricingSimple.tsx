import type { PricingSimpleProps } from '@/shared/types/marketing.types'

export function PricingSimple({ title, subtitle, tiers, theme = 'light' }: PricingSimpleProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
  }

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-4 scale-105'
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              {tier.badge && (
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                    {tier.badge}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-600 dark:text-gray-300">/{tier.period}</span>
              </div>
              <p className={`mb-6 ${tier.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start">
                    <span className={`mr-2 ${tier.highlighted ? 'text-blue-200' : 'text-blue-600'}`}>✓</span>
                    <span className={tier.highlighted ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.cta.href}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                  tier.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {tier.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

