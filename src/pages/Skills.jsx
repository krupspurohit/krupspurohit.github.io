import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/content'
import { staggerContainer, sectionVariants } from '../utils/motion'

const Skills = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <SectionHeading
      eyebrow="Skills"
      title="Tools I build with"
      text="Focused on modern React stacks, utility-first styling, and dependable UI delivery."
    />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((skill) => (
        <motion.div
          key={skill}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          variants={sectionVariants}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default Skills
