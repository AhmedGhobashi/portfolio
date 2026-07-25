'use client';
import NavBar from './NavBar'
import MobileNav from './MobileNav'
import { useState } from 'react';

const ResponsiveNav = () => {
  const [showNav, setShowNav]= useState(false);
  
  const openNavHandler = ()=> setShowNav(true);
  const closeNavHandler = ()=> setShowNav(false)
  return (
    <div>
        <NavBar openNav={openNavHandler}/>
        <MobileNav showNav ={showNav} closeNav ={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
