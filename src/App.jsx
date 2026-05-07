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
import Contact from './components/Contact'

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
      <main className={`main-paged${fading ? ' page-fading' : ''}`}>
        <div className={`page-slot page-slot--cover${page === 'accueil' ? ' active' : ''}`}><Cover /></div>
        <div className={`page-slot${page === 'agence'   ? ' active' : ''}`}>
          <Objectives />
          <Skills />
          <Trust />
        </div>
        <div className={`page-slot${page === 'galerie'  ? ' active' : ''}`}><Gallery /></div>
        <div className={`page-slot${page === 'voyage'   ? ' active' : ''}`}><Projects /></div>
        <div className={`page-slot${page === 'contact'  ? ' active' : ''}`}><Contact /></div>
      </main>
    </>
  )
}
