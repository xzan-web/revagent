import type { HeroSplitProps } from '@/shared/types/marketing.types'

export function HeroSplit({ 
  headline, 
  subtitle, 
  buttons = [], 
  image,
  imageAlt,
  imagePosition = 'right',
  trustIndicator, 
  theme = 'light' 
}: HeroSplitProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900',
    blue: 'bg-blue-600 text-white',
    purple: 'bg-purple-600 text-white',
  }

  const content = (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        {headline}
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
      {buttons.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {buttons.map((button, idx) => (
            <a
              key={idx}
              href={button.href}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center ${
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
  )

  const imageContent = (
    <div className="flex items-center justify-center">
      <img 
        src={image} 
        alt={imageAlt}
        className="w-full h-auto rounded-2xl shadow-2xl"
      />
    </div>
  )

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
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

