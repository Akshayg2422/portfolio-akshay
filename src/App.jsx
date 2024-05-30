import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

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