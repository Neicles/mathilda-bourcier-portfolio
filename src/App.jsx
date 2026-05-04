import Nav from './components/Nav'
import Cover from './components/Cover'
import Stamps from './components/Stamps'
import Welcome from './components/Welcome'
import Identity from './components/Identity'
import Objectives from './components/Objectives'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Cover />
        <Stamps />
        <Welcome />
        <Identity />
        <Objectives />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
    </>
  )
}
