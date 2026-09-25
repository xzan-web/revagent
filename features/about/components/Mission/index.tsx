import styles from './Mission.module.css'

interface Value {
  icon: string
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and modern development practices to deliver exceptional solutions.'
  },
  {
    icon: '🎯',
    title: 'Quality',
    description: 'Every line of code is written with attention to detail, ensuring robust and maintainable applications.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve outstanding results.'
  },
  {
    icon: '📈',
    title: 'Growth',
    description: 'Continuous learning and improvement are at the core of everything we do.'
  }
]

export function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.missionContainer}>
        <div className={styles.missionHeader}>
          <h1 className={styles.missionTitle}>
            About Our Mission
          </h1>
          <p className={styles.missionSubtitle}>
            We&apos;re passionate about creating exceptional web experiences that make a difference.
          </p>
        </div>
        
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <p>
              Our mission is to empower developers and businesses with modern, scalable web applications 
              that deliver outstanding user experiences. We believe in the power of clean architecture, 
              type safety, and developer-friendly tooling.
            </p>
            <p>
              This Next.js starter template represents our commitment to best practices and modern 
              development standards. It&apos;s designed to help you build faster, more maintainable 
              applications from day one.
            </p>
            <p>
              Whether you&apos;re building a simple landing page or a complex web application, this 
              foundation provides the structure and tools you need to succeed.
            </p>
          </div>
          
          <div className={styles.missionVisual}>
            <h3 className={styles.missionVisualTitle}>
              Built for Developers
            </h3>
            <p className={styles.missionVisualText}>
              Every decision in this starter template is made with developer experience in mind. 
              From the folder structure to the tooling configuration, everything is designed 
              to make your development process smooth and enjoyable.
            </p>
          </div>
        </div>
        
        <div className={styles.values}>
          <h2 className={styles.valuesTitle}>
            Our Core Values
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>
                  {value.title}
                </h3>
                <p className={styles.valueDescription}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
