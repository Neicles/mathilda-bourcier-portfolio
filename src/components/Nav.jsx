import { useState, useEffect } from 'react'

const links = [
  { href: '#identity', label: 'Identité' },
  { href: '#objectives', label: 'Visa' },
  { href: '#projects', label: 'Projets' },
  { href: '#why-me', label: 'Autorisation' },
  { href: '#contact', label: 'Contact', cta: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`passport-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-mb">
          M<span className="logo-b">B</span>
        </span>
      </div>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(({ href, label, cta }) => (
          <li key={href}>
            <a href={href} className={cta ? 'nav-cta' : ''} onClick={() => setOpen(false)}>
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
