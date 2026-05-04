import Reveal from './Reveal'

const ETAPE1 = [
  {
    color: 'blue',
    emoji: '🐟',
    label: 'OLÉRON COMEDY',
    title: 'ESCALE 1 :',
    subtitle: 'Junior Agence 2022',
    text: "Notre mission : réaliser un festival d'humour à Saint-Denis-d'Oléron sur une journée. Budget de 30 000 €. Nous avons dû concevoir l'événement dans son intégralité : programmation artistique, gestion logistique, communication et recherche de partenaires.",
  },
  {
    color: 'navy',
    emoji: '❤️',
    label: 'RONALD McDONALD',
    title: 'ESCALE 2 :',
    subtitle: 'Junior Agence 2023',
    text: "Nous avons créé une course connectée et une vidéo pour la Fondation Ronald McDonald. Budget de 100 € pour concevoir le concept de l'événement, élaborer la stratégie de communication et assurer la production de la vidéo.",
    flip: true,
  },
  {
    color: 'teal',
    emoji: '🔬',
    label: 'CAP SCIENCES',
    title: 'ESCALE 3 :',
    subtitle: 'Junior Agence 2024',
    text: "Nous avons accompagné Cap Sciences pour le lancement de sa branche événementielle. L'objectif : concevoir une soirée pour 150 professionnels, avec une thématique forte valorisant les engagements RSE du client.",
  },
]

const ETAPE2 = [
  {
    color: 'purple',
    emoji: '✨',
    label: "L'AUTRE MONDE",
    title: 'ESCALE 4 :',
    subtitle: 'Magazine',
    text: "J'ai piloté la création d'un magazine de 80 pages, de la ligne éditoriale à la mise en page, incluant 20 % d'espaces publicitaires. Cette expérience a consolidé mes compétences en stratégie de contenu, coordination éditoriale et travail d'équipe.",
    flip: true,
  },
  {
    color: 'pink',
    emoji: '☕',
    label: 'COQUINE',
    title: 'ESCALE 5 :',
    subtitle: 'Pop up store',
    text: 'Nous avons conçu un pop-up store dédié à un salon de thé dans un univers "pop-rock". Offre variée : gamme de produits gourmands et vente de produits dérivés (bougies et affiches).',
  },
  {
    color: 'gold',
    emoji: '🥂',
    label: "BACK TO THE 20'S",
    title: 'ESCALE 6 :',
    subtitle: 'Gala',
    text: "Projet de fin d'études : organisation du gala de A à Z en trois mois. En tant que responsable de la scénographie, j'ai imaginé et conçu toute l'identité visuelle et l'ambiance de l'événement.",
    flip: true,
  },
]

function FlightLine({ flip }) {
  return (
    <div className={`flight-line${flip ? ' flip' : ''}`}>
      {flip
        ? '──────────────────── ✈'
        : '✈ ────────────────────'}
    </div>
  )
}

function Escale({ color, emoji, label, title, subtitle, text, flip }) {
  const badge = (
    <div className={`escale-badge badge-${color}`}>
      <span className="badge-emoji">{emoji}</span>
      <span className="badge-label">{label}</span>
    </div>
  )
  const content = (
    <div className="escale-text">
      <h4>{title} <em>{subtitle}</em></h4>
      <p>{text}</p>
    </div>
  )
  return (
    <Reveal tag="div" className={`escale${flip ? ' escale-flip' : ''}`}>
      {flip ? <>{content}{badge}</> : <>{badge}{content}</>}
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-projects">
      <Reveal className="projects-header">
        <h2><em>Mon carnet de voyage</em></h2>
      </Reveal>

      <Reveal tag="div" className="etape">
        <h3 className="etape-title">ETAPE 1 : Les juniors agences</h3>
        <p className="etape-intro">
          Au cours de notre cursus scolaire, nous disposons d'une semaine durant laquelle nous devons répondre à la demande d'un client en équipe. C'est une opportunité concrète de mettre en pratique nos connaissances et de nous surpasser.
        </p>
        <div className="escales">
          <Escale {...ETAPE1[0]} />
          <FlightLine />
          <Escale {...ETAPE1[1]} />
          <FlightLine flip />
          <Escale {...ETAPE1[2]} />
        </div>
      </Reveal>

      <Reveal tag="div" className="etape">
        <h3 className="etape-title">ETAPE 2 : Les projets scolaires</h3>
        <div className="escales">
          <Escale {...ETAPE2[0]} />
          <FlightLine />
          <Escale {...ETAPE2[1]} />
          <FlightLine flip />
          <Escale {...ETAPE2[2]} />
        </div>
      </Reveal>
    </section>
  )
}
