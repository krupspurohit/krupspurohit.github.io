import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FiLinkedin, FiMail, FiMapPin, FiMenu, FiPhoneCall, FiX } from 'react-icons/fi'
import profileImg from '../../assets/profile-small.jpg'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children, menuOpen, setMenuOpen, navLinks, contactLinks }) => {
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, setMenuOpen])

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 ${
      isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:text-indigo-600 text-slate-700'
    }`

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col">
      <ScrollToTop />
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 overflow-hidden rounded-full border border-indigo-100 bg-white shadow-lg shadow-indigo-100">
              <img src={profileImg} alt="Krupa Purohit" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Krupa Purohit</p>
              <p className="text-sm text-slate-500">Frontend Developer</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="rounded-full border border-slate-200 p-2 text-slate-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            (c) 2026 Krupa Purohit - Built with React
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-indigo-600"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${contactLinks.email}`}
              className="transition hover:text-indigo-600"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href={`tel:${contactLinks.phone.replace(/\s+/g, '')}`}
              className="transition hover:text-indigo-600"
              aria-label="Phone"
            >
              <FiPhoneCall size={20} />
            </a>
            <div className="flex items-center gap-2 text-slate-500">
              <FiMapPin size={18} />
              <span className="text-sm">{contactLinks.location}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
