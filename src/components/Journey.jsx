import Reveal from './Reveal'

const CARDS = [
  { label: 'Bordeaux',   rotation: '-3deg',  src: '/logo/bordeaux.webp', caption: 'Ma ville'     },
  { label: 'Les Landes', rotation: '1.5deg', src: '/logo/landes.webp',   caption: 'Mes racines'  },
  { label: 'Paris',      rotation: '-1deg',  src: '/logo/paris.webp',    caption: 'Mes ambitions' },
]

export default function Journey() {
  return (
    <section id="journey" className="section-journey">
      <Reveal tag="h2" className="journey-title">
        Un voyage à votre image
      </Reveal>
      <div className="polaroids">
        {CARDS.map(({ label, rotation, src }) => (
          <div key={label} className="polaroid-wrap" style={{ '--rot': rotation }}>
            <img src={src} alt={label} className="polaroid-img-real" />
          </div>
        ))}
      </div>
    </section>
  )
}
