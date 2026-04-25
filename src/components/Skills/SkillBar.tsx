import { useSkillBarFill } from '../../hooks/useSkillBarFill'
import type { SkillBar as SkillBarData } from '../../types/resume'
import styles from './Skills.module.css'

interface SkillBarProps {
  bar: SkillBarData
}

export function SkillBar({ bar }: SkillBarProps): React.JSX.Element {
  const fillRef = useSkillBarFill(bar.pct)
  return (
    <div className={styles.bar}>
      <div className={styles.barTop}>
        <span className={styles.name}>{bar.name}</span>
        <span className={styles.pct}>{bar.pct}%</span>
      </div>
      <div className={styles.track}>
        <div ref={fillRef} className={styles.fill} />
      </div>
    </div>
  )
}
