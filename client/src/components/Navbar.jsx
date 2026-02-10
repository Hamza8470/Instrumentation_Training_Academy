import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${isActive ? 'border-ink bg-ink text-mist shadow-card' : 'border-cloud bg-white text-slate hover:-translate-y-0.5 hover:border-ink hover:text-ink'}`

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-mist/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
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
      </div>
    </header>
  )
}

export default Navbar
