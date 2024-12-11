import Header from './components/Header'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Coding from './components/Coding'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

//Node modules
import {ReactLenis} from 'lenis/react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

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
        <Coding/>
        <TechStack/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
