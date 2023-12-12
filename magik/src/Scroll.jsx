// SmoothScroll.js
import React from 'react';
import { Link } from 'react-scroll';

const Scroll = () => {
  return (
    <div>
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="catalogue" smooth={true} duration={500}>
        Catalogue
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        Contact
      </Link>
      {/* Add more links for other sections */}
    </div>
  );
};

export default Scroll;
