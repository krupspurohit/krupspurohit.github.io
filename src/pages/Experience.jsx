import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ExperienceCards from '../components/ExperienceCards'
import { staggerContainer } from '../utils/motion'

const Experience = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <SectionHeading
      eyebrow="Experience"
      title="Hands-on product delivery"
      text="Blending engineering and a testing mindset to ship reliable, performant interfaces."
    />
    <ExperienceCards />
  </motion.section>
)

export default Experience
