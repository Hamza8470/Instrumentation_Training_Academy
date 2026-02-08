import SectionTitle from '../components/SectionTitle'

const values = [
  {
    title: 'Precision mindset',
    body: 'We train every learner to document, calibrate, and audit with zero shortcuts.'
  },
  {
    title: 'Hands-on mastery',
    body: 'Every week includes supervised lab tasks that mirror plant routines.'
  },
  {
    title: 'Industry accountability',
    body: 'Assessment rubrics are aligned with hiring manager expectations.'
  }
]

const faculty = [
  {
    name: 'Engr. Meera Iyer',
    role: 'Process Instrumentation Lead',
    image: 'https://picsum.photos/seed/ita-faculty-1/320/320'
  },
  {
    name: 'Rahul Desai',
    role: 'Automation & PLC Mentor',
    image: 'https://picsum.photos/seed/ita-faculty-2/320/320'
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Calibration Specialist',
    image: 'https://picsum.photos/seed/ita-faculty-3/320/320'
  }
]

const About = () => {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="About us"
          title="A training institute built around plant-floor readiness."
          subtitle="We help aspiring instrumentation professionals build confidence through structured labs, mentorship, and real-world evaluation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
            <h3 className="font-display text-2xl text-ink">Our Mission</h3>
            <p className="mt-3 text-sm text-slate">
              Deliver practical training that bridges classroom theory with industrial execution.
              Every learner follows a clear learning journey with milestone evaluations and
              professional feedback.
            </p>
          </div>
          <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
            <h3 className="font-display text-2xl text-ink">Our Vision</h3>
            <p className="mt-3 text-sm text-slate">
              Build the most trusted instrumentation talent pipeline in the region, where
              companies hire with confidence and students graduate with skill clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionTitle
            eyebrow="Values"
            title="What guides our classroom and lab culture."
            subtitle="We focus on discipline, documentation, and safety at every step of the learning path."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
                <h3 className="font-display text-xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm text-slate">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Faculty"
          title="Mentors with plant-floor expertise."
          subtitle="Our instructors guide learners through real inspection routines and lab work." 
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {faculty.map((member) => (
            <div key={member.name} className="rounded-3xl border border-cloud bg-white p-6 text-center shadow-card">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-display text-xl text-ink">{member.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
