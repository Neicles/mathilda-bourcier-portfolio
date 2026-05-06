import Reveal from './Reveal'

const CATS = [
  {
    icon: '📋',
    title: 'Gestion événementielle',
    items: [
      'Gestion de projet',
      'Coordination événementielle',
      'Rétroplanning',
      'Gestion prestataires',
      'Production terrain',
      'Recherche de partenaires',
    ],
  },
  {
    icon: '✏️',
    title: 'Communication & Création',
    items: [
      'Conception de concepts événementiels',
      'Création de supports visuels',
      'Recommandations stratégiques',
    ],
  },
  {
    icon: '💻',
    title: 'Logiciels',
    items: [
      'Suite Adobe (InDesign, Illustrator, Photoshop)',
      'Premiere Pro',
      'Canva',
      'Excel',
    ],
  },
]

const SOFT = ['Perfectionniste', 'Adaptabilité', 'Curieuse', 'Sens de l\'organisation', 'Travail en équipe']

const EXTRAS = [
  { label: 'Voyages', value: 'Angleterre · Grèce · Espagne · Corse · Irlande (jumelage) · Albanie' },
  { label: 'Loisirs', value: 'Scrapbooking, musique, photographie, montage vidéo, bénévolat, organisation d\'évènements festifs familiaux' },
  { label: 'Langues', value: 'Anglais niveau C1 · Espagnol niveau A2' },
  { label: 'Projet Voltaire', value: 'Score : 640' },
]

export default function Skills() {
  return (
    <section className="section-skills">
      <Reveal className="skills-intro">
        <div className="skills-stamp">COMPÉTENCES</div>
        <h2 className="skills-heading">MES ATOUTS</h2>
      </Reveal>

      <div className="skills-grid">
        {CATS.map(({ icon, title, items }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{icon}</span>
                <h3>{title}</h3>
              </div>
              <ul className="skill-list">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="soft-skills-wrap" delay={0.1}>
        <p className="soft-skills-label">Qualités personnelles</p>
        <div className="soft-skills">
          {SOFT.map((s) => <span key={s} className="soft-pill">{s}</span>)}
        </div>
      </Reveal>

      <div className="skills-extras">
        {EXTRAS.map(({ label, value }, i) => (
          <Reveal key={label} delay={i * 0.07}>
            <div className="skills-extra-item">
              <span className="extra-label">{label}</span>
              <p className="extra-value">{value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
