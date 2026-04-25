import { useReveal } from '../../hooks/useReveal'
import type { FloatCard } from '../../types/resume'
import styles from './Avatar.module.css'

interface AvatarProps {
  initials: string
  card: FloatCard
}

export function Avatar({ initials, card }: AvatarProps): React.JSX.Element {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.wrap} reveal slide-right ${visible ? 'visible' : ''}`}
    >
      <div className={styles.ripple} />
      <div className={`${styles.ripple} ${styles.r2}`} />
      <div className={`${styles.ripple} ${styles.r3}`} />
      <div className={styles.avatar} data-cursor-target>
        {initials}
      </div>
      <div className={styles.cardWrap}>
        <div className={styles.card} data-cursor-target>
          <div className={styles.role}>{card.role}</div>
          <div className={styles.title}>{card.title}</div>
          <div className={styles.meta}>{card.meta}</div>
          <span className={styles.badge}>{card.badge}</span>
        </div>
      </div>
    </div>
  )
}
