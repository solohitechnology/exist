import React, { useState } from 'react';
import './navbar.css';
import { ShoppingCart } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Gift Catalogue', path: '/gift-catalogue' },
    { text: 'About us', path: '/about' },
    { text: 'Contact us', path: '/contact' },
  ];

  return (
    <>
      <nav className="navigation" role="navigation">
        {/* Your menuToggle code here */}
      </nav>

      <div className='logo-mobile'>
        <NavLink to="/">
          <img src="/logo.png" alt="magikworld" />
        </NavLink>
      </div>

      <div className='nav-bar'>
        <div className='logo-div'>
          <img src="/logo.png" alt="magikworld" />
        </div>
        <div className='links-div'>
          <ul className='links'>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  activeClassName="active"
                  isActive={() => link.path === location.pathname}
                >
                  <span>
                  {link.text}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span >
            <SearchOutlined className='searchicon' />
          </span>
          <span>
            <img src='gift.jpg' className='searchicon1' />
            {/* <span className='cart-numb'>2</span> */}
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar;
