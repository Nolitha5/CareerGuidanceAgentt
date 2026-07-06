import { useState } from 'react'

export default function UserInfoScreen({ onContinue, goTo }) {
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  const [err,   setErr]   = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) { setErr('Please enter your name.'); return }
    onContinue({ name: name.trim(), email: email.trim() })
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 520, paddingTop: 64 }}>
        <div className="screen-header">
          <p className="screen-label">Before we start</p>
          <h2 className="screen-title">Tell us about yourself</h2>
          <p className="screen-sub">
            Your name personalises your report. Add your email to save results
            and retrieve them later — completely optional.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="user-info-form">
          <div className="field-group">
            <label className="field-label" htmlFor="user-name">
              Your name <span style={{ color: 'var(--primary)' }}>*</span>
            </label>
            <input
              id="user-name"
              className="field-input"
              type="text"
              placeholder="e.g. FiLo"
              value={name}
              onChange={e => { setName(e.target.value); setErr('') }}
              autoFocus
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="user-email">
              Email address <span style={{ opacity: .5 }}>(optional — to save & retrieve reports)</span>
            </label>
            <input
              id="user-email"
              className="field-input"
              type="email"
              placeholder="e.g. filo4ir@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {err && <p className="field-error">{err}</p>}

          <div className="faculty-footer" style={{ marginTop: 32 }}>
            <button type="button" className="btn btn-ghost" onClick={() => goTo('welcome')}>
              ← Back
            </button>
            <button type="submit" className="btn btn-primary">
              Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
