import Reveal from './Reveal'

/* Simplified SVG map outlines */
function MapBordeaux() {
  return (
    <svg viewBox="0 0 140 160" className="map-svg">
      <path
        d="M 52,12 L 70,8 L 86,12 L 98,22 L 106,38 L 110,56 L 108,76
           L 104,98 L 96,118 L 84,132 L 68,137 L 52,133 L 40,122
           L 32,108 L 30,88 L 32,68 L 36,48 L 44,28 Z"
        fill="var(--navy)" stroke="none"
      />
      <text x="70" y="80" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">Bordeaux</text>
    </svg>
  )
}

function MapOleron() {
  return (
    <svg viewBox="0 0 150 140" className="map-svg">
      <path
        d="M 30,22 L 55,14 L 82,18 L 108,28 L 122,48 L 126,70
           L 118,92 L 102,108 L 76,116 L 52,110 L 34,96
           L 22,74 L 20,52 L 26,34 Z"
        fill="var(--navy)" stroke="none"
      />
      {/* Small island — Île d'Oléron */}
      <ellipse cx="12" cy="72" rx="7" ry="16" fill="var(--navy)" opacity="0.7" transform="rotate(-15,12,72)"/>
      <text x="75" y="70" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">Île d'Oléron</text>
    </svg>
  )
}

function MapParis() {
  return (
    <svg viewBox="0 0 150 130" className="map-svg">
      <path
        d="M 48,18 L 68,10 L 94,12 L 116,24 L 126,46 L 124,70
           L 112,88 L 88,96 L 62,94 L 42,80 L 34,58 L 38,34 Z"
        fill="var(--navy)" stroke="none"
      />
      <text x="80" y="58" textAnchor="middle" fill="white" fontSize="12" fontFamily="serif" fontStyle="italic">Paris</text>
    </svg>
  )
}

const CARDS = [
  { label: 'Bordeaux',     rotation: '-3deg',  Map: MapBordeaux, caption: 'Ma ville' },
  { label: "Île d'Oléron", rotation: '1.5deg', Map: MapOleron,   caption: 'Festival' },
  { label: 'Paris',        rotation: '-1deg',  Map: MapParis,    caption: 'Mes ambitions' },
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
            <p className="polaroid-caption">{caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
