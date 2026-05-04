import Reveal from './Reveal'

/* ── Logo: Fondation Ronald McDonald ── */
function LogoRonald() {
  return (
    <svg viewBox="0 0 160 90" className="client-logo-svg">
      {/* Golden arches */}
      <path
        d="M 28,62 L 28,24 Q 28,14 40,14 Q 52,14 52,24 L 52,48
           L 52,24 Q 52,14 64,14 Q 76,14 76,24 L 76,62"
        fill="none" stroke="#FFC72C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Heart */}
      <path
        d="M 100,28 Q 100,20 108,20 Q 116,20 116,28 Q 116,20 124,20 Q 132,20 132,28 Q 132,36 116,46 Q 100,36 100,28 Z"
        fill="#DA291C"
      />
      <text x="80" y="76" textAnchor="middle" fill="#1a1a2e" fontSize="9" fontWeight="700" fontFamily="sans-serif">Fondation Ronald McDonald</text>
    </svg>
  )
}

/* ── Logo: Cap Sciences ── */
function LogoCapSciences() {
  return (
    <svg viewBox="0 0 160 90" className="client-logo-svg">
      {/* Bubbles / dots */}
      <circle cx="20" cy="20" r="5" fill="#009B8D" />
      <circle cx="34" cy="12" r="3.5" fill="#009B8D" opacity="0.7" />
      <circle cx="46" cy="18" r="2.5" fill="#009B8D" opacity="0.5" />
      <text x="80" y="42" textAnchor="middle" fill="#009B8D" fontSize="22" fontWeight="900"
        fontFamily="'Helvetica Neue',sans-serif" letterSpacing="1">CAP</text>
      <text x="80" y="60" textAnchor="middle" fill="#1B2B5E" fontSize="14" fontWeight="700"
        fontFamily="'Helvetica Neue',sans-serif" letterSpacing="3">SCIENCES</text>
      <text x="80" y="75" textAnchor="middle" fill="#888" fontSize="8.5"
        fontFamily="sans-serif" fontStyle="italic">Découvrons ensemble</text>
    </svg>
  )
}

/* ── Logo: Oléron Comedy ── */
function LogoOleron() {
  return (
    <svg viewBox="0 0 160 90" className="client-logo-svg">
      {/* Fish silhouette (matching the stamp from the PDF) */}
      <g transform="translate(80,28)">
        <path
          d="M -30,0 Q -15,-14 0,-10 Q 18,-14 30,0 Q 18,14 0,10 Q -15,14 -30,0 Z"
          fill="#2560A0"
        />
        {/* Eye */}
        <circle cx="18" cy="-4" r="3" fill="white" />
        <circle cx="18" cy="-4" r="1.5" fill="#2560A0" />
        {/* Tail */}
        <path d="M -30,0 L -42,-10 L -42,10 Z" fill="#2560A0" />
        {/* Fin */}
        <path d="M -4,-10 Q 2,-20 10,-10" fill="none" stroke="#2560A0" strokeWidth="1.5" />
      </g>
      <text x="80" y="57" textAnchor="middle" fill="#2560A0" fontSize="12" fontWeight="800"
        fontFamily="'Helvetica Neue',sans-serif" letterSpacing="1">OLÉRON COMEDY</text>
      <text x="80" y="72" textAnchor="middle" fill="#888" fontSize="8.5"
        fontFamily="sans-serif">Festival d'humour</text>
    </svg>
  )
}

/* ── Logo: INPAC Bordeaux ── */
function LogoInpac() {
  return (
    <svg viewBox="0 0 160 90" className="client-logo-svg">
      {/* Decorative line */}
      <line x1="30" y1="20" x2="130" y2="20" stroke="#C5A84B" strokeWidth="2" />
      <text x="80" y="48" textAnchor="middle" fill="#1B2B5E" fontSize="30" fontWeight="900"
        fontFamily="'Helvetica Neue',sans-serif" letterSpacing="4">INPAC</text>
      {/* tagline */}
      <text x="80" y="62" textAnchor="middle" fill="#888" fontSize="9"
        fontFamily="sans-serif" letterSpacing="2">BORDEAUX</text>
      <line x1="30" y1="70" x2="130" y2="70" stroke="#C5A84B" strokeWidth="2" />
      <text x="80" y="82" textAnchor="middle" fill="#999" fontSize="7.5"
        fontFamily="sans-serif" fontStyle="italic">École événementielle</text>
    </svg>
  )
}

const LOGOS = [
  { Component: LogoRonald,      label: 'Fondation Ronald McDonald' },
  { Component: LogoCapSciences, label: 'Cap Sciences'              },
  { Component: LogoOleron,      label: 'Oléron Comedy'             },
  { Component: LogoInpac,       label: 'INPAC Bordeaux'            },
]

export default function Trust() {
  return (
    <section id="trust" className="section-trust">
      <Reveal tag="h2" className="trust-title">
        ILS M'ONT FAIT CONFIANCE, POURQUOI PAS VOUS&nbsp;?
      </Reveal>
      <Reveal className="trust-logos" delay={0.1}>
        {LOGOS.map(({ Component, label }) => (
          <div key={label} className="trust-card">
            <Component />
          </div>
        ))}
      </Reveal>
    </section>
  )
}
