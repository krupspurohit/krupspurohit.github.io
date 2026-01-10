import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectsGrid from '../components/ProjectsGrid'
import { staggerContainer } from '../utils/motion'

const Projects = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <SectionHeading
      eyebrow="Projects"
      title="Selected work"
      text="Showcasing UI systems that emphasize usability, performance, and measurable impact."
    />
    <ProjectsGrid />
  </motion.section>
)

export default Projects
