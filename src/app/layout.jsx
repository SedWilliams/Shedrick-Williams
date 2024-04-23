'use client';

import { Inter } from 'next/font/google';
import './(styles)/globals.css';
import Navbar from './(components)/Navbar.jsx';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
