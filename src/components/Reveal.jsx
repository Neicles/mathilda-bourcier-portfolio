import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Reveal({ children, className = '', delay = 0, tag: Tag = 'div' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <Tag
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
