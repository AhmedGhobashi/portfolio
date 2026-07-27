'use client';
import { useEffect } from 'react';
import ScrollToTop from '../Helper/ScrollToTop'
import About from './About/About'
import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Hero from './Hero/Hero'
import Project from './Project/Project'
import Skills from './Skills/Skills'

import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(()=>{
    
      Aos.init({
        anchorPlacement: 'top-bottom',
        easing:"ease",
        duration: 1000,
        once: true,
      })
      
    
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default Home
