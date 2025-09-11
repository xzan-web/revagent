import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Lalexi</h3>
            <p>
              A modern Next.js starter template built with TypeScript and feature-based architecture. 
              Perfect for building scalable web applications.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <div className={styles.footerLinks}>
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
              <Link href="/about" className={styles.footerLink}>
                About
              </Link>
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.footerLink}
              >
                Next.js Documentation
              </a>
              <a 
                href="https://www.typescriptlang.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.footerLink}
              >
                TypeScript Documentation
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Lalexi. Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
