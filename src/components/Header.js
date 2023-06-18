import React from 'react'
import './Header.css'
import logo from '../assets/spacex-logo.png';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand' href='/'><img className='logo' src={logo} alt='' /></a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse pt-0' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>FALCON 9</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>FALCON HEAVY</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>DRAGON</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>STARSHIP</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>HUMAN SPACEFLIGHT</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>RIDESHARE</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>STARSHIELD</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>STARLINK</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header