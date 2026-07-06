import { useState } from 'react'
import { registerUser, loginUser } from '../lib/supabase'

export default function AuthScreen({ onAuth, initialTab = 'login' }) {
  const [tab,      setTab]      = useState(initialTab)  // 'login' | 'register'
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [confirm,  setConfirm]  = useState('')
  const [loading,  setLoading]  = useState(false)
  const [err,      setErr]      = useState('')
  const [info,     setInfo]     = useState('')

  function reset() { setErr(''); setInfo('') }

  async function handleSubmit(e) {
    e.preventDefault()
    reset()

    if (!email || !password) { setErr('Email and password are required.'); return }

    if (tab === 'register') {
      if (!name.trim())          { setErr('Please enter your name.'); return }
      if (password.length < 6)   { setErr('Password must be at least 6 characters.'); return }
      if (password !== confirm)  { setErr('Passwords do not match.'); return }

      setLoading(true)
      const { data, error } = await registerUser({ name: name.trim(), email, password })
      setLoading(false)

      if (error) { setErr(error.message); return }

      // Supabase may require email confirmation depending on project settings
      if (data.session) {
        onAuth(data.session.user)
      } else {
        setInfo('✅ Account created! Check your email to confirm your address, then log in.')
        setTab('login')
      }
    } else {
      setLoading(true)
      const { data, error } = await loginUser({ email, password })
      setLoading(false)

      if (error) { setErr(error.message); return }
      onAuth(data.user)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Brand */}
        <div className="auth-brand">
          <span className="auth-logo">🤖</span>
          <h1 className="auth-title">Career Guidance Agent</h1>
          <p className="auth-sub">Discover your ideal career path in 3 minutes</p>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab${tab === 'login' ? ' active' : ''}`}
            onClick={() => { setTab('login'); reset() }}
          >
            Log In
          </button>
          <button
            className={`auth-tab${tab === 'register' ? ' active' : ''}`}
            onClick={() => { setTab('register'); reset() }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {tab === 'register' && (
            <div className="field-group">
              <label className="field-label" htmlFor="auth-name">Full name</label>
              <input
                id="auth-name"
                className="field-input"
                type="text"
                placeholder="e.g. Filo Sibiya"
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus={tab === 'register'}
              />
            </div>
          )}

          <div className="field-group">
            <label className="field-label" htmlFor="auth-email">Email address</label>
            <input
              id="auth-email"
              className="field-input"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus={tab === 'login'}
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              className="field-input"
              type="password"
              placeholder={tab === 'register' ? 'At least 6 characters' : 'Your password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {tab === 'register' && (
            <div className="field-group">
              <label className="field-label" htmlFor="auth-confirm">Confirm password</label>
              <input
                id="auth-confirm"
                className="field-input"
                type="password"
                placeholder="Repeat your password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
              />
            </div>
          )}

          {err  && <div className="auth-msg auth-err">{err}</div>}
          {info && <div className="auth-msg auth-info">{info}</div>}

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={loading}
          >
            {loading
              ? (tab === 'register' ? 'Creating account…' : 'Logging in…')
              : (tab === 'register' ? 'Create Account' : 'Log In')}
          </button>
        </form>

        <p className="auth-switch">
          {tab === 'login'
            ? <>Don't have an account? <button className="auth-link" onClick={() => { setTab('register'); reset() }}>Register</button></>
            : <>Already have an account? <button className="auth-link" onClick={() => { setTab('login'); reset() }}>Log In</button></>
          }
        </p>
      </div>
    </div>
  )
}
