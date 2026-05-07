import { useState } from 'react'

const ITEMS = [
  { src: '/images/projet/adopte.jpg',   title: 'Création de blog',                      cat: 'Projet scolaire'  },
  { src: '/images/projet/tombola.jpg',  title: 'Flyer pour une tombola',                cat: 'Projet scolaire'  },
  { src: '/images/projet/pierre.jpg',   title: 'Post réseaux sociaux',                  cat: 'Projet scolaire'  },
  { src: '/images/projet/celine.jpg',   title: 'Affiche',                               cat: 'Projet scolaire'  },
  { src: '/images/projet/cloture.jpg',  title: 'Affiche pour un événement',             cat: 'UFCV'             },
  { src: '/images/projet/solaris.jpg',  title: 'Affiche publicitaire pour un magazine', cat: 'Projet scolaire'  },
  { src: '/images/projet/tournoi.jpg',  title: 'Évènement e-sport',                     cat: 'Projet scolaire'  },
  { src: '/images/projet/pangaia.jpg',  title: 'Invitation',                            cat: 'Projet scolaire'  },
  { src: '/images/projet/madame.jpg',   title: "Création d'un Monsieur Madame",         cat: 'Projet personnel' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section-gallery">
      <div className="gallery-header">
        <div className="working-tag">MA</div>
        <h2 className="visa-heading">GALERIE</h2>
        <p className="visa-sub"><em>Cliquez sur une image pour l'agrandir</em></p>
      </div>

      <div className="gallery-grid">
        {ITEMS.map(({ src, title, cat }) => (
          <div key={src} className="gallery-item" onClick={() => setSelected({ src, title, cat })}>
            <img src={src} alt={title} className="gallery-img" />
            <div className="gallery-overlay">
              <h3 className="gallery-overlay-title">{title}</h3>
              <span className="gallery-overlay-cat">{cat}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={selected.src} alt={selected.title} className="lightbox-img" />
            <div className="lightbox-info">
              <p className="lightbox-title">{selected.title}</p>
              <span className="lightbox-cat">{selected.cat}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
