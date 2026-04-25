import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Cursor } from './components/Cursor/Cursor'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Loader } from './components/Loader/Loader'
import { Marquee } from './components/Marquee/Marquee'
import { Navbar } from './components/Navbar/Navbar'
import { ParticleCanvas } from './components/ParticleCanvas/ParticleCanvas'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { resume } from './data/resume'

function App(): React.JSX.Element {
  const initials = resume.hero.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <>
      <Loader />
      <Cursor />
      <ParticleCanvas />
      <Navbar />
      <main id="top">
        <div className="container">
          <Hero data={resume.hero} />
          <Marquee items={resume.marquee} />
          <About data={resume.about} />
          <Experience meta={resume.experienceMeta} entries={resume.experience} />
          <Projects meta={resume.projectsMeta} projects={resume.projects} />
          <Skills meta={resume.skillsMeta} groups={resume.skillGroups} />
          <Contact data={resume.contact} initials={initials} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
