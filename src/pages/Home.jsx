import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ExperienceCards from '../components/ExperienceCards'
import ProjectsGrid from '../components/ProjectsGrid'
import { staggerContainer } from '../utils/motion'

const Home = () => (
  <>
    <Hero />

    <motion.section
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <SectionHeading
        eyebrow="Highlights"
        title="Experience snapshots"
       text="My experience in React.js, ASP.NET Core, and building reliable web applications."
      />
      <ExperienceCards compact />
    </motion.section>

    <motion.section
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <SectionHeading
        eyebrow="Featured"
        title="Project preview"
        text="Explore my work with React.js, ASP.NET Core, and modern web technologies."
      />
      <ProjectsGrid />
    </motion.section>
  </>
)

export default Home
