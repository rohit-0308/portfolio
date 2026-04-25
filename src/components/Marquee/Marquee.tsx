import { useReveal } from '../../hooks/useReveal'
import type { MarqueeItem } from '../../types/resume'
import styles from './Marquee.module.css'

interface MarqueeProps {
  items: MarqueeItem[]
}

export function Marquee({ items }: MarqueeProps): React.JSX.Element {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const doubled = [...items, ...items]

  return (
    <div
      ref={ref}
      className={`${styles.marquee} reveal fade-up ${visible ? 'visible' : ''}`}
      aria-hidden="true"
    >
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className={styles.item}>
            <span className={styles.glyph} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
