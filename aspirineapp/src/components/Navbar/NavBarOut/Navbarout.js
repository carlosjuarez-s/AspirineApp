import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavbarOut.css'
import DehazeIcon from '@mui/icons-material/Dehaze';


const Navbar = () => {

  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink to="" className='logo nav-link'>Logo</NavLink>
        <button className='toggle'>
          <DehazeIcon></DehazeIcon>
        </button>
          <ul className='nav-menu nav-menu_visible'>
            <li className='nav-menu-item'>
              <NavLink to="" className='nav-link nav-menu-link'>Home</NavLink>
              </li>
            <li className='nav-menu-item'>
              <NavLink to="login" className='nav-link nav-menu-link'>Log In</NavLink>
              </li>  
            <li className='nav-menu-item'>
              <NavLink to="sigin" className='nav-link nav-menu-link'>Sign In</NavLink>
              </li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar