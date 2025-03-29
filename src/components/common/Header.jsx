import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 70

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header className={`header ${visible ? '' : 'hidden'}`}>      
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/potenslogob.svg" alt="logo" width={80} height={80} />
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="menu-icon"></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/destinations" className="nav-link">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link to="/magazine" className="nav-link">Magazine</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}