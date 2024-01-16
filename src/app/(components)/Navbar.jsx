
'use client';

import React from 'react';
import '../(styles)/Navbar.css'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = window.innerWidth <= 844;

  if (!isMobile) {
        <div className="navbar">

            <div className="navbar__left"> 
                <Link href="/" className='navbar__left-text'>Shedrick Williams</Link>
            </div>
            <div className="navbar__right">
                <Link href="https://www.youtube.com/@shedrickwilliams4175" className='navbar__right-text'><img />Youtube</Link>
                <Link href="https://github.com/SedWilliams" className='navbar__right-text'><img />Github</Link>
                <Link href="/Archives" className='navbar__right-text'>Archives</Link>
            </div>
        </div>   
  }

  return (
    <div className="navbar">
        <div className="navbar__left"> 
            <Link href="/" className='navbar__left-text'>Shedrick Williams</Link>
        </div>

      <button onClick={toggleMenu} className="navbar__right" style={{"backgroundColor": "#ffffff00"}}>☰</button>
        {isOpen && (
            <div className="menu navbar__right">
                <Link href="https://www.youtube.com/@shedrickwilliams4175" className='navbar__right-text'><img />Youtube</Link>
                <Link href="https://github.com/SedWilliams" className='navbar__right-text'><img />Github</Link>
                <Link href="/Archives" className='navbar__right-text'>Archives</Link>
            </div>
        )}
    </div>
  );
};

export default Navbar;