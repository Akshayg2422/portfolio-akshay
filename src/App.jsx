import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;