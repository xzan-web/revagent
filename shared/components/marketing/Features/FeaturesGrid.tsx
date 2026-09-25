import type { FeaturesGridProps } from '@/shared/types/marketing.types'

export function FeaturesGrid({ title, subtitle, features, columns = 3, theme = 'light' }: FeaturesGridProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gray: 'bg-gray-50 text-gray-900',
  }

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
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

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6">
              {feature.icon && (
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

