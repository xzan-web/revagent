import type { CTASplitProps } from '@/shared/types/marketing.types'

export function CTASplit({ 
  headline, 
  description, 
  buttons, 
  benefits, 
  image,
  imagePosition = 'right',
  socialProof,
  theme = 'gradient' 
}: CTASplitProps) {
  const themes = {
    blue: 'bg-blue-600 text-white',
    purple: 'bg-purple-600 text-white',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 text-white',
    dark: 'bg-gray-900 text-white',
    light: 'bg-gray-50 text-gray-900',
  }

  const content = (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {headline}
      </h2>
      {description && (
        <p className="text-xl mb-8 opacity-90">
          {description}
        </p>
      )}
      {benefits && benefits.length > 0 && (
        <ul className="space-y-3 mb-8">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start text-lg">
              <span className="mr-3 flex-shrink-0">{benefit}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {buttons.map((button, idx) => (
          <a
            key={idx}
            href={button.href}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center ${
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
      {socialProof && (
        <p className="text-sm opacity-75">
          {socialProof}
        </p>
      )}
    </div>
  )

  const imageContent = image && (
    <div className="flex items-center justify-center">
      <img 
        src={image} 
        alt={headline}
        className="w-full h-auto rounded-xl shadow-2xl"
      />
    </div>
  )

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {content}
            </>
          ) : (
            <>
              {content}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

