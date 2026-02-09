import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `text-sm uppercase tracking-[0.2em] transition ${isActive ? 'text-ink' : 'text-slate hover:text-ink'}`

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-mist/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-semibold text-ink">
          Instrumentation Training Academy Patna
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
          <NavLink to="/verify" className={navLinkClass}>Verify</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <Link
            to="/contact"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:-translate-y-0.5 hover:bg-slate"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
