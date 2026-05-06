import Reveal from './Reveal'

const ETAPE1 = [
  {
    number: 'ESCALE 1 :',
    title: 'Junior Agence 2022 — Oléron Comedy',
    text: "Notre mission : réaliser un festival d'humour à Saint-Denis-d'Oléron sur une journée. Budget de 30 000 €. Nous avons dû concevoir l'événement dans son intégralité : programmation artistique, gestion logistique, communication et recherche de partenaires.",
  },
  {
    number: 'ESCALE 2 :',
    title: 'Junior Agence 2023 — Ronald McDonald',
    text: "Nous avons créé une course connectée et une vidéo pour la Fondation Ronald McDonald. Budget de 100 € pour concevoir le concept de l'événement, élaborer la stratégie de communication et assurer la production de la vidéo.",
  },
  {
    number: 'ESCALE 3 :',
    title: 'Junior Agence 2024 — Cap Sciences',
    text: "Nous avons accompagné Cap Sciences pour le lancement de sa branche événementielle. L'objectif : concevoir une soirée pour 150 professionnels, avec une thématique forte valorisant les engagements RSE du client.",
  },
]

const ETAPE2 = [
  {
    number: 'ESCALE 4 :',
    title: "Magazine — L'Autre Monde",
    text: "J'ai piloté la création d'un magazine de 80 pages, de la ligne éditoriale à la mise en page, incluant 20 % d'espaces publicitaires. Cette expérience a consolidé mes compétences en stratégie de contenu, coordination éditoriale et travail d'équipe.",
  },
  {
    number: 'ESCALE 5 :',
    title: 'Pop up store — Coquine',
    text: 'Nous avons conçu un pop-up store dédié à un salon de thé dans un univers "pop-rock". Offre variée : gamme de produits gourmands et vente de produits dérivés (bougies et affiches).',
  },
  {
    number: 'ESCALE 6 :',
    title: "Gala — Back to the 20's",
    text: "Projet de fin d'études : organisation du gala de A à Z en trois mois. En tant que responsable de la scénographie, j'ai imaginé et conçu toute l'identité visuelle et l'ambiance de l'événement.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-objectives">
      <Reveal className="visa-intro">
        <div className="working-tag">MON</div>
        <h2 className="visa-heading">CARNET</h2>
        <p className="visa-sub"><em>de voyage</em></p>
      </Reveal>

      <div className="visa-cards">
        <Reveal>
          <div className="voyage-etape-label">ÉTAPE 1 — Les juniors agences</div>
        </Reveal>
        {ETAPE1.map(({ number, title, text }, i) => (
          <Reveal key={number} delay={i * 0.1}>
            <div className="visa-card">
              <div className="vc-number">{number}</div>
              <h3><em>{title}</em></h3>
              <div className="vc-divider" />
              <p>{text}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="voyage-etape-label">ÉTAPE 2 — Les projets scolaires</div>
        </Reveal>
        {ETAPE2.map(({ number, title, text }, i) => (
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
