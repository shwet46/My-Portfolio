import Header from './components/Header'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Coding from './components/Coding'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
