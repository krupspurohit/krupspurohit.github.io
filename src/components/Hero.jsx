import { motion } from 'framer-motion'
import { FiLinkedin, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import profileImg from '../assets/profile-small.jpg'
import { achievementsList, contactLinks } from '../data/content'
import { sectionVariants, staggerContainer } from '../utils/motion'

const HeroImageCard = () => (
  <motion.div
    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-indigo-100 max-w-[320px] w-full mx-auto"
    variants={sectionVariants}
  >
    <div className="absolute right-[-15%] top-[-20%] h-32 w-32 rounded-full bg-gradient-to-br from-indigo-100 to-sky-50 blur-3xl" />
    <div className="relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
      <img
        src={profileImg}
        alt="Krupa Purohit portrait"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  </motion.div>
)

const Hero = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 py-20"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1.9fr] md:items-center">
      <HeroImageCard />
      <motion.div className="space-y-6" variants={sectionVariants}>
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Frontend Developer
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-slate-900">Krupa Purohit</h1>
        <p className="text-lg text-slate-600">
          I craft clean, responsive interfaces with React and Tailwind. I care about performant UI, thoughtful animations, and turning complex ideas into intuitive screens.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/projects"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-200 transition hover:translate-y-[-2px] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            View Projects
          </a>
          <a
            href={`tel:${contactLinks.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-800 font-semibold shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <FiPhoneCall className="text-indigo-500" />
            {contactLinks.phone}
          </a>
          <div className="flex items-center gap-3 text-slate-500">
            <FiMapPin />
            <span>{contactLinks.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <FiMail className="text-indigo-500" />
            <a href={`mailto:${contactLinks.email}`} className="hover:text-indigo-600">
              {contactLinks.email}
            </a>
          </div>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:text-indigo-600"
          >
            <FiLinkedin className="text-indigo-500" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      className="mt-10 space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
        Results I am proud of
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
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
    </motion.div>
  </motion.section>
)

export default Hero
