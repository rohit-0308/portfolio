import { useReveal } from '../../hooks/useReveal'
import type { SkillGroup as SkillGroupData } from '../../types/resume'
import { SkillBar } from './SkillBar'
import styles from './Skills.module.css'

interface SkillGroupProps {
  group: SkillGroupData
}

export function SkillGroup({ group }: SkillGroupProps): React.JSX.Element {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`${styles.group} reveal ${group.reveal} ${visible ? 'visible' : ''}`}
    >
      <h3>{group.title}</h3>
      {group.kind === 'bars' ? (
        group.bars.map((bar) => <SkillBar key={bar.name} bar={bar} />)
      ) : (
        <div className={styles.tags}>
          {group.tags.map((tag) => (
            <span key={tag} className={styles.tag} data-cursor-target>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
