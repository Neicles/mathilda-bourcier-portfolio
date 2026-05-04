import { useRef, useEffect } from 'react'
import Reveal from './Reveal'

const ITEMS = [
  "Grande capacité d'adaptation.",
  'Gestion du stress et forte de proposition.',
  "Curieuse, j'analyse les enjeux et participe activement aux prises de décision.",
  'Autonome et organisée.',
]

export default function WhyMe() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-me" className="section-why">
      <Reveal tag="h2" className="why-title">AUTORISATION D'ENTRÉE</Reveal>
      <Reveal tag="p" className="why-sub" delay={0.05}><em>Why me ?</em></Reveal>

      <div className="why-list">
        {ITEMS.map((text, i) => (
          <div
            key={i}
            className="why-item"
            ref={(el) => { itemRefs.current[i] = el }}
            style={{ transitionDelay: `${i * 0.14}s` }}
          >
            <div className="why-check">✓</div>
            <span>{text}</span>
          </div>
        ))}
      </div>

      <p className="why-brand">MB BOURCIER AIRLINES</p>
    </section>
  )
}
