"use client";

import Hero from './Hero/Hero'
import About from './About/About'
import Contact from './Contact/Contact';
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Footer from './Footer/Footer';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

  useEffect(()=>{
    const initAOS = async()=>{
      // dynamically import AOS and avoid TS missing-declaration error
      // @ts-ignore
      const AOS: any = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
      
    }
    initAOS()
  }, [])
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home

