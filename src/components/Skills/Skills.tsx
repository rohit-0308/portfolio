import { useReveal } from '../../hooks/useReveal'
import type { SectionMeta, SkillGroup as SkillGroupData } from '../../types/resume'
import { SkillGroup } from './SkillGroup'
import styles from './Skills.module.css'

interface SkillsProps {
  meta: SectionMeta
  groups: SkillGroupData[]
}

export function Skills({ meta, groups }: SkillsProps): React.JSX.Element {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>()
  return (
    <section id="skills">
      <div ref={headRef} className={`reveal fade-up ${headVisible ? 'visible' : ''}`}>
        <span className="section-eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
        <p className="section-sub">{meta.sub}</p>
      </div>
      <div className={styles.grid}>
        {groups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  )
}
