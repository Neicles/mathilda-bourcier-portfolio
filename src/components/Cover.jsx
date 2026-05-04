export default function Cover() {
  return (
    <section id="cover" className="section-cover">
      <div className="cover-noise" />
      <div className="cover-content">
        <p className="cover-airline-label">BOURCIER AIRLINES</p>
        <h1 className="cover-title">PASSEPORT</h1>

        <div className="cover-emblem">
          <svg viewBox="0 0 520 540" xmlns="http://www.w3.org/2000/svg" className="emblem-svg">
            <defs>
              <path id="bottomArc" d="M 88,336 A 172,172 0 0,0 432,336" />
            </defs>

            {/* Globe — partial circle (top is masked by airplane) */}
            <circle cx="260" cy="295" r="172" fill="none" stroke="white" strokeWidth="3" opacity="0.88" />

            {/* ── Continent shapes ── */}
            {/* Main landmass — lower half */}
            <path
              d="M 140,278
                 Q 144,252 158,244 Q 173,234 190,241
                 Q 200,230 216,236 Q 228,229 244,237
                 Q 257,229 272,237 Q 284,232 294,244
                 Q 308,240 316,254 Q 324,260 318,274
                 Q 328,284 318,297 Q 308,310 293,305
                 Q 284,318 268,313 Q 254,325 234,318
                 Q 218,330 198,322 Q 180,332 162,322
                 Q 145,328 135,314 Q 125,302 140,278 Z"
              fill="none" stroke="white" strokeWidth="2.2" opacity="0.62"
            />
            {/* Island / NE landmass */}
            <path
              d="M 295,235 Q 310,226 326,232 Q 344,240 340,256
                 Q 348,268 334,276 Q 320,280 306,270
                 Q 291,262 295,248 Q 289,241 295,235 Z"
              fill="none" stroke="white" strokeWidth="2" opacity="0.58"
            />
            {/* Small peninsula S */}
            <path
              d="M 162,322 Q 165,340 170,353 Q 178,364 185,354 Q 180,338 170,320"
              fill="none" stroke="white" strokeWidth="2" opacity="0.52"
            />

            {/* ══════════════════════════════════════
                AIRPLANE  (drawn in horizontal local space, then rotated)
                nose → right (+x), top → up (−y)
                ══════════════════════════════════════ */}
            <g transform="translate(255,230) rotate(-36)">

              {/* ── Fuselage body ── */}
              <path
                d="M 150,0
                   C 162,-10 164,-28 155,-34
                   C 143,-40 126,-40 112,-32
                   C 98,-44 80,-48 55,-42
                   L -108,-30
                   C -134,-26 -142,-14 -142,0
                   C -142,14 -134,26 -108,30
                   L 55,42
                   C 80,48 98,44 112,32
                   C 126,40 143,40 155,34
                   C 164,28 162,10 150,0 Z"
                fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"
              />

              {/* ── Cockpit window line ── */}
              <path
                d="M 95,-32 Q 115,-48 138,-34"
                fill="none" stroke="white" strokeWidth="2" opacity="0.75"
              />

              {/* ── Upper main wing ── */}
              <path
                d="M 68,-30 L 38,-118 L 66,-118 L 96,-30 Z"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />
              {/* ── Lower main wing ── */}
              <path
                d="M 68,30 L 38,118 L 66,118 L 96,30 Z"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />

              {/* ── Vertical tail fin ── */}
              <path
                d="M -102,-30 L -114,-78 L -130,-78 L -142,-30"
                fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round"
              />
              {/* ── Upper horizontal stabilizer ── */}
              <path
                d="M -108,-30 L -122,-62 L -140,-62 L -142,-30"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"
              />
              {/* ── Lower horizontal stabilizer ── */}
              <path
                d="M -108,30 L -122,62 L -140,62 L -142,30"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"
              />
            </g>

            {/* CRÉATIF text along bottom curve */}
            <text fill="white" opacity="0.95">
              <textPath href="#bottomArc" startOffset="17%">
                <tspan fontSize="19" fontFamily="Georgia,serif" letterSpacing="5">CRÉATIF</tspan>
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
