import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import CourseCard from '../components/CourseCard'

const courseList = [
  {
    title: 'Instrumentation Technician Foundations',
    level: 'Beginner',
    minReq: 'High school diploma or equivalent',
    duration: '12 weeks',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'Sensor basics, loop diagrams, calibration fundamentals.',
    slug: 'instrumentation-technician-foundations',
    image: 'https://picsum.photos/seed/ita-catalog-1/640/420'
  },
  {
    title: 'Advanced Process Control',
    level: 'Intermediate',
    duration: '10 weeks',
    minReq: 'High school diploma or equivalent',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'PID tuning, PLC integration, SCADA practices.',
    slug: 'advanced-process-control',
    image: 'https://picsum.photos/seed/ita-catalog-2/640/420'
  }
]

const Courses = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionTitle
        eyebrow="Courses"
        title="Choose the right track for your instrumentation journey."
        subtitle="Each program blends theory with lab execution and an end-of-module skill check."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {courseList.map((course) => (
          <Link key={course.slug} to={`/courses/${course.slug}`} className="block">
            <CourseCard {...course} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Courses
