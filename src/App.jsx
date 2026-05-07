import { useState } from 'react'
import Nav from './components/Nav'
import Cover from './components/Cover'
import Objectives from './components/Objectives'
import Skills from './components/Skills'
import Trust from './components/Trust'
import Gallery from './components/Gallery'
import Projects from './components/Projects'

export default function App() {
  const [page, setPage] = useState('accueil')

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main className="main-paged">
        <div className={`page-slot page-slot--cover${page === 'accueil' ? ' active' : ''}`}><Cover /></div>
        <div className={`page-slot${page === 'agence'  ? ' active' : ''}`}>
          <Objectives />
          <Skills />
          <Trust />
        </div>
        <div className={`page-slot${page === 'galerie' ? ' active' : ''}`}><Gallery /></div>
        <div className={`page-slot${page === 'voyage'  ? ' active' : ''}`}><Projects /></div>
      </main>
    </>
  )
}
