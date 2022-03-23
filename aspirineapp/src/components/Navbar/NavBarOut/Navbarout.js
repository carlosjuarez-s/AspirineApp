import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarOut.css'
import DehazeIcon from '@mui/icons-material/Dehaze';


const Navbar = () => {

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="home" className='logo nav-link'>Logo</Link>
        <button className='toggle'>
          <DehazeIcon></DehazeIcon>
        </button>
          <ul className='nav-menu nav-menu_visible'>
            <li className='nav-menu-item'>
              <Link to="home" className='nav-link nav-menu-link'>Home</Link>
              </li>
            <li className='nav-menu-item'>
              <Link to="login" className='nav-link nav-menu-link'>Log In</Link>
              </li>  
            <li className='nav-menu-item'>
              <Link to="sigin" className='nav-link nav-menu-link'>Sign In</Link>
              </li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar