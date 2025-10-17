import type { FeaturesListProps } from '@/shared/types/marketing.types'

export function FeaturesList({ title, subtitle, features, theme = 'light' }: FeaturesListProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gray: 'bg-gray-50 text-gray-900',
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

        <div className="space-y-20">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {feature.description}
                </p>
                {feature.bullets && feature.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start">
                        <span className="text-blue-600 mr-2 text-xl">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {feature.image && (
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

