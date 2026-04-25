import { useReveal } from '../../hooks/useReveal'
import type { Hero as HeroData } from '../../types/resume'
import { Avatar } from '../Avatar/Avatar'
import styles from './Hero.module.css'

interface HeroProps {
  data: HeroData
}

export function Hero({ data }: HeroProps): React.JSX.Element {
  const { ref: tagRef, visible: tagVisible } = useReveal<HTMLDivElement>()
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>()
  const { ref: ledeRef, visible: ledeVisible } = useReveal<HTMLParagraphElement>()
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLDivElement>()
  const { ref: ctaRef, visible: ctaVisible } = useReveal<HTMLDivElement>()

  const initials = data.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <section className={styles.hero}>
      <div>
        <div
          ref={tagRef}
          className={`${styles.tag} reveal fade-up ${tagVisible ? 'visible' : ''}`}
        >
          <span className={styles.dot} /> {data.availabilityTag}
        </div>
        <h1
          ref={titleRef}
          className={`${styles.title} reveal fade-up ${titleVisible ? 'visible' : ''}`}
        >
          <span className={styles.shimmer}>{data.name}</span>
        </h1>
        <p
          ref={ledeRef}
          className={`${styles.lede} reveal fade-up ${ledeVisible ? 'visible' : ''}`}
        >
          {data.lede}
        </p>
        <div
          ref={statsRef}
          className={`${styles.stats} reveal fade-up ${statsVisible ? 'visible' : ''}`}
        >
          {data.stats.map((s) => (
            <div key={s.label} className={styles.stat} data-cursor-target>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
        <div
          ref={ctaRef}
          className={`${styles.cta} reveal fade-up ${ctaVisible ? 'visible' : ''}`}
        >
          <a href={data.primaryCta.href} className="btn primary">
            {data.primaryCta.label}
          </a>
          <a href={data.secondaryCta.href} className="btn">
            {data.secondaryCta.label}
          </a>
        </div>
      </div>

      <Avatar initials={initials} card={data.floatCard} />
    </section>
  )
}
