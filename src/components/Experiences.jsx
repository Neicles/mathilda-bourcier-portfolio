import { useState } from 'react'
import Reveal from './Reveal'

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
          'Création de recommandations événementielles pour clients corporate',
          'Réalisation d\'une veille concurrentielle et analyse des tendances événementielles sur Excel',
          'Prises téléphoniques',
        ],
      },
      {
        role: 'Service Civique',
        company: 'UFCV',
        type: 'Participation à l\'organisation du Frayse Toch\'',
        period: 'Janvier – Août 2025',
        tasks: [
          'Co-organisation du festival Frayse Toch\' et plusieurs événements culturels pour un public de plus 1 000 personnes',
          'Conception et coordination d\'un tremplin artistique et une scène ouverte de A à Z (booking des artistes, logistique, scénographie)',
          'Création de supports visuels et digitaux pour la promotion d\'événements culturels et contribution au financement (300 € de bénéfices générés)',
          'Coordination de partenaires territoriaux et animation de projets de proximité',
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
        type: 'Création d\'ambiance, fleuriste, décorateur, scénographe',
        period: 'Mai – Juillet 2023',
        tasks: [
          'Mise en place de scénographies pour événements haut de gamme (environ 20 mariages sur 1 à 2 jours chacun)',
          'Coordination logistique du montage et démontage au sein d\'une équipe de 4 personnes',
          'Création de compositions florales premium sur une vingtaine de mariages',
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
          'Participation à l\'organisation des expositions Johnny Hallyday (185 000 visiteurs) et de l\'exposition immersive Toutânkhamon',
          'Planification et gestion en temps réel des événements (coordination terrain et gestion des imprévus)',
          'Élaboration et mise à jour d\'outils de suivi logistique et administratif (tableaux de bord Excel)',
          'Accueil, orientation et assistance des visiteurs pendant les événements',
          'Soutien à la coordination logistique et opérationnelle du site',
        ],
      },
    ],
  },
]

export default function Experiences() {
  const [selected, setSelected] = useState('bordeaux')
  const city = CITIES.find(c => c.id === selected)

  return (
    <section className="section-experiences">
      <Reveal className="visa-intro">
        <div className="working-tag">MES</div>
        <h2 className="visa-heading">ESCALES</h2>
        <p className="visa-sub"><em>Expériences professionnelles</em></p>
      </Reveal>

      <div className="exp-cities">
        {CITIES.map(c => (
          <button
            key={c.id}
            className={`exp-city-card${selected === c.id ? ' exp-city-card--active' : ''}`}
            onClick={() => setSelected(c.id)}
          >
            <img src={c.img} alt={c.name} className="exp-city-img" />
            <span className="exp-city-name">{c.name}</span>
          </button>
        ))}
      </div>

      <div className="exp-list">
        {city.experiences.map((exp, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="exp-card">
              <div className="exp-card-header">
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
