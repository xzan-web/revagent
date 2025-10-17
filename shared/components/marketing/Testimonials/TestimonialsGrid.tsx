import type { TestimonialsGridProps } from '@/shared/types/marketing.types'

export function TestimonialsGrid({ title, subtitle, testimonials, columns = 3, theme = 'light' }: TestimonialsGridProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900',
  }

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
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
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

