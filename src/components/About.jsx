import { profile, aboutChips } from '../data'
import { Reveal, SectionHead } from './UI'
import { Sparkle } from './Decor'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <div className="about-frame">
            <img src={profile.photo} alt="" loading="lazy" width="1023" height="1100" />
          </div>
          <Sparkle className="spark a-star" />
        </Reveal>

        <div>
          <SectionHead eyebrow="ABOUT">
            A little <em>about me</em>
          </SectionHead>
          <Reveal as="p" className="about-text" delay={0.1}>
            {profile.about}
          </Reveal>
          <div className="chips">
            {aboutChips.map((c, i) => (
              <Reveal key={c.label} className="info-chip" delay={0.2 + i * 0.1}>
                <small>{c.label}</small>
                <strong>{c.value}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
