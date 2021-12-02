import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-light'>
        <Link to='/' className='navbar-brand' href='#'>
          The Coctail App
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link' href='#'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' href='#'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
