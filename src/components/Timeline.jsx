import { experience, education, activities } from '../data'
import { Reveal, SectionHead } from './UI'
import { useInView } from '../hooks'

/** A vertical timeline whose line draws itself and whose dots pulse when reached. */
function Timeline({ items }) {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -5% 0px' })
  return (
    <ol ref={ref} className={`timeline ${inView ? 'in' : ''}`}>
      <span className="timeline-line" aria-hidden="true" />
      {items.map((it, i) => (
        <li key={it.title + it.when} className="t-item" style={{ '--i': i }}>
          <span className="t-dot" aria-hidden="true" />
          <p className="t-when">{it.when}</p>
          <h3>{it.title}</h3>
          {it.sub && <p className="t-sub">{it.sub}</p>}
          {it.text && <p className="t-text">{it.text}</p>}
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container narrow">
        <SectionHead eyebrow="EXPERIENCE">
          Internship / <em>Project Experience</em>
        </SectionHead>
        <Timeline items={experience} />
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container narrow">
        <SectionHead eyebrow="EDUCATION">
          Academic <em>background</em>
        </SectionHead>
        <Timeline items={education} />

        <Reveal className="beyond">
          <p className="eyebrow">BEYOND THE CLASSROOM</p>
          <div className="beyond-grid">
            {activities.map((a) => (
              <div key={a.title} className="beyond-card">
                <small>{a.when}</small>
                <strong>{a.title}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
