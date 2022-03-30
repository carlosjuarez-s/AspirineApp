import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logout from '../Pages/Logout/Logout'

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
              <NavLink to="/profile" className='nav-link nav-menu-link'>My Profile</NavLink>
            </li>
            <li className='nav-menu-item'>
              <NavLink to="/recordshift" className='nav-link nav-menu-link'>Shifts</NavLink>
            </li>
            <li className='nav-menu-item'>
              <Logout/>
            </li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar