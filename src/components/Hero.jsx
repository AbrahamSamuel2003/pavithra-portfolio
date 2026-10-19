import { useEffect, useRef } from 'react'
import { profile, orbitBadges } from '../data'
import { LeafBranch, Sparkle, Planet, Squiggle } from './Decor'
import { Magnetic } from './UI'
import { reducedMotion } from '../hooks'

export default function Hero({ ready }) {
  const ref = useRef(null)

  // Parallax: photo, leaves and pedestal drift at different speeds on scroll.
  useEffect(() => {
    if (reducedMotion()) return
    const el = ref.current
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.innerWidth < 900 ? 0 : Math.min(window.scrollY, 900)
        el.style.setProperty('--sy', y)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="home" ref={ref} className={`hero ${ready ? 'ready' : ''}`}>
      <div className="leaf-wrap leaf-wrap-tr">
        <LeafBranch className="leaf leaf-tr" />
      </div>
      <div className="leaf-wrap leaf-wrap-bl">
        <LeafBranch className="leaf leaf-bl" />
      </div>

      <Sparkle className="spark s1" />
      <Sparkle className="spark s2" />
      <Sparkle className="spark s3" />
      <Sparkle className="spark s4" />
      <Planet className="planet" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow rise" style={{ '--d': '.15s' }}>
            {profile.role.toUpperCase()}
          </p>
          <h1 className="headline" aria-label={`Hi, I'm ${profile.first} S.`}>
            <span className="line" aria-hidden="true">
              <span style={{ '--d': '.3s' }}>Hi, I'm</span>
            </span>
            <span className="line" aria-hidden="true">
              <span style={{ '--d': '.45s' }}>
                <em>{profile.first}</em> S.
              </span>
            </span>
          </h1>
          <p className="lede rise" style={{ '--d': '.7s' }}>
            {profile.tagline}
          </p>
          <div className="cta rise" style={{ '--d': '.85s' }}>
            <Magnetic>
              <a className="btn btn-solid" href="#projects">
                <span>View Projects</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-outline" href={profile.resume} download>
                <span>Download Resume</span>
              </a>
            </Magnetic>
          </div>
          <div className="social rise" style={{ '--d': '1s' }}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="stage">
            <div className="orbit" aria-hidden="true">
              {orbitBadges.map((b, i) => (
                <span key={b} className="badge-wrap" style={{ '--a': `${(360 / orbitBadges.length) * i - 20}deg` }}>
                  <span className="badge">{b}</span>
                </span>
              ))}
            </div>

            <div className="parallax-photo">
              <div className="pedestal" aria-hidden="true" />
              <div className="arch">
                <img
                  src={profile.photo}
                  alt="Portrait of Pavithra S, smiling and looking to her side"
                  width="1023"
                  height="1100"
                />
              </div>
              <Sparkle className="spark clip-star" />
            </div>

            <div className="note">
              <span>{profile.badge}</span>
              <Squiggle className="squiggle" />
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <span>Scroll to explore</span>
        <i />
      </a>
    </section>
  )
}
