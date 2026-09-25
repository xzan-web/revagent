import type { PricingComparisonProps } from '@/shared/types/marketing.types'

export function PricingComparison({ title, subtitle, tiers, comparisonFeatures = [], theme = 'light' }: PricingComparisonProps) {
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

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-6">Features</th>
                {tiers.map((tier, idx) => (
                  <th key={idx} className="text-center py-4 px-6">
                    <div className="font-bold text-xl mb-1">{tier.name}</div>
                    <div className="text-2xl font-bold mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">/{tier.period}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, idx) => (
                <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{feature}</td>
                  {tiers.map((tier, tierIdx) => (
                    <td key={tierIdx} className="py-4 px-6 text-center">
                      <span className="text-blue-600">✓</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                {tiers.map((tier, idx) => (
                  <td key={idx} className="py-6 px-6">
                    <a
                      href={tier.cta.href}
                      className="block w-full py-3 px-6 rounded-lg font-semibold text-center bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    >
                      {tier.cta.text}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}

