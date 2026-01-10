import { motion } from 'framer-motion'
import { achievementsList } from '../data/content'
import { sectionVariants } from '../utils/motion'

const Achievements = () => (
  <div className="grid gap-4 sm:grid-cols-3">
    {achievementsList.map((item) => (
      <motion.div
        key={item}
        className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 px-4 py-5 text-sm font-semibold text-slate-800 shadow-sm"
        variants={sectionVariants}
      >
        {item}
      </motion.div>
    ))}
  </div>
)

export default Achievements
