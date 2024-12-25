import React from 'react'
import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from './components/NavBar'
import Features from './components/Features'
import Tools from './components/Tools'
import ContactUs from './components/ContactUs'
import LogoBaner from './components/LogoBaner';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <LogoBaner />
      <Tools />
      <ContactUs />
    </main>
  )
}

export default App
