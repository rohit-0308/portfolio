import { useEffect, useRef } from 'react'

export function useSkillBarFill(pct: number): React.RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLDivElement).style.width = `${pct}%`
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
    }
  }, [pct])

  return ref
}
