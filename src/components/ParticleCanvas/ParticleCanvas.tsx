import { useEffect, useRef } from 'react'
import styles from './ParticleCanvas.module.css'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const LINK_DIST = 130

function rand(a: number, b: number): number {
  return Math.random() * (b - a) + a
}

export function ParticleCanvas(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let particles: Particle[] = []
    let rafId = 0
    const mouse = { x: -1000, y: -1000 }

    const count = (): number => (window.innerWidth < 760 ? 38 : 80)

    const resize = (): void => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const makeParticles = (): void => {
      particles = []
      const total = count()
      for (let i = 0; i < total; i++) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.3, 0.3),
          vy: rand(-0.3, 0.3),
          r: rand(1, 2.4),
        })
      }
    }

    const onMouseMove = (e: MouseEvent): void => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onResize = (): void => {
      resize()
      makeParticles()
    }

    const draw = (): void => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dm = Math.sqrt(dx * dx + dy * dy)
        if (dm < 110) {
          const force = ((110 - dm) / 110) * 0.6
          p.x += (dx / dm) * force
          p.y += (dy / dm) * force
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180, 200, 255, 0.7)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          if (!a || !b) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.45
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    makeParticles()
    window.addEventListener('resize', onResize)
    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles" className={styles.canvas} aria-hidden="true" />
}
