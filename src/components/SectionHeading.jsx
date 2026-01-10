const SectionHeading = ({ eyebrow, title, text }) => (
  <div className="mb-8">
    <p className="text-xs uppercase tracking-[0.35em] text-indigo-500 font-semibold">{eyebrow}</p>
    <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900">{title}</h2>
    {text ? <p className="mt-3 text-slate-600 max-w-3xl">{text}</p> : null}
  </div>
)

export default SectionHeading
