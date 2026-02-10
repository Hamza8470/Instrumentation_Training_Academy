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
              <li>+91 7546062889</li>
              <li>Nohsa, Phulwari Sharif, Patna, Bihar</li>
              <li className="pt-2">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/qamar.mallick.ita"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink shadow-card transition hover:-translate-y-0.5 hover:text-amber"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2]/10">
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="#1877F2">
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.2H15c-1.2 0-1.5.8-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z"/>
                      </svg>
                    </span>
                    Facebook
                  </a>
                  <a
                    href="https://www.google.com/maps/place/INSTRUMENTATION+TRAINING+ACADEMY+(ITA)+PATNA/@25.5710728,85.0569775,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a9b6ec2fc477:0xf0cfc91cd667a90c!8m2!3d25.5710728!4d85.0569775!16s%2Fg%2F11rrs28dh6?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink shadow-card transition hover:-translate-y-0.5 hover:text-amber"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#34A853]/10">
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="#34A853">
                        <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5Z"/>
                      </svg>
                    </span>
                    Google Maps
                  </a>
                </div>
              </li>
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
