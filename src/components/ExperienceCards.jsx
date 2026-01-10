import { motion } from 'framer-motion'
import { sectionVariants } from '../utils/motion'
import { experiences } from '../data/content'

const ExperienceCards = ({ compact = false }) => (
  <div
    className={`grid gap-6 ${compact ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}
  >
    {experiences.map((item) => (
      <motion.div
        key={item.role}
        className="h-full rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
        variants={sectionVariants}
      >
        <div className="flex h-full flex-col space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
          <p className="text-sm font-semibold text-indigo-600">{item.company}</p>
          <p className="text-sm text-slate-600">{item.highlights[0]}</p>
          {!compact ? (
            <ul className="mt-3 space-y-2 text-slate-600">
              {item.highlights.slice(1).map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {item.duration}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
)

export default ExperienceCards
