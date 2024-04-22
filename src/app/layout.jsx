'use client';

import { Inter } from 'next/font/google';
import './(styles)/globals.css';
import Navbar from './(components)/Navbar.jsx';
import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  //check if is mobile/desktop upon render
  useEffect(() => {
    setIsMobile(window.innerWidth <= 720);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          //return mobile components if queryDeviceType returns true
          //else return desktop components
          isMobile ?  <h1>Hello Mobile</h1> : <h1>Hello Desktop</h1>
        }
        {children}
      </body>
    </html>
  )
}
