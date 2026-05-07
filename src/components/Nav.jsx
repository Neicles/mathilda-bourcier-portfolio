import { useState } from 'react'

const links = [
  { page: 'voyage',  label: 'Mon voyage'  },
  { page: 'galerie', label: 'Ma Galerie'  },
  { page: 'agence',  label: "L'agence"    },
  { page: 'contact', label: 'Contact'     },
]

export default function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false)

  const navigate = (p) => { setPage(p); setOpen(false) }

  return (
    <nav className="passport-nav">
      <div className="nav-logo" onClick={() => navigate('accueil')} style={{ cursor: 'pointer' }}>
        <span className="logo-mb">M<span className="logo-b">B</span></span>
      </div>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(({ page: p, label }) => (
          <li key={p}>
            <a
              href="#"
              className={page === p ? 'nav-active' : ''}
              onClick={(e) => { e.preventDefault(); navigate(p) }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>
    </nav>
  )
}
