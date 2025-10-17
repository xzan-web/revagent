import type { TestimonialsSliderProps } from '@/shared/types/marketing.types'

export function TestimonialsSlider({ title, subtitle, testimonials, theme = 'light' }: TestimonialsSliderProps) {
  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900',
  }

  // Note: This is a basic implementation. For production, consider adding a carousel library
  // or implementing arrow navigation and autoplay functionality

  return (
    <section className={`py-20 px-4 ${themes[theme]}`}>
      <div className="max-w-5xl mx-auto">
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

        <div className="space-y-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-xl text-center">
              {testimonial.rating && (
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-xl leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                )}
                <div className="text-left">
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-gray-600 dark:text-gray-400">
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

