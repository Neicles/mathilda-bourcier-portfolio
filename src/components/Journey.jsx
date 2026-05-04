import Reveal from './Reveal'

/* ── Gironde (33) — avec l'estuaire en blanc ── */
function MapGironde() {
  return (
    <svg viewBox="0 0 200 240" className="map-svg">
      {/* Corps principal */}
      <path
        d="M 50,6 L 68,3 L 84,4 L 100,9 L 114,17 L 126,29 L 136,44
           L 143,60 L 149,78 L 154,97 L 158,117 L 158,136 L 153,154
           L 145,169 L 135,182 L 122,193 L 107,200 L 90,204
           L 72,203 L 56,197 L 43,187 L 32,174 L 22,159
           L 15,142 L 10,124 L 8,105 L 8,86 L 10,67
           L 14,50 L 19,35 L 26,22 L 35,12 L 44,7 Z"
        fill="#1B2B5E"
      />
      {/* Estuaire de la Gironde (blanc) */}
      <path
        d="M 50,6 L 68,3 L 84,4 L 100,9 L 113,17
           L 96,34 L 77,48 L 58,59 L 42,67
           L 30,68 L 22,62 L 19,50 L 20,38
           L 24,25 L 31,14 L 41,7 Z"
        fill="white"
      />
      <text x="100" y="168" textAnchor="middle" fill="white" fontSize="13"
        fontFamily="'Cormorant Garamond',Georgia,serif" fontStyle="italic">Bordeaux</text>
    </svg>
  )
}

/* ── Landes (40) — quasi-rectangulaire ── */
function MapLandes() {
  return (
    <svg viewBox="0 0 200 240" className="map-svg">
      <path
        d="M 18,14 L 48,7 L 88,4 L 126,8 L 158,18 L 172,34
           L 179,54 L 182,78 L 181,104 L 178,130 L 172,154
           L 162,175 L 148,192 L 130,204 L 108,211
           L 85,212 L 63,207 L 44,196 L 28,180
           L 15,161 L 6,139 L 2,115 L 2,90
           L 4,66 L 8,44 L 13,26 Z"
        fill="#1B2B5E"
      />
      {/* Quelques crénelages sur la bordure est */}
      <path
        d="M 172,34 L 176,42 L 170,50 L 178,60 L 179,54 Z"
        fill="#1B2B5E"
      />
      <path
        d="M 178,130 L 183,138 L 176,148 L 172,154 Z"
        fill="#1B2B5E"
      />
      <text x="100" y="118" textAnchor="middle" fill="white" fontSize="13"
        fontFamily="'Cormorant Garamond',Georgia,serif" fontStyle="italic">Les Landes</text>
    </svg>
  )
}

/* ── Paris (75) — compact ── */
function MapParis() {
  return (
    <svg viewBox="0 0 200 240" className="map-svg">
      <path
        d="M 80,55 L 98,47 L 118,49 L 134,58 L 146,72
           L 152,89 L 150,108 L 142,123 L 128,134
           L 110,140 L 90,139 L 72,132 L 57,120
           L 48,104 L 47,85 L 54,68 L 66,57 Z"
        fill="#1B2B5E"
      />
      {/* Petites irrégularités pour le réalisme */}
      <path d="M 134,58 L 140,62 L 146,72 Z" fill="#1B2B5E" />
      <path d="M 150,108 L 155,114 L 150,120 L 142,123 Z" fill="#1B2B5E" />
      <path d="M 48,104 L 43,110 L 47,118 L 57,120 Z" fill="#1B2B5E" />
      <path d="M 54,68 L 48,72 L 47,80 L 54,76 Z" fill="#1B2B5E" />
      <text x="130" y="100" textAnchor="middle" fill="white" fontSize="13"
        fontFamily="'Cormorant Garamond',Georgia,serif" fontStyle="italic">Paris</text>
    </svg>
  )
}

const CARDS = [
  { label: 'Bordeaux',   rotation: '-3deg',   Map: MapGironde, caption: 'Ma ville' },
  { label: 'Les Landes', rotation: '1.5deg',  Map: MapLandes,  caption: 'Mes racines' },
  { label: 'Paris',      rotation: '-1deg',   Map: MapParis,   caption: 'Mes ambitions' },
]

export default function Journey() {
  return (
    <section id="journey" className="section-journey">
      <Reveal tag="h2" className="journey-title">
        Un voyage à votre image
      </Reveal>
      <div className="polaroids">
        {CARDS.map(({ label, rotation, Map, caption }) => (
          <div key={label} className="polaroid" style={{ '--rot': rotation }}>
            <div className="polaroid-img">
              <Map />
            </div>
            <div className="polaroid-footer">{caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
