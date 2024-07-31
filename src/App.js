import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
// import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import Clients from './components/Clients'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
// import Statistics from './components/Statistics'
// import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="main" className="relative">
        <NavBar />
        
        <div>
          <Hero />
          <About />
          {/* <Services /> */}
          {/* <Portfolio /> */}
          {/* <Clients /> */}
          <Skills />
          <Education />
          <Work />
          {/* <Statistics /> */}
          {/* <Blog /> */}
          <Contact />
        </div>

        <Footer />
    </div>
  );
}

export default App;
