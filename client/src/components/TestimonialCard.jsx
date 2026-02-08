const TestimonialCard = ({ quote, name, role, avatar }) => {
  return (
    <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
      <p className="text-sm text-slate">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-ink">{name}</div>
          <div className="text-xs text-slate">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
