import { useState, useEffect, useRef } from 'react'
import { scorePaths } from '../data/faculties'
import { READINESS }  from '../data/questions'
import { saveReport } from '../lib/supabase'

function PathCard({ path, rank, facColor }) {
  const [open, setOpen] = useState(rank === 0)

  let badgeClass = 'match-badge badge-good'
  let badgeText  = 'Good Match'
  if (rank === 0) { badgeClass = 'match-badge badge-top';    badgeText = '⭐ Top Match' }
  else if (rank === 1){ badgeClass = 'match-badge badge-strong'; badgeText = 'Strong Match' }

  return (
    <div
      className={`path-card${rank === 0 ? ' top-match' : ''}`}
      style={rank === 0 ? { borderColor: facColor } : {}}
    >
      <div className="path-header" onClick={() => setOpen(o => !o)}>
        <div className="path-icon-wrap">{path.icon}</div>
        <div className="path-meta">
          <div className="path-title">{path.title}</div>
          <div className="path-subtitle">{path.subtitle}</div>
        </div>
        <span className={badgeClass}>{badgeText}</span>
        <span className={`chevron${open ? ' open' : ''}`}>▼</span>
      </div>

      {open && (
        <div className="path-body">
          <div className="path-section">
            <div className="section-heading" style={{ color: facColor }}>📜 Certifications</div>
            <div className="tag-list">
              {path.certifications.map(c => <span key={c} className="tag tag-cert">{c}</span>)}
            </div>
          </div>

          <div className="path-section">
            <div className="section-heading" style={{ color: facColor }}>🎓 Short Courses</div>
            <div className="tag-list">
              {path.courses.map(c => <span key={c} className="tag tag-course">{c}</span>)}
            </div>
          </div>

          <div className="path-section">
            <div className="section-heading" style={{ color: facColor }}>🛠️ Key Skills to Build</div>
            <div className="tag-list">
              {path.skills.map(s => <span key={s} className="tag tag-skill">{s}</span>)}
            </div>
          </div>

          <div className="path-section">
            <div className="section-heading" style={{ color: facColor }}>💰 Salary Range</div>
            <div className="salary-row">
              <div className="sal-item">Entry: <strong>{path.salary.entry}</strong></div>
              <div className="sal-item">Mid-level: <strong>{path.salary.mid}</strong></div>
            </div>

            <div className="section-heading" style={{ color: facColor, marginTop: 14 }}>🎯 Role-Specific Actions</div>
            <div className="role-steps">
              {path.jobReadiness.map(j => (
                <div key={j} className="role-step">
                  <span className="step-arrow" style={{ color: facColor }}>→</span>
                  <span>{j}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Save status banner
function SaveBanner({ status, error }) {
  if (!status) return null
  const styles = {
    saving:  { background: '#1e293b', color: '#94a3b8' },
    saved:   { background: '#052e16', color: '#86efac' },
    error:   { background: '#450a0a', color: '#fca5a5' },
  }
  const msgs = {
    saving: '💾 Saving your report…',
    saved:  '✅ Report saved! Retrieve it anytime with your email.',
    error:  `⚠️ Couldn't save: ${error || 'unknown error'}`,
  }
  return (
    <div style={{
      ...styles[status],
      padding: '12px 20px',
      borderRadius: 10,
      marginBottom: 20,
      fontSize: 14,
      textAlign: 'center',
    }}>
      {msgs[status]}
    </div>
  )
}

export default function ResultsScreen({ faculty, user, answers, careerData, restart }) {
  const ranked   = scorePaths(faculty, answers, careerData)
  const facColor = faculty?.color || 'var(--primary)'
  const isRealData = ranked[0]?.scoringMode === 'real-data'

  const [saveStatus, setSaveStatus] = useState(null)  // null | 'saving' | 'saved' | 'error'
  const [saveError,  setSaveError]  = useState('')
  const hasSaved = useRef(false)

  // Auto-save once when the results screen mounts
  useEffect(() => {
    if (hasSaved.current) return
    hasSaved.current = true

    async function doSave() {
      setSaveStatus('saving')
      const { error } = await saveReport({
        userName:   user?.name  || 'Anonymous',
        userEmail:  user?.email || null,
        faculty,
        assessment: answers,
        report:     ranked.slice(0, 3).map(p => ({
          id:             p.id,
          title:          p.title,
          subtitle:       p.subtitle,
          score:          p.score,
          salary:         p.salary,
          certifications: p.certifications,
          courses:        p.courses,
          skills:         p.skills,
          jobReadiness:   p.jobReadiness,
        })),
      })
      if (error) {
        console.error('Supabase save error:', error)
        setSaveError(error.message)
        setSaveStatus('error')
      } else {
        setSaveStatus('saved')
      }
    }

    doSave()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page results-screen">
      <div className="container">
        {/* Header */}
        <div className="results-header">
          <div className="trophy-icon">🏆</div>
          <h2 className="results-title">
            {user?.name ? `${user.name}'s Career Roadmap` : 'Your Personalised Career Roadmap'}
          </h2>
          <p className="results-sub">
            Based on your faculty and responses, here are your top recommended paths.
          </p>
          <div style={{ display:'flex', gap:10, alignItems:'center', justifyContent:'center', flexWrap:'wrap' }}>
            <span className="fac-banner" style={{ background: facColor }}>
              {faculty?.icon} {faculty?.name}
            </span>
            <span className="fac-banner" style={{ background: isRealData ? '#10b981' : '#64748b', fontSize:12 }}>
              {isRealData ? '📊 Real-Data Mode' : '🧠 Built-in Scoring'}
            </span>
          </div>
        </div>

        {/* Save status */}
        <SaveBanner status={saveStatus} error={saveError} />

        {/* Ranked paths */}
        {ranked.map((path, i) => (
          <PathCard key={path.id} path={path} rank={i} facColor={facColor} />
        ))}

        {/* Universal readiness */}
        <div className="readiness-section">
          <h3 className="readiness-title">✅ Universal Job-Readiness Checklist</h3>
          <div className="readiness-grid">
            {READINESS.map(r => (
              <div key={r} className="readiness-item">
                <span className="r-check">✓</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Restart */}
        <div className="results-footer">
          <button className="btn btn-ghost" onClick={restart}>
            ↩ Start Over
          </button>
        </div>
      </div>
    </div>
  )
}
