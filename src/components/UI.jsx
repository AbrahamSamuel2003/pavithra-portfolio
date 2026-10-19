import { useEffect, useRef, useState } from 'react'
import { useInView, reducedMotion } from '../hooks'
import { profile } from '../data'

/** Fades + rises into view. `delay` is in seconds. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, children }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{children}</h2>
    </Reveal>
  )
}

/** Wraps a button/link so it is gently pulled toward the cursor. */
export function Magnetic({ children }) {
  const ref = useRef(null)

  const move = (e) => {
    if (reducedMotion()) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * 0.22
    const y = (e.clientY - (r.top + r.height / 2)) * 0.32
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const leave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <span ref={ref} className="magnetic" onMouseMove={move} onMouseLeave={leave}>
      {children}
    </span>
  )
}

/** Slight 3D tilt following the pointer. */
export function Tilt({ children, className = '' }) {
  const ref = useRef(null)

  const move = (e) => {
    if (reducedMotion() || window.innerWidth < 900) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-py * 3.2).toFixed(2)}deg) rotateY(${(px * 4.2).toFixed(2)}deg) translateY(-4px)`
  }
  const leave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  )
}

/** Thin burgundy bar at the top showing how far down the page you are. */
export function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    let raf
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const p = max > 0 ? window.scrollY / max : 0
        if (ref.current) ref.current.style.transform = `scaleX(${p})`
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="progress" ref={ref} aria-hidden="true" />
}

/** Burgundy ring that trails the mouse (desktop with a real pointer only). */
export function Cursor() {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(fine && !reducedMotion())
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      const hot = e.target.closest && e.target.closest('a, button, input, textarea, .tilt')
      el.classList.toggle('hot', !!hot)
    }
    const loop = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return <div className="cursor" ref={ref} aria-hidden="true" />
}

export function Loader({ done }) {
  return (
    <div className={`loader ${done ? 'done' : ''}`} aria-hidden={done} aria-label="Loading portfolio">
      <div className="loader-card">
        <div className="loader-avatar-stage">
          <div className="loader-ring loader-ring-outer" />
          <div className="loader-ring loader-ring-mid" />
          <div className="loader-ring-pulse" />

          <div className="loader-photo-frame">
            <img
              src={profile.photo}
              alt={profile.name}
              className="loader-photo-img"
              width="96"
              height="96"
            />
          </div>

          <span className="loader-sparkle" aria-hidden="true">✦</span>
        </div>

        <div className="loader-info">
          <p className="loader-name">{profile.name}</p>
          <div className="loader-line-track">
            <div className="loader-line-bar" />
          </div>
          <span className="loader-sub">Loading Portfolio</span>
        </div>
      </div>
    </div>
  )
}
