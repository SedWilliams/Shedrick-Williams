
'use client';

import React from 'react';
import '../(styles)/Navbar.css'
import Link from 'next/link';

function Navbar() {
  
  return (
    <div className="navbar section">
        <div className="navbar__left"> 
            <Link href="/" className='navbar__left-text heading-big'>Shedrick Williams</Link>
        </div>

      <div className="menu navbar__right">
          <Link href="https://www.youtube.com/@shedrickwilliams4175" className='navbar__right-text heading-small'><img />Youtube</Link>
          <Link href="https://github.com/SedWilliams" className='navbar__right-text heading-small'><img />Github</Link>
          <Link href="/Blog" className='navbar__right-text heading-small underline-animation'>Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;