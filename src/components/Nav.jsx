import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../data'

export default function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [ind, setInd] = useState({ left: 0, width: 0, show: false })
  const listRef = useRef(null)

  const measure = useCallback(() => {
    const el = listRef.current?.querySelector(`[data-id="${active}"]`)
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth, show: true })
    else setInd((s) => ({ ...s, show: false }))
  }, [active])

  useEffect(() => {
    measure()
  }, [measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    if (document.fonts?.ready) document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`} aria-label="Main">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">P</span>
          <span className="brand-name">{profile.first}</span>
        </a>

        <ul className="nav-links" ref={listRef}>
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                data-id={id}
                className={active === id ? 'active' : ''}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <span
            className="nav-indicator"
            style={{ transform: `translateX(${ind.left}px)`, width: ind.width, opacity: ind.show ? 1 : 0 }}
            aria-hidden="true"
          />
        </ul>

        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
