import { Link } from 'react-router-dom'

const CourseDetail = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <Link to="/courses" className="text-xs uppercase tracking-[0.2em] text-slate">
        Back to courses
      </Link>
      <img
        src="https://picsum.photos/seed/ita-detail-1/960/520"
        alt="Instrumentation course lab"
        className="mt-6 h-64 w-full rounded-3xl object-cover"
        loading="lazy"
      />
      <h1 className="mt-6 font-display text-4xl text-ink">Instrumentation Technician Foundations</h1>
      <p className="mt-4 text-base text-slate">
        A 12-week program covering sensor fundamentals, loop checks, calibration standards,
        and plant documentation practices.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
          <h3 className="font-display text-2xl text-ink">What you will learn</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Instrumentation symbols and P&ID reading</li>
            <li>Calibration routines for pressure, temperature, and flow</li>
            <li>Loop checking and commissioning documentation</li>
            <li>Safety practices and field troubleshooting</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
          <h3 className="font-display text-2xl text-ink">Schedule</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Week 1-3: Fundamentals + lab setup</li>
            <li>Week 4-7: Sensors, transmitters, calibration labs</li>
            <li>Week 8-10: Control loops, maintenance protocols</li>
            <li>Week 11-12: Project assessment + career prep</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-ink p-6 text-mist">
        <h3 className="font-display text-2xl">Ready to enroll?</h3>
        <p className="mt-3 text-sm text-mist/80">
          Speak to our admissions team for fee structure, batch timings, and lab access.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-amber px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
        >
          Contact Admissions
        </Link>
      </div>
    </div>
  )
}

export default CourseDetail
