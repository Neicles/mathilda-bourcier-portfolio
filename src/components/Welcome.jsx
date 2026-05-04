import Reveal from './Reveal'

export default function Welcome() {
  return (
    <section id="welcome" className="section-welcome">
      <Reveal className="welcome-inner">
        <p className="welcome-fr">Bienvenue au sein de la compagnie</p>
        <p className="welcome-en"><em>Welcome to the compagnie of</em></p>
        <div className="bordeaux-seal">
          <span className="seal-fleur">⚜</span>
          <span className="seal-city">Bordeaux</span>
        </div>
        <div className="welcome-logo">
          <span className="wl-mb">M<span>B</span></span>
          <div className="wl-name">
            <span>BOURCIER</span>
            <span>AIRLINES</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
