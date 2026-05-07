import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·'
const LINE1 = 'BOURCIER'
const LINE2 = 'AIRLINES'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function FlipBoard({ text, baseDelay, active, resetting }) {
  const [display, setDisplay] = useState(() => text.split('').map(() => randomChar()))

  useEffect(() => {
    if (!active) return
    const target = text.split('')
    const resolveTimes = target.map((_, i) => baseDelay + i * 130)
    const start = Date.now()
    const iv = setInterval(() => {
      const elapsed = Date.now() - start
      setDisplay(target.map((char, i) =>
        elapsed >= resolveTimes[i] ? char : randomChar()
      ))
      if (elapsed >= resolveTimes[resolveTimes.length - 1] + 80) clearInterval(iv)
    }, 45)
    return () => clearInterval(iv)
  }, [active, text, baseDelay])

  useEffect(() => {
    if (!resetting) return
    const iv = setInterval(() => {
      setDisplay(text.split('').map(() => randomChar()))
    }, 45)
    return () => clearInterval(iv)
  }, [resetting, text])

  return (
    <div className="loader-flaps">
      {display.map((char, i) => (
        <div key={i} className={`loader-flap${active && char === text[i] && !resetting ? ' loader-flap--settled' : ''}`}>
          <span>{char}</span>
        </div>
      ))}
    </div>
  )
}

export default function Loader() {
  const [planeGo, setPlaneGo]         = useState(false)
  const [boardActive, setBoardActive] = useState(false)
  const [flash, setFlash]             = useState(false)
  const [confirmed, setConfirmed]     = useState(false)
  const [resetting, setResetting]     = useState(false)
  const [fading, setFading]           = useState(false)
  const [gone, setGone]               = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setPlaneGo(true),                    50)
    const t1 = setTimeout(() => { setBoardActive(true); setFlash(true) }, 950)
    const t2 = setTimeout(() => setFlash(false),                   1180)
    const t3 = setTimeout(() => setConfirmed(true),                3000)
    const t4 = setTimeout(() => setResetting(true),                3600)
    const t5 = setTimeout(() => setFading(true),                   3900)
    const t6 = setTimeout(() => setGone(true),                     4400)
    return () => [t0,t1,t2,t3,t4,t5,t6].forEach(clearTimeout)
  }, [])

  if (gone) return null

  return (
    <div className={`loader-overlay${fading ? ' loader-overlay--out' : ''}`}>

      <div className="loader-track">
        <div className={`loader-dotted${planeGo ? ' loader-dotted--grow' : ''}`} />
        <div className={`loader-plane-wrap${planeGo ? ' loader-plane-wrap--go' : ''}`}>
          <span className={`loader-plane${planeGo ? ' loader-plane--go' : ''}`}>✈</span>
        </div>
      </div>

      <div className={`loader-board${flash ? ' loader-board--flash' : ''}`}>
        <div className="loader-board-label">DÉPART · DEPARTURE</div>
        <div className="loader-rows">
          <FlipBoard text={LINE1} baseDelay={0}   active={boardActive} resetting={resetting} />
          <FlipBoard text={LINE2} baseDelay={250} active={boardActive} resetting={resetting} />
        </div>
        <div className="loader-board-sub">VOL MB001 · BORDEAUX → VOTRE AGENCE</div>
        {confirmed && <div className="loader-confirmed">✓ EMBARQUEMENT CONFIRMÉ</div>}
      </div>

    </div>
  )
}
