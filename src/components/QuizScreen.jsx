import { QUESTIONS } from '../data/questions'

export default function QuizScreen({ faculty, currentQ, answers, answer, nextQ, prevQ }) {
  const q       = QUESTIONS[currentQ]
  const total   = QUESTIONS.length
  const pct     = Math.round((currentQ / total) * 100)
  const isLast  = currentQ === total - 1
  const hasAns  = !!answers[q.id] && (Array.isArray(answers[q.id]) ? answers[q.id].length > 0 : true)
  const facColor = faculty?.color || 'var(--primary)'

  function handleSelect(value) {
    answer(q.id, value, q.type)
  }

  function isSelected(value) {
    const a = answers[q.id]
    if (!a) return false
    return Array.isArray(a) ? a.includes(value) : a === value
  }

  return (
    <div className="page quiz-screen">
      <div className="container">
        {/* Progress */}
        <div className="progress-section">
          <div className="progress-top">
            <span className="progress-label">
              Question {currentQ + 1} of {total}
            </span>
            <span className="progress-label" style={{ color: facColor }}>
              {pct}% complete
            </span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: pct + '%', background: `linear-gradient(90deg, ${facColor}, #06b6d4)` }}
            />
          </div>
        </div>

        {/* Question card — key forces remount → triggers slideIn animation */}
        <div className="question-card" key={q.id}>
          <p className="q-badge" style={{ color: facColor }}>
            Question {currentQ + 1}
          </p>
          <h3 className="q-text">{q.text}</h3>

          <div className="options-list">
            {q.options.map(opt => (
              <div
                key={opt.value}
                className={`option-item${isSelected(opt.value) ? ' selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
                style={isSelected(opt.value) ? { borderColor: facColor, background: facColor + '18' } : {}}
              >
                <div
                  className="opt-indicator"
                  style={isSelected(opt.value) ? { borderColor: facColor } : {}}
                >
                  <div
                    className="opt-dot"
                    style={{ background: facColor, transform: isSelected(opt.value) ? 'scale(1)' : 'scale(0)' }}
                  />
                </div>
                <div className="opt-text">
                  <strong>{opt.label}</strong>
                  <small>{opt.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="quiz-footer">
          <button
            className="btn btn-ghost"
            onClick={prevQ}
            style={{ visibility: currentQ === 0 ? 'hidden' : 'visible' }}
          >
            ← Back
          </button>
          <button
            className="btn btn-primary"
            disabled={!hasAns}
            onClick={nextQ}
            style={{ background: facColor }}
          >
            {isLast ? 'See My Results 🎯' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
