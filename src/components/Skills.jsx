import { skills } from '../data'
import { Reveal, SectionHead } from './UI'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="SKILLS & TECHNOLOGIES">
          What I <em>work with</em>
        </SectionHead>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.title} className="skill-card" delay={(i % 3) * 0.1}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
