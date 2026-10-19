import { projects } from '../data'
import { Reveal, SectionHead, Tilt } from './UI'
import { useInView, useCountUp } from '../hooks'

function Project({ p, index }) {
  const [ref, inView] = useInView()
  const count = useCountUp(p.n, inView)

  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''}`} style={{ '--d': `${index * 0.08}s` }}>
      <Tilt className="project">
        <span className="project-num" aria-label={`Project ${p.n}`}>
          {String(count).padStart(2, '0')}
        </span>
        <div className="project-body">
          <p className="project-date">{p.date}</p>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <ul className="tags">
            {p.tags.map((t, i) => (
              <li key={t} className="tag" style={{ '--i': i }}>
                {t}
              </li>
            ))}
          </ul>
          {(p.demo || p.code) && (
            <div className="project-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer">
                  Source code ↗
                </a>
              )}
            </div>
          )}
        </div>
        <span className="project-arrow" aria-hidden="true">
          ↗
        </span>
      </Tilt>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead eyebrow="PROJECTS">
          Things I've <em>built</em>
        </SectionHead>
        <div className="projects">
          {projects.map((p, i) => (
            <Project key={p.n} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
