import React from 'react'

import './Navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {

  return (
    <header className='header'>
      <nav className='nav'>
        <a href="#home" className='logo nav-link'>Logo</a>
        <button className='toggle'>
          <DehazeIcon></DehazeIcon>
        </button>
          <ul className='nav-menu nav-menu_visible'>
            <li className='nav-menu-item'>
              <a href="home" className='nav-link nav-menu-link'>Home</a>
              </li>
            <li className='nav-menu-item'>
              <a href="login" className='nav-link nav-menu-link'>Contact</a>
              </li>  
            <li className='nav-menu-item'>
              <a href="#about" className='nav-link nav-menu-link'>Login</a>
              </li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar