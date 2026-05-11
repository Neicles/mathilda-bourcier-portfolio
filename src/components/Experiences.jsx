import { useState } from 'react'

const CITIES = [
  {
    id: 'bordeaux',
    name: 'Bordeaux',
    img: '/logo/bordeaux.png',
    experiences: [
      {
        role: 'Stagiaire',
        company: 'IDF Événements',
        type: 'Agence événementielle',
        period: 'Mai – Juillet 2022',
        tasks: [
          "Création de recommandations événementielles pour clients corporate",
          "Réalisation d'une veille concurrentielle et analyse des tendances événementielles sur Excel",
          "Prises téléphoniques",
        ],
      },
      {
        role: 'Service Civique',
        company: 'UFCV',
        type: "Participation à l'organisation du Frayse Toch'",
        period: 'Janvier – Août 2025',
        tasks: [
          "Co-organisation du festival Frayse Toch' et plusieurs événements culturels pour un public de plus 1 000 personnes",
          "Conception et coordination d'un tremplin artistique et une scène ouverte de A à Z (booking des artistes, logistique, scénographie)",
          "Création de supports visuels et digitaux pour la promotion d'événements culturels et contribution au financement (300 € de bénéfices générés)",
          "Coordination de partenaires territoriaux et animation de projets de proximité",
        ],
      },
    ],
  },
  {
    id: 'landes',
    name: 'Landes',
    img: '/logo/landes.png',
    experiences: [
      {
        role: 'Stagiaire',
        company: 'HUG',
        type: "Création d'ambiance, fleuriste, décorateur, scénographe",
        period: 'Mai – Juillet 2023',
        tasks: [
          "Mise en place de scénographies pour événements haut de gamme (environ 20 mariages sur 1 à 2 jours chacun)",
          "Coordination logistique du montage et démontage au sein d'une équipe de 4 personnes",
          "Création de compositions florales premium sur une vingtaine de mariages",
        ],
      },
    ],
  },
  {
    id: 'paris',
    name: 'Paris',
    img: '/logo/paris.png',
    experiences: [
      {
        role: 'Stagiaire',
        company: 'AELLYS',
        type: 'Agence événementielle',
        period: 'Avril – Août 2024',
        tasks: [
          "Participation à l'organisation des expositions Johnny Hallyday (185 000 visiteurs) et de l'exposition immersive Toutânkhamon",
          "Planification et gestion en temps réel des événements (coordination terrain et gestion des imprévus)",
          "Élaboration et mise à jour d'outils de suivi logistique et administratif (tableaux de bord Excel)",
          "Accueil, orientation et assistance des visiteurs pendant les événements",
          "Soutien à la coordination logistique et opérationnelle du site",
        ],
      },
    ],
  },
]

export default function Experiences() {
  const [open, setOpen] = useState(null)
  const city = CITIES.find(c => c.id === open)

  return (
    <>
      <section className="section-exp-cities">
        <div className="visa-intro">
          <div className="working-tag">MES</div>
          <h2 className="visa-heading">EXPÉRIENCES</h2>
          <p className="visa-sub"><em>professionnelles</em></p>
        </div>
        <div className="exp-cities-row">
          {CITIES.map(c => (
            <button key={c.id} className="exp-city-btn" onClick={() => setOpen(c.id)}>
              <img src={c.img} alt={c.name} className="exp-city-img" />
              <span className="exp-city-name">{c.name}</span>
            </button>
          ))}
        </div>
      </section>


      <section className="section-softskills">
        <div className="softskills-layout">
          <img src="/logo/mathilda.png" alt="Mathilda Bourcier" className="softskills-photo" />
          <div className="softskills-right">
            <ul className="softskills-checklist">
              <li>Grande capacité d'adaptation</li>
              <li>Autonome et organisée</li>
              <li>Gestion du stress et forte de proposition</li>
              <li>Curieuse, j'analyse les enjeux et participe activement aux prises de décision</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-trust section-trust--cta">
        <h2 className="trust-title">ALORS ON FAIT ÉQUIPE&nbsp;?</h2>
        <div className="cta-contact">
          <a href="mailto:mathilda.bourcier7@gmail.com" className="cta-contact-link">✉ mathilda.bourcier7@gmail.com</a>
          <span className="cta-contact-sep">·</span>
          <a href="tel:+33782892010" className="cta-contact-link">📞 07 82 89 20 10</a>
          <span className="cta-contact-sep">·</span>
          <a href="https://www.linkedin.com/in/mathilda-bourcier-a22818224/" target="_blank" rel="noopener noreferrer" className="cta-contact-link">in Mathilda BOURCIER</a>
        </div>
      </section>

      {open && city && (
        <div className="exp-modal" onClick={() => setOpen(null)}>
          <div className="exp-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={() => setOpen(null)}>✕</button>
            <div className="exp-modal-header">
              <img src={city.img} alt={city.name} className="exp-modal-city-img" />
              <h2 className="exp-modal-city-name">{city.name}</h2>
            </div>
            <div className="exp-modal-list">
              {city.experiences.map((exp, i) => (
                <div key={i} className="exp-modal-card">
                  <div className="exp-modal-card-header">
                    <div>
                      <div className="exp-role">{exp.role} · <em>{exp.company}</em></div>
                      <div className="exp-type">{exp.type}</div>
                    </div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                  <div className="vc-divider" />
                  <ul className="exp-tasks">
                    {exp.tasks.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
