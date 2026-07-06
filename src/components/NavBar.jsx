export default function NavBar({ faculty, userName, onLogout }) {
  return (
    <nav className="navbar">
      <a className="nav-brand" href="#">
        <span>🤖</span> Career Guidance Agent
      </a>

      <div className="nav-right">
        {faculty && (
          <div className="nav-fac-pill" style={{ background: faculty.color }}>
            {faculty.icon} {faculty.name}
          </div>
        )}

        {userName && (
          <div className="nav-user">
            <div className="nav-avatar">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="nav-username">{userName.split(' ')[0]}</span>
            <button className="btn-logout" onClick={onLogout} title="Log out">
              ↩
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
