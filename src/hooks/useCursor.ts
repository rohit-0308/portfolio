import { useEffect, useRef } from 'react'

interface UseCursorOptions {
  hoverClass: string
  hoverSelector?: string
}

export function useCursor({
  hoverClass,
  hoverSelector = 'a, button, [data-cursor-target]',
}: UseCursorOptions): {
  dotRef: React.RefObject<HTMLDivElement | null>
  ringRef: React.RefObject<HTMLDivElement | null>
} {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let rafId = 0

    const onMove = (e: MouseEvent): void => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    const tick = (): void => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    const onEnter = (): void => ring.classList.add(hoverClass)
    const onLeave = (): void => ring.classList.remove(hoverClass)

    const targets = Array.from(document.querySelectorAll(hoverSelector))
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [hoverClass, hoverSelector])

  return { dotRef, ringRef }
}
