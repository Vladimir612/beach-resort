import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Beach Resort' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/' onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/rooms' onClick={() => setIsOpen(false)}>
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
