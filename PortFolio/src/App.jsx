import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/main'
import 'remixicon/fonts/remixicon.css'
import About from './components/About'
import Blog from './components/Blog'
import Project from './components/Project'
import Life from './components/Life'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App font-display text-white">
      <Navbar/>
      <Main />
      <About />
      <Blog className='h-[100vh]'/>
      <Project />
      <Life />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
