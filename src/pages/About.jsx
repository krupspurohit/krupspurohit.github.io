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
      eyebrow="About Me"
      title="From testing applications to building full-stack solutions"
      text="I am a Full Stack Developer experienced in building scalable, responsive, and user-friendly web applications using React.js, JavaScript, and modern web technologies. I also work with ASP.NET Core, C#, Entity Framework Core, and SQL Server to develop backend services and RESTful APIs."
    />

    <motion.div
      className="grid gap-6 md:grid-cols-2"
      variants={sectionVariants}
      transition={{ delay: 0.05 }}
    >
      {/* My Journey */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          My Journey
        </h3>

        <p className="text-slate-600 leading-relaxed">
          I started my career as a Manual Tester at Rajeshwar Infotech,
          where I developed a strong understanding of software quality,
          testing processes, and attention to detail.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          I then transitioned into software development as a Software
          Engineer Intern at Krishith Tech Solutions and continued my
          journey as a Junior Software Engineer at the same company.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          I have contributed to an Order and Inventory Management System
          by developing reusable React components and integrating
          frontend interfaces with backend APIs. My contributions helped
          improve system performance and operational efficiency by 20%.
          I have also contributed to wishlist and product recommendation
          features that helped increase sales by 10%.
        </p>
      </div>

      {/* What I Work With */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          What I Work With
        </h3>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800">
              Frontend Development
            </h4>
            <p className="mt-1 text-slate-600">
              React.js, JavaScript, HTML, CSS, Tailwind CSS
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Backend Development
            </h4>
            <p className="mt-1 text-slate-600">
              ASP.NET Core Web API, C#
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Database & ORM
            </h4>
            <p className="mt-1 text-slate-600">
              SQL Server, Entity Framework Core, LINQ
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Development Tools
            </h4>
            <p className="mt-1 text-slate-600">
              Swagger, API Integration, Debugging
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-indigo-100 pt-4">
          <p className="font-semibold text-slate-800">
            What Drives Me
          </p>
          <p className="mt-2 text-slate-600 leading-relaxed">
            I enjoy solving problems, building clean and maintainable
            applications, exploring new technologies, and continuously
            improving my development skills.
          </p>
        </div>
      </div>
    </motion.div>
  </motion.section>
)

export default About
