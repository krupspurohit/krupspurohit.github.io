import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import { contactLinks, navLinks } from './data/content'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} contactLinks={contactLinks}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  )
}

export default App
