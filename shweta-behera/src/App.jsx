import Header from './components/Header'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Coding from './components/Coding'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

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
    </main>
    </>
  )
}

export default App
