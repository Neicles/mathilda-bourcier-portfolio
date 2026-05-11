export default function Cover() {
  return (
    <section id="cover" className="section-cover">
      <div className="cover-noise" />
      <div className="cover-content">

        <div className="cover-emblem">
          <img src="/images/logo-main.png" alt="MBourcier Airlines" className="emblem-img" />
        </div>

        <p className="cover-airline-label">MBOURCIER AIRLINES</p>

        <h1 className="cover-tagline">
          Bienvenue dans un monde,<br />
          <em>où les idées prennent vie</em>
        </h1>

        <div className="cover-description">
          <p>
            MBourcier Airlines va au-delà de la création d'un événement,
            elle se veut de le rendre unique et spécial.
          </p>
          <p>
            Mon rôle est d'être votre guide et de donner vie à tous vos projets.
            Un suivi de A à Z passant par la scénographie, la logistique,
            la gestion des prestataires et de leurs contrats ainsi que
            la création de supports de communication.
          </p>
          <p>
            L'agence est aussi amenée à répondre à des appels d'offres
            en réalisant des dossiers de recommandations et devis.
          </p>
        </div>

        <div className="cover-info-strip">
          <div className="cover-info-badge">
            <span className="info-icon">✈</span>
            Ouverture&nbsp;: <strong>Septembre 2026</strong> — 2 ans
          </div>
          <div className="cover-info-badge">
            <span className="info-icon">🕐</span>
            Ouvert tous les jours <strong>8h–17h</strong> sauf les lundis
          </div>
        </div>

        <div className="cover-contact">
          <a href="mailto:mathilda.bourcier7@gmail.com" className="cover-contact-link">✉ mathilda.bourcier7@gmail.com</a>
          <span className="cover-contact-sep">·</span>
          <a href="tel:+33782892010" className="cover-contact-link">📞 07 82 89 20 10</a>
          <span className="cover-contact-sep">·</span>
          <a href="https://www.linkedin.com/in/mathilda-bourcier-a22818224/" target="_blank" rel="noopener noreferrer" className="cover-contact-link">in Mathilda BOURCIER</a>
        </div>

      </div>
    </section>
  )
}
