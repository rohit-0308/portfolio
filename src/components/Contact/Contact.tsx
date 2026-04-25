import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import type { Contact as ContactData, ContactIcon } from '../../types/resume'
import styles from './Contact.module.css'

interface ContactProps {
  data: ContactData
  initials: string
}

const ICON_SIZE = 18

function Icon({ name }: { name: ContactIcon }): React.JSX.Element {
  switch (name) {
    case 'mail':
      return <Mail size={ICON_SIZE} aria-hidden="true" />
    case 'phone':
      return <Phone size={ICON_SIZE} aria-hidden="true" />
    case 'linkedin':
      return <Linkedin size={ICON_SIZE} aria-hidden="true" />
    case 'github':
      return <Github size={ICON_SIZE} aria-hidden="true" />
  }
}

export function Contact({ data, initials }: ContactProps): React.JSX.Element {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className={styles.contact}>
      <div ref={ref} className={`reveal fade-up ${visible ? 'visible' : ''}`}>
        <span className="section-eyebrow">{data.eyebrow}</span>
        <h2>{data.heading}</h2>
        <p className={`section-sub ${styles.subCentered}`}>{data.sub}</p>

        <div className={styles.rippleWrap}>
          <div className={styles.ripple} />
          <div className={`${styles.ripple} ${styles.r2}`} />
          <div className={`${styles.ripple} ${styles.r3}`} />
          <div className={styles.orb} data-cursor-target>
            {initials}
          </div>
        </div>

        <div className={styles.links}>
          {data.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`btn ${link.variant === 'primary' ? 'primary' : ''}`}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.ariaLabel ? { 'aria-label': link.ariaLabel } : {})}
            >
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
