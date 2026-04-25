import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export function Loader(): React.JSX.Element {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fadeOut = (): void => {
      window.setTimeout(() => setHidden(true), 500)
    }

    if (document.readyState === 'complete') {
      fadeOut()
      return
    }

    window.addEventListener('load', fadeOut)
    return () => {
      window.removeEventListener('load', fadeOut)
    }
  }, [])

  return (
    <div
      className={`${styles.loader} ${hidden ? styles.hidden : ''}`}
      aria-hidden={hidden}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={styles.ring} />
      <div className={styles.text}>Loading Portfolio</div>
    </div>
  )
}
