import Reveal from './Reveal'

const VISAS = [
  {
    number: 'VISA 1 :',
    title: "Objectifs de l'alternance",
    text: "L'alternance représente pour moi le mode d'apprentissage idéal : elle permet une immersion concrète aux côtés de professionnels tout en mettant en pratique mes acquis théoriques. Ce Master m'aidera à approfondir mes compétences et à structurer solidement mon projet professionnel.",
  },
  {
    number: 'VISA 2 :',
    title: 'Ce que je vais apporter',
    text: "Investie et rigoureuse, je suis forte de proposition et m'engage à mener chaque projet à son terme avec exigence.",
  },
  {
    number: 'VISA 3 :',
    title: 'Ce que je souhaite apprendre',
    text: "Passionnée par l'événementiel, je souhaite contribuer à la réussite de projets uniques tout en renforçant mon expertise en négociation et en gestion budgétaire.",
  },
]

export default function Objectives() {
  return (
    <section id="objectives" className="section-objectives">
      <Reveal className="visa-intro">
        <div className="working-tag">WORKING</div>
        <h2 className="visa-heading">VISA</h2>
        <p className="visa-sub"><em>Mes objectifs de voyage</em></p>
      </Reveal>

      <div className="visa-cards">
        {VISAS.map(({ number, title, text }, i) => (
          <Reveal key={number} delay={i * 0.1}>
            <div className="visa-card">
              <div className="vc-number">{number}</div>
              <h3><em>{title}</em></h3>
              <div className="vc-divider" />
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
