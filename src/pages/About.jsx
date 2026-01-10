import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { staggerContainer, sectionVariants } from '../utils/motion'

const About = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <SectionHeading
      eyebrow="About"
      title="From testing to crafting memorable UIs"
      text="I am a Frontend-focused Software Developer who moved from manual testing to building clean, responsive, and user-friendly interfaces. My QA roots keep me focused on clarity and reliability while my React work centers on reusable components, thoughtful animations, and performance."
    />
    <motion.div className="grid gap-6 md:grid-cols-2" variants={sectionVariants} transition={{ delay: 0.05 }}>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600">
          I care about building experiences that feel effortless. I focus on component architecture, accessible patterns, and close collaboration with backend APIs to keep products reliable and adaptable.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-6 shadow-sm">
        <p className="text-slate-700 font-semibold">What I am excited about</p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>Reusable UI kits with Tailwind and React.</li>
          <li>Micro-interactions powered by Framer Motion.</li>
          <li>Data-driven UI decisions and API integration.</li>
          <li>Quality-first delivery informed by my testing background.</li>
        </ul>
      </div>
    </motion.div>
  </motion.section>
)

export default About
