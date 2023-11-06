import React, { useState } from 'react';
import './navbar.css';
import { ShoppingCart } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    { text: 'Home', path: '/' },
    { text: 'Gift Catalogue', path: '/gift-catalogue' },
    { text: 'About us', path: '/about' },
    { text: 'Contact us', path: '/contact' },
  ];

  return (
    <>

<nav className="navigation"  role="navigation">
      <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
          <li>
          <a className="get_involve" href="/">
            Home
          </a>
        </li>
     
        <li>
          <a className="get_involve" href="/about">
          About us 
          </a>
        </li>
        <li>
          <a className="get_involve" href="/gift-catalogue">
           Gift Catalogue
          </a>
        </li>
        <li>
          <a className="get_involve" href="/contact">
          Contact us
          </a>
        </li>
            <li className="three-icons"><a href="#"><FaFacebook /> </a></li>
            <li> <a href=""><FaTwitter /> </a> </li>
            <li>          <a className="contact-icon"><FaInstagram /></a> </li>
          </ul>
        </div>
      </nav>

      <div className='logo-mobile'>
        <a href="/">  
          <img src="/logo.png" alt="magikworld" />

        </a>
        </div>

      <div className='nav-bar'>
        <div className='logo-div'>
          <img src="/logo.png" alt="magikworld" />
        </div>
        <div className='links-div'>
          <ul className='links'>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className={`nav-link ${activeLink === index ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)}
                >
                  {link.text}
                </a>
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
