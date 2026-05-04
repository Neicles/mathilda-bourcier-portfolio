import Reveal from './Reveal'

export default function Identity() {
  return (
    <section id="identity" className="section-identity">
      <Reveal>
        <div className="passport-page">
          <div className="page-header">
            <span className="page-header-sub">Republic of Bourcier Airlines</span>
            <span className="page-header-main">REPUBLIQUE BOURCIER AIRLINES</span>
          </div>

          <div className="passport-body">
            <div className="pp-left">
              <div className="pp-label-top">
                PASSEPORT<br />
                <em>Passport</em>
              </div>
              <div className="pp-photo">MB</div>
            </div>

            <div className="pp-fields">
              <Field label="Nom / Last Name" value="BOURCIER" />
              <Field label="Prénom / First Name" value="Mathilda" />
              <Field label="Ville / City" value="Bordeaux" />
              <Field label="Nationalité / Nationality" value="Créative, Organisée, Curieuse" />
              <div className="pp-field-row">
                <Field label="Date de délivrance / Date of issue" value="Septembre 2026" />
                <Field label="Date d'expiration / Expiration date" value="Septembre 2028" />
              </div>
              <div className="pp-field pp-role">
                <label>Rôle recherché / Position sought</label>
                <strong>Alternance en événementiel</strong>
              </div>
            </div>

            <div className="pp-signature">
              <div className="sig-box">
                <svg viewBox="0 0 110 65" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18,52 C24,22 38,14 50,32 C56,42 62,14 74,26 C80,33 86,20 94,38"
                    stroke="#1B2B5E" strokeWidth="2.2" fill="none"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Field({ label, value }) {
  return (
    <div className="pp-field">
      <label>{label}</label>
      <strong>{value}</strong>
    </div>
  )
}
