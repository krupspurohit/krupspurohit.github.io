import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { sectionVariants } from '../utils/motion'

const ProjectsGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <motion.div
        key={project.title}
        className="flex h-full min-h-[320px] flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
        variants={sectionVariants}
      >
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="text-sm font-semibold text-indigo-600">{project.impact}</p>
          <p className="text-sm text-slate-600">{project.description}</p>
        </div>
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.tech.map((stack) => (
            <span
              key={stack}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
            >
              {stack}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
)

export default ProjectsGrid
