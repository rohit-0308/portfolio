import { useReveal } from '../../hooks/useReveal'
import type { About as AboutData } from '../../types/resume'
import styles from './About.module.css'

interface AboutProps {
  data: AboutData
}

export function About({ data }: AboutProps): React.JSX.Element {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>()
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>()
  const { ref: cardRef, visible: cardVisible } = useReveal<HTMLDivElement>()

  return (
    <section id="about">
      <div ref={headRef} className={`reveal fade-up ${headVisible ? 'visible' : ''}`}>
        <span className="section-eyebrow">{data.eyebrow}</span>
        <h2>{data.heading}</h2>
        <p className="section-sub">{data.sub}</p>
      </div>
      <div className={styles.grid}>
        <div
          ref={textRef}
          className={`${styles.text} reveal slide-left ${textVisible ? 'visible' : ''}`}
        >
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div
          ref={cardRef}
          className={`${styles.card} reveal slide-right ${cardVisible ? 'visible' : ''}`}
        >
          {data.info.map((row) => (
            <div key={row.label} className={styles.row}>
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
