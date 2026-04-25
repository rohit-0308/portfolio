import styles from './Footer.module.css'

export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      © {year} Rohit Kumar — Crafted with React, TypeScript &amp; Vite.
    </footer>
  )
}
