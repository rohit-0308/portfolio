import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar(): React.JSX.Element {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.row}>
        <a href="#top" className={styles.logo}>
          RK • Frontend
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
