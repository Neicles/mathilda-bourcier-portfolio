import { useState, useCallback } from 'react'
import Nav from './components/Nav'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Cover from './components/Cover'
import Objectives from './components/Objectives'
import Skills from './components/Skills'
import Trust from './components/Trust'
import Gallery from './components/Gallery'
import Projects from './components/Projects'

export default function App() {
  const [page, setPage] = useState('accueil')
  const [fading, setFading] = useState(false)

  const navigate = useCallback((newPage) => {
    if (newPage === page) return
    setFading(true)
    setTimeout(() => {
      setPage(newPage)
      setFading(false)
    }, 250)
  }, [page])

  return (
    <>
      <Cursor />
      <Loader />
      <Nav page={page} setPage={navigate} />
      <footer className="contact-bar">
        <a href="mailto:mathilda.bourcier7@gmail.com" className="contact-bar-link">✉ mathilda.bourcier7@gmail.com</a>
        <span className="contact-bar-sep">·</span>
        <a href="tel:+33782892010" className="contact-bar-link">📞 07 82 89 20 10</a>
        <span className="contact-bar-sep">·</span>
        <a href="https://www.linkedin.com/in/mathilda-bourcier-a22818224/" target="_blank" rel="noopener noreferrer" className="contact-bar-link">in Mathilda BOURCIER</a>
      </footer>
      <main className={`main-paged${fading ? ' page-fading' : ''}`}>
        <div className={`page-slot page-slot--cover${page === 'accueil' ? ' active' : ''}`}><Cover /></div>
        <div className={`page-slot${page === 'agence'   ? ' active' : ''}`}>
          <Objectives />
          <Skills />
          <Trust />
        </div>
        <div className={`page-slot${page === 'galerie'  ? ' active' : ''}`}><Gallery /></div>
        <div className={`page-slot${page === 'voyage'   ? ' active' : ''}`}><Projects /></div>
      </main>
    </>
  )
}
