import { useRef, useEffect } from 'react'

const STAMPS = [
  { color: 'brown',  label: 'Pop up Store',    emoji: '🏪' },
  { color: 'gold',   label: 'Gala — Année 20', emoji: '🥂' },
  { color: 'yellow', label: 'Festival',         emoji: '🎵' },
  { color: 'pink',   label: 'Communication',    emoji: '📱' },
  { color: 'purple', label: 'Émission radio',   emoji: '🎙️' },
  { color: 'blue',   label: 'Magazine',         emoji: '📰' },
]

export default function Stamps() {
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
    <section id="stamps" className="section-stamps">
      <div className="stamps-title">
        <em>Mes</em>
        <strong>TAMPONS DE</strong>
        <em>Voyage</em>
      </div>
      <div className="stamps-grid">
        {STAMPS.map(({ color, label, emoji }, i) => (
          <div
            key={label}
            className={`stamp stamp-${color}`}
            data-label={label}
            ref={(el) => { itemRefs.current[i] = el }}
            style={{ transitionDelay: `${i * 0.09}s` }}
          >
            <span className="stamp-emoji">{emoji}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
