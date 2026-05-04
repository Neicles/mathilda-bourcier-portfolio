export default function Cover() {
  return (
    <section id="cover" className="section-cover">
      <div className="cover-noise" />
      <div className="cover-content">
        <p className="cover-airline-label">BOURCIER AIRLINES</p>
        <h1 className="cover-title">PASSEPORT</h1>

        <div className="cover-emblem">
          <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="emblem-svg">
            <circle cx="130" cy="130" r="85" fill="none" stroke="white" strokeWidth="2.5" opacity="0.85" />
            <path
              d="M85,100 Q95,85 110,90 Q118,75 132,82 Q144,88 138,103 Q150,110 143,124 Q136,136 124,132 Q112,140 100,132 Q88,122 85,100Z"
              fill="none" stroke="white" strokeWidth="1.8" opacity="0.65"
            />
            <path d="M145,112 Q162,106 168,118 Q173,130 162,136 Q153,132 145,112Z" fill="none" stroke="white" strokeWidth="1.8" opacity="0.65" />
            <path d="M100,148 Q108,155 116,150 Q120,160 113,165 Q105,162 100,148Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
            <g transform="translate(60,55) rotate(-25)">
              <path
                d="M0,10 L80,-10 L68,10 L40,10 L68,30 L56,34 L30,18 L8,34 Z"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" opacity="0.95"
              />
            </g>
            <path id="arcText" d="M 60,190 A 85,85 0 0,0 200,190" fill="none" />
            <text fontFamily="serif" fontSize="13" fill="white" letterSpacing="4" opacity="0.9">
              <textPath href="#arcText" startOffset="10%">CRÉATIF</textPath>
            </text>
          </svg>
        </div>

        <div className="cover-brand">
          <div className="cover-brand-monogram">
            M<span className="monogram-b">B</span>
          </div>
          <div className="cover-brand-name">
            <span>BOURCIER</span>
            <span>AIRLINES</span>
          </div>
        </div>

        <a href="#stamps" className="cover-scroll-hint">
          <span>Découvrir</span>
          <div className="scroll-chevron" />
        </a>
      </div>
    </section>
  )
}
