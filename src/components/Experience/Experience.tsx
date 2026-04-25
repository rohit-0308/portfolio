import { Fragment } from 'react'
import { useReveal } from '../../hooks/useReveal'
import type {
  ExperienceEntry,
  RichText as RichTextNodes,
  SectionMeta,
} from '../../types/resume'
import styles from './Experience.module.css'

interface ExperienceProps {
  meta: SectionMeta
  entries: ExperienceEntry[]
}

function RichText({ nodes }: { nodes: RichTextNodes }): React.JSX.Element {
  return (
    <>
      {nodes.map((node, i) => {
        if (node.kind === 'strong') return <strong key={i}>{node.text}</strong>
        if (node.kind === 'code') return <code key={i}>{node.text}</code>
        return <Fragment key={i}>{node.text}</Fragment>
      })}
    </>
  )
}

function ExperienceItem({ entry }: { entry: ExperienceEntry }): React.JSX.Element {
  const { ref: itemRef, visible: itemVisible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={itemRef}
      className={`${styles.item} reveal ${entry.reveal} ${itemVisible ? 'visible' : ''}`}
    >
      <div className={styles.head}>
        <h3>{entry.company}</h3>
        <span className={styles.when}>{entry.when}</span>
      </div>
      <div className={styles.role}>{entry.role}</div>

      {entry.projects.map((project) => (
        <Fragment key={project.name}>
          <div className={styles.sub}>
            {project.name} <small>{project.stack}</small>
          </div>
          <ul className={styles.list}>
            {project.bullets.map((bullet, i) => (
              <li key={i}>
                <RichText nodes={bullet} />
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}

export function Experience({ meta, entries }: ExperienceProps): React.JSX.Element {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>()
  return (
    <section id="experience">
      <div ref={headRef} className={`reveal fade-up ${headVisible ? 'visible' : ''}`}>
        <span className="section-eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
        <p className="section-sub">{meta.sub}</p>
      </div>
      {entries.map((entry) => (
        <ExperienceItem key={entry.company} entry={entry} />
      ))}
    </section>
  )
}
