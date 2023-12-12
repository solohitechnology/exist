


import React, { useState, useEffect } from 'react';
import './navbar.css';
import { ShoppingCart } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaAngleDown  } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {


  const location = useLocation();
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Gift Catalogue', path: '/gift-catalogue' },
    { text: 'About us', path: '/about' },
    { text: 'Contact us', path: '/contact' },
  ];

  
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    // Extract the page from the current route
    const currentPage = location.pathname.replace('/', '');
    setSelectedPage(currentPage);
  }, [location]);

  return (
    <>
      <nav className="navigation" role="navigation">
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
            <li className="three-icons"><a href="https://web.facebook.com/p/magikworld01-100054804818634/?locale=gl_ES&paipv=0&eav=AfbKgB0da7MvdJqeCW9oUDg37FImieKJ7m73nt_M4kq6iRdIWB1fLpZjgKyt7p8UiWY&_rdc=1&_rdr"><FaFacebook /> </a></li>
            {/* <li> <a href=""><FaTwitter /> </a> </li> */}
            <li>          <a href='https://www.instagram.com/magikworld01/?hl=en' className="contact-icon"><FaInstagram /></a> </li>
          </ul>
        </div>
      </nav>

      <div className='logo-mobile'>
        <a href='/'>
          <img src="/logo.png" alt="magikworld" />
        </a>
      </div>

      <div className='nav-bar'>
        <div className='logo-div'>
          <img src="/logo.png" alt="magikworld" />
        </div>
        <div className='links-div'>
          <ul className='links'>

          <li className="get_involve"  >
          <NavLink to="/"           style={{ color: selectedPage === '/' ? 'white' : 'gray' }} className={selectedPage === '/' ? 'active' : 'get_involve '}>
          Home
        </NavLink>
        </li>

        <div>

        <li className='dropdown-menu1'>
          <a className="get_involve" href="#">
          Gift Catalogue  <FaAngleDown />

          </a>
       

        <ul className='dropdownB'>
              <li className='dropdown_list' >
                <a style={{fontSize:'14px'}} href="/history">For men</a>
              </li>
              <li  className='dropdown_list'>
                <a  style={{fontSize:'14px'}} href="/mission">For ladys</a>
              </li>
              <li  className='dropdown_list'>
                <a  style={{fontSize:'14px'}} href="/members">Share love</a>
              </li>
              <li  className='dropdown_list'>
                <a  style={{fontSize:'14px'}} href="/volunteer">For children</a>
              </li>
              <li>
                <a  style={{fontSize:'14px'}} href="/contact">Day of Self-Care</a>
              </li>
              <li>
                <a  style={{fontSize:'14px'}} href="/events">Surprise Parties</a>
              </li>
              <li>
                <a  style={{fontSize:'14px'}} href="/news">Achievement </a>
              </li>
              <li  className='dropdown_list'>
                <a  style={{fontSize:'14px'}} href="/partners">Celebrations</a>
              </li>
            </ul>

            </li>

        </div>
        <li className="get_involve"  >
        <NavLink to="/about"           style={{ color: selectedPage === 'about' ? 'white' : 'gray' }} className={selectedPage === 'about' ? 'active' : ''}>
          About
        </NavLink>
      </li>
      <li className="get_involve">
        <NavLink to="/contact"           style={{ color: selectedPage === 'contact' ? 'white' : 'gray' }}  className={selectedPage === 'contact' ? 'active' : ''} >
          Contact
        </NavLink>
      </li>


          </ul>
        </div>
        <div>
          <span>
            <a href="/">
            <img src='gift.jpg' className='searchicon1' />
            </a>
            {/* <span className='cart-numb'>2</span> */}
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar;
