import Reveal from './Reveal'

const CONTACTS = [
  { href: 'mailto:mathilda.bourcier7@gmail.com', icon: '✉', label: 'mathilda.bourcier7@gmail.com', iconClass: '' },
  { href: 'tel:+33782892010', icon: '📞', label: '07 82 89 20 10', iconClass: '' },
  { href: 'https://www.linkedin.com/in/mathilda-bourcier', icon: 'in', label: 'Mathilda BOURCIER', iconClass: 'icon-in', external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <Reveal tag="h2" className="contact-title">
        CONTACT ET<br />SORTIE DU TERRITOIRE
      </Reveal>
      <Reveal tag="p" className="contact-sub" delay={0.05}>
        <em>Exit visa</em>
      </Reveal>

      <Reveal className="contact-list" delay={0.1}>
        {CONTACTS.map(({ href, icon, label, iconClass, external }) => (
          <a
            key={href}
            href={href}
            className="contact-row"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <div className={`contact-icon ${iconClass}`}>{icon}</div>
            <span>{label}</span>
          </a>
        ))}
      </Reveal>

      <Reveal className="contact-logo" delay={0.15}>
        <span className="cl-mb">M<span>B</span></span>
        <div className="cl-name">
          <span>BOURCIER</span>
          <span>AIRLINES</span>
        </div>
      </Reveal>
    </section>
  )
}
