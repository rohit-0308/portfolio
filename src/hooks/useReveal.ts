import { useEffect, useRef, useState } from 'react'

type RevealCallback = () => void

const callbacks = new WeakMap<Element, RevealCallback>()
let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target)
            cb?.()
            sharedObserver?.unobserve(entry.target)
            callbacks.delete(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
  }
  return sharedObserver
}

export function useReveal<T extends Element = HTMLDivElement>(): {
  ref: React.RefObject<T | null>
  visible: boolean
} {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    callbacks.set(el, () => setVisible(true))
    obs.observe(el)
    return () => {
      obs.unobserve(el)
      callbacks.delete(el)
    }
  }, [])

  return { ref, visible }
}
