import { useReveal } from '../../hooks/useReveal'
import type { Project } from '../../types/resume'
import styles from './Projects.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): React.JSX.Element {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`${styles.card} reveal fade-up ${visible ? 'visible' : ''}`}
      data-cursor-target
    >
      <h3>{project.title}</h3>
      <div className={styles.stack}>{project.stack}</div>
      {project.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
