import Reveal from './Reveal'

const LOGOS = [
  { src: '/logo/fellys.webp',        label: 'Fellys'          },
  { src: '/logo/hug.webp',           label: 'Hug'             },
  { src: '/logo/idf-evenements.webp', label: 'IDF Événements' },
  { src: '/logo/ufcv.webp',          label: 'UFCV'            },
]

export default function Trust() {
  return (
    <section id="trust" className="section-trust">
      <Reveal tag="h2" className="trust-title">
        ILS M'ONT FAIT CONFIANCE, POURQUOI PAS VOUS&nbsp;?
      </Reveal>
      <Reveal className="trust-logos" delay={0.1}>
        {LOGOS.map(({ src, label }) => (
          <div key={label} className="trust-card">
            <img src={src} alt={label} className="client-logo-img" />
          </div>
        ))}
      </Reveal>
    </section>
  )
}
