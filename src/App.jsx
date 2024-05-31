import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import { Experience } from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;