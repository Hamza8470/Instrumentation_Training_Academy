import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'

const highlights = [
  {
    title: 'Industry-first curriculum',
    body: 'Modules are co-designed with plant engineers and updated every quarter.'
  },
  {
    title: 'Dedicated lab sessions',
    body: 'Hands-on labs focused on calibration, control loops, and safety systems.'
  },
  {
    title: 'Placement readiness',
    body: 'Mock interviews, resume clinics, and live project reviews.'
  }
]

const courses = [
  {
    title: 'Instrumentation Technician Foundations',
    level: 'Beginner',
    minReq: 'High school diploma or equivalent',
    duration: '12 weeks',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'Learn sensor fundamentals, loop checks, and basic control systems.',
    image: 'https://picsum.photos/seed/ita-course-1/640/420',
    slug: 'instrumentation-technician-foundations'
  },
  {
    title: 'Advanced Process Control',
    level: 'Intermediate',
    minReq: 'High school diploma or equivalent',
    duration: '10 weeks',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'Master PLC integration, SCADA workflows, and tuning strategies.',
    image: 'https://picsum.photos/seed/ita-course-2/640/420',
    slug: 'advanced-process-control'
  }
]

const testimonials = [
  {
    quote: 'The lab-focused sessions helped me transition into a plant role within two months.',
    name: 'Aman Kumar',
    role: 'Junior Instrumentation Engineer',
    avatar: 'https://picsum.photos/seed/ita-alumni-1/120/120'
  },
  {
    quote: 'Every module ended with a real inspection checklist, just like on the job.',
    name: 'Divya Sharma',
    role: 'Automation Trainee',
    avatar: 'https://picsum.photos/seed/ita-alumni-2/120/120'
  },
  {
    quote: 'The instructors kept the learning pace intense but manageable.',
    name: 'Rahul Verma',
    role: 'Control Room Operator',
    avatar: 'https://picsum.photos/seed/ita-alumni-3/120/120'
  }
]

const gallery = [
  'https://picsum.photos/seed/ita-gallery-1/520/420',
  'https://picsum.photos/seed/ita-gallery-2/520/420',
  'https://picsum.photos/seed/ita-gallery-3/520/420',
  'https://picsum.photos/seed/ita-gallery-4/520/420',
  'https://picsum.photos/seed/ita-gallery-5/520/420',
  'https://picsum.photos/seed/ita-gallery-6/520/420'
]

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-mist">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,160,0.15),_transparent_55%)]" />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Instrumentation Training Academy
            </p>
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              Build career-ready instrumentation skills with guided lab practice.
            </h1>
            <p className="text-base text-slate">
              A structured pathway from fundamentals to plant automation, backed by certified
              instructors and real-world scenarios.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:-translate-y-0.5"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:-translate-y-0.5"
              >
                Book a Visit
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 text-center text-xs text-slate">
              <div className="rounded-2xl border border-cloud bg-white px-3 py-4 shadow-card">
                <p className="font-display text-2xl text-ink">98%</p>
                <p className="mt-1">Placement support</p>
              </div>
              <div className="rounded-2xl border border-cloud bg-white px-3 py-4 shadow-card">
                <p className="font-display text-2xl text-ink">35+</p>
                <p className="mt-1">Lab exercises</p>
              </div>
              <div className="rounded-2xl border border-cloud bg-white px-3 py-4 shadow-card">
                <p className="font-display text-2xl text-ink">12</p>
                <p className="mt-1">Industry mentors</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="float-slow w-full max-w-sm rounded-[32px] bg-white p-6 shadow-soft">
              <img
                src="https://picsum.photos/seed/ita-hero/520/360"
                alt="Instrumentation lab"
                className="h-40 w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <div className="mt-6 rounded-3xl bg-[var(--hero-gradient)] p-5 text-mist">
                <p className="text-xs uppercase tracking-[0.3em]">Live Labs</p>
                <h3 className="mt-4 font-display text-2xl">Control Room Simulation</h3>
                <p className="mt-3 text-sm text-mist/80">
                  Practice fault diagnosis and tuning in a guided shift-style environment.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                {['Batch starts every 2 weeks', 'Mentor review after each module', 'Career coaching included'].map((item) => (
                  <div key={item} className="rounded-2xl border border-cloud px-4 py-3 text-sm text-slate">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Why choose us"
          title="We train for the instrument floor, not just the classroom."
          subtitle="Each cohort follows a structured schedule of theory, lab checks, and assessments designed around plant operations."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-slate">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionTitle
            eyebrow="Programs"
            title="Programs that move with the industry."
            subtitle="Choose a track based on your current experience, and build your skills through guided lab work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <Link key={course.slug} to={`/courses/${course.slug}`} className="block">
                <CourseCard {...course} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Gallery"
          title="A glimpse into our labs and learning spaces."
          subtitle="Hands-on instrumentation practice with modern panels, field devices, and safety systems."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div key={image} className="group overflow-hidden rounded-3xl border border-cloud bg-white shadow-card">
              <img
                src={image}
                alt={`Lab preview ${index + 1}`}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Testimonials"
          title="Graduates ready for instrumentation teams."
          subtitle="Real experiences from learners who moved into plant roles and automation teams."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-16 text-mist md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">Admissions Open</p>
            <h2 className="mt-4 font-display text-3xl">Plan your campus walkthrough today.</h2>
            <p className="mt-3 max-w-xl text-sm text-mist/80">
              Meet instructors, review lab layouts, and get a personalized learning path.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-amber px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:-translate-y-0.5"
          >
            Schedule Visit
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
