import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${isActive ? 'border-ink bg-ink text-mist shadow-card' : 'border-cloud bg-white text-slate hover:-translate-y-0.5 hover:border-ink hover:text-ink'}`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-mist/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold text-ink">
          <img
            src="/ITA_LOGO.png"
            alt="ITA logo"
            className="h-12 w-12 rounded-full object-contain"
            loading="lazy"
          />
          Instrumentation Training Academy Patna
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
          <NavLink to="/verify" className={navLinkClass}>Verify</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud bg-white text-ink transition hover:-translate-y-0.5 hover:border-ink md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M6 6l12 12" />
              <path d="M18 6l-12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${menuOpen ? 'max-h-96 border-t border-cloud bg-mist/90 px-6 pb-6 pt-4' : 'max-h-0 overflow-hidden px-6'}`}
      >
        <div className="flex flex-col gap-3">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/courses" className={navLinkClass} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/verify" className={navLinkClass} onClick={() => setMenuOpen(false)}>Verify</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
