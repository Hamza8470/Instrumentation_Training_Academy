const Footer = () => {
  return (
    <footer className="border-t border-cloud bg-mist">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg text-ink">Instrumentation Training Academy</p>
          <p className="mt-3 text-sm text-slate">
            Practical, industry-aligned programs designed to build confident instrumentation
            professionals with real-world lab experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm text-slate">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Explore</p>
            <ul className="mt-3 space-y-2">
              <li>Programs</li>
              <li>Workshops</li>
              <li>Faculty</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Reach Us</p>
            <ul className="mt-3 space-y-2">
              <li>academy@institute.com</li>
              <li>+91 90000 00000</li>
              <li>Pune, India</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-cloud py-4 text-center text-xs text-slate">
        © 2026 Instrumentation Training Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
