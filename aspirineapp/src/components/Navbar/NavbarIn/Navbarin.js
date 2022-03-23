import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarOut.css'


const Navbar = (props) => {

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="home" className='logo nav-link'>Logo</Link>
        
          <ul className='nav-menu nav-menu_visible'>
            <li className='nav-menu-item'>
              <Link to="home" className='nav-link nav-menu-link'>Registrar turno</Link>
              </li>
            <li className='nav-menu-item'>
              <Link to="login" className='nav-link nav-menu-link'>Salir</Link>
              </li>  
            <li className='nav-menu-item'>
              <Link to="sigin" className='nav-link nav-menu-link'>Bienvenido</Link>
              </li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar