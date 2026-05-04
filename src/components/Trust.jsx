import Reveal from './Reveal'

const LOGOS = [
  { name: 'Fondation\nRonald McDonald', sub: 'Junior Agence 2023' },
  { name: 'Cap\nSciences',              sub: 'Junior Agence 2024' },
  { name: 'Oléron\nComedy',             sub: 'Junior Agence 2022' },
  { name: 'INPAC\nBordeaux',            sub: 'École' },
]

export default function Trust() {
  return (
    <section id="trust" className="section-trust">
      <Reveal tag="h2" className="trust-title">
        ILS M'ONT FAIT CONFIANCE, POURQUOI PAS VOUS&nbsp;?
      </Reveal>
      <Reveal className="trust-logos" delay={0.1}>
        {LOGOS.map(({ name, sub }) => (
          <div key={name} className="trust-card">
            <div className="trust-name">
              {name.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
            <div className="trust-sub">{sub}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
