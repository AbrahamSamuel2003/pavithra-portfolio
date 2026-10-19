import { navLinks, profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong className="footer-name">{profile.first}</strong>
          <span>{profile.role}</span>
        </div>
        <ul>
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="footer-icons">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              gh
            </a>
          )}
          <a href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
