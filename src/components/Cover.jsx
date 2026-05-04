export default function Cover() {
  return (
    <section id="cover" className="section-cover">
      <div className="cover-noise" />
      <div className="cover-content">
        <p className="cover-airline-label">BOURCIER AIRLINES</p>
        <h1 className="cover-title">PASSEPORT</h1>

        <div className="cover-emblem">
          <svg viewBox="0 0 480 500" xmlns="http://www.w3.org/2000/svg" className="emblem-svg">
            <defs>
              <path id="bottomArc" d="M 82,310 A 158,158 0 0,0 398,310" />
            </defs>

            {/* Globe circle */}
            <circle cx="240" cy="270" r="158" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />

            {/* Continent shapes — lower portion of globe */}
            <path
              d="M 128,262 Q 132,238 145,230 Q 158,220 173,226
                 Q 183,216 198,222 Q 210,216 224,223
                 Q 236,216 250,223 Q 262,217 272,228
                 Q 284,224 290,236 Q 298,240 295,254
                 Q 302,262 294,274 Q 285,284 272,280
                 Q 264,292 250,287 Q 238,297 220,291
                 Q 206,300 188,293 Q 172,302 155,293
                 Q 140,298 128,286 Q 118,276 128,262 Z"
              fill="none" stroke="white" strokeWidth="2.2" opacity="0.65"
            />
            {/* Island / extra landmass top-right */}
            <path
              d="M 272,220 Q 284,212 298,218 Q 314,224 310,238
                 Q 316,250 304,256 Q 292,260 280,252 Q 268,244 272,232 Q 268,226 272,220 Z"
              fill="none" stroke="white" strokeWidth="2" opacity="0.6"
            />
            {/* Peninsula south */}
            <path
              d="M 155,293 Q 158,308 163,318 Q 170,326 176,318 Q 172,304 165,290"
              fill="none" stroke="white" strokeWidth="2" opacity="0.55"
            />

            {/* ===== AIRPLANE ===== */}
            {/* Drawn horizontal (nose right), then rotated -35° around its center */}
            <g transform="translate(236, 222) rotate(-35)">
              {/* Main fuselage */}
              <path
                d="M 128,0
                   C 136,-7 136,-20 128,-26
                   C 118,-30 105,-30 92,-24
                   C 80,-36 65,-38 45,-34
                   L -90,-24
                   C -112,-20 -118,-12 -118,0
                   C -118,12 -112,20 -90,24
                   L 45,34
                   C 65,38 80,36 92,24
                   C 105,30 118,30 128,26
                   C 136,20 136,7 128,0 Z"
                fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"
              />
              {/* Top main wing */}
              <path
                d="M 62,-24 L 32,-96 L 58,-96 L 84,-24 Z"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />
              {/* Bottom main wing */}
              <path
                d="M 62,24 L 32,96 L 58,96 L 84,24 Z"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />
              {/* Vertical tail fin */}
              <path
                d="M -86,-24 L -96,-66 L -110,-66 L -118,-24"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />
              {/* Top horizontal stabilizer */}
              <path
                d="M -92,-24 L -104,-54 L -120,-54 L -118,-24"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"
              />
              {/* Bottom horizontal stabilizer */}
              <path
                d="M -92,24 L -104,54 L -120,54 L -118,24"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"
              />
            </g>

            {/* CRÉATIF text along bottom of globe */}
            <text fill="white" fontSize="18" letterSpacing="6" opacity="0.95">
              <textPath href="#bottomArc" startOffset="18%">
                <tspan fontFamily="Georgia, serif" fontStyle="normal">CR</tspan>
                <tspan fontFamily="Georgia, serif" fontStyle="normal">É</tspan>
                <tspan fontFamily="'Helvetica Neue', sans-serif" fontSize="16">ATIF</tspan>
              </textPath>
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
