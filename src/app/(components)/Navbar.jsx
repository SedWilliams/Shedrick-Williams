import React from 'react';
import '../(styles)/Navbar.css'
import Link from 'next/link';

export default function Navbar() {

    return(
        <React.Fragment>
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
        </React.Fragment>
    );
}