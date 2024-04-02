import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Demo from './Components/Demo'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;