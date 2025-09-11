import styles from './Features.module.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with Next.js 15 and optimized for performance with static site generation and modern React patterns.'
  },
  {
    icon: '🎯',
    title: 'Type Safe',
    description: 'Full TypeScript support with strict mode enabled, ensuring type safety throughout your application.'
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    description: 'Feature-based folder structure that grows with your project, keeping code organized and maintainable.'
  },
  {
    icon: '🎨',
    title: 'Modern UI',
    description: 'Beautiful, responsive design with CSS Modules and modern styling practices for a great user experience.'
  },
  {
    icon: '🔧',
    title: 'Developer Experience',
    description: 'ESLint, TypeScript, and modern tooling configured for optimal development workflow and code quality.'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices, from mobile phones to desktop computers.'
  }
]

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>
            Why Choose This Starter?
          </h2>
          <p className={styles.featuresSubtitle}>
            This Next.js starter template provides everything you need to build modern, 
            scalable web applications with best practices built-in.
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>
                {feature.title}
              </h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
