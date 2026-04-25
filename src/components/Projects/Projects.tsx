import { useReveal } from '../../hooks/useReveal'
import type { Project, SectionMeta } from '../../types/resume'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

interface ProjectsProps {
  meta: SectionMeta
  projects: Project[]
}

export function Projects({ meta, projects }: ProjectsProps): React.JSX.Element {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>()
  return (
    <section id="projects">
      <div ref={headRef} className={`reveal fade-up ${headVisible ? 'visible' : ''}`}>
        <span className="section-eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
        <p className="section-sub">{meta.sub}</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
