import Reveal from './Reveal'

const BASE = '/images/carnet de voyage/'

const ETAPE1 = [
  {
    title: 'ESCALE 1 :', subtitle: 'Junior Agence 2022 — Oléron Comedy',
    img: BASE + 'orleon.png',
    text: "Notre mission : réaliser un festival d'humour à Saint-Denis-d'Oléron sur une journée. Budget de 30 000 €. Nous avons dû concevoir l'événement dans son intégralité : programmation artistique, gestion logistique, communication et recherche de partenaires.",
  },
  {
    title: 'ESCALE 2 :', subtitle: 'Junior Agence 2023 — Ronald McDonald',
    img: BASE + 'escale2.jpg',
    text: "Nous avons créé une course connectée et une vidéo pour la Fondation Ronald McDonald. Budget de 100 € pour concevoir le concept de l'événement, élaborer la stratégie de communication et assurer la production de la vidéo.",
    flip: true,
  },
  {
    title: 'ESCALE 3 :', subtitle: 'Junior Agence 2024 — Cap Sciences',
    img: BASE + 'capscience.jpg',
    text: "Nous avons accompagné Cap Sciences pour le lancement de sa branche événementielle. L'objectif : concevoir une soirée pour 150 professionnels, avec une thématique forte valorisant les engagements RSE du client.",
  },
]

const ETAPE2 = [
  {
    title: 'ESCALE 4 :', subtitle: "Magazine — L'Autre Monde",
    img: BASE + "l'autreMonde.jpg",
    text: "J'ai piloté la création d'un magazine de 80 pages, de la ligne éditoriale à la mise en page, incluant 20 % d'espaces publicitaires. Cette expérience a consolidé mes compétences en stratégie de contenu, coordination éditoriale et travail d'équipe.",
    flip: true,
  },
  {
    title: 'ESCALE 5 :', subtitle: 'Pop up store — Coquine',
    img: BASE + 'coquine.jpg',
    text: 'Nous avons conçu un pop-up store dédié à un salon de thé dans un univers "pop-rock". Offre variée : gamme de produits gourmands et vente de produits dérivés (bougies et affiches).',
  },
  {
    title: 'ESCALE 6 :', subtitle: "Gala — Back to the 20's",
    img: BASE + 'backto20.webp',
    text: "Projet de fin d'études : organisation du gala de A à Z en trois mois. En tant que responsable de la scénographie, j'ai imaginé et conçu toute l'identité visuelle et l'ambiance de l'événement.",
    flip: true,
  },
]

function FlightLine({ flip }) {
  return (
    <div className={`flight-line${flip ? ' flip' : ''}`}>
      {flip ? '──────────────────── ✈' : '✈ ────────────────────'}
    </div>
  )
}

function Escale({ title, subtitle, text, img, flip }) {
  const content = (
    <div className="escale-text">
      <h4>{title} <em>{subtitle}</em></h4>
      <p>{text}</p>
    </div>
  )
  const photo = img ? (
    <div className="escale-photo-wrap">
      <img src={img} alt={subtitle} className="escale-photo" />
    </div>
  ) : null

  return (
    <Reveal tag="div" className={`escale escale-with-img${flip ? ' escale-flip' : ''}`}>
      {flip ? <>{content}{photo}</> : <>{photo}{content}</>}
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
