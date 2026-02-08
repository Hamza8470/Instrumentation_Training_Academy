const CourseCard = ({ title, level, duration, format, highlight, image, minReq }) => {
  const formatLabel = Array.isArray(format) ? format.join(' / ') : format

  return (
    <div className="group rounded-3xl border border-cloud bg-white p-6 shadow-card transition hover:-translate-y-2">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
      <h3 className="mt-4 font-display text-xl text-ink">{title}</h3>
      <p className="mt-3 text-sm text-slate">{highlight}</p>
      {minReq ? (
        <p className="mt-3 text-sm text-slate">
          Minimum Requirement: <span className="lowercase">{minReq}</span>
        </p>
      ) : null}
      <div className="mt-6 flex items-center justify-between text-sm text-slate">
        <span>{formatLabel}</span>
        <span className="text-amber">View syllabus</span>
      </div>
    </div>
  )
}

export default CourseCard
