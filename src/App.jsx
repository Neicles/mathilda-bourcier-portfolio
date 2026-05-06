import { useState } from 'react'
import Nav from './components/Nav'
import Cover from './components/Cover'
import Gallery from './components/Gallery'
import Projects from './components/Projects'

export default function App() {
  const [page, setPage] = useState('agence')

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main className="main-paged">
        <div className={`page-slot${page === 'agence'  ? ' active' : ''}`}><Cover /></div>
        <div className={`page-slot${page === 'galerie' ? ' active' : ''}`}><Gallery /></div>
        <div className={`page-slot${page === 'voyage'  ? ' active' : ''}`}><Projects /></div>
      </main>
    </>
  )
}
