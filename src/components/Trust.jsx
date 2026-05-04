import Reveal from './Reveal'

/* ── Logo: Fellys ── */
function LogoFellys() {
  return (
    <svg viewBox="0 0 200 90" className="client-logo-svg">
      {/* Orange circle with face silhouette */}
      <circle cx="38" cy="45" r="32" fill="#C9724A" />
      {/* Face profile (woman silhouette, white) */}
      <path
        d="M 38,18 Q 50,20 54,30 Q 58,40 54,50 Q 52,58 46,63
           Q 40,68 35,66 Q 28,64 26,56 L 24,45 Q 22,36 26,27 Q 30,20 38,18 Z"
        fill="white" opacity="0.92"
      />
      {/* Hair/top detail */}
      <path
        d="M 30,20 Q 34,14 42,15 Q 50,16 54,24 Q 50,18 42,18 Q 34,18 30,24 Z"
        fill="#C9724A"
      />
      {/* Small swallow/bird to the right of circle */}
      <path
        d="M 74,28 Q 78,24 84,26 Q 80,30 76,29 Z"
        fill="#555" opacity="0.7"
      />
      <path
        d="M 74,28 Q 78,32 84,30 Q 80,26 76,27 Z"
        fill="#555" opacity="0.7"
      />
      {/* FELLYS text */}
      <text x="116" y="46" textAnchor="middle" fill="#2a2a2a" fontSize="22" fontWeight="700"
        fontFamily="'Georgia',serif" letterSpacing="3">FELLYS</text>
      <line x1="76" y1="52" x2="156" y2="52" stroke="#aaa" strokeWidth="0.8" />
      <text x="116" y="62" textAnchor="middle" fill="#888" fontSize="7.5"
        fontFamily="sans-serif" letterSpacing="2">ÉVÉNEMENTIEL</text>
    </svg>
  )
}

/* ── Logo: Hug ── */
function LogoHug() {
  return (
    <svg viewBox="0 0 160 90" className="client-logo-svg">
      {/* Teal circle */}
      <circle cx="80" cy="45" r="38" fill="#4E7F96" />
      {/* Stylised "H" — two vertical brush strokes */}
      <path
        d="M 58,24 Q 56,30 57,45 Q 58,60 60,68"
        fill="none" stroke="white" strokeWidth="6" strokeLinecap="round"
      />
      {/* Right vertical of H */}
      <path
        d="M 76,30 Q 74,38 75,52 Q 76,62 78,70"
        fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"
      />
      {/* Crossbar of H */}
      <path d="M 58,46 Q 66,44 76,46" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* "ug" in cursive style */}
      <text x="96" y="58" textAnchor="start" fill="white" fontSize="26"
        fontFamily="'Georgia',serif" fontStyle="italic" fontWeight="400">ug</text>
    </svg>
  )
}

/* ── Logo: IDF Événements ── */
function LogoIDF() {
  return (
    <svg viewBox="0 0 200 110" className="client-logo-svg">
      {/* Decorative snowflake / star — 8 branches in gold */}
      <g transform="translate(100,32)">
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#B8943F" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-5" y1="-12" x2="0" y2="-18" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="-12" x2="0" y2="-18" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ))}
        <circle cx="0" cy="0" r="4" fill="#B8943F" />
      </g>
      {/* IDF ÉVÉNEMENTS */}
      <text x="100" y="68" textAnchor="middle" fill="#1B2B5E" fontSize="18" fontWeight="800"
        fontFamily="'Helvetica Neue',Arial,sans-serif" letterSpacing="2">IDF ÉVÉNEMENTS</text>
      {/* Thin gold lines */}
      <line x1="28" y1="74" x2="172" y2="74" stroke="#B8943F" strokeWidth="0.8" />
      <text x="100" y="86" textAnchor="middle" fill="#888" fontSize="8"
        fontFamily="sans-serif" letterSpacing="2.5">AGENCE ÉVÉNEMENTIELLE PARIS</text>
    </svg>
  )
}

/* ── Logo: UFCV ── */
function LogoUFCV() {
  return (
    <svg viewBox="0 0 200 90" className="client-logo-svg">
      {/* U */}
      <text x="10" y="62" fill="#111" fontSize="52" fontWeight="900"
        fontFamily="'Helvetica Neue',Arial,sans-serif">U</text>
      {/* F — black outer, blue bar replacing middle horizontal */}
      <text x="57" y="62" fill="#111" fontSize="52" fontWeight="900"
        fontFamily="'Helvetica Neue',Arial,sans-serif">F</text>
      {/* Blue horizontal bar over middle of F */}
      <rect x="57" y="38" width="28" height="9" fill="#0082C8" />
      {/* C — black outer, blue bar replacing middle horizontal */}
      <text x="101" y="62" fill="#111" fontSize="52" fontWeight="900"
        fontFamily="'Helvetica Neue',Arial,sans-serif">C</text>
      {/* Blue horizontal bar over middle of C */}
      <rect x="101" y="38" width="24" height="9" fill="#0082C8" />
      {/* V */}
      <text x="144" y="62" fill="#111" fontSize="52" fontWeight="900"
        fontFamily="'Helvetica Neue',Arial,sans-serif">V</text>
    </svg>
  )
}

const LOGOS = [
  { Component: LogoFellys, label: 'Fellys'          },
  { Component: LogoHug,    label: 'Hug'             },
  { Component: LogoIDF,    label: 'IDF Événements'  },
  { Component: LogoUFCV,   label: 'UFCV'            },
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
