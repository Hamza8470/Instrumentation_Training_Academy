import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">404</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-base text-slate">
        The page you are looking for does not exist yet. Let us get you back to the homepage.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
