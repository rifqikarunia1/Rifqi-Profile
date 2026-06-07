import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
