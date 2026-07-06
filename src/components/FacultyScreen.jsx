import { FACULTIES } from '../data/faculties'

export default function FacultyScreen({ faculty, selectFaculty, startQuiz, goTo }) {
  return (
    <div className="page faculty-screen">
      <div className="container">
        <div className="screen-header">
          <p className="screen-label">Step 1 of 2</p>
          <h2 className="screen-title">Which faculty are you from?</h2>
          <p className="screen-sub">
            We'll tailor your career recommendations to your field of study.
          </p>
        </div>

        <div className="faculty-grid">
          {FACULTIES.map(f => (
            <div
              key={f.id}
              className={`fac-card${faculty?.id === f.id ? ' selected' : ''}`}
              onClick={() => selectFaculty(f)}
              style={
                faculty?.id === f.id
                  ? { borderColor: f.color, background: f.color + '12', boxShadow: `0 6px 20px ${f.color}33` }
                  : {}
              }
            >
              <div className="fac-icon">{f.icon}</div>
              <div className="fac-name">{f.name}</div>
              <div className="fac-desc">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="faculty-footer">
          <button className="btn btn-ghost" onClick={() => goTo('welcome')}>
            ← Back
          </button>
          <button
            className="btn btn-primary"
            disabled={!faculty}
            onClick={startQuiz}
            style={{ background: faculty?.color }}
          >
            Next: Answer Questions →
          </button>
        </div>
      </div>
    </div>
  )
}
