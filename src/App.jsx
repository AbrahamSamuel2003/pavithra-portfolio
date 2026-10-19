import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Experience, Education } from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Loader, ScrollProgress, Cursor } from './components/UI'
import { useActiveSection, reducedMotion } from './hooks'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function App() {
  const skip = reducedMotion()
  const [loaderDone, setLoaderDone] = useState(skip)
  const [ready, setReady] = useState(skip)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if (skip) return
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setReady(true), 900)
    const t2 = setTimeout(() => {
      setLoaderDone(true)
      document.body.style.overflow = ''
    }, 1250)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ''
    }
  }, [skip])

  return (
    <>
      <Loader done={loaderDone} />
      <ScrollProgress />
      <Cursor />
      <Nav active={active} />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
