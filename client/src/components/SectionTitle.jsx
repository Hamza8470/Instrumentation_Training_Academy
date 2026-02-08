const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-base text-slate">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
