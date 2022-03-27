import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbarIn.css'


const NavbarIn = (props) => {

  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink to="home" className='logo nav-link'>Logo</NavLink>
        
          <ul className='nav-menu nav-menu_visible'>
            <li className='nav-menu-item'>
              <NavLink to="home" className='nav-link nav-menu-link'>Bienvenido</NavLink>
              </li>
            <li className='nav-menu-item'>
              <NavLink to="login" className='nav-link nav-menu-link'>Registrar Turno</NavLink>
              </li>  
            <li className='nav-menu-item'>
              <NavLink to="sigin" className='nav-link nav-menu-link'>Salir</NavLink>
              </li>
          </ul> 
      </nav>
    </header>
  )
}

export default NavbarIn