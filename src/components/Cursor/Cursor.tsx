import { useCursor } from '../../hooks/useCursor'
import styles from './Cursor.module.css'

export function Cursor(): React.JSX.Element {
  const { dotRef, ringRef } = useCursor({ hoverClass: styles.hover })

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
