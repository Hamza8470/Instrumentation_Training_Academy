import { Link } from 'react-router-dom'
import courseOneImage from '../assets/course_1.jpg'
import courseTwoImage from '../assets/course_2.jpg'
import SectionTitle from '../components/SectionTitle'
import CourseCard from '../components/CourseCard'

const courseList = [
  {
    title: 'Industrial Instrument Technician',
    level: 'Beginner',
    minReq: 'High school diploma or equivalent',
    duration: '90 days',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'Sensor basics, loop diagrams, calibration fundamentals.',
    slug: 'industrial-instrument-technician',
    image: courseOneImage
  },
  {
    title: 'QA/QC Inspector Instrumentation',
    level: 'Intermediate',
    duration: '90 days',
    minReq: 'High school diploma or equivalent',
    format: ['Offline + Lab', 'Online + Lab'],
    highlight: 'PID tuning, PLC integration, SCADA practices.',
    slug: 'qa-qc-inspector-instrumentation',
    image: courseTwoImage
  }
]

const Courses = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
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
