import Header from './components/Header'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Coding from './components/Coding'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blogs from './components/Blogs'

import {ReactLenis} from 'lenis/react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Achievements from './components/Acheivements'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((ele) => {
      gsap.to(ele, {
        scrollTrigger: {
            trigger: ele,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true
        },
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      })
    })
  });
  

  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Home/>
        <About/>
        <TechStack/>
        <Projects/>
        <Blogs/>
        <Achievements/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App