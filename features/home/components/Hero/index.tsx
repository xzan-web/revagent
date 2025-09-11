import styles from './Hero.module.css'
import { Button } from '@/shared/components/ui/Button'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Welcome to Lalexi
        </h1>
        <p className={styles.heroSubtitle}>
          A modern Next.js application built with TypeScript, featuring a clean architecture 
          and beautiful user interface. Experience the power of feature-based development.
        </p>
        <div className={styles.heroActions}>
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button variant="outline" size="large">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
