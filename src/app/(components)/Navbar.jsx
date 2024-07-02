
'use client';

import React, { useState } from 'react';
import '../(styles)/Navbar.css'
import Link from 'next/link';
import { useDeviceTypeQuery } from '../(hooks)/useDeviceTypeQuery';
import Image from 'next/image';

function Navbar() {

  return (
    <div>
      {
        useDeviceTypeQuery() ?
        
          <div className="navbar section">
            <div className="navbar__left"> 
              <Link href="/" className='navbar__left-text heading-big'>Shedrick Williams</Link>
            </div>

            <div className="menu navbar__right">
              <Image href="https://www.youtube.com/@shedrickwilliams4175" target="_blank"></Image>
              <Image href="https://github.com/SedWilliams" target="_blank"></Image>
              <Link href="/Blog" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"></path></svg></Link>
            </div>
          </div>
        
        :

        <div className="navbar section">
          <div className="navbar__left"> 
            <Link href="/" className='navbar__left-text heading-big'>Shedrick Williams</Link>
          </div>

          <div className="menu navbar__right">
            <Link href="https://www.youtube.com/@shedrickwilliams4175" className='navbar__right-text heading-small' target="_blank"><img />Youtube</Link>
            <Link href="https://github.com/SedWilliams" className='navbar__right-text heading-small' target="_blank"><img />Github</Link>
            <Link href="/Blog" className='navbar__right-text heading-small underline-animation' target="_blank">Blog</Link>
          </div>
        </div>
      }
    </div>
  );
}

export default Navbar;