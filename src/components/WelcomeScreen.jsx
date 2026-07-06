import { useState, useEffect } from 'react'
import { getReportsByEmail } from '../lib/supabase'

export default function WelcomeScreen({ goTo, userName, userEmail }) {
  const [reports,   setReports]   = useState([])
  const [loadingR,  setLoadingR]  = useState(false)
  const [showPast,  setShowPast]  = useState(false)

  // Auto-load past reports for this user
  useEffect(() => {
    if (!userEmail) return
    setLoadingR(true)
    getReportsByEmail(userEmail).then(({ data }) => {
      setReports(data || [])
      setLoadingR(false)
    })
  }, [userEmail])

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-ZA', {
      day: 'numeric', month: 'short', year: 'numeric'
    })
  }

  function downloadPDF(r) {
    const paths = Array.isArray(r.report) ? r.report : []

    const READINESS = [
      'Update your CV / résumé with relevant skills and projects',
      'Create or polish your LinkedIn profile',
      'Build a personal portfolio website or GitHub profile',
      'Complete at least one industry-recognised certification',
      'Attend 2+ networking events or industry meetups per month',
      'Set up job alerts on LinkedIn, Indeed, and Careers24',
      'Practice common interview questions for your field',
      'Write a strong, tailored cover letter template',
      'Request informational interviews with professionals in your field',
      'Join relevant professional associations or student chapters',
    ]

    const rankLabel = i => i === 0 ? '⭐ Top Match' : i === 1 ? '🥈 Strong Match' : '🥉 Good Match'
    const tags = arr => arr?.map(t => `<span class="tag">${t}</span>`).join('') || '–'
    const steps = arr => arr?.map(s => `<div class="step">→ ${s}</div>`).join('') || '–'

    const pathSections = paths.length > 0 ? paths.map((p, i) => `
      <div class="path-card ${i === 0 ? 'top' : ''}">
        <div class="path-head">
          <div>
            <div class="path-rank">${rankLabel(i)}</div>
            <div class="path-title">${p.title}</div>
            <div class="path-subtitle">${p.subtitle || ''}</div>
          </div>
          <div class="path-score-box">
            <div class="score-num">${p.score ?? '–'}</div>
            <div class="score-lbl">match score</div>
          </div>
        </div>

        <div class="path-grid">
          <div class="detail-block">
            <div class="detail-title">📜 Certifications</div>
            <div class="tag-list">${tags(p.certifications)}</div>
          </div>
          <div class="detail-block">
            <div class="detail-title">🎓 Short Courses</div>
            <div class="tag-list">${tags(p.courses)}</div>
          </div>
          <div class="detail-block">
            <div class="detail-title">🛠️ Key Skills to Build</div>
            <div class="tag-list">${tags(p.skills)}</div>
          </div>
          <div class="detail-block salary-block">
            <div class="detail-title">💰 Salary Range</div>
            <div class="salary-row">
              <div class="sal">Entry-level<br/><strong>${p.salary?.entry || '–'}</strong></div>
              <div class="sal">Mid-level<br/><strong>${p.salary?.mid || '–'}</strong></div>
            </div>
          </div>
        </div>

        <div class="detail-block" style="margin-top:16px">
          <div class="detail-title">🎯 Role-Specific Actions</div>
          <div class="steps">${steps(p.jobReadiness)}</div>
        </div>
      </div>`).join('') : '<p style="color:#64748b;font-size:14px">No path data recorded.</p>'

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Career Report – ${r.user_name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Inter, 'Segoe UI', sans-serif; color: #1e293b; background: #fff; font-size: 13px; line-height: 1.6; }

    /* PAGE HEADER */
    .doc-header { background: linear-gradient(135deg,#4f46e5,#7c3aed); color:#fff; padding: 36px 48px 28px; }
    .doc-logo { font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; opacity: .8; margin-bottom: 10px; }
    .doc-name { font-size: 26px; font-weight: 800; }
    .doc-meta { margin-top: 10px; font-size: 13px; opacity: .85; display: flex; gap: 24px; flex-wrap: wrap; }

    /* SECTION */
    .section { padding: 28px 48px; border-bottom: 1px solid #e2e8f0; }
    .section-title {
      font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;
      color: #4f46e5; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
    }
    .section-title::after { content:''; flex:1; height:1px; background:#e0e7ff; }

    /* PATH CARD */
    .path-card { border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; margin-bottom: 20px; background: #f8fafc; page-break-inside: avoid; }
    .path-card.top { border-color: #4f46e5; background: #eef2ff; }
    .path-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; }
    .path-rank { font-size: 11px; font-weight: 700; letter-spacing: .5px; color: #4f46e5; margin-bottom: 5px; }
    .path-title { font-size: 18px; font-weight: 800; color: #1e293b; }
    .path-subtitle { font-size: 13px; color: #64748b; margin-top: 3px; }
    .path-score-box { text-align: center; background: #4f46e5; color: #fff; border-radius: 10px; padding: 10px 16px; min-width: 72px; }
    .score-num { font-size: 22px; font-weight: 800; }
    .score-lbl { font-size: 10px; opacity: .85; text-transform: uppercase; letter-spacing: .5px; }

    /* DETAIL GRID */
    .path-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .detail-block { margin-bottom: 4px; }
    .detail-title { font-size: 12px; font-weight: 700; color: #374151; margin-bottom: 8px; }
    .tag-list { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag { background: #e0e7ff; color: #3730a3; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 99px; }
    .salary-block { grid-column: span 2; }
    .salary-row { display: flex; gap: 16px; }
    .sal { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 18px; font-size: 13px; color: #64748b; }
    .sal strong { display: block; font-size: 16px; font-weight: 700; color: #1e293b; margin-top: 2px; }
    .steps { display: flex; flex-direction: column; gap: 7px; }
    .step { font-size: 13px; color: #1e293b; padding-left: 12px; position: relative; }
    .step::before { content: '→'; position: absolute; left: 0; color: #4f46e5; font-weight: 700; }

    /* ASSESSMENT */
    .assess-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .assess-item { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 10px 14px; }
    .assess-key { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; color: #166534; margin-bottom: 3px; }
    .assess-val { font-size: 13px; color: #1e293b; }

    /* READINESS */
    .readiness-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
    .readiness-item { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; }
    .r-check { color: #10b981; font-weight: 700; flex-shrink: 0; }

    /* FOOTER */
    .doc-footer { padding: 18px 48px; font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between; }

    @media print {
      body { font-size: 12px; }
      .doc-header { padding: 24px 32px 20px; }
      .section { padding: 20px 32px; }
      .doc-footer { padding: 14px 32px; }
    }
  </style>
</head>
<body>

  <div class="doc-header">
    <div class="doc-logo">🎓 Career Guidance Agent · Personalised Career Report</div>
    <div class="doc-name">${r.user_name}</div>
    <div class="doc-meta">
      <span>📚 ${r.faculty}</span>
      ${r.user_email ? `<span>✉️ ${r.user_email}</span>` : ''}
      <span>📅 ${formatDate(r.created_at)}</span>
      <span>🆔 ${r.id.slice(0,8).toUpperCase()}</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Recommended Career Paths</div>
    ${pathSections}
  </div>

  <div class="section">
    <div class="section-title">Your Assessment Answers</div>
    <div class="assess-grid">
      ${Object.entries(r.assessment || {}).map(([k, v]) => `
        <div class="assess-item">
          <div class="assess-key">${k}</div>
          <div class="assess-val">${Array.isArray(v) ? v.join(', ') : v}</div>
        </div>`).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Universal Job-Readiness Checklist</div>
    <div class="readiness-grid">
      ${READINESS.map(item => `
        <div class="readiness-item">
          <span class="r-check">✓</span>
          <span>${item}</span>
        </div>`).join('')}
    </div>
  </div>

  <div class="doc-footer">
    <span>Generated by Career Guidance Agent &mdash; visjzvscdxrpkrbkaibo.supabase.co</span>
    <span>Report ID: ${r.id.slice(0,8).toUpperCase()}</span>
  </div>

  <script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`

    const blob = new Blob([html], { type: 'text/html' })
    const url  = URL.createObjectURL(blob)
    window.open(url, '_blank')
    setTimeout(() => URL.revokeObjectURL(url), 60000)
  }

  return (
    <div className="page">
      <div className="welcome-hero">
        <div className="hero-glow" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="hero-badge">
          <span className="badge-dot" />
          Welcome back, {userName?.split(' ')[0] || 'there'}!
        </div>

        <h1 className="hero-title">
          Discover Your{' '}
          <span className="gradient-text">
            Ideal Career<br />Path
          </span>
        </h1>

        <p className="hero-sub">
          Answer 6 quick questions about your strengths and goals. Get personalised
          career path recommendations, certifications, short courses, and a
          job-readiness action plan — built just for you.
        </p>

        <div className="feature-pills">
          {['🗺️ Career Paths', '📜 Certifications', '🎓 Short Courses', '🛠️ Key Skills', '✅ Job-Readiness Plan'].map(p => (
            <span key={p} className="pill">{p}</span>
          ))}
        </div>

        <div className="hero-btns">
          <button className="btn btn-white" onClick={() => goTo('faculty')}>
            Get Started →
          </button>
          {reports.length > 0 && (
            <button className="btn btn-outline-white" onClick={() => setShowPast(v => !v)}>
              {showPast ? 'Hide' : `📂 My Reports (${reports.length})`}
            </button>
          )}
        </div>

        {/* Past reports panel */}
        {showPast && reports.length > 0 && (
          <div className="past-reports-panel">
            <h3 className="past-title">Your saved reports</h3>
            {loadingR
              ? <p className="past-empty">Loading…</p>
              : (
                <div className="past-list">
                  {reports.map(r => (
                    <div key={r.id} className="past-item">
                      <div className="past-item-info">
                        <strong>{r.faculty}</strong>
                        <span className="past-meta">{formatDate(r.created_at)}</span>
                      </div>
                      <button className="btn btn-sm btn-ghost" onClick={() => downloadPDF(r)}>
                        ⬇ PDF
                      </button>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        )}

        <div className="hero-stats">
          {[
            { num: '7',    label: 'Faculties Covered'       },
            { num: '28+',  label: 'Career Paths'            },
            { num: '100+', label: 'Certifications & Courses' },
            { num: '6',    label: 'Questions to Your Roadmap'},
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
