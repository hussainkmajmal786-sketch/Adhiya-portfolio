import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-initials">YN</span>
          <span className="logo-name">Your Name</span>
        </NavLink>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
          <li><NavLink to="/internship" className={({isActive}) => isActive ? 'active' : ''}>PM VIKAS</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink></li>
          <li>
            <a href="mailto:your@email.com" className="nav-cta">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
