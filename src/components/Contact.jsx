import { useState } from 'react'
import { profile } from '../data'
import { Reveal, SectionHead, Magnetic } from './UI'
import { CheckMark } from './Decor'

const encode = (data) => new URLSearchParams(data).toString()

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '', 'bot-field': '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `New portfolio inquiry from ${values.name}`,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent')
        setValues({ name: '', email: '', message: '', 'bot-field': '' })
      } else if (data.message && data.message.includes('Activation')) {
        setStatus('activation-needed')
      } else if (res.ok) {
        setStatus('sent')
        setValues({ name: '', email: '', message: '', 'bot-field': '' })
      } else {
        throw new Error(data.message || 'Request failed')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <SectionHead eyebrow="CONTACT">
            Let's <em>connect.</em>
          </SectionHead>
          <Reveal as="p" className="about-text" delay={0.1}>
            I'm open to opportunities in software development and related IT roles.
          </Reveal>
          <Reveal className="contact-links" delay={0.2}>
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              {profile.email}
            </a>
            <a href={profile.phoneHref}>
              <span>Phone</span>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              Connect on LinkedIn ↗
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                See my code ↗
              </a>
            )}
          </Reveal>
        </div>

        <Reveal className="form-card" delay={0.15}>
          {status === 'sent' ? (
            <div className="sent" role="status">
              <CheckMark className="check" />
              <h3>Message sent</h3>
              <p>Thank you! Your message has been sent directly to {profile.email}. Pavithra will get back to you soon.</p>
              <button className="link-btn" onClick={() => setStatus('idle')}>
                Send another message
              </button>
            </div>
          ) : status === 'activation-needed' ? (
            <div className="sent" role="status">
              <CheckMark className="check" />
              <h3>One-Time Activation Required</h3>
              <p>
                An activation email has been sent to <strong>{profile.email}</strong>.
                Please check your inbox (or spam) and click <strong>"Activate Form"</strong> once to start receiving all messages directly!
              </p>
              <button className="link-btn" onClick={() => setStatus('idle')}>
                Back to form
              </button>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={onSubmit}>
              <h3>Send Message</h3>
              <p className="form-note">Messages submitted here will be sent to Pavithra's email.</p>
              <p className="hp" aria-hidden="true">
                <label>
                  Don't fill this out <input name="bot-field" value={values['bot-field']} onChange={onChange} tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className="field">
                <input id="f-name" name="name" placeholder=" " value={values.name} onChange={onChange} required autoComplete="name" />
                <label htmlFor="f-name">Your name</label>
              </div>
              <div className="field">
                <input id="f-email" name="email" type="email" placeholder=" " value={values.email} onChange={onChange} required autoComplete="email" />
                <label htmlFor="f-email">Your email</label>
              </div>
              <div className="field">
                <textarea id="f-msg" name="message" rows="5" placeholder=" " value={values.message} onChange={onChange} required />
                <label htmlFor="f-msg">Your message</label>
              </div>
              <Magnetic>
                <button className="btn btn-solid" type="submit" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                </button>
              </Magnetic>
              {status === 'error' && (
                <p className="form-error" role="alert">
                  Couldn't send that just now. Please email <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
